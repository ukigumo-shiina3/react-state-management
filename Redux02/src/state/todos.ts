import { Reducer } from "react";
import { Todo } from "src/types";

// const
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// action
export const addTodo = (text: Todo["text"]) => {
  // addTodo→Action。後でView側で使う。
  return {
    type: ADD_TODO,
    payload: { text },
  } as const; // payload: 情報を何かと一緒に渡したい時に使う。この場合textを送る。 as const:型アサーションでwidingを抑制(type: "ADD_TODO"に固定)
};

export const toggleTodo = (id: Todo["id"]) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  } as const;
};

type Action = ReturnType<typeof addTodo | typeof toggleTodo>; // ReturnType: typescript組み込みの型。関数の返り値を指摘できる。

// initial state
const TODOS = [
  { id: 1, text: "foofoo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

// reducer
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
    case TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          // todoのidとクリックしたidが一致したら
          return { ...todo, isDone: !todo.isDone }; // isDone以外はtodoをそのまま返す
        }
        return todo;
      });
    }
    default: {
      return state;
    }
  }
}; // Reducer:StoreにあるStateをReducerで操作する
