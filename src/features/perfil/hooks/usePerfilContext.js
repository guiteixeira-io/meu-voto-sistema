import { useContext } from "react";
import { PerfilContext } from "../contexts/PerfilContext";

export const usePerfilContext = () => {
  const context = useContext(PerfilContext);
  if (!context) {
    throw new Error("usePerfilContext deve ser usado dentro de PerfilProvider");
  }
  return context;
};
