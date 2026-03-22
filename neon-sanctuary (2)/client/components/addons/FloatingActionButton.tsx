import { MessageCircle } from "lucide-react";

export default function FloatingActionButton({ phone }: { phone: string }) {
  const href = `https://wa.me/${phone.replace(/[^\d]/g, "")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500 text-white shadow-lg hover:shadow-xl"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
