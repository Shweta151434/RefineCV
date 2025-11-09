import { Eye, GitCompare, Wand2, Search, Users, BarChart2, MessageSquare, FileEdit } from 'lucide-react';

const tools = [
  {
    icon: Eye,
    title: 'CV → ATS View',
    description: 'See your resume through ATS systems',
  },
  {
    icon: GitCompare,
    title: 'JD → CV Comparison',
    description: 'Match your CV to job requirements',
  },
  {
    icon: Wand2,
    title: 'CV Improviser',
    description: 'Get intelligent improvement suggestions',
  },
  {
    icon: Search,
    title: 'Find Jobs',
    description: 'Discover relevant job opportunities',
  },
  {
    icon: Users,
    title: 'Find Connections',
    description: 'Connect with referrals on LinkedIn',
  },
  {
    icon: BarChart2,
    title: 'Dashboard with ATS Score',
    description: 'Track your CV performance metrics',
  },
  {
    icon: MessageSquare,
    title: 'Interview Prep Topics',
    description: 'Prepare for common interview questions',
  },
  {
    icon: FileEdit,
    title: 'Create CV',
    description: 'Build a professional CV from scratch',
  },
];

export default function WhatCanItDo() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-4">
          What Can It Do?
        </h2>
        <p className="text-lg text-dark/70 text-center mb-16 max-w-2xl mx-auto">
          Comprehensive tools to optimize every aspect of your job search
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer border-2 border-transparent hover:border-primary/20"
              >
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-base font-bold text-dark mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-dark/60 leading-snug">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
