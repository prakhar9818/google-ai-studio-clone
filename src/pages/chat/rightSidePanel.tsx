import { Outlet, useNavigate } from "react-router-dom";
import "./rightSidePanel.scss";

export default function RightSidePanel() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full grey-bg ">
      <div className="flex-1 p-4 bg-white border-1 border-radius-20px">
        <Outlet />
      </div>
      <div className="p-2 flex flex-col gap-2 grey-bg border-1">
        <button
          className="hover:bg-[#ebeef9] text-sm border-radius-50percentage p-3"
          onClick={() => navigate("runSettings")}
        >
          <img
            src="https://img.icons8.com/?size=100&id=s3Mp4os3nvLC&format=png&color=000000"
            alt="setting filter icon"
            className="h-5 w-5"
          />
        </button>
        <button
          className="hover:bg-[#ebeef9] text-sm border-radius-50percentage p-3"
          onClick={() => navigate("promptGallery")}
        >
          <img
            src="https://img.icons8.com/?size=100&id=82738&format=png&color=000000"
            alt="gallery icon"
            className="h-5 w-5"
          />
        </button>
      </div>
    </div>
  );
}
