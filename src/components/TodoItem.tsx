import { FC, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../types/types";

type TodoItemProps = {
  item: Todo;
  onDelete: (itemId: number, completed: boolean) => void;
};

const TodoItem: FC<TodoItemProps> = ({ item, onDelete }) => {
  useEffect(() => {
    // console.log(`component rendered for item ${item.id}`);

    return () => {
      // console.log(`component removed for item ${item.id}`);
    };
  }, []);
  return (
    <li className="flex gap-3 justify-between items-center p-2 mb-2 bg-transparent py-4 px-8 rounded-md text-white  border hover:border hover:border-blue-500 transition-all duration-300 ease-in-out shadow-md shadow-black/50 cursor-pointer w-[300px] h-[100px]">
      <span className="text-lg">{item.text}</span>
      <Button
        onClick={() => {
          onDelete(item.id, item.completed);
        }}
        id={`todo_item_${item.id}`}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </li>
  );
};

export default TodoItem;
