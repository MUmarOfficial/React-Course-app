import { createContext } from "react";
import { Note } from "./types/Note";

export interface IAppContext {
  notes: Note[];
  onStarChange: (id: number, starred: boolean) => void;
  onDelete: (id: number) => void;
}

export const AppContext = createContext<IAppContext>({
  notes: [],
  onStarChange: () => {},
  onDelete: () => {},
});
