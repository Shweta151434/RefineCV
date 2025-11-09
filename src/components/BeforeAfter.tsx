import { useState } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const comparisons = [
  {
    before: 'Worked on college fest management.',
    after: 'Directed a 14-member operations team to execute a 3-day festival with 2,400+ attendees, achieving 98% vendor fulfillment and under-budget execution.',
    scoreBefore: 42,
    scoreAfter: 86,
  },
  {
    before: 'Completed internship at tech company.',
    after: 'Engineered 3 scalable microservices using Node.js and AWS, reducing API response time by 45% and supporting 10K+ daily active users.',
    scoreBefore: 38,
    scoreAfter: 82,
  },
  {
    before: 'Led team project for mobile app development.',
    after: 'Architected and launched iOS/Android app with 5-member team, achieving 15K downloads in first month and 4.7-star rating through agile sprint methodology.',
    scoreBefore: 45,
    scoreAfter: 89,
  },
];

export default function BeforeAfter() {
  const [activeComparison, setActiveComparison] = useState(0);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-background">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-4">
          Before & After
        </h2>
        <p className="text-lg text-dark/70 text-center mb-16 max-w-2xl mx-auto">
          See how RefineCV transforms generic bullet points into powerful, ATS-approved achievements
        </p>

        <div className="mb-8 flex justify-center gap-3">
          {comparisons.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveComparison(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeComparison === index
                  ? 'bg-primary w-8'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-red-600 bg-red-50 px-4 py-2 rounded-full">
                  BEFORE
                </span>
                <div className="flex items-center gap-2 text-red-600">
                  <span className="text-sm font-semibold">ATS Score:</span>
                  <span className="text-2xl font-bold">{comparisons[activeComparison].scoreBefore}</span>
                </div>
              </div>
              <p className="text-dark/70 text-lg leading-relaxed italic">
                "{comparisons[activeComparison].before}"
              </p>
            </div>

            <div className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-green-600 bg-green-50 px-4 py-2 rounded-full">
                  AFTER
                </span>
                <div className="flex items-center gap-2 text-green-600">
                  <span className="text-sm font-semibold">ATS Score:</span>
                  <span className="text-2xl font-bold">{comparisons[activeComparison].scoreAfter}</span>
                </div>
              </div>
              <p className="text-dark text-lg leading-relaxed font-medium">
                "{comparisons[activeComparison].after}"
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-6 flex items-center justify-center gap-4 border-t border-primary/10">
            <TrendingUp className="text-green-600" size={28} />
            <span className="text-xl font-bold text-dark">
              +{Math.round(((comparisons[activeComparison].scoreAfter - comparisons[activeComparison].scoreBefore) / comparisons[activeComparison].scoreBefore) * 100)}% improvement
            </span>
            <ArrowRight className="text-primary" size={24} />
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl">
            Transform Your CV Now
          </button>
        </div>
      </div>
    </section>
  );
}
