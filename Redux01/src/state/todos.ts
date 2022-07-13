import { Reducer } from "react";
import { Todo } from "src/types";

const ADD_TODO = "ADD_TODO";

export const addTodo = (text: Todo["text"]) => {
  // addTodo→Action。後でView側で使う。
  return {
    type: ADD_TODO,
    payload: { text },
  } as const; // payload: 情報を何かと一緒に渡したい時に使う。この場合textを送る。 as const:型アサーションでwidingを抑制(type: "ADD_TODO"に固定)
};

type Action = ReturnType<typeof addTodo>; // ReturnType: typescript組み込みの型。関数の返り値を指摘できる。

const TODOS = [
  { id: 1, text: "foofoo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const todosReducer: Reducer<Todo[], Action> = (
  state = TODOS,
  action
) => {
  // state:現在の状態 action:新しくきたaction
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      };
      return [...state, newTodo];
    }
    default: {
      return state;
    }
  }
}; // Reducer:StoreにあるStateをReducerで操作する
