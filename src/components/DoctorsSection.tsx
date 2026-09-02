import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Stethoscope,
} from 'lucide-react';
import { DOCTORS } from '../data/clinicData';

interface DoctorsSectionProps {
  onBookWithDoctor: (doctorId: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onBookWithDoctor,
}) => {
  return (
    <section id="doctors-section" className="py-16 sm:py-20 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#115E59]">
            Clinical Leadership
          </span>
          <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Our Dermatologists
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Specialized diagnostic consultations and clinical procedures led by Dr. P.S. Aneja and Dr. Simran Pal Aneja in Jalandhar.
          </p>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="rounded-2xl border border-stone-200 bg-[#FAF8F5] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs"
            >
              {/* Doctor Header & Bio */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-stone-100 shrink-0 border border-stone-300">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-[#115E59]">
                      {doctor.experience}
                    </span>

                    <h3 className="font-serif-custom text-2xl sm:text-3xl font-bold text-stone-900">
                      {doctor.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 font-medium">
                      {doctor.title}
                    </p>
                  </div>
                </div>

                {/* Factual Bio */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {doctor.bio}
                </p>

                {/* Key Clinical Focus */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">
                    Key Specialties &amp; Clinical Focus
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-stone-700 bg-white border border-stone-200 px-3 py-1 rounded-full font-normal"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Weekly Clinic Consultation Schedule */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#115E59]" />
                    Consultation Hours by Location
                  </h4>
                  <div className="space-y-2 text-xs">
                    {doctor.schedule.map((slot, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between pb-1.5 border-b border-stone-100 last:border-0 last:pb-0 gap-1 text-stone-700"
                      >
                        <div className="flex items-center space-x-1.5 font-medium text-stone-900">
                          <MapPin className="w-3.5 h-3.5 text-[#115E59] shrink-0" />
                          <span>{slot.location}</span>
                        </div>
                        <div className="text-stone-500 sm:text-right">
                          <span className="font-semibold text-stone-800">{slot.days}</span>:{' '}
                          <span>{slot.timings}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Doctor CTA */}
              <div className="pt-2">
                <button
                  onClick={() => onBookWithDoctor(doctor.id)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <Calendar className="w-4 h-4 text-teal-200" />
                  <span>Request Consultation with {doctor.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
