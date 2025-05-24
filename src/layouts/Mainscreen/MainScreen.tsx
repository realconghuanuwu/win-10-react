import DesktopIcons from "@/components/DesktopIcons";

export default function MainScreen() {
  return (
    <>
      <div className="absolute inset-0 bg-[url('@/assets/wallpaper/default.jpg')] bg-cover bg-center z-0" />
      <div className="relative z-10">
        <DesktopIcons />
      </div>
    </>
  );
}
