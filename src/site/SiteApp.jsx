import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";

function SiteApp() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </SiteLayout>
  );
}

export default SiteApp;
