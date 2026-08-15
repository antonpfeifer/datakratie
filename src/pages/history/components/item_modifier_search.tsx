
import React from "react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/components/ui/command"
import type { Modifier } from "~/hooks/useState";
import { api } from "~/utils/api"

type Props = {
  modifier: Modifier | null;
  setModifier: (modifier: Modifier | null) => void;
}

export function ItemModifierSearch({modifier, setModifier}: Props) {
  const [query, setQuery] = React.useState("")
  
  const searchQuery = api.items.search.useQuery(
    { query },
    { enabled: true }
  );

  React.useEffect(() => {
    // Textfeld leeren
    setQuery("");
  }, [modifier]);

return (
    <Command>
            <CommandInput 
              placeholder= "Mit Haushaltsposten vergleichen..."
              value={query} 
              onValueChange={setQuery} 
            />
            {query.length > 0 && (
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
                      onSelect={() =>
                        setModifier({
                          id: Number(item.id),
                          title: item.label ?? `Item ${item.id}`,
                          description: item.description ?? "",
                          function: "",
                          isRecursive: true,
                          startIndex: 0,
                          itemLabel: item.label ?? null,
                        })}
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
            )}
            
          </Command>);
}



export default function ComponentAsPage() { return null; }
