import ChatMain from "./main";
import { Outlet } from "react-router-dom";
import "./layout.scss";

export default function ChatLayout() {
  return (
    <div className="flex h-full grey-bg">
      {/* Component A - Main Content */}
      <div className="flex-1 p-4 bg-white border-1 border-radius-20px">
        <ChatMain />
      </div>

      {/* Component B - Right Side Panel */}
      <div className="w-300px grey-bg">
        <Outlet />
      </div>
    </div>
  );
}
