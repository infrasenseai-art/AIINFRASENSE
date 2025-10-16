
// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react"; // ✅ HINZUGEFÜGT

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* ✅ Fügt Vercel Web Analytics hinzu */}
    </>
  );
}

