import React, { useState } from "react";
import DesktopIcon from "@/components/DesktopIcon";
import { ICONS } from "@/constants/image";
import WindowModal from "./WindowModal";

const DesktopIcons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultIcons = [
    {
      name: "This PC",
      icon: ICONS.THIS_PC,
      onClick: () => console.log("This PC clicked"),
    },
    {
      name: "Recycle Bin",
      icon: ICONS.RECYCLE_BIN,
      onClick: () => console.log("Recycle Bin clicked"),
    },

    {
      name: "Recycle Bin",
      icon: ICONS.RECYCLE_BIN,
      onClick: () => setIsOpen(true),
    },
  ];

  return (
    <div className="p-1 grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-1 select-none">
      <WindowModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width={800}
        height={600}
      >
        <div>Hello</div>
      </WindowModal>
      {defaultIcons.map((icon, index) => (
        <DesktopIcon
          key={`${icon.name}-${index}`}
          name={icon.name}
          icon={icon.icon}
          onClick={icon.onClick}
        />
      ))}
    </div>
  );
};

export default DesktopIcons;
