import React from "react";
import DesktopIcon from "@/components/DesktopIcon";
import { ICONS } from "@/constants/image";

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
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
  {
    name: "Recycle Bin",
    icon: ICONS.RECYCLE_BIN,
    onClick: () => console.log("Recycle Bin clicked"),
  },
];

const DesktopIcons: React.FC = () => {
  return (
    <div className="p-1 grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-1 select-none">
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
