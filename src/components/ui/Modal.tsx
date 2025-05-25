import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { ICONS } from "@/constants/image";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen) return null;

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return createPortal(
    <div
      className={`
        fixed z-50 bg-white shadow-xl flex flex-col
        ${
          isMaximized
            ? "inset-0 w-screen h-screen"
            : "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[800px] h-[600px]"
        }
      `}
    >
      {/* Title bar */}
      <div className="h-9 bg-[#ffffff] flex items-center justify-between border-b border-[#e5e5e5] select-none">
        <div className="px-4">
          <span className="text-sm text-[#222222]">{title}</span>
        </div>

        <div className="flex h-full">
          <button
            onClick={onClose}
            className="w-12 h-full flex items-center justify-center hover:bg-[#e5e5e5] transition-colors"
          >
            <img src={ICONS.MINUS} alt="Minimize" className="w-3 h-3" />
          </button>

          <button
            onClick={handleMaximize}
            className="w-12 h-full flex items-center justify-center hover:bg-[#e5e5e5] transition-colors"
          >
            <img src={ICONS.MAXIMIZE} alt="Maximize" className="w-3 h-3" />
          </button>

          <button
            onClick={onClose}
            className="w-12 h-full flex items-center justify-center hover:bg-[#e81123] hover:text-white transition-colors"
          >
            <img src={ICONS.X} alt="Close" className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>,
    document.body
  );
}
