import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  ShieldAlert,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { NavTab } from '../types';
import { LOCATIONS, DOCTORS } from '../data/clinicData';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking }) => {
  const handleNav = (tab: NavTab) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A201E] text-stone-300 pt-16 pb-12 border-t border-[#133A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#133A36]">
          {/* Col 1 & 2: Clinic Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#115E59] text-white flex items-center justify-center border border-teal-400/30">
                <span className="font-serif-custom text-2xl font-bold text-white">
                  A
                </span>
              </div>
              <div>
                <span className="font-serif-custom text-xl font-bold text-white block">
                  Aneja Skin & Hair Centre
                </span>
                <span className="text-xs text-teal-300 font-medium tracking-wide">
                  Jalandhar, Punjab
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-md font-normal">
              Specialized clinical dermatology, trichology, hair restoration, and medical aesthetic care in Jalandhar. Guided by experienced dermatologists committed to ethical, evidence-based patient treatments.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-400 font-normal">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>Dr. P.S. Aneja (Senior Dermatologist)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>Dr. Simran Pal Aneja (Dermatologist &amp; Hair Specialist)</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#115E59] text-white text-xs font-semibold hover:bg-[#0D4A46] transition-colors shadow-xs"
              >
                <span>Request Online Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider text-teal-300 uppercase">
              Clinical Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('treatments')}
                  className="hover:text-white transition-colors text-left"
                >
                  Treatments Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('doctors')}
                  className="hover:text-white transition-colors text-left"
                >
                  Our Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About the Centre
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('locations')}
                  className="hover:text-white transition-colors text-left"
                >
                  Jalandhar Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact &amp; Timings
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider text-teal-300 uppercase">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-normal">
              <li>Acne &amp; Acne Scar Revision</li>
              <li>FUE Hair Transplant &amp; Bio-PRP</li>
              <li>Medical Laser Hair Removal</li>
              <li>Vitiligo Targeted Phototherapy</li>
              <li>Chemical Peels &amp; Melasma Care</li>
              <li>Dermapen Micro-Needling</li>
              <li>Tattoo &amp; Birthmark Laser Removal</li>
              <li>Face &amp; Body Contouring</li>
            </ul>
          </div>

          {/* Col 5: Locations & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider text-teal-300 uppercase">
              Jalandhar Clinics
            </h4>
            <div className="space-y-3 text-xs font-normal">
              <div>
                <p className="font-semibold text-white">Main Centre:</p>
                <p className="text-stone-300">New Jawahar Nagar, Near Model Town, Jalandhar</p>
                <p className="text-teal-300 mt-0.5 font-medium">Ph: +91 181 222 4589</p>
              </div>

              <div>
                <p className="font-semibold text-white">Consultation Wing:</p>
                <p className="text-stone-300">Nakodar Road, Jalandhar</p>
                <p className="text-teal-300 mt-0.5 font-medium">Ph: +91 181 245 7890</p>
              </div>

              <div className="pt-2 flex items-center space-x-3 text-stone-300">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-[#133A36] hover:text-white hover:bg-[#115E59] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="mailto:contact@anejaskincentre.com"
                  className="p-2 rounded-full bg-[#133A36] hover:text-white hover:bg-[#115E59] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Sales Demo Attribution */}
        <div className="pt-8 space-y-4">
          <div className="flex items-start space-x-3 text-xs text-stone-300 bg-[#133A36]/60 p-4 rounded-2xl border border-[#1a4b46]">
            <ShieldAlert className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <div className="space-y-1 font-normal">
              <p className="font-semibold text-white">Medical Notice &amp; Consultation Advisory</p>
              <p>
                The information provided on this website is for general informational and appointment coordination purposes only. It is not intended to provide a medical diagnosis or replace a personalized face-to-face clinical evaluation by a certified dermatologist. Individual results vary based on anatomical skin type, condition severity, and compliance with prescribed protocols.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4 pt-4 font-normal">
            <p>
              &copy; {new Date().getFullYear()} Aneja Skin &amp; Hair Centre, Jalandhar. All rights reserved.
            </p>

            {/* Required Unobtrusive Sales-Demo Label */}
            <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#133A36]/80 border border-[#1a4b46] text-stone-300 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="font-medium">Website concept / preview</span>
              <span className="text-stone-400">| Sales Prototype</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
