import { FC, useState } from "react";
import TodoItem from "./TodoItem";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Todo } from "../types/types";

type TodosProps = {
  TodoArray: Todo[];
};
const Todos: FC<TodosProps> = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn TypeScript", completed: false },
    { id: 4, text: "Learn Redux", completed: false },
    { id: 6, text: "Learn Tailwind CSS", completed: false },
    { id: 7, text: "Learn Next.js", completed: false },
    { id: 10, text: "Learn Node.js", completed: false },
    { id: 11, text: "Learn Express.js", completed: false },
    { id: 12, text: "Learn MongoDB", completed: false },
  ]);
  const [text, setText] = useState("");

  const [person, setPerson] = useState({
    name: "Umar",
    designation: "Software Engineer",
  });
  const deleteItem = (itemId: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== itemId);
    setTodos(filteredTodos);
  };

  const addNewTodo = () => {
    setTodos([
      {
        text: text,
        id: Date.now(),
        completed: false,
      },
      ...todos,
    ]);
  };

  return (
    <>
      <h1 className="text-4xl text-white m-0">Todo List</h1>
      <ul className="flex w-[1024px] flex-wrap p-4 gap-4">
        <div className="flex flex-col flex-wrap gap-8 justify-center items-center ml-40 mb-6">
          <div className="flex gap-8 flex-wrap justify-center items-center">
            <li className="bg-transparent p-4 rounded-md text-white  border border-transparent hover:border hover:border-blue-500 transition-all duration-300 ease-in-out shadow-md shadow-black/50 cursor-pointer w-100 h-14 flex justify-center items-center">
              {person.name + " - " + person.designation}
            </li>
            <Button
              variant="outlined"
              className=" m-4 h-12"
              onClick={() => {
                setPerson({
                  ...person,
                  name: "Muhammad Umar",
                });
              }}
            >
              Update name
            </Button>
          </div>
          <div className="flex gap-8 flex-wrap justify-center items-center">
            <TextField
              label="New Todo"
              variant="outlined"
              className="w-100 h-12"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <Button
              className=" m-4 h-12"
              variant="outlined"
              onClick={addNewTodo}
            >
              Add new todo
            </Button>
          </div>
        </div>
        {todos.map((todoItem) => {
          return (
            <TodoItem key={todoItem.id} item={todoItem} onDelete={deleteItem} />
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
