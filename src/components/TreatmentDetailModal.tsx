import React from 'react';
import {
  X,
  Calendar,
  Clock,
  CheckCircle,
  HelpCircle,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  Stethoscope,
} from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative h-48 sm:h-60 bg-gray-900 overflow-hidden shrink-0">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Title Overlay */}
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-[#115E59]/90 text-teal-100 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
              <span>{treatment.category} Category</span>
              <span>•</span>
              <span>Aneja Skin &amp; Hair Centre</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-custom text-white">
              {treatment.name}
            </h2>
            <div className="flex items-center space-x-4 text-xs text-gray-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-300" />
                Session Duration: {treatment.estimatedDuration}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-700 text-sm leading-relaxed">
          {/* Section: What it is */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-[#115E59]" />
              What Is This Treatment?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Key Clinical Highlights */}
          {treatment.keyHighlights && treatment.keyHighlights.length > 0 && (
            <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100 space-y-2">
              <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider">
                Clinical Highlights &amp; Methodology
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {treatment.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-[#115E59] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Who may consider discussing it */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#115E59]" />
              Who May Consider Discussing This With a Dermatologist?
            </h3>
            <ul className="space-y-2 pl-1">
              {treatment.whoIsItFor.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#115E59] shrink-0 mt-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: What to Expect */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-900">
              What to Expect During Your Care
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 space-y-1.5">
                <p className="font-semibold text-gray-900 text-xs flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-[#115E59] flex items-center justify-center font-bold text-[10px]">
                    1
                  </span>
                  Clinical Evaluation
                </p>
                <p className="text-xs text-gray-500">
                  {treatment.whatToExpect.consultation}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 space-y-1.5">
                <p className="font-semibold text-gray-900 text-xs flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-[#115E59] flex items-center justify-center font-bold text-[10px]">
                    2
                  </span>
                  The In-Clinic Procedure
                </p>
                <p className="text-xs text-gray-500">
                  {treatment.whatToExpect.procedure}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 space-y-1.5">
                <p className="font-semibold text-gray-900 text-xs flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-teal-100 text-[#115E59] flex items-center justify-center font-bold text-[10px]">
                    3
                  </span>
                  Post-Care &amp; Recovery
                </p>
                <p className="text-xs text-gray-500">
                  {treatment.whatToExpect.recovery}
                </p>
              </div>
            </div>
          </div>

          {/* Medical Notice (Mandate: Avoid medical guarantees) */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start space-x-3 text-xs text-amber-900">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold">Clinical Note:</strong> Medical outcomes differ according to individual physiological characteristics, skin phototype, and diagnostic evaluation. Specific therapeutic protocols are determined solely following an in-person consultation with Dr. P.S. Aneja or Dr. Simran Pal Aneja.
            </p>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-medium transition-colors"
          >
            Close
          </button>

          <div className="w-full sm:w-auto flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBookTreatment(treatment.name);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full bg-[#115E59] text-white hover:bg-[#0D4A46] text-xs font-semibold transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-200" />
              <span>Book Consultation for {treatment.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
