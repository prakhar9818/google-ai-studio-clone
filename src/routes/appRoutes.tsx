import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Stream from "../pages/stream";
import Build from "../pages/build";
import History from "../pages/history";
import GenerateMedia from "../pages/generateMedia";
import ChatLayout from "../pages/chat/layout";
import RightSidePanel from "../pages/chat/rightSidePanel";
import RunSettings from "../pages/chat/runSettings";
import PromptGallery from "../pages/chat/promptGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/chat/runSettings" replace /> },
      { path: "stream", element: <Stream /> },
      { path: "generateMedia", element: <GenerateMedia /> },
      { path: "build", element: <Build /> },
      { path: "history", element: <History /> },
      {
        path: "chat",
        element: <ChatLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="runSettings" replace />,
          },
          {
            path: "",
            element: <RightSidePanel />,
            children: [
              { path: "runSettings", element: <RunSettings /> },
              { path: "promptGallery", element: <PromptGallery /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
