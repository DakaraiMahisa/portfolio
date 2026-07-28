import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navBase = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const navScrolled =
    "py-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-200/50 dark:border-slate-800/50";
  const navTop = "py-5 bg-transparent";

  return (
    <>
      <nav className={`${navBase} ${scrolled ? navScrolled : navTop}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
              DM<span className="text-indigo-500">.</span>
            </span>
          </Link>
          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`
                  }
                  end={to === "/"}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            {/* Quiz - special highlight */}
            <li>
              <NavLink
                to="/quiz"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 border ${
                    isActive
                      ? "bg-amber-500 border-amber-500 text-slate-900"
                      : "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20"
                  }`
                }
              >
                ⚡ Quiz
              </NavLink>
            </li>
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-400 transition-all duration-200"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Hire Me CTA */}
            <Link
              to="/contact"
              className="hidden sm:block px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              Hire Me
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col gap-1.25 p-2"
            >
              <span
                className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 rounded transition-all duration-300 ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 rounded transition-all duration-300 ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-slate-950 flex flex-col items-center justify-center gap-6 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {[...NAV_LINKS, { label: "⚡ Quiz", to: "/quiz" }].map(
          ({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-3xl font-black tracking-tighter transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-500"
                    : "text-slate-800 dark:text-slate-100 hover:text-indigo-500"
                }`
              }
            >
              {label}
            </NavLink>
          ),
        )}
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm"
        >
          Hire Me
        </Link>
      </div>
    </>
  );
}
