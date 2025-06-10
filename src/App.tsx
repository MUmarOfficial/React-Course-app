import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Notes from "./components/Notes";
import { useEffect, useState } from "react";
import { Note } from "./types/Note";
import { AppContext } from "./AppContext";
import useWindowResize from "./hooks/useWindowResize";
import useFetch from "./hooks/useFetch";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const size = useWindowResize();
  const { data, loading, error } = useFetch<Note[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  useEffect(() => {
    setNotes(data ? data : []);
  }, [data]);
  const handleDelete = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleStarChange = (id: number, completed: boolean) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, completed: completed } : note
      )
    );
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
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
          {size.width < 265 ? (
            <h1>This screen size not supported !</h1>
          ) : (
            <Notes />
          )}
        </main>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
