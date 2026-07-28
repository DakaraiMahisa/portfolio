import { Play, Video } from "lucide-react";

const VIDEO_URL = null;

export default function VideoSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-500 mb-3">
            — Featured Presentation
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            See{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-amber-500">
              StockPilot
            </span>{" "}
            in Action.
          </h2>

          <p className="max-w-3xl text-slate-500 dark:text-slate-400 leading-relaxed">
            Watch a concise walkthrough of StockPilot, covering the business
            problem it addresses, its enterprise architecture, core features,
            and the long-term vision for AI-powered business management.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          {VIDEO_URL ? (
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={VIDEO_URL.replace("watch?v=", "embed/")}
                title="StockPilot Demo"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video flex flex-col justify-center items-center text-center p-10 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
              <div className="w-24 h-24 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
                <Play
                  className="text-indigo-500 ml-1"
                  size={42}
                  fill="currentColor"
                />
              </div>

              <h3 className="text-3xl font-black mb-3">
                Demo Video Coming Soon
              </h3>

              <p className="max-w-xl text-slate-500 dark:text-slate-400">
                I'm currently preparing a professional walkthrough showcasing
                StockPilot's architecture, features, and future AI capabilities.
                It will be available here soon.
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 p-8 border-t border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="font-black mb-4 flex items-center gap-2">
                <Video size={18} />
                What the video covers
              </h4>

              <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                <li>✓ Business problem and motivation</li>
                <li>✓ Enterprise architecture overview</li>
                <li>✓ Security & multi-tenancy</li>
                <li>✓ Inventory and business modules</li>
                <li>✓ AI roadmap and future vision</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-4 flex items-center gap-2">
                <Video size={18} />
                Video Availability
              </h4>

              <p className="text-slate-500 dark:text-slate-400">
                The complete demonstration will also be published on YouTube as
                part of my engineering portfolio, providing a detailed overview
                of the platform's capabilities and development journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
