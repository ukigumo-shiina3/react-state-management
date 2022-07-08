import type { AppProps } from "next/app";
import { useState } from "react";
import { Header } from "src/components/Header";
import { Todo } from "src/types";

const TODOS = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <>
      <Header todoCount={todos.length} />
      <main>
        <Component {...pageProps} todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}
