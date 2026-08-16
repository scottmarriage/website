import { useEffect, useRef, useState, type FormEvent } from "react";
import { FiTerminal, FiX } from "react-icons/fi";
import { runCommand, NAV_COMMANDS } from "../lib/terminalCommands";

interface Line {
  type: "input" | "output";
  text: string;
}

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: 'Welcome. Type "help" to get started.' },
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const cmd = value.trim().toLowerCase();
    if (cmd === "clear") {
      setHistory([]);
      setValue("");
      return;
    }
    const output = runCommand(value);
    setHistory((h) => [
      ...h,
      { type: "input", text: value },
      ...(output ? [{ type: "output" as const, text: output }] : []),
    ]);
    setValue("");
    if (NAV_COMMANDS[cmd]) {
      window.setTimeout(() => {
        window.location.href = NAV_COMMANDS[cmd];
      }, 400);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div
          role="dialog"
          aria-label="Terminal"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          className="flex h-80 w-80 flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-card-hover sm:w-96"
        >
          <div className="flex items-center justify-between border-b border-border px-3 py-2">
            <span className="font-mono text-xs text-ink-muted">guest@scott-marriage.com</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close terminal"
              className="text-ink-muted hover:text-brand-500"
            >
              <FiX size={16} />
            </button>
          </div>
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3 py-2 font-mono text-xs text-ink"
          >
            {history.map((line, i) => (
              <div
                key={i}
                className={
                  line.type === "input" ? "text-brand-500" : "whitespace-pre-wrap text-ink-muted"
                }
              >
                {line.type === "input" ? `$ ${line.text}` : line.text}
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-1 border-t border-border px-3 py-2"
          >
            <span className="font-mono text-xs text-brand-500">$</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="flex-1 bg-transparent font-mono text-xs text-ink outline-none"
              aria-label="Terminal command input"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2 font-mono text-xs text-ink-muted shadow-card hover:border-brand-500 hover:text-brand-500"
        >
          <FiTerminal size={14} /> terminal
        </button>
      )}
    </div>
  );
}
