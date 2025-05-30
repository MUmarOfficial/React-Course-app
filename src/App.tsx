import "./App.css";
import Todos from "./components/Todos";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import { getTodos } from "./api/Todos/todos-api";
import { Todo } from "./types";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [FinishedCount, setFinishedCount] = useState(0);

  useEffect(() => {
    console.log("App component mounted");
    getTodos().then((todosFromServer) => {
      console.log(todosFromServer);
      setTodos(todosFromServer);
    });
  }, []);

  useEffect(() => {
    const completedTodos = todos.filter((todo) => todo.completed).length;
    setFinishedCount(completedTodos);
  }, [todos]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className="h-full">
        <section className="flex flex-col justify-center items-center gap-15 px-36 py-18 border border-amber-100 rounded-3xl text-white shadow-md shadow-black/50  backdrop-blur-md">
          <Todos TodoArray={todos} />
          <div className="text-center text-lg">
            <p>Total Todos: {todos.length}</p>
            <p>Completed Todos: {FinishedCount}</p>
            <p>Pending Todos: {todos.length - FinishedCount}</p>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
