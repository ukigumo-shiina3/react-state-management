import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Todo } from "src/types";

const TODOS = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

// 参照系のコンテキスト
export const TodosContext = createContext(TODOS);

// 更新系のコンテキスト
export const TodosDispatchContext = createContext<{
  toggleIsDone: (id: Todo["id"]) => void;
  addTodo: (text: Todo["text"]) => void;
}>({
  toggleIsDone: () => {
    throw Error("NO default value");
  },
  addTodo: () => {
    throw Error("NO default value");
  },
});

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  const toggleIsDone = useCallback((id: Todo["id"]) => {
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
  }, []);

  const addTodo = useCallback((text: Todo["text"]) => {
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodo];
    });
  }, []);

  const todosDispatchVlue = useMemo(() => {
    return { toggleIsDone, addTodo };
  }, [toggleIsDone, addTodo]);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={todosDispatchVlue}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  return useContext(TodosContext);
};
export const useTodosDispatch = () => {
  return useContext(TodosDispatchContext);
};
