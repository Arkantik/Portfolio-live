// Packages
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/utilities/Navbar";

// Pages
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

// Style
import "./App.css";

export default function App() {
  return (
    <div className="overflow-hidden bg-dark">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
