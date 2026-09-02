import React from 'react';
import {
  Instagram,
  ArrowRight,
  BookOpen,
  Calendar,
  Sparkles,
  Stethoscope,
  ExternalLink,
} from 'lucide-react';
import { DOCTORS, EDUCATIONAL_ARTICLES } from '../data/clinicData';

interface DrSimranBrandProps {
  onBookWithDoctor: (doctorId: string) => void;
}

export const DrSimranBrand: React.FC<DrSimranBrandProps> = ({
  onBookWithDoctor,
}) => {
  const drSimran = DOCTORS.find((d) => d.id === 'dr-simran-pal-aneja') || DOCTORS[1];

  return (
    <section id="dr-simran-section" className="py-20 bg-[#FBFBFA] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Meet Dr. Simran Pal Aneja Header & Editorial Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm max-w-md mx-auto lg:max-w-none">
              <img
                src={drSimran.image}
                alt="Dr. Simran Pal Aneja"
                className="w-full h-[400px] sm:h-[460px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="font-serif-custom text-2xl font-bold">Dr. Simran Pal Aneja</p>
                <p className="text-xs text-stone-200 font-normal">
                  Dermatologist, Trichologist &amp; Aesthetic Specialist
                </p>
                <p className="text-[11px] text-teal-200 pt-1">
                  Aneja Skin &amp; Hair Centre, Jalandhar
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#115E59]">
                Clinical Spotlight
              </span>
              <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                Meet Dr. Simran Pal Aneja
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              <p>
                Dr. Simran Pal Aneja brings a modern, evidence-informed perspective to medical dermatology, procedural trichology, and non-surgical aesthetic enhancements. Practicing alongside senior dermatologist Dr. P.S. Aneja, she emphasizes thorough consultation, scientific diagnostic evaluation, and tailored clinical protocols.
              </p>
              <p>
                Her clinical focus spans adolescent and adult acne care, scar revision protocols, hair loss assessments (including autologous PRP therapy and FUE hair transplant planning), medical laser procedures, and preventative skin health.
              </p>
              <p>
                Beyond in-clinic consultations at New Jawahar Nagar and Nakodar Road, Dr. Simran actively shares accessible, myth-busting dermatological guidance on social media to empower patients with reliable skincare knowledge.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onBookWithDoctor(drSimran.id)}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Consult with Dr. Simran</span>
              </button>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold border border-stone-300 transition-colors"
              >
                <Instagram className="w-4 h-4 text-rose-600" />
                <span>Follow Dr. Simran on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Skin & Hair Education Sub-section */}
        <div className="pt-8 border-t border-stone-200 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#115E59]">
                Patient Knowledge
              </span>
              <h3 className="font-serif-custom text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900">
                Skin &amp; Hair Education
              </h3>
              <p className="text-sm text-stone-600 max-w-2xl font-normal">
                Evidence-based insights to help you understand underlying dermatological conditions, treatment principles, and daily skin health.
              </p>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#115E59] hover:text-[#0D4A46] self-start sm:self-auto hover:underline"
            >
              <span>More updates on Instagram</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3 Editorial Visual Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATIONAL_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-stone-300 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span className="font-semibold text-[#115E59] uppercase tracking-wider text-[10px]">
                      {article.category}
                    </span>
                    <span className="text-stone-400 text-[11px]">{article.readTime}</span>
                  </div>

                  <h4 className="font-serif-custom text-lg font-bold text-stone-900 leading-snug">
                    {article.title}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium text-stone-500">
                    {article.topic}
                  </span>
                  <span className="text-[#115E59] font-medium text-[11px] flex items-center gap-1">
                    <span>Clinical Topic</span>
                    <BookOpen className="w-3 h-3 text-[#115E59]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
