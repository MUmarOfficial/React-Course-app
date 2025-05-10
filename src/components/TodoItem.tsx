import { FC, useEffect } from "react";

type Todo = {
  text: string;
  id: number;
};

type TodoItemProps = {
  item: Todo;
  onDelete: (itemId: number) => void;
};

const TodoItem: FC<TodoItemProps> = ({ item, onDelete }) => {
  useEffect(() => {
    console.log(`component rendered for item ${item.id}`);

    return () => {
      console.log(`component removed for item ${item.id}`);
    };
  }, []);
  return (
    <li className="flex gap-3 justify-between items-center p-2 mb-2 bg-transparent py-4 px-8 rounded-md text-white  border hover:border hover:border-blue-500 transition-all duration-300 ease-in-out shadow-md shadow-black/50 cursor-pointer w-[300px] h-[100px]">
      <span className="text-lg">{item.text}</span>
      <button
        onClick={() => {
          onDelete(item.id);
        }}
        id={`todo_item_${item.id}`}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
