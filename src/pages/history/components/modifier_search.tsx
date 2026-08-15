"use client"

import * as React from "react"
import { Button } from "../../../components/ui/button"
import { api } from "~/utils/api"
import { useState } from "~/hooks/useState"
import { ItemModifierSearch } from "./item_modifier_search"

export function ModifierSearch() {
  const modifier = useState((controller) => controller.modifier)
  const setModifier = useState((controller) => controller.setModifier)

  return (
    <div className="flex flex-col gap-3">
      
      <ItemModifierSearch modifier= {modifier} setModifier={setModifier}/>
      <p className="text-sm font-medium text-white">Modifier</p>
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
        ): null}
      </div>
    </div>
  )
}

export default ModifierSearch