"use client"

import * as React from "react"
import { useRouter } from "next/router"
import { Search } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "~/components/ui/command"
import { api } from "~/utils/api"

export function GlobalSearch() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const searchQuery = api.items.search.useQuery(
    { query },
    { enabled: open }
  )

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Titel oder Posten suchen...</span>
        <span className="inline-flex lg:hidden">Suchen...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput 
            placeholder="Titel oder Posten suchen..." 
            value={query} 
            onValueChange={setQuery} 
          />
          <CommandList className="max-h-[60vh] overflow-y-auto">
            <CommandEmpty>
              {searchQuery.isLoading ? "Lade Vorschläge..." : "Keine Vorschläge gefunden."}
            </CommandEmpty>
            {searchQuery.data && searchQuery.data.length > 0 && (
              <CommandGroup heading="Ergebnisse">
                {searchQuery.data.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.description ?? item.label ?? ""}
                    onSelect={() => {
                      void router.push(`/item/${item.id}`)
                      setOpen(false)
                      setQuery("")
                    }}
                    className="cursor-pointer py-3"
                  >
                    <div className="flex min-w-0 flex-col w-full">
                      <span className="truncate font-medium">{item.label}</span>
                      {item.description ? (
                        <span className="text-muted-foreground truncate text-sm mt-1">
                          {item.description}
                        </span>
                      ) : null}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            <CommandSeparator />
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
