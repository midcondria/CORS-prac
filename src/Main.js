import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import HomePage from "./pages/HomePage";
import App from "./App";
import FolderPage from "./pages/FolderPage";
import SharedDetailPage from "./pages/SharedDetailPage";
import LoginPage from "./pages/LoginPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="shared">
            <Route index element={<SharedPage />} />
            // /shared/123
            <Route path=":id" element={<SharedDetailPage />} />
          </Route>
          <Route path="folder" element={<FolderPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
