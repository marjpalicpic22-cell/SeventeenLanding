import { Play } from "lucide-react";

export function SeeItInAction() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Watch how easy it is to browse, list items, and connect with other parents in your community.
          </p>
        </div>

        {/* Video Demo Placeholder */}
        <div className="relative w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-lg">
          {/* Video Container */}
          <div className="relative w-full bg-black aspect-video flex items-center justify-center group cursor-pointer">
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

            {/* Play Button */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <Play className="w-10 h-10 text-white fill-white" />
              </div>
              <p className="text-white text-sm font-medium">Click to play demo</p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
          </div>

          {/* Video embed (placeholder) */}
          <div className="hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-3">
              <span className="text-green-700 dark:text-green-400 font-bold">✓</span>
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Browse Listings</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Find quality second-hand kids items in your area with just a few taps.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-3">
              <span className="text-green-700 dark:text-green-400 font-bold">✓</span>
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">List Your Items</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Upload photos and give your kids' outgrown items a second life in seconds.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-3">
              <span className="text-green-700 dark:text-green-400 font-bold">✓</span>
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Connect & Chat</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Message other parents directly within the app with complete safety and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
