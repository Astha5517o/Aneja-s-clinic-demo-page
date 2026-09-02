import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowRight,
  Clock,
  Calendar,
  X,
} from 'lucide-react';
import { Category, Treatment } from '../types';
import { TREATMENTS } from '../data/clinicData';
import { TreatmentDetailModal } from './TreatmentDetailModal';

interface TreatmentsDirectoryProps {
  onBookTreatment: (treatmentName: string) => void;
  initialCategory?: Category;
}

export const TreatmentsDirectory: React.FC<TreatmentsDirectoryProps> = ({
  onBookTreatment,
  initialCategory = 'All',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const categories: Category[] = ['All', 'Skin', 'Hair', 'Laser', 'Aesthetic', 'Vitiligo'];

  const filteredTreatments = useMemo(() => {
    return TREATMENTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="treatments-section" className="py-16 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#115E59]">
            Clinical Directory
          </span>
          <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
            Dermatology &amp; Aesthetic Treatments
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Specialized skin, hair, laser, and vitiligo care protocols tailored by experienced clinicians at Aneja Skin &amp; Hair Centre, Jalandhar.
          </p>
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl bg-white border border-stone-200 shadow-xs">
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#115E59] text-white font-semibold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-900'
                }`}
              >
                {cat === 'All' ? 'All Treatments' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments (e.g. acne, PRP, laser)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-full focus:outline-none focus:ring-1 focus:ring-[#115E59] text-stone-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Treatment Grid */}
        {filteredTreatments.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-stone-200 space-y-3">
            <p className="text-base text-stone-600 font-medium">
              No treatments found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-semibold text-[#115E59] underline hover:text-[#0D4A46]"
            >
              Clear filters and show all treatments
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-stone-300 transition-colors flex flex-col justify-between"
              >
                {/* Image & Category Header */}
                <div>
                  <div className="relative h-48 overflow-hidden bg-stone-100">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-0.5 rounded-full bg-white/95 text-stone-900 text-xs font-semibold shadow-xs">
                        {treatment.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-stone-200 text-[11px]">
                        <Clock className="w-3 h-3 text-teal-300" />
                        {treatment.estimatedDuration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="font-serif-custom text-xl font-bold text-stone-900 group-hover:text-[#115E59] transition-colors">
                      {treatment.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed font-normal">
                      {treatment.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalTreatment(treatment)}
                    className="text-xs font-semibold text-stone-600 hover:text-[#115E59] inline-flex items-center space-x-1 py-1.5 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookTreatment(treatment.name)}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-teal-200" />
                    <span>Book Slot</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detailed Modal View */}
      <TreatmentDetailModal
        treatment={activeModalTreatment}
        onClose={() => setActiveModalTreatment(null)}
        onBookTreatment={onBookTreatment}
      />
    </section>
  );
};
