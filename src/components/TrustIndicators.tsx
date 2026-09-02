import React from 'react';
import {
  CalendarCheck,
  Building2,
  Users,
  Award,
  Sparkles,
  ShieldCheck,
  Microscope,
  Stethoscope,
} from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      icon: Stethoscope,
      title: 'Decades of Clinical Practice',
      description:
        'Led by senior dermatologist Dr. P.S. Aneja with over 30 years of clinical experience in Jalandhar.',
    },
    {
      icon: Microscope,
      title: 'Advanced Medical Technology',
      description:
        'US-FDA recognized lasers, targeted phototherapy for vitiligo, and sterile procedural suites.',
    },
    {
      icon: Users,
      title: 'Doctor-Led Consultations',
      description:
        'Direct diagnosis and treatment planning by Dr. P.S. Aneja & Dr. Simran Pal Aneja.',
    },
    {
      icon: Building2,
      title: 'Two Jalandhar Locations',
      description:
        'Convenient centres in New Jawahar Nagar and Nakodar Road for accessible patient care.',
    },
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {indicators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start space-x-3.5 p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs hover:border-teal-200 hover:shadow-xs transition-all duration-200"
              >
                <div className="p-2.5 rounded-xl bg-[#F0FDF4] text-[#115E59] border border-[#DCFCE7] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
