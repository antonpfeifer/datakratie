"use client"

import * as React from "react"
import { Button } from "../../../components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
    CommandSeparator,
} from "../../../components/ui/command"
import { api } from "~/utils/api"
import { useState } from "~/hooks/useState"

export function TitlesSearch() {
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState("");
        const searchQuery = api.titles.search.useQuery(
            { query },
            { enabled: open }
        );
    const addTitle = useState((controller) => controller.addTitle);

    return (
        <div className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
            Posten Hinzufügen
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
            <Command>
                        <CommandInput placeholder="Titel oder Posten suchen..." value={query} onValueChange={setQuery} />
            <CommandList>
                <CommandEmpty>
                  {searchQuery.isLoading ? "Lade Vorschläge..." : "Keine Vorschläge gefunden."}
                </CommandEmpty>
                                <CommandGroup heading="Ergebnisse">
                    {searchQuery.data?.map((title) =>
                        <CommandItem
                          key={title.id}
                          value={title.description}
                          onSelect={() => {
                            addTitle(title)
                            setOpen(false)
                            setQuery("")
                          }}
                        >
                                        <div className="flex min-w-0 flex-col">
                                            <span className="truncate">{title.description}</span>
                                            {title.itemLabel ? (
                                                <span className="text-muted-foreground truncate text-xs">
                                                    Posten: {title.itemLabel}
                                                </span>
                                            ) : null}
                                        </div>
                </CommandItem>)}
                </CommandGroup>
                <CommandSeparator />
            </CommandList>
            </Command>
        </CommandDialog>
        </div>
    )
}
