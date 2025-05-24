import React from "react";

interface DesktopIconProps {
  name: string;
  icon: string;
  onClick?: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ name, icon, onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-start p-1 rounded hover:bg-white/10 active:bg-white/20"
      onClick={onClick}
    >
      <div className="w-10 h-10 flex items-center justify-center mb-1">
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 object-contain"
          draggable={false}
        />
      </div>
      <span className="text-white text-xs px-1 text-center break-words w-full text-shadow-sm">
        {name}
      </span>
    </div>
  );
};

export default DesktopIcon;
