import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SelectedThemeProps {
  selectedTheme: string;
  // eslint-disable-next-line no-unused-vars
  setSelectedTheme: (theme: string) => void;
}

export const useStore = create<SelectedThemeProps>()(
  persist(
    (set) => ({
      selectedTheme: "AfterMovieEventSketch",
      setSelectedTheme: (theme: string) => set({ selectedTheme: theme }),
    }),
    {
      name: "selectedTheme",
    },
  ),
);
