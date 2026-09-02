import React from 'react';
import { Calendar, Phone, MapPin, Sparkles } from 'lucide-react';
import { NavTab } from '../types';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
  onOpenLocations: () => void;
  currentTab: NavTab;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenBooking,
  onOpenLocations,
  currentTab,
}) => {
  // Hide sticky bar when already in booking view to avoid duplicate CTAs
  if (currentTab === 'book') return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 shadow-lg">
      <div className="flex items-center space-x-2.5 max-w-md mx-auto">
        <a
          href="tel:+911812224589"
          className="flex-1 flex items-center justify-center space-x-1.5 py-3 px-3 rounded-xl bg-stone-100 border border-stone-300 text-stone-800 text-xs font-semibold hover:bg-stone-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-teal-800" />
          <span>Call Clinic</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-[2] flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-[#0F2927] active:bg-[#0A1D1C] text-white text-xs font-semibold shadow-md transition-transform active:scale-98"
        >
          <Calendar className="w-4 h-4 text-teal-300" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
};
