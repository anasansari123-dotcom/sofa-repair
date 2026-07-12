"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const QUICK_REPLIES = [
  "Book a repair service",
  "Get a price quote",
  "What services do you offer?",
  "Do you offer doorstep service?",
];

const BOT_RESPONSES: Record<string, string> = {
  "book a repair service":
    "Great! You can book a repair by filling out our contact form or calling us directly. Would you like me to guide you to the booking section?",
  "get a price quote":
    "We offer free doorstep assessments! Our pricing starts from ₹999 for basic repairs. For an accurate quote, please share your sofa type and issue.",
  "what services do you offer?":
    "We offer Doorstep Sofa Repair, Upholstery, Recliner Repair, Cushion Replacement, Leather Repair, Wooden Sofa Repair, Foam Replacement, and Furniture Restoration.",
  "do you offer doorstep service?":
    "Yes! We specialize in doorstep service. Our expert team visits your home with all tools and materials. No need to transport your furniture!",
  default:
    "Thank you for your message! Our team will get back to you shortly. For immediate assistance, please call us or send a WhatsApp message.",
};

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    {
      role: "bot",
      text: "Welcome to Tanseer Sofa Repair! How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");

    setTimeout(() => {
      const key = text.toLowerCase();
      const response =
        Object.entries(BOT_RESPONSES).find(([k]) => key.includes(k))?.[1] ||
        BOT_RESPONSES.default;
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 left-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl glass-card shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            <div className="flex items-center justify-between border-b border-gold/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">
                  <Bot className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Tanseer Assistant</p>
                  <p className="text-[10px] text-muted">AI-powered support</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted hover:text-gold">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex h-80 flex-col">
              <div className="flex-1 space-y-3 overflow-y-auto p-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === "user"
                          ? "bg-gold text-navy"
                          : "bg-navy/5 dark:bg-white/5"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 border-t border-gold/10 px-4 py-2">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    className="rounded-full border border-gold/20 px-3 py-1 text-[10px] transition-colors hover:border-gold hover:text-gold"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 border-t border-gold/10 p-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border border-gold/20 bg-transparent px-3 py-2 text-sm focus:border-gold focus:outline-none"
                />
                <Button size="icon" onClick={() => sendMessage(input)}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold shadow-lg transition-all hover:shadow-gold/20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-cursor-hover
        aria-label="Open chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </>
  );
}
