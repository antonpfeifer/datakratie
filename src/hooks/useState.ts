import { create } from 'zustand'

export type Modifier = {
  id: number,
  title: string,
  description: string,
  function: string,
  isRecursive: boolean,
  startIndex: number,
  itemLabel: string | null,
}

export const useState = create<ItemController & ModifierController>((set) => ({
  item: null,
  modifier: null,
  setItem: (item) => set({ item }),
  setModifier: (modifier) => set({ modifier }),
}))

export type TitlesController = TitlesState & {addTitle: (title: Title) => void, removeTitle: (title: Title) => void}

export type Title = {id: number, description: string};

export type TitlesState = {titles: Title[]};

export type ModifierController = ModifierState & {setModifier: (modifier: Modifier | null) => void}

export type ModifierState = {modifier: Modifier | null}

export type ItemController = ItemState & {setItem: (item: Item | null) => void}

export type Item = {id: number, description: string | null, label: string | null};

export type ItemState = {item: Item | null
}
