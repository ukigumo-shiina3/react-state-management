import type { AppProps } from "next/app";
import { Layout } from "src/components/Layout";
import { TodosProvider } from "src/states/todo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodosProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodosProvider>
  );
}
