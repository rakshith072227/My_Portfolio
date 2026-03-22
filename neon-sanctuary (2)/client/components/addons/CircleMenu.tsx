import { useState } from "react";
import {
  Menu,
  Home,
  BookOpen,
  Briefcase,
  Layers,
  Medal,
  Mail,
} from "lucide-react";

export default function CircleMenu() {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "#home", icon: Home },
    { href: "#about", icon: BookOpen },
    { href: "#experience", icon: Briefcase },
    { href: "#projects", icon: Layers },
    { href: "#achievements", icon: Medal },
    { href: "#contact", icon: Mail },
  ];
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="h-12 w-12 rounded-full bg-foreground text-background inline-flex items-center justify-center shadow"
      >
        <Menu />
      </button>
      <div className="relative">
        {items.map((it, i) => {
          const angle = (Math.PI / 3) * i - Math.PI / 2;
          const r = open ? 90 : 0;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          const Icon = it.icon;
          return (
            <a
              key={it.href}
              href={it.href}
              className="absolute"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <span className="h-10 w-10 rounded-full bg-background text-foreground border border-border inline-flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
