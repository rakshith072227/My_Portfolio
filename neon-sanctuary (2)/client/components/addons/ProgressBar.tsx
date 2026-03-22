import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div className="h-1 bg-primary" style={{ width: `${progress}%` }} />
    </div>
  );
}
