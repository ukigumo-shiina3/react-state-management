import type { NextPage } from "next";
import { useContext } from "react";
import { TodosContext, useTodosDispatch } from "src/states/todo";

const Home: NextPage = () => {
  const todos = useContext(TodosContext);
  const { toggleIsDone } = useTodosDispatch();

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
