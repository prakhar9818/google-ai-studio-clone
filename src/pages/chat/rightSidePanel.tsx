import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./rightSidePanel.scss";

export default function RightSidePanel() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const buttons = [
    {
      path: "runSettings",
      icon: "https://img.icons8.com/?size=100&id=s3Mp4os3nvLC&format=png&color=000000",
      alt: "setting filter icon",
      isActive: pathname.includes("/runSettings"),
    },
    {
      path: "promptGallery",
      icon: "https://img.icons8.com/?size=100&id=82738&format=png&color=000000",
      alt: "gallery icon",
      isActive: pathname.includes("/promptGallery"),
    },
  ];

  return (
    <div className="flex h-full grey-bg">
      <div className="flex-1 p-4 bg-white border-1 border-radius-20px">
        <Outlet />
      </div>
      <div className="p-2 flex flex-col gap-2 grey-bg border-1">
        {buttons.map(({ path, icon, alt, isActive }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`p-3 text-sm border-radius-50percentage hover:bg-[#ebeef9] ${
              isActive ? "dark-grey-bg" : ""
            }`}
          >
            <img src={icon} alt={alt} className="h-5 w-5" />
          </button>
        ))}
      </div>
    </div>
  );
}
