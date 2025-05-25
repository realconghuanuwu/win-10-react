import { ICONS } from "@/constants/image";
import { useState, useEffect } from "react";
import PinnedApps from "./components/PinnedApps";
import StartMenu from "@/components/StartMenu/StartMenu";

export default function TaskBar() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  return (
    <>
      <StartMenu
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
      />
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-[#202020] flex items-center justify-between px-2 z-10">
        <div className="flex items-center space-x-2" title="Start">
          <button
            className={`h-10 w-10 flex items-center justify-center hover:bg-[#3a3a3a] rounded transition-colors ${
              isStartMenuOpen ? "bg-[#3a3a3a]" : ""
            }`}
            onClick={toggleStartMenu}
          >
            <img src={ICONS.LOGO} alt="Start" className="w-6 h-6" />
          </button>
          <PinnedApps />
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="h-10 px-2 flex items-center justify-center hover:bg-[#3a3a3a] rounded transition-colors"
            title="Show hidden icons"
          >
            <img src={ICONS.ARROW_UP} alt="Network" className="size-3 " />
          </button>
          <button
            className="h-10 px-2 flex items-center justify-center hover:bg-[#3a3a3a] rounded transition-colors"
            title="Network"
          >
            <img src={ICONS.NETWORK} alt="Network" className="size-4 " />
          </button>
          <button
            className="h-10 px-2 flex items-center justify-center hover:bg-[#3a3a3a] rounded transition-colors"
            title="Speaker 100%"
          >
            <img src={ICONS.SOUND} alt="Sound" className="size-4" />
          </button>

          <button
            className="h-10 px-2 flex items-center justify-center hover:bg-[#3a3a3a] rounded transition-colors"
            title={`${currentTime} ${currentDate}`}
          >
            <div className="text-right">
              <div className="text-white text-xs">{currentTime}</div>
              <div className="text-white text-xs">{currentDate}</div>
            </div>
          </button>

          <button
            className="h-10 px-2 flex items-center justify-center hover:bg-[#3a3a3a] rounded transition-colors"
            title="No new notifications"
          >
            <img
              src={ICONS.NOTIFICATION}
              alt="Notifications"
              className="w-4 h-4"
            />
          </button>

          <div className="w-2 h-full hover:bg-[#3a3a3a] transition-colors" />
        </div>
      </div>
    </>
  );
}
