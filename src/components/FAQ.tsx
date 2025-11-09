import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is RefineCV free to use?',
    answer: 'We offer a free tier with basic features. Premium features are available through our subscription plans.',
  },
  {
    question: 'What is the refund policy for RefineCV?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with our service, contact us for a full refund.',
  },
  {
    question: 'How can I contact RefineCV if I have any questions?',
    answer: 'You can reach us via email at support@refinecv.com or through our contact form. We typically respond within 24 hours.',
  },
  {
    question: 'What are RefineCV\'s AI tools?',
    answer: 'Our AI tools include CV bullet point rating, JD-to-CV comparison, ATS compatibility checker, job recommendations, LinkedIn connection finder, and interview prep topic generator.',
  },
  {
    question: 'Do you support languages outside of English?',
    answer: 'Currently, RefineCV is optimized for English resumes. We\'re working on adding support for other languages in the future.',
  },
  {
    question: 'How do you calculate ATS score and other metrics?',
    answer: 'Our AI analyzes multiple factors including keyword density, formatting, structure, quantifiable achievements, and industry standards to calculate your ATS score.',
  },
  {
    question: 'Is RefineCV ATS-friendly?',
    answer: 'Absolutely! Our entire platform is designed to ensure your CV passes through Applicant Tracking Systems with flying colors.',
  },
  {
    question: 'How to use the Enhanced Resume Builder?',
    answer: 'Simply upload your existing resume or start from scratch. Our builder guides you through each section with real-time suggestions and ATS optimization.',
  },
  {
    question: 'Why do I have to tailor my resume for every job application?',
    answer: 'Each job has unique requirements. Tailoring your resume shows recruiters you\'re genuinely interested and helps you rank higher in ATS systems.',
  },
  {
    question: 'Should my resume be in PDF or Word format?',
    answer: 'PDF is generally preferred as it maintains formatting across devices. However, some ATS systems work better with Word documents. We support both formats.',
  },
  {
    question: 'Should I send a cover letter with my resume?',
    answer: 'Yes, when the job posting requests one. A tailored cover letter can significantly boost your chances of getting an interview.',
  },
  {
    question: 'Is my account information GDPR-compliant and secure?',
    answer: 'Yes, we are fully GDPR-compliant. Your data is encrypted, stored securely, and never shared with third parties without your consent.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-white">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-dark/70 text-center mb-16 max-w-2xl mx-auto">
          Everything you need to know about RefineCV
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="text-lg font-semibold text-dark pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-dark/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
