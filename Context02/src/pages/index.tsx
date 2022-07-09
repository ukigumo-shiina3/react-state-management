import type { NextPage } from "next";
import { useContext } from "react";
import { Todo } from "src/types";
import { TodosContext } from "./_app";

const Home: NextPage = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const toggleIsDone = (id: Todo["id"]) => {
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
