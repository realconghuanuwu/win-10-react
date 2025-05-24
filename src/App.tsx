import TaskBar from "./layouts/Taskbar/TaskBar";
import MainScreen from "./layouts/Mainscreen/MainScreen";

function App() {
  return (
    <>
      <div className="h-screen w-screen relative">
        <MainScreen />
        <TaskBar />
      </div>
    </>
  );
}

export default App;
