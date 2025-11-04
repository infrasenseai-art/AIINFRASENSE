// pages/_app.tsx
import type { AppProps } from "next/app";
import ChatWidget from "./ChatWidget";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ChatWidget />
    </>
  );
}
