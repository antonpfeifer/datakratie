"use client"

import * as React from "react"
import { Button } from "../../../components/ui/button"
import { api } from "~/utils/api"
import { useState } from "~/hooks/useState"

export function ModifierSearch() {
  const modifier = useState((controller) => controller.modifier)
  const setModifier = useState((controller) => controller.setModifier)
  const searchQuery = api.modifiers.search.useQuery(
    { query: "" },
    { enabled: modifier === null }
  )

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {modifier ? (
          <>
            <Button
              variant="outline"
              className="h-auto max-w-full justify-start rounded-full px-4 py-2 text-left"
              onClick={() => setModifier(modifier)}
            >
              <span className="flex min-w-0 flex-col items-start gap-0.5">
                <span className="truncate text-sm font-medium">{modifier.title}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {modifier.itemLabel ?? modifier.description}
                </span>
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon-xs"
              className="rounded-full"
              onClick={() => setModifier(null)}
              aria-label="Modifier entfernen"
            >
              x
            </Button>
          </>
        ) : searchQuery.isLoading ? (
          <p className="text-muted-foreground text-sm">Lade Modifier...</p>
        ) : searchQuery.data?.length ? (
          searchQuery.data.map((entry) => (
            <Button
              key={entry.id}
              variant="outline"
              className="h-auto max-w-full justify-start rounded-full px-4 py-2 text-left"
              onClick={() => setModifier(entry)}
            >
              <span className="flex min-w-0 flex-col items-start gap-0.5">
                <span className="truncate text-sm font-medium">{entry.title}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {entry.itemLabel ?? entry.description}
                </span>
              </span>
            </Button>
          ))
        ) : (
          <p className="text-muted-foreground text-sm">Keine Modifier gefunden.</p>
        )}
      </div>
    </div>
  )
}