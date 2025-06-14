import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./mainLayout.scss";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarItems = [
    {
      label: "Chat",
      route: "/chat",
      icon: "https://img.icons8.com/?size=100&id=DfkwPIGI2t63&format=png&color=000000",
    },
    { label: "Stream", route: "/stream", icon: "src\\assets\\echo.png" },
    {
      label: "Generate Media",
      route: "/generateMedia",
      icon: "src\\assets\\chatwithimage.svg",
    },
    {
      label: "Build",
      route: "/build",
      icon: "src\\assets\\puzzle.png",
    },
    {
      label: "History",
      route: "/history",
      icon: "https://img.icons8.com/?size=100&id=86136&format=png&color=000000",
    },
  ];
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-73px grey-bg flex items-center justify-between px-4">
        <div className="text-sm flex items-center gap-1">
          <img src="src\assets\google.svg" alt="" />
          <span className="fs-22px">AI Studio</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => alert("New Project")}
            className="px-3 py-1 rounded flex items-center gap-2 dark-grey-bg border-1 border-radius-20px"
          >
            <img
              src="https://img.icons8.com/?size=100&id=82753&format=png&color=000000"
              alt="key icon"
              className="h-5 w-5"
            />
            Get API key
          </button>
          <button
            onClick={() => alert("New Project")}
            className="px-3 py-1 rounded"
          >
            Studio
          </button>
          <button
            onClick={() => alert("Settings")}
            className="px-3 py-1 rounded"
          >
            Dashboard
          </button>
          <button
            onClick={() => alert("Settings")}
            className="px-3 py-1 rounded flex items-center gap-1"
          >
            Documentation
            <img
              src="https://img.icons8.com/?size=100&id=83168&format=png&color=000000"
              alt="open link"
              className="h-16px w-16px"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="w-219px grey-bg px-4 pb-4 pt-24px flex flex-col gap-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.route;
            return (
              <button
                key={item.route}
                onClick={() => navigate(item.route)}
                className={`text-left py-1 px-15px rounded flex items-center gap-2 border-1 border-radius-20px ${
                  isActive ? "dark-grey-bg" : "hover:bg-[#ebeef9]"
                }`}
              >
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className="h-5 w-5"
                  />
                )}
                {item.label}
              </button>
            );
          })}
          <div className="flex justify-center mt-3">
            <button
              onClick={() => navigate("addToDrive")}
              className={`hover:bg-[#ebeef9] text-left py-1 px-15px rounded flex items-center gap-2 border-1 border-radius-20px`}
            >
              <img
                src="src\assets\addtodrive.png"
                alt="add to drive icon"
                className="h-5 w-5"
              />
              Enable saving
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
