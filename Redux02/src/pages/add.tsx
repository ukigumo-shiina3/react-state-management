import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "src/state/todos";

const Add: NextPage = () => {
  const dispatch = useDispatch(); // useDispatch: Actionの呼び出しに必要

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    // ジェネリクスで入れた値(form)を一覧で取得する

    event.preventDefault();
    const text: string = event.currentTarget.text.value;
    dispatch(addTodo({ text }));
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
