import React from 'react';
import {
  Building2,
  ShieldCheck,
  Stethoscope,
  Microscope,
  HeartHandshake,
  Users,
  CheckCircle,
  Calendar,
} from 'lucide-react';

interface AboutSectionProps {
  onBookAppointment: () => void;
  onExploreTreatments: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onBookAppointment,
  onExploreTreatments,
}) => {
  return (
    <section id="about-section" className="py-16 sm:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] text-[#115E59] text-xs font-semibold uppercase tracking-wider">
              <span>About Aneja Skin &amp; Hair Centre</span>
            </div>

            <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              A Legacy of Dermatological Care in Jalandhar
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              <p>
                Founded with a clinical commitment to ethical patient care, Aneja Skin &amp; Hair Centre has served families and individuals across Jalandhar and Punjab for decades. Under the leadership of senior dermatologist Dr. P.S. Aneja and Dr. Simran Pal Aneja, our centres combine traditional diagnostic rigor with modern procedural dermatology.
              </p>
              <p>
                From persistent clinical dermatoses and vitiligo management to surgical hair restoration (FUE) and medical-grade laser treatments, our clinical philosophy centers on individualized diagnostic evaluation rather than one-size-fits-all treatments.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Schedule a Consultation</span>
              </button>

              <button
                onClick={onExploreTreatments}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200/80 text-gray-800 text-xs font-medium transition-colors"
              >
                <span>View All Treatments</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                alt="Aneja Skin & Hair Centre Consultation Room"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif-custom text-xl font-bold">
                  Clinical Standards &amp; Sterile Safety
                </p>
                <p className="text-xs text-gray-200 mt-1">
                  Equipped with dedicated procedural rooms for Dermatosurgery, Hair Transplants, and Lasers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Care */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="p-6 rounded-3xl bg-[#FBFBFA] border border-gray-100 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] text-[#115E59] flex items-center justify-center border border-[#DCFCE7]">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-base font-serif-custom">
              Diagnostic Precision
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every treatment plan begins with a detailed clinical assessment of root causes, medical history, and skin pathology.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FBFBFA] border border-gray-100 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] text-[#115E59] flex items-center justify-center border border-[#DCFCE7]">
              <Microscope className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-base font-serif-custom">
              Modern Technology
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Equipped with calibrated US-FDA approved laser platforms, Narrowband UVB phototherapy, and automated microneedling.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FBFBFA] border border-gray-100 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] text-[#115E59] flex items-center justify-center border border-[#DCFCE7]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-base font-serif-custom">
              Safety &amp; Sterilization
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Rigorous hospital-grade sterilization protocols across all surgical and procedural suites in Jalandhar.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FBFBFA] border border-gray-100 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] text-[#115E59] flex items-center justify-center border border-[#DCFCE7]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-base font-serif-custom">
              Transparent Guidance
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Realistic outcome expectations, clear session timelines, and transparent clinical counseling without false promises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
