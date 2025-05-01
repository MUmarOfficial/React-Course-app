import { useState } from "react";

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

  const deleteItem = (id: number) => {
    setTodos(todos.filter((itemEL) => itemEL.id !== id));
  };

  return (
    <ul className="flex w-[1024px] flex-wrap p-4 gap-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex gap-3 justify-between items-center p-2 mb-2 bg-transparent py-4 px-8 rounded-md text-white  border hover:border hover:border-blue-500 transition-all duration-300 ease-in-out shadow-md shadow-black/50 cursor-pointer w-[300px] h-[100px]"
        >
          <span className="text-lg">{todo.text}</span>
          <button
            onClick={() => {
              deleteItem(todo.id);
            }}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
