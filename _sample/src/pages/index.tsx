import type { NextPage } from "next";
import { useState } from "react";

const TODOS = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  const toggleIsDone = (id: Todo["id"]) => {
    console.log(id);
    setTodos((prevTodos) => {
      // prevTodos: 以前のtodosの状態を引数で取得
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          // todoのidとクリックしたidが一致したら
          return { ...todo, isDone: !todo.isDone }; // isDone以外はtodoをそのまま返す
        }
        return todo;
      });
    });
  };

  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleIsDone(todo.id)}
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
