import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  Filter,
  CheckCircle2,
} from 'lucide-react';
import { Category, BeforeAfterCase } from '../types';
import { BEFORE_AFTER_CASES } from '../data/clinicData';

interface ResultsGalleryProps {
  onBookTreatment: (treatmentName: string) => void;
}

export const ResultsGallery: React.FC<ResultsGalleryProps> = ({
  onBookTreatment,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<Category>('All');
  const [activeSliderVal, setActiveSliderVal] = useState<Record<string, number>>({});

  const filterCategories: Category[] = ['All', 'Skin', 'Hair', 'Laser', 'Vitiligo'];

  const filteredCases = BEFORE_AFTER_CASES.filter((c) => {
    return selectedFilter === 'All' || c.category === selectedFilter;
  });

  const handleSliderChange = (caseId: string, val: number) => {
    setActiveSliderVal((prev) => ({ ...prev, [caseId]: val }));
  };

  return (
    <section id="results-section" className="py-16 sm:py-20 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] text-[#115E59] text-xs font-semibold uppercase tracking-wider">
            <span>Clinical Documentation</span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Case Studies &amp; Procedural Progress
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Real procedural milestones documenting progressive clinical responses across dermatology, trichology, and laser protocols at Aneja Skin &amp; Hair Centre.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                selectedFilter === cat
                  ? 'bg-[#115E59] text-white font-semibold shadow-xs'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat === 'All' ? 'All Clinical Cases' : `${cat} Cases`}
            </button>
          ))}
        </div>

        {/* Before / After Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((item) => {
            const sliderPos = activeSliderVal[item.id] ?? 50;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xs hover:border-teal-800/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Interactive Split Image Comparison */}
                <div className="relative h-72 sm:h-80 bg-gray-900 overflow-hidden select-none group">
                  {/* After Image (Full width underneath) */}
                  <img
                    src={item.afterImage}
                    alt={`${item.treatmentName} post-treatment progress`}
                    className="w-full h-full object-cover"
                  />

                  {/* Before Image (Clipped on top by slider percentage) */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                  >
                    <img
                      src={item.beforeImage}
                      alt={`${item.treatmentName} baseline condition`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Vertical Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-gray-900 shadow-md flex items-center justify-center text-[10px] font-bold">
                      ↔
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 bg-black/70 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    Baseline
                  </div>
                  <div className="absolute top-3 right-3 bg-[#115E59]/90 text-teal-100 text-[10px] font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    Progress
                  </div>

                  {/* Range slider overlay */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) =>
                      handleSliderChange(item.id, Number(e.target.value))
                    }
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                    aria-label="Comparison slider"
                  />

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white/90 text-[10px] px-3 py-0.5 rounded-full pointer-events-none">
                    Slide to compare
                  </div>
                </div>

                {/* Case Info */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="font-semibold text-[#115E59] uppercase tracking-wide">
                        {item.category}
                      </span>
                      <span className="text-gray-500">
                        {item.duration} • {item.sessions}
                      </span>
                    </div>

                    <h3 className="font-serif-custom text-xl font-bold text-gray-900">
                      {item.treatmentName}
                    </h3>
                    <p className="text-xs font-semibold text-gray-700">
                      {item.headline}
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.clinicalDetails}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                    <span className="text-[11px] text-gray-500 italic">
                      Individual results vary by skin type
                    </span>

                    <button
                      onClick={() => onBookTreatment(item.treatmentName)}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs font-medium shadow-2xs transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5 text-teal-200" />
                      <span>Consult on this</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Disclaimer Notice */}
        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs flex items-start space-x-3 text-xs text-gray-500 max-w-4xl mx-auto">
          <ShieldAlert className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-gray-800">Educational Documentation Notice:</strong> Before-and-after photographs illustrate actual clinical progress under controlled medical protocols. Healing rates and clinical outcomes are influenced by medical history, adherence to pre- and post-procedure instructions, and physiological skin reactivity. We do not make generic therapeutic guarantees.
          </p>
        </div>
      </div>
    </section>
  );
};
