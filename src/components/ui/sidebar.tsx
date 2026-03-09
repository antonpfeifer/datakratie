"use client"

import * as React from "react"
import { Slot } from "radix-ui"
import { PanelLeftIcon } from "lucide-react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"

type SidebarContextType = {
  openMobile: boolean
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = React.createContext<SidebarContextType | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider")
  }

  return context
}

function SidebarProvider({
  children,
}: React.ComponentProps<"div">) {
  const [openMobile, setOpenMobile] = React.useState(false)

  return (
    <SidebarContext.Provider value={{ openMobile, setOpenMobile }}>
      <div
        data-slot="sidebar-wrapper"
        className="flex min-h-screen w-full [&>*]:min-w-0 [&>*]:flex-1"
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

function SidebarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { setOpenMobile } = useSidebar()

  return (
    <Button
      data-slot="sidebar-trigger"
      variant="outline"
      size="icon-sm"
      className={cn("md:hidden", className)}
      onClick={() => setOpenMobile(true)}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Open sidebar</span>
    </Button>
  )
}

function Sidebar({
  className,
  children,
}: React.ComponentProps<"aside">) {
  const { openMobile, setOpenMobile } = useSidebar()

  return (
    <>
      <aside
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground border-sidebar-border hidden h-full w-64 shrink-0 border rounded-xl md:flex md:flex-col",
          className
        )}
      >
        {children}
      </aside>

      <Dialog open={openMobile} onOpenChange={setOpenMobile}>
        <DialogContent
          className="bg-sidebar text-sidebar-foreground border-sidebar-border top-0 left-0 h-dvh w-[85vw] max-w-sm translate-x-0 translate-y-0 rounded-none border p-0"
          showCloseButton={false}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Navigation</DialogTitle>
            <DialogDescription>Navigate between pages</DialogDescription>
          </DialogHeader>
          <aside className="flex h-full flex-col">{children}</aside>
        </DialogContent>
      </Dialog>
    </>
  )
}

function SidebarInset({
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn("min-w-0 flex-1", className)}
      {...props}
    />
  )
}

function SidebarHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn("border-sidebar-border border-b p-4", className)}
      {...props}
    />
  )
}

function SidebarContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      className={cn("flex flex-1 flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SidebarMenu({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  )
}

function SidebarMenuItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      className={cn("list-none", className)}
      {...props}
    />
  )
}

function SidebarMenuButton({
  className,
  asChild = false,
  isActive = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean
  isActive?: boolean
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="sidebar-menu-button"
      data-active={isActive}
      className={cn(
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground inline-flex h-9 w-full items-center rounded-md px-2 text-sm font-medium outline-none transition-colors",
        className
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
}
