import { ICONS } from "@/constants/image";
import { Menu } from "lucide-react";
import { useState } from "react";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartMenu({ isOpen, onClose }: StartMenuProps) {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  if (!isOpen) return null;

  const actionItems = [
    { icon: ICONS.PICTURE, label: "Pictures", type: "action" },
    { icon: ICONS.SETTINGS, label: "Settings", type: "action" },
    { icon: ICONS.POWER, label: "Power", type: "action" },
  ];

  const recentlyAdded = [
    { name: "Adobe Photoshop 2022", icon: ICONS.LOGO },
    { name: "AutoCAD", icon: ICONS.LOGO },
    { name: "BlendFix", icon: ICONS.LOGO },
    { name: "Figma", icon: ICONS.LOGO },
    { name: "uTorrent", icon: ICONS.LOGO },
    { name: "3D Viewer", icon: ICONS.LOGO },
  ];

  const pinnedApps = [
    {
      name: "Office",
      items: [
        { name: "Word", icon: ICONS.LOGO },
        { name: "Excel", icon: ICONS.LOGO },
        { name: "PowerPoint", icon: ICONS.LOGO },
      ],
    },
    {
      name: "Productivity",
      items: [
        { name: "Microsoft Edge", icon: ICONS.LOGO },
        { name: "Photos", icon: ICONS.LOGO },
        { name: "Microsoft Store", icon: ICONS.LOGO },
      ],
    },
    {
      name: "Entertainment",
      items: [
        { name: "Movies & TV", icon: ICONS.LOGO },
        { name: "Prime Link", icon: ICONS.LOGO },
        { name: "Spotify", icon: ICONS.LOGO },
      ],
    },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-transparent" onClick={onClose} />
      <div className="fixed bottom-12 left-0 w-[640px] h-[520px] bg-[#202020] rounded-tr-lg shadow-lg flex p-1 animate-slideUp">
        <div
          className={`${
            isMenuExpanded ? "w-[150px]" : "w-[48px]"
          } h-full bg-[#1c1c1c] transition-all duration-200 flex flex-col`}
        >
          <button
            onClick={() => setIsMenuExpanded(!isMenuExpanded)}
            className="w-full h-12 flex items-center justify-center hover:bg-[#3a3a3a] transition-colors"
          >
            <Menu className="text-white" size={24} />
          </button>

          <div className="flex-1"></div>

          {/* Action Items at bottom */}
          <div className="space-y-1 p-1 mb-2">
            {actionItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 px-2 py-2 hover:bg-[#3a3a3a] rounded cursor-pointer group"
              >
                <img src={item.icon} alt={item.label} className="w-5 h-5" />
                {isMenuExpanded && (
                  <span className="text-white text-sm truncate">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side content */}
        <div className="flex-1 flex flex-col">
          {/* Recently Added */}
          <div className="p-4">
            <div className="text-gray-400 text-xs font-semibold mb-2">
              Recently added
            </div>
            <div className="grid grid-cols-3 gap-2">
              {recentlyAdded.map((app, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-2 py-1.5 hover:bg-[#3a3a3a] rounded cursor-pointer group"
                >
                  <img src={app.icon} alt={app.name} className="w-5 h-5" />
                  <span className="text-white text-sm truncate">
                    {app.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="text-gray-400 text-xs font-semibold mb-2">
              Pinned
            </div>
            <div className="grid grid-cols-3 gap-2">
              {pinnedApps.map((group, groupIndex) => (
                <div key={groupIndex} className="space-y-2">
                  {group.items.map((app, appIndex) => (
                    <div
                      key={`${groupIndex}-${appIndex}`}
                      className="aspect-square bg-[#2b2b2b] rounded-lg p-2 hover:bg-[#3a3a3a] cursor-pointer flex flex-col items-center justify-center space-y-2"
                    >
                      <img src={app.icon} alt={app.name} className="w-8 h-8" />
                      <span className="text-white text-xs text-center">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
