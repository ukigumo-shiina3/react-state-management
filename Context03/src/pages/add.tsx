import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useTodosDispatch } from "src/states/todo";

const Add: NextPage = () => {
  const { addTodo } = useTodosDispatch();

  console.log("rendered!");

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    // ジェネリクスで入れた値(form)を一覧で取得する
    event.preventDefault();
    const text = event.currentTarget.text.value;
    addTodo(text);
    event.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
