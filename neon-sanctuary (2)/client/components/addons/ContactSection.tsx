import { useMemo, useState } from "react";

export default function ContactSection({
  whatsapp,
  email,
}: {
  whatsapp: string;
  email: string;
}) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const waUrl = useMemo(() => {
    const text = encodeURIComponent(
      `Hello, I'm ${name}.\nEmail: ${mail}\nMobile: ${mobile}\n\n${message}`,
    );
    return `https://wa.me/${whatsapp.replace(/[^\d]/g, "")}?text=${text}`;
  }, [name, mail, mobile, message, whatsapp]);
  return (
    <form className="grid gap-3">
      <label className="grid gap-1">
        <span className="text-sm">Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-10 rounded-md border border-border bg-background px-3"
        />
      </label>
      <label className="grid gap-1">
        <span className="text-sm">Email</span>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="h-10 rounded-md border border-border bg-background px-3"
        />
      </label>
      <label className="grid gap-1">
        <span className="text-sm">Mobile</span>
        <input
          inputMode="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="h-10 rounded-md border border-border bg-background px-3"
        />
      </label>
      <label className="grid gap-1">
        <span className="text-sm">Message</span>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-md border border-border bg-background px-3 py-2"
        />
      </label>
      <div className="flex gap-3 pt-1">
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 shadow"
        >
          Send via WhatsApp
        </a>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5"
        >
          Email
        </a>
      </div>
    </form>
  );
}
