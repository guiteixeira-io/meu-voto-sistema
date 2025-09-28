import { useState, useEffect } from "react";

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fechar sidebar quando mudar de rota em mobile
  const closeSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  // Fechar sidebar quando redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fechar sidebar com tecla Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen,
    closeSidebar,
    toggleSidebar: () => setIsOpen(!isOpen),
  };
};

export default useSidebar;
