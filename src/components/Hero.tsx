import React from 'react';
import {
  Calendar,
  ChevronRight,
  MapPin,
  Clock,
  Stethoscope,
} from 'lucide-react';

interface HeroProps {
  onBookAppointment: () => void;
  onExploreTreatments: () => void;
  onViewDoctors: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookAppointment,
  onExploreTreatments,
  onViewDoctors,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-14 pb-16 lg:pt-20 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="space-y-1">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#115E59]">
                ANEJA • SKIN &amp; HAIR CENTRE
              </span>
              <p className="text-xs text-stone-500 font-medium">
                New Jawahar Nagar &amp; Nakodar Road, Jalandhar
              </p>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-serif-custom text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]">
                Expert Skin, Hair &amp;{' '}
                <span className="italic font-serif text-[#115E59]">
                  Aesthetic Care
                </span>{' '}
                in Jalandhar
              </h1>

              {/* Supporting text */}
              <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-xl">
                Personalized clinical dermatology, trichology, and medical aesthetic care backed by decades of clinical experience.
              </p>
            </div>

            {/* Doctors & Focus points */}
            <div className="pt-1 space-y-2 border-l-2 border-[#115E59]/40 pl-4">
              <p className="text-sm font-semibold text-stone-800">
                Led by Dr. P.S. Aneja &amp; Dr. Simran Pal Aneja
              </p>
              <p className="text-xs text-stone-500 font-normal">
                Specialized in clinical dermatology, acne &amp; scar treatments, FUE hair restoration, PRP, laser hair removal, and vitiligo phototherapy.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 text-sm font-semibold shadow-2xs transition-colors"
              >
                <span>Explore Treatments</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            {/* Locations Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-500 font-normal">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#115E59]" />
                <span>Two Jalandhar Centres</span>
              </div>
              <div className="text-stone-300">•</div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#115E59]" />
                <span>Mon – Sat: 10:00 AM – 7:30 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: ONE Strong Professional Visual Area */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
                <div className="relative h-[420px] sm:h-[480px]">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
                    alt="Aneja Skin & Hair Centre Jalandhar Clinical Facility"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/20 to-transparent" />

                  {/* Information Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white space-y-2">
                    <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-[#115E59]/90 text-teal-100 text-xs font-semibold">
                      <Stethoscope className="w-3.5 h-3.5 text-teal-200" />
                      <span>Clinical Dermatology &amp; Trichology</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white font-serif-custom">
                      Aneja Skin &amp; Hair Centre
                    </h3>

                    <p className="text-xs text-stone-200 leading-relaxed font-normal">
                      Comprehensive diagnostic evaluations and sterile procedural rooms for lasers, dermatosurgery, and hair treatments in Jalandhar.
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-white/20">
                      <button
                        onClick={onViewDoctors}
                        className="text-xs text-teal-300 hover:text-white font-semibold flex items-center space-x-1 transition-colors"
                      >
                        <span>Meet Our Doctors</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-[11px] text-stone-300 font-normal">
                        Jalandhar, Punjab
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
