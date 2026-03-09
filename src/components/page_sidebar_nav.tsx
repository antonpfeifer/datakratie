import Link from "next/link";
import { useRouter } from "next/router";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "~/components/ui/sidebar";

const navItems = [
  { href: "/budget", label: "Budget" },
  { href: "/history", label: "History" },
] as const;

export function PageSidebarNav() {
  const router = useRouter();

  return (
    <>
      <SidebarTrigger className="mb-3" />
      <Sidebar>
        <SidebarHeader>
          <p className="text-sm font-semibold">Navigation</p>
          <p className="text-muted-foreground text-xs">Zwischen Seiten wechseln</p>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => {
              const isActive = router.pathname.startsWith(item.href);

              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link href={item.href}>{item.label}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
