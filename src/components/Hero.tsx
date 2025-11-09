import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background to-white">
      <div className="max-w-content mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
          Refine CV
        </h1>
        <p className="text-xl md:text-2xl text-dark/80 mb-4 max-w-3xl mx-auto leading-relaxed">
          Transform your resume into a bespoke, JD-specific profile in minutes.
        </p>
        <p className="text-lg md:text-xl text-dark/70 mb-3 max-w-3xl mx-auto">
          Instantly unlock hidden strengths and critical gaps in your profile.
        </p>
        <p className="text-lg md:text-xl text-dark/70 mb-12 max-w-3xl mx-auto">
          Get data-driven, authentic, actionable recommendations to craft an ATS-ready CV that positions you for interviews.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
            Get Started
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all flex items-center gap-2">
            <Play size={20} />
            Try a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
