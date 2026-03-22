import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function GoToTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <a
      href="#home"
      className="fixed bottom-6 right-24 inline-flex items-center justify-center rounded-full h-11 w-11 bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
    >
      <ArrowUp className="h-5 w-5" />
    </a>
  );
}
