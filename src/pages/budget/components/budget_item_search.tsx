import { useRouter } from "next/router"
import React from "react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/components/ui/command"
import { api } from "~/utils/api"

export function BudgetItemSearch() {
  const router = useRouter()
  const [query, setQuery] = React.useState("")
  
  const searchQuery = api.items.search.useQuery(
    { query },
    { enabled: true }
  );
return (
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
                <CommandGroup>
                  {searchQuery.data.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={item.description ?? item.label ?? ""}
                      onSelect={() => {
                        router.push(`/item/${item.path}`)
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
          </Command>);
}



export default function ComponentAsPage() { return null; }
