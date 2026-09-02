/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  NavTab,
  Category,
  AppointmentRequest,
  AppointmentStatus,
} from './types';
import {
  INITIAL_MOCK_APPOINTMENTS,
  DOCTORS,
  LOCATIONS,
  TREATMENTS,
} from './data/clinicData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { TreatmentsDirectory } from './components/TreatmentsDirectory';
import { DoctorsSection } from './components/DoctorsSection';
import { DrSimranBrand } from './components/DrSimranBrand';
import { ResultsGallery } from './components/ResultsGallery';
import { AboutSection } from './components/AboutSection';
import { LocationsSection } from './components/LocationsSection';
import { ContactSection } from './components/ContactSection';
import { BookingSystem } from './components/BookingSystem';
import { AdminDemo } from './components/AdminDemo';
import { AiAssistant } from './components/AiAssistant';
import { MobileStickyBar } from './components/MobileStickyBar';
import {
  Calendar,
  ChevronRight,
  Sparkles,
  Phone,
  ShieldCheck,
  Stethoscope,
  Building,
  CheckCircle2,
  Clock,
  ArrowRight,
  Info,
  X,
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [prefilledDoctorId, setPrefilledDoctorId] = useState<string | null>(null);
  const [prefilledTreatmentName, setPrefilledTreatmentName] = useState<string | null>(null);
  const [prefilledLocationId, setPrefilledLocationId] = useState<string | null>(null);

  // Appointments state loaded initially from authentic mock data, updated locally
  const [appointments, setAppointments] = useState<AppointmentRequest[]>(() => {
    const saved = localStorage.getItem('aneja_appointments_demo');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_MOCK_APPOINTMENTS;
      }
    }
    return INITIAL_MOCK_APPOINTMENTS;
  });

  // Demo Notification Banner state
  const [showDemoBanner, setShowDemoBanner] = useState(true);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('aneja_appointments_demo', JSON.stringify(appointments));
  }, [appointments]);

  // Handlers for Navigation & Booking triggers
  const handleNavSelect = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    setPrefilledDoctorId(null);
    setPrefilledTreatmentName(null);
    setPrefilledLocationId(null);
    setCurrentTab('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookSpecificTreatment = (treatmentName: string) => {
    setPrefilledTreatmentName(treatmentName);
    setPrefilledDoctorId(null);
    setPrefilledLocationId(null);
    setCurrentTab('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookWithDoctor = (doctorId: string) => {
    setPrefilledDoctorId(doctorId);
    setPrefilledTreatmentName(null);
    setPrefilledLocationId(null);
    setCurrentTab('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookAtLocation = (locationId: string) => {
    setPrefilledLocationId(locationId);
    setPrefilledDoctorId(null);
    setPrefilledTreatmentName(null);
    setCurrentTab('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreTreatments = (category: Category = 'All') => {
    setSelectedCategory(category);
    setCurrentTab('treatments');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Admin Appointment Actions
  const handleAddAppointment = (newAppt: AppointmentRequest) => {
    setAppointments((prev) => [newAppt, ...prev]);
  };

  const handleUpdateStatus = (id: string, newStatus: AppointmentStatus) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
  };

  const handleReschedule = (id: string, newDate: string, newTime: string) => {
    setAppointments((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, date: newDate, timeSlot: newTime, status: 'Confirmed' } : a
      )
    );
  };

  const handleResetAppointments = () => {
    setAppointments(INITIAL_MOCK_APPOINTMENTS);
  };

  const pendingAppointmentsCount = appointments.filter(
    (a) => a.status === 'Pending'
  ).length;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-800 font-sans selection:bg-teal-900 selection:text-teal-50">
      {/* Top Demo Banner */}
      {showDemoBanner && (
        <div className="bg-stone-900 text-stone-200 text-xs px-4 py-2 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center space-x-2 max-w-4xl">
            <Info className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>
              <strong>Website Concept &amp; Online Booking Prototype</strong> for{' '}
              <span className="text-teal-200 font-semibold">Aneja Skin &amp; Hair Centre, Jalandhar</span>. Demonstrates online patient bookings, treatment directory, and staff management workflows.
            </span>
          </div>
          <div className="flex items-center space-x-3 shrink-0 ml-2">
            <button
              onClick={() => handleNavSelect('admin-demo')}
              className="text-[11px] underline text-teal-300 hover:text-white font-medium"
            >
              Open Staff Admin View
            </button>
            <button
              onClick={() => setShowDemoBanner(false)}
              className="text-stone-400 hover:text-white"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleNavSelect}
        onOpenBooking={handleOpenBooking}
        pendingCount={pendingAppointmentsCount}
      />

      {/* Main Content Body */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* VIEW 1: HOME */}
        {currentTab === 'home' && (
          <div className="space-y-0 animate-in fade-in duration-150">
            {/* 1. Hero */}
            <Hero
              onBookAppointment={handleOpenBooking}
              onExploreTreatments={() => handleExploreTreatments('All')}
              onViewDoctors={() => handleNavSelect('doctors')}
            />

            {/* 2. Verifiable Trust Indicators */}
            <TrustIndicators />

            {/* 3. Featured Treatments Preview */}
            <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-2 max-w-2xl">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-900/10 text-teal-900 text-xs font-semibold uppercase tracking-wider">
                      <span>Clinical Treatments</span>
                    </div>
                    <h2 className="font-serif-custom text-3xl sm:text-4xl font-bold text-stone-900">
                      Specialized Dermatology &amp; Trichology
                    </h2>
                    <p className="text-stone-600 text-sm sm:text-base">
                      Comprehensive clinical care for chronic dermatoses, aesthetic skin rejuvenation, vitiligo, and hair loss.
                    </p>
                  </div>

                  <button
                    onClick={() => handleExploreTreatments('All')}
                    className="inline-flex items-center space-x-1.5 text-sm font-bold text-teal-900 hover:text-teal-950 self-start md:self-auto"
                  >
                    <span>View All 10 Treatments</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Grid of 6 Featured Treatments */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {TREATMENTS.slice(0, 6).map((treatment) => (
                    <div
                      key={treatment.id}
                      className="group bg-[#FAF9F6] rounded-2xl border border-stone-200 p-5 flex flex-col justify-between hover:border-teal-900/50 hover:shadow-sm transition-all"
                    >
                      <div className="space-y-3">
                        <div className="relative h-44 rounded-xl overflow-hidden bg-stone-200">
                          <img
                            src={treatment.image}
                            alt={treatment.name}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          />
                          <div className="absolute top-2.5 left-2.5 bg-white/95 text-stone-900 text-[11px] font-bold px-2.5 py-0.5 rounded shadow-2xs">
                            {treatment.category}
                          </div>
                        </div>

                        <h3 className="font-serif-custom text-xl font-bold text-stone-900 group-hover:text-teal-900 transition-colors">
                          {treatment.name}
                        </h3>

                        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                          {treatment.shortDescription}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-stone-200/80 mt-4 flex items-center justify-between">
                        <button
                          onClick={() => {
                            setSelectedCategory(treatment.category);
                            setCurrentTab('treatments');
                          }}
                          className="text-xs font-semibold text-stone-700 hover:text-teal-900 flex items-center gap-1"
                        >
                          <span>Learn More</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleBookSpecificTreatment(treatment.name)}
                          className="px-3 py-1.5 rounded-lg bg-[#0F2927] hover:bg-[#153C39] text-white text-xs font-medium transition-colors"
                        >
                          Book Slot
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Doctor Spotlight Preview */}
            <DoctorsSection onBookWithDoctor={handleBookWithDoctor} />

            {/* 5. Dr. Simran Pal Aneja Brand & Skin Education Section */}
            <DrSimranBrand onBookWithDoctor={handleBookWithDoctor} />

            {/* 6. Jalandhar Locations Quick Preview */}
            <LocationsSection onBookLocation={handleBookAtLocation} />

            {/* 7. Bottom Appointment CTA Section */}
            <section className="py-16 bg-[#0F2927] text-white">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                  Patient Consultation Booking
                </span>
                <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Consult With Our Specialists in Jalandhar
                </h2>
                <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                  Whether you are seeking treatment for persistent skin conditions, hair restoration, or laser procedures, schedule your consultation slot online.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleOpenBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-semibold text-base shadow-sm transition-all"
                  >
                    <Calendar className="w-5 h-5 text-teal-300" />
                    <span>Book In-Clinic Appointment</span>
                  </button>

                  <a
                    href="tel:+911812224589"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-base transition-colors"
                  >
                    <Phone className="w-4 h-4 text-teal-300" />
                    <span>Call +91 181 222 4589</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW 2: TREATMENTS DIRECTORY */}
        {currentTab === 'treatments' && (
          <TreatmentsDirectory
            onBookTreatment={handleBookSpecificTreatment}
            initialCategory={selectedCategory}
          />
        )}

        {/* VIEW 3: DOCTORS */}
        {currentTab === 'doctors' && (
          <div className="space-y-0">
            <DoctorsSection onBookWithDoctor={handleBookWithDoctor} />
            <DrSimranBrand onBookWithDoctor={handleBookWithDoctor} />
          </div>
        )}

        {/* VIEW 4: RESULTS / GALLERY */}
        {currentTab === 'results' && (
          <ResultsGallery onBookTreatment={handleBookSpecificTreatment} />
        )}

        {/* VIEW 5: ABOUT */}
        {currentTab === 'about' && (
          <AboutSection
            onBookAppointment={handleOpenBooking}
            onExploreTreatments={() => handleExploreTreatments('All')}
          />
        )}

        {/* VIEW 6: LOCATIONS */}
        {currentTab === 'locations' && (
          <LocationsSection onBookLocation={handleBookAtLocation} />
        )}

        {/* VIEW 7: CONTACT */}
        {currentTab === 'contact' && (
          <ContactSection onBookAppointment={handleOpenBooking} />
        )}

        {/* VIEW 8: BOOK APPOINTMENT (MOST IMPORTANT PART) */}
        {currentTab === 'book' && (
          <BookingSystem
            onBookingComplete={handleAddAppointment}
            prefilledDoctorId={prefilledDoctorId}
            prefilledTreatmentName={prefilledTreatmentName}
            prefilledLocationId={prefilledLocationId}
            onGoToAdminDemo={() => handleNavSelect('admin-demo')}
          />
        )}

        {/* VIEW 9: ADMIN DEMO */}
        {currentTab === 'admin-demo' && (
          <AdminDemo
            appointments={appointments}
            onUpdateStatus={handleUpdateStatus}
            onReschedule={handleReschedule}
            onResetData={handleResetAppointments}
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Footer with sales demo notice and disclaimer */}
      <Footer
        onSelectTab={handleNavSelect}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating Aneja Care Assistant */}
      <AiAssistant
        onOpenBooking={handleOpenBooking}
        onExploreTreatments={handleExploreTreatments}
        onViewLocations={() => handleNavSelect('locations')}
        onViewDoctors={() => handleNavSelect('doctors')}
      />

      {/* Mobile Sticky Bar for conversion */}
      <MobileStickyBar
        currentTab={currentTab}
        onOpenBooking={handleOpenBooking}
        onOpenLocations={() => handleNavSelect('locations')}
      />
    </div>
  );
}
