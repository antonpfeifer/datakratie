import { create } from 'zustand'

export const useState = create<ItemController>((set) => ({
  item: null,
  setItem: (item) => set({ item }),
}))

export type TitlesController = TitlesState & {addTitle: (title: Title) => void, removeTitle: (title: Title) => void}

export type Title = {id: number, description: string};

export type TitlesState = {titles: Title[]};


export type ItemController = ItemState & {setItem: (item: Item | null) => void}

export type Item = {id: number, description: string | null, label: string | null};

export type ItemState = {item: Item | null
}
