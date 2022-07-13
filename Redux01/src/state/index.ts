import { combineReducers, legacy_createStore } from "redux";
import { todosReducer } from "./todos";

export const store = legacy_createStore(
  combineReducers({
    todos: todosReducer,
  })
); // combineReducers: 色んな状態をまとめて管理する

export type RootState = ReturnType<typeof store.getState>;
