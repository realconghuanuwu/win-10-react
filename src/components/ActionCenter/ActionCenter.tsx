import { ICONS } from "@/constants/image";

interface ActionCenterProps {
  isOpen: boolean;
}

export default function ActionCenter({ isOpen }: ActionCenterProps) {
  const menuItems = [
    { icon: ICONS.LOGO, label: "User", type: "profile" },
    { icon: ICONS.LOGO, label: "File", type: "action" },
    { icon: ICONS.LOGO, label: "Pictures", type: "action" },
    { icon: ICONS.SETTINGS, label: "Settings", type: "action" },
    { icon: ICONS.POWER, label: "Power", type: "action" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 bottom-0 top-0 w-[48px] bg-[#202020] flex flex-col items-center py-2 space-y-4">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`w-10 h-10 flex items-center justify-center rounded hover:bg-[#3a3a3a] transition-colors group relative
            ${item.type === "profile" ? "rounded-full bg-gray-600" : ""}`}
          title={item.label}
        >
          <img
            src={item.icon}
            alt={item.label}
            className={`w-5 h-5 ${
              item.type === "profile" ? "rounded-full" : ""
            }`}
          />
          <span className="absolute left-12 bg-[#202020] text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
