import { useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`
      fixed top-4 right-4 z-50 flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg
      ${type === "like" ? "bg-green-500 text-white" : "bg-red-500 text-white"}
      transform transition-all duration-300 ease-in-out
    `}
    >
      {type === "like" ? (
        <CheckCircleIcon className="h-5 w-5" />
      ) : (
        <XCircleIcon className="h-5 w-5" />
      )}
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Toast;
