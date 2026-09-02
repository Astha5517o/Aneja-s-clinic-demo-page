import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Car,
  Navigation,
  CheckCircle,
  Building,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { LOCATIONS } from '../data/clinicData';

interface LocationsSectionProps {
  onBookLocation: (locationId: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({
  onBookLocation,
}) => {
  const [activeLocationId, setActiveLocationId] = useState<string>(LOCATIONS[0].id);

  const activeLocation =
    LOCATIONS.find((loc) => loc.id === activeLocationId) || LOCATIONS[0];

  return (
    <section id="locations-section" className="py-16 sm:py-20 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] text-[#115E59] text-xs font-semibold uppercase tracking-wider">
            <span>Clinic Branches</span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Locations in Jalandhar
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Conveniently situated clinical facilities in New Jawahar Nagar and Nakodar Road with dedicated consultation suites and treatment rooms.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex space-x-3 border-b border-gray-200">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocationId(loc.id)}
              className={`pb-4 px-3 sm:px-6 text-sm sm:text-base font-semibold transition-all border-b-2 -mb-[2px] flex items-center space-x-2 ${
                activeLocationId === loc.id
                  ? 'border-[#115E59] text-[#115E59]'
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              <Building className="w-4 h-4 text-[#115E59]" />
              <span>{loc.area}</span>
            </button>
          ))}
        </div>

        {/* Active Location Detail Card & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Details Info */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-5">
              <div>
                <span className="text-xs font-semibold text-[#115E59] tracking-wider uppercase">
                  {activeLocation.id === 'new-jawahar-nagar' ? 'Main Clinical Centre' : 'Consultation Wing'}
                </span>
                <h3 className="font-serif-custom text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                  {activeLocation.name}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 text-sm text-gray-700">
                <MapPin className="w-5 h-5 text-[#115E59] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">{activeLocation.address}</p>
                  <p className="text-gray-600">{activeLocation.city}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Landmark: {activeLocation.landmark}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-3 text-sm text-gray-700">
                <Phone className="w-5 h-5 text-[#115E59] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Phone &amp; WhatsApp</p>
                  <a
                    href={`tel:${activeLocation.phone}`}
                    className="text-[#115E59] hover:underline font-medium block"
                  >
                    {activeLocation.phone}
                  </a>
                  <p className="text-xs text-gray-500">WhatsApp: {activeLocation.whatsapp}</p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-3 text-sm text-gray-700">
                <Clock className="w-5 h-5 text-[#115E59] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Operating Hours</p>
                  <p className="text-gray-700">{activeLocation.timings}</p>
                  <p className="text-xs text-gray-500">{activeLocation.sundayTimings}</p>
                </div>
              </div>

              {/* Parking & Facilities */}
              <div className="pt-2 border-t border-gray-100 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#115E59]" />
                  Facility &amp; Amenities
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeLocation.facilities.map((fac, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#115E59] shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onBookLocation(activeLocation.id)}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4 text-teal-200" />
                <span>Book at {activeLocation.area}</span>
              </button>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `Aneja Skin & Hair Centre ${activeLocation.address} ${activeLocation.city}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200/80 text-gray-800 text-xs font-medium transition-colors"
              >
                <Navigation className="w-4 h-4 text-gray-500" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed Area / Visual Presentation */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-xs flex flex-col">
            <div className="relative flex-1 min-h-[300px] bg-gray-100">
              <iframe
                title={`Map of ${activeLocation.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  activeLocation.mapQuery
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
              ></iframe>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#115E59]" />
                <span className="font-medium text-gray-800">
                  {activeLocation.area}, Jalandhar, Punjab
                </span>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${activeLocation.name} ${activeLocation.city}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="text-[#115E59] font-semibold flex items-center space-x-1 hover:underline"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
