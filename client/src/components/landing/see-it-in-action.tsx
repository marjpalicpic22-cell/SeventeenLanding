import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SeeItInAction() {
  const handlePlayVideo = () => {
    window.open(
      "https://drive.google.com/file/d/1x1MK37sgw3WZu4WDNnDCVChlHknWZgPW/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Maddie's Story
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Hear directly from Maddie about how Zero2Seventeen came to life and why it matters.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg">
          <div
            className="relative w-full bg-black aspect-video flex items-center justify-center group cursor-pointer"
            onClick={handlePlayVideo}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80"></div>

            {/* Play Button */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <Play className="w-12 h-12 text-white fill-white" />
              </div>
              <Button
                onClick={handlePlayVideo}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
              >
                Watch Maddie's Story
              </Button>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A 2-minute video where Maddie shares her journey of building a trusted marketplace that brings families together and reduces childhood waste.
          </p>
        </div>
      </div>
    </section>
  );
}
