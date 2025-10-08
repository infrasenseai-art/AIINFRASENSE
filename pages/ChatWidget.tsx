'use client';
import { useState } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hi 👋 Wie kann ich dir helfen?' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    const response = await fetch('https://vodasun.app.n8n.cloud/webhook/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input, sessionId: 'infrasense-demo' }),
    });

    const data = await response.json();
    setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 bg-white border border-gray-300 rounded-lg shadow-xl w-80 max-h-[70vh] flex flex-col">
          <div className="bg-indigo-600 text-white px-4 py-2 rounded-t-lg font-semibold">
            InfrasenseAI Chat
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md ${
                  msg.sender === 'bot'
                    ? 'bg-gray-100 text-gray-800 self-start'
                    : 'bg-indigo-100 text-indigo-900 self-end text-right'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t border-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Schreib eine Nachricht..."
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white px-4 text-sm font-medium hover:bg-indigo-700"
            >
              Senden
            </button>
          </div>
        </div>
      )}
    </>
  );
}
