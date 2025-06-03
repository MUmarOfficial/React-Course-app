import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Notes from "./components/Notes";
import { useState } from "react";
import { Note } from "./types/Note";
import { AppContext } from "./AppContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "First Note",
      content: "This is the content of the first note.",
      starred: false,
    },
    {
      id: 2,
      title: "Second Note",
      content: "This is the content of the second note.",
      starred: true,
    },
    {
      id: 3,
      title: "Third Note",
      content: "This is the content of the third note.",
      starred: false,
    },
    {
      id: 4,
      title: "Fourth Note",
      content: "This is the content of the fourth note.",
      starred: true,
    },
    {
      id: 5,
      title: "Fifth Note",
      content: "This is the content of the fifth note.",
      starred: false,
    },
    {
      id: 6,
      title: "Sixth Note",
      content: "This is the content of the sixth note.",
      starred: true,
    },
  ]);

  const handleDelete = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleStarChange = (id: number, starred: boolean) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, starred } : note))
    );
  };

  return (
    <AppContext.Provider
      value={{
        notes,
        onStarChange: handleStarChange,
        onDelete: handleDelete,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main className="h-full">
          <Notes />
        </main>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
