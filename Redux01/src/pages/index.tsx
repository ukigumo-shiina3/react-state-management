import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state";
import { Todo } from "src/types";

type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Home: NextPage<Props> = ({ setTodos }) => {
  const todos = useSelector((state: RootState) => state.todos);
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
