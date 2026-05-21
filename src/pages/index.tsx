import * as React from "react"
import { useRouter } from "next/router"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "~/components/ui/command"
import { api } from "~/utils/api"

export default function HomePage() {
  const router = useRouter()
  const [query, setQuery] = React.useState("")
  
  const searchQuery = api.items.search.useQuery(
    { query },
    { enabled: true }
  )

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] p-6">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-[5rem] mb-8">
          Datakratie
        </h1>
        <div className="w-full relative bg-background rounded-lg shadow-lg border overflow-hidden">
          <Command className="w-full border-none">
            <CommandInput 
              placeholder="Titel oder Posten suchen..." 
              value={query} 
              onValueChange={setQuery} 
              className="border-none focus:ring-0 text-lg py-4"
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
                        router.push(`/item/${item.id}`)
                      }}
                      className="cursor-pointer py-3"
                    >
                      <div className="flex flex-col min-w-0 w-full">
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
            </CommandList>
          </Command>
        </div>
      </div>
    </main>
  )
}
