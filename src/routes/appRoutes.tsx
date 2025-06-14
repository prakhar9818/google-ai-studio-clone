import { createBrowserRouter } from "react-router-dom";
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
    element: <MainLayout />, // layout
    children: [
      { path: "stream", element: <Stream /> },
      { path: "generateMedia", element: <GenerateMedia /> },
      { path: "build", element: <Build /> },
      { path: "history", element: <History /> },
      {
        path: "chat",
        element: <ChatLayout />,
        children: [
          {
            path: "",
            element: <RightSidePanel />, // Needed only if nesting deeper
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
