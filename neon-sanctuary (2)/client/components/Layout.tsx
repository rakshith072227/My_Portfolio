import { PropsWithChildren, useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, Moon, Sun } from "lucide-react";
import GoToTopButton from "./addons/GoToTopButton";
import ProgressBar from "./addons/ProgressBar";
import CursorTrail from "./addons/CursorTrail";
import FloatingActionButton from "./addons/FloatingActionButton";
import CircleMenu from "./addons/CircleMenu";
import FloatingBubbles from "./addons/FloatingBubbles";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingBubbles />
      <ProgressBar />
      <CursorTrail />
      <Header />
      <main className="pt-20 relative z-10">{children}</main>
      <GoToTopButton />
      <FloatingActionButton phone={"+919019054557"} />
      <CircleMenu />
      <Footer />
    </div>
  );
}

function Header() {
  const nav = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#featured", label: "Featured" },
    { href: "#certifications", label: "Certifications" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-white/70 dark:bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-xl">
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Rakshith
          </span>
          <span className="ml-1 text-foreground/70">Kumar D</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1 md:gap-2">
          <ThemeToggle />
          <a
            aria-label="GitHub"
            href="https://github.com/rakshith072227"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-foreground/5"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://linkedin.com/in/rakshith-kumar-d-2a38981ab"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-foreground/5"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            aria-label="Email"
            href="mailto:rakshithk422@gmail.com"
            className="p-2 rounded-md hover:bg-foreground/5"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            aria-label="Phone"
            href="tel:+919019054557"
            className="p-2 rounded-md hover:bg-foreground/5"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved
      ? saved === "dark"
      : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-md hover:bg-foreground/5"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-20">
      <div className="container py-8 text-sm text-foreground/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Rakshith Kumar D. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-foreground">
            About
          </a>
          <a href="#projects" className="hover:text-foreground">
            Projects
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
