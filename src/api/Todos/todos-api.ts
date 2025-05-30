import { Todo } from "../../types";

export const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data = await response.json();
  return data as Todo[];
};
