import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Computer Science',
    university: 'IIT Delhi',
    quote: 'RefineCV helped me land 3 interview calls in one week. The ATS score improvement was incredible!',
    avatar: 'PS',
  },
  {
    name: 'Rahul Verma',
    role: 'Mechanical Engineering',
    university: 'NIT Trichy',
    quote: 'I was skeptical at first, but the job-match feature showed me exactly what recruiters wanted. Got my dream internship!',
    avatar: 'RV',
  },
  {
    name: 'Ananya Patel',
    role: 'Business Analytics',
    university: 'BITS Pilani',
    quote: 'The LinkedIn referral suggestions were a game-changer. I connected with 5 people and got 2 referrals within days.',
    avatar: 'AP',
  },
  {
    name: 'Vikram Singh',
    role: 'Data Science',
    university: 'IIT Bombay',
    quote: 'My CV went from amateur to professional in minutes. The bullet point rewrites are pure gold!',
    avatar: 'VS',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Marketing',
    university: 'DU',
    quote: 'Finally, a tool that understands what students need. The step-by-step improvement plan was so clear and actionable.',
    avatar: 'SK',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-4">
          Student Success Stories
        </h2>
        <p className="text-lg text-dark/70 text-center mb-16 max-w-2xl mx-auto">
          Join thousands of students who transformed their job search with RefineCV
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-background rounded-3xl p-12 shadow-xl relative">
            <Quote className="absolute top-8 left-8 text-primary/20" size={48} />

            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                {currentTestimonial.avatar}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-dark text-center mb-8 italic leading-relaxed font-light">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="text-center">
              <p className="text-lg font-bold text-dark">{currentTestimonial.name}</p>
              <p className="text-dark/70">{currentTestimonial.role}</p>
              <p className="text-primary font-semibold">{currentTestimonial.university}</p>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === index
                      ? 'bg-primary w-8'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
