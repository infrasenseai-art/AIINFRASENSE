// pages/ChatWidget.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Send, X, MessageCircle } from "lucide-react";

/* ---------- TypeScript: window.Calendly deklarieren ---------- */
declare global {
  interface Window {
    Calendly?: { initPopupWidget(args: { url: string }): void };
    __calendlyLoaded?: boolean;
  }
}

/* ---------- Typen für strukturierte Replies ---------- */
type Action =
  | { type: "open_calendly"; url: string; label?: string }
  | { type: "open_url"; url: string; label?: string };

type AssistantPayload = {
  text?: string;
  action?: Action;
  fallback?: { label?: string; href: string };
};

type ChatItem = {
  role: "assistant" | "user";
  content: string | AssistantPayload;
};

/* ---------- Konfig ---------- */
const WEBHOOK =
  process.env.NEXT_PUBLIC_CHAT_WEBHOOK ||
  "https://vodasun.app.n8n.cloud/webhook/chat";

const SUGGESTIONS = [
  "Welche Leistungen bietet ihr?",
  "Wie läuft die Implementierung ab?",
  "Ist das DSGVO-konform?",
];

/* ---------- Calendly Helper ---------- */
function loadCalendly() {
  if (typeof window === "undefined") return;
  if (window.__calendlyLoaded) return;
  const s = document.createElement("script");
  s.src = "https://assets.calendly.com/assets/external/widget.js";
  s.async = true;
  s.onload = () => {
    window.__calendlyLoaded = true;
  };
  document.head.appendChild(s);
}

function openCalendly(url: string) {
  loadCalendly();
  // kleines Delay, bis Script verfügbar ist
  setTimeout(() => {
    window.Calendly?.initPopupWidget({ url });
  }, 60);
}

/* ---------- Component ---------- */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatItem[]>([
    { role: "assistant", content: "Hi 👋 Wie kann ich dir helfen?" },
  ]);

  const boxRef = useRef<HTMLDivElement>(null);

  // Auto-Scroll
  useEffect(() => {
    if (!boxRef.current) return;
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages, open, loading]);

  const canSend = input.trim().length > 0 && !loading;

  // Suggestions nur zeigen, wenn diese Frage noch nicht gestellt wurde
  const visibleSuggestions = useMemo(() => {
    const asked = new Set(
      messages
        .filter((m) => m.role === "user")
        .map((m) => String(m.content).trim())
    );
    return SUGGESTIONS.filter((s) => !asked.has(s));
  }, [messages]);

  async function send(text: string) {
    if (!text.trim()) return;
    setErr(null);
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: text }]);

    try {
      const sessionId =
        typeof window !== "undefined"
          ? (() => {
              const key = "chat-session";
              let id = window.localStorage.getItem(key);
              if (!id) {
                id =
                  "web-" +
                  (crypto.randomUUID?.() ??
                    Math.random().toString(36).slice(2));
                window.localStorage.setItem(key, id);
              }
              return id;
            })()
          : "server";

      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-infrasense-client": "web",
        },
        body: JSON.stringify({ message: text, sessionId }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      // n8n kann { reply: {...} } oder plain string liefern
      const raw = data?.reply ?? data?.message ?? data;
      let reply: string | AssistantPayload;

      if (raw && typeof raw === "object" && (raw.text || raw.action || raw.fallback)) {
        reply = raw as AssistantPayload;
      } else if (typeof raw === "string") {
        reply = raw;
      } else {
        reply = "Alles klar!";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setErr(
        "Uff – da ist etwas schiefgelaufen. Bitte später erneut versuchen."
      );
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Entschuldige, aktuell gab es ein Verbindungsproblem. Probier es gerne gleich nochmal. 🙏",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!canSend) return;
    const text = input.trim();
    setInput("");
    void send(text);
  }

  return (
    <>
      {/* FAB */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-indigo-900/30 ring-1 ring-white/10 hover:scale-105 transition"
          aria-label="Chat öffnen"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-[60] w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f19]/95 backdrop-blur shadow-2xl">
          {/* Header */}
          <div className="relative flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 to-violet-600">
            <div className="font-semibold">InfrasenseAI Chat</div>
            <button
              className="rounded-lg p-1.5 hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-label="Chat schließen"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <span className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
          </div>

          {/* Messages */}
          <div
            ref={boxRef}
            className="max-h-[55vh] overflow-y-auto px-3 py-3 space-y-3 scrollbar-thin scrollbar-thumb-white/10"
          >
            {messages.map((m, i) => {
              const isUser = m.role === "user";

              if (typeof m.content === "string") {
                return (
                  <div
                    key={i}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                        isUser
                          ? "bg-indigo-600/90 text-white"
                          : "bg-white/5 text-slate-100 border border-white/10"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                );
              }

              // strukturierte Antwort (Button + Fallback)
              const payload = m.content as AssistantPayload;
              return (
                <div key={i} className="flex justify-start">
                  <div className="max-w-[80%] space-y-2">
                    {payload.text && (
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100">
                        {payload.text}
                      </div>
                    )}

                    {payload.action?.type === "open_calendly" && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openCalendly(payload.action!.url)}
                          className="rounded-xl bg-white text-[#0b0f19] px-3.5 py-2 text-sm font-semibold hover:opacity-90"
                        >
                          {payload.action.label ?? "Termin buchen"}
                        </button>

                        {payload.fallback?.href && (
                          <a
                            href={payload.fallback.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10"
                          >
                            {payload.fallback.label ?? "Falls Popup blockiert ist"}
                          </a>
                        )}
                      </div>
                    )}

                    {payload.action?.type === "open_url" && (
                      <a
                        href={payload.action.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-xl bg-white text-[#0b0f19] px-3.5 py-2 text-sm font-semibold hover:opacity-90"
                      >
                        {payload.action.label ?? "Öffnen"}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Suggestions */}
            {visibleSuggestions.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {visibleSuggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => void send(s)}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200 hover:bg-white/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <span className="sr-only">Tippt…</span>
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            )}

            {err && (
              <div className="text-[12px] text-rose-300/90 pt-1">{err}</div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-end gap-2 border-t border-white/10 bg-[#0b0f19]/80 px-3 py-3"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Schreib eine Nachricht…"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              className="min-h-[42px] max-h-28 flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-400/60"
            />
            <button
              type="submit"
              disabled={!canSend}
              className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
                canSend
                  ? "bg-white text-[#0b0f19] hover:opacity-90"
                  : "bg-white/30 text-[#0b0f19]/60 cursor-not-allowed"
              }`}
            >
              <Send className="h-4 w-4" />
              Senden
            </button>
          </form>
        </div>
      )}

      {/* Tiny CSS for typing dots */}
      <style jsx>{`
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.9);
          display: inline-block;
          animation: blink 1.2s infinite ease-in-out;
        }
        .dot:nth-child(2) {
          animation-delay: 0.15s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.3s;
        }
        @keyframes blink {
          0%,
          80%,
          100% {
            opacity: 0.2;
            transform: translateY(0);
          }
          40% {
            opacity: 1;
            transform: translateY(-2px);
          }
        }
      `}</style>
    </>
  );
}
