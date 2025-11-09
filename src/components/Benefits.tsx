import { useState } from 'react';
import { Star, Target, CheckCircle, BarChart3, Zap, Briefcase, Users } from 'lucide-react';

const benefits = [
  {
    icon: Star,
    title: 'Laser-Sharp CV Point Rating',
    description: 'Get an instant, objective score for every bullet point and a rephrased suggestion to make it irresistible to recruiters.',
  },
  {
    icon: Target,
    title: 'Perfect Job-to-CV Match',
    description: 'Automatically compare your resume to any uploaded Job Description and see exactly where to strengthen.',
  },
  {
    icon: CheckCircle,
    title: 'Guaranteed ATS Approval',
    description: 'View your CV through ATS eyes. Ensure correct formatting, keywords, and clarity.',
  },
  {
    icon: BarChart3,
    title: 'One-Page Profile Intelligence',
    description: 'Access a real-time dashboard summarizing ATS score, key performance indicators, and strengths vs weaknesses.',
  },
  {
    icon: Zap,
    title: 'Zero-Effort Improvement Plan',
    description: 'Step-by-step suggestions to transform your CV into a precise, JD-aligned profile.',
  },
  {
    icon: Briefcase,
    title: 'Jobs That Actually Fit You',
    description: 'Receive suggestions for recently launched, relevant roles based on your skills and keywords.',
  },
  {
    icon: Users,
    title: 'Instant LinkedIn Connects',
    description: 'We show suggested LinkedIn referral contacts for every recommended job.',
  },
];

export default function Benefits() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-4">
          Why Students Love RefineCV
        </h2>
        <p className="text-lg text-dark/70 text-center mb-16 max-w-2xl mx-auto">
          Discover the features that make RefineCV the go-to tool for landing your dream job
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-primary/20"
                onMouseEnter={() => setExpandedCard(index)}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {benefit.title}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-dark/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
