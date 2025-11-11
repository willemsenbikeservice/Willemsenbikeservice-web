import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const onScroll = () => {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add("visible");
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};

export default useReveal;
