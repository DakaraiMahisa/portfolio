import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Placeholder for pages we'll build next
// 🔧 As we build each page, replace these placeholders one by one
const ComingSoon = ({ page }) => (
  <main className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
    <div className="text-center px-6">
      <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-4">
        Coming Soon
      </p>
      <h1 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
        {page} Page
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8">
        We're building this page next. Check back soon!
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm hover:bg-indigo-700 transition-all"
      >
        ← Back to Home
      </a>
    </div>
  </main>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ComingSoon page="Projects" />} />
            <Route path="/skills" element={<ComingSoon page="Skills" />} />
            <Route path="/blog" element={<ComingSoon page="Blog" />} />
            <Route path="/contact" element={<ComingSoon page="Contact" />} />
            <Route path="/quiz" element={<ComingSoon page="Quiz" />} />
            {/* 404 */}
            <Route path="*" element={<ComingSoon page="404 — Not Found" />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
