import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
    <div className="text-center px-6">
      <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-4">
        404 Error
      </p>
      <h1 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm hover:bg-indigo-700 transition-all"
      >
        ← Back to Home
      </Link>
    </div>
  </main>
);

export default NotFound;
