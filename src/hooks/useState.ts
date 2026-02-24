import { create } from 'zustand'

export const useState = create<TitlesController>((set) => ({
  titles: [{id: 110168112, description: "Bürgergeld"}],
  addTitle: (title: Title) => set((state: TitlesController) => {
    const normalizedIncoming = title.description.trim().toLocaleLowerCase("de-DE");
    const exists = state.titles.some(
      (existing) => existing.description.trim().toLocaleLowerCase("de-DE") === normalizedIncoming,
    );

    if (exists) {
      return state;
    }

    return { titles: [...state.titles, title] };
  }),
  removeTitle: (title: Title) => set((state: TitlesController) => ({ titles: state.titles.filter(t => t.id !== title.id) }))
}))

export type TitlesController = TitlesState & {addTitle: (title: Title) => void, removeTitle: (title: Title) => void}

export type Title = {id: number, description: string};

export type TitlesState = {titles: {id: number, description: string}[]};
