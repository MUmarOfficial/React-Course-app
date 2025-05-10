import { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([
     { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn TypeScript", completed: false },
    { id: 3, text: "Build a Todo App", completed: false },
    { id: 4, text: "Learn Redux", completed: false },
    { id: 5, text: "Learn React Router", completed: false },
    { id: 6, text: "Learn Tailwind CSS", completed: false },
    { id: 7, text: "Learn Next.js", completed: false },
    { id: 8, text: "Learn GraphQL", completed: false },
    { id: 9, text: "Learn Firebase", completed: false },
    { id: 10, text: "Learn Node.js", completed: false },
    { id: 11, text: "Learn Express.js", completed: false },
    { id: 12, text: "Learn MongoDB", completed: false },
    { id: 13, text: "Learn PostgreSQL", completed: false },
    { id: 14, text: "Learn MySQL", completed: false },
    { id: 15, text: "Learn SQLite", completed: false },
  ]);
  const [person, setPerson] = useState({
    name: 'Umar',
    designation: 'Software Engineer'
  })
  const deleteItem = (itemId: number) => {
    const filteredTodos = todos.filter(
      todo => todo.id !== itemId
    );
    setTodos(filteredTodos);
  };

  const addNewTodo = () => {
    setTodos([
      {
        text: "new Todo",
        id: Date.now(),
        completed: false
      },
      ...todos,
    ]);
  };

  return (
    <ul className="flex w-[1024px] flex-wrap p-4 gap-4">
      <button className="ml-18 m-4 h-14" onClick={() => {
        setPerson({
          ...person,
          name: 'Muhammad Umar'
        })
      }}>Update name</button>
      <li className="p-2 mb-2 bg-transparent py-4 px-8 rounded-md text-white  border hover:border hover:border-blue-500 transition-all duration-300 ease-in-out shadow-md shadow-black/50 cursor-pointer w-[400px] h-[100px]">{JSON.stringify(person)}</li>
      <li>
        <button className="m-4 h-14" onClick={addNewTodo}>Click me to add new todo</button>
      </li>
      {todos.map((todoItem) => {
        return (
          <TodoItem key={todoItem.id} item={todoItem} onDelete={deleteItem} />
        );
      })}
    </ul>
  );
};

export default Todos;