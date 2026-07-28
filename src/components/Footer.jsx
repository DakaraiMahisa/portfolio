import { Link } from "react-router-dom";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/DakaraiMahisa" },
  { label: "LeetCode", href: "https://leetcode.com/DakaraiMahisa" },
  { label: "Contact", href: "/contact", internal: true },
];

const FOOTER_LINKS = [
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
  { label: "⚡ Quiz", to: "/quiz" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="text-xl font-black tracking-tighter text-slate-900 dark:text-white"
            >
              DM<span className="text-indigo-500">.</span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Dakarai Mahisa — Backend Developer
            </p>
          </div>

          {/* Page links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <div className="flex gap-4">
            {SOCIALS.map(({ label, href, internal }) =>
              internal ? (
                <Link
                  key={label}
                  to={href}
                  className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {label}
                </a>
              ),
            )}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} Dakarai Mahisa. Built with React, Vite
            & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
