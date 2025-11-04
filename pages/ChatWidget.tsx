// pages/ChatWidget.tsx
import Script from "next/script";

export default function ChatWidget() {
  return (
    <Script
      id="superchat-widget"
      src="https://widget.superchat.de/snippet.js?applicationKey=WC0J3WbML4zEXX80EGZ6DON2y5"
      strategy="afterInteractive"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
