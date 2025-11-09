import { Upload, FileText, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Current Resume',
    description: 'Drop in your existing CV (PDF or Word).',
    step: 1,
  },
  {
    icon: FileText,
    title: 'Add a Job Description',
    description: 'Paste or upload the role you\'re applying to.',
    step: 2,
  },
  {
    icon: Sparkles,
    title: 'Get a Tailored, ATS-Approved Rewrite',
    description: 'Receive rewritten bullet points, structure recommendations, job-match insights, and referral suggestions.',
    step: 3,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-white">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-4">
          How It Works
        </h2>
        <p className="text-lg text-dark/70 text-center mb-16 max-w-2xl mx-auto">
          Three simple steps to transform your resume
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 text-2xl font-bold">
                    {step.step}
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-background w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-dark/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/30">
                    <ArrowRight className="absolute -right-2 -top-3 text-primary/50" size={24} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Try It Now
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
