import { useState } from "react";
import TaskBar from "./Taskbar/TaskBar";
import ActionCenter from "@/components/ActionCenter/ActionCenter";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActionCenterOpen, setIsActionCenterOpen] = useState(true);

  return (
    <div className="h-screen w-screen bg-black relative">
      <ActionCenter isOpen={isActionCenterOpen} />
      <main className="h-full w-full">{children}</main>
      <TaskBar />
    </div>
  );
}
