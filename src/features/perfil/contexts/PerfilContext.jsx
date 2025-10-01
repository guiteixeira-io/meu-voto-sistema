import React, { createContext, useState, useEffect } from "react";

export const PerfilContext = createContext();

export default function PerfilProvider({ children }) {
  const [activeSection, setActiveSection] = useState("meus-dados");

  // Função para definir seção ativa
  const setActiveSectionGlobal = (section) => {
    setActiveSection(section);
    localStorage.setItem("perfilActiveSection", section);
    // Dispara evento personalizado para comunicar mudança
    window.dispatchEvent(
      new CustomEvent("perfilSectionChange", { detail: section })
    );
  };

  // Escuta mudanças vindas de outros componentes
  useEffect(() => {
    const handleSectionChange = (event) => {
      setActiveSection(event.detail);
    };

    const handleStorageChange = () => {
      const storedSection = localStorage.getItem("perfilActiveSection");
      if (storedSection && storedSection !== activeSection) {
        setActiveSection(storedSection);
      }
    };

    // Carrega seção salva no localStorage
    const storedSection = localStorage.getItem("perfilActiveSection");
    if (storedSection) {
      setActiveSection(storedSection);
    }

    window.addEventListener("perfilSectionChange", handleSectionChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("perfilSectionChange", handleSectionChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [activeSection]);

  const value = {
    activeSection,
    setActiveSection: setActiveSectionGlobal,
  };

  return (
    <PerfilContext.Provider value={value}>{children}</PerfilContext.Provider>
  );
}
