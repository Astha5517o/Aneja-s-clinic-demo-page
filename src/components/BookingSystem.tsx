import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  MapPin,
  Stethoscope,
  ChevronRight,
  ChevronLeft,
  Check,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  FileText,
  AlertCircle,
  Building,
  ArrowRight,
  Printer,
  CalendarPlus,
  RefreshCw,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  AppointmentType,
  AppointmentRequest,
  Doctor,
  ClinicLocation,
} from '../types';
import { DOCTORS, LOCATIONS } from '../data/clinicData';

interface BookingSystemProps {
  onBookingComplete: (newAppointment: AppointmentRequest) => void;
  prefilledDoctorId?: string | null;
  prefilledTreatmentName?: string | null;
  prefilledLocationId?: string | null;
  onGoToAdminDemo?: () => void;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({
  onBookingComplete,
  prefilledDoctorId,
  prefilledTreatmentName,
  prefilledLocationId,
  onGoToAdminDemo,
}) => {
  // Step State (1 to 7)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form Fields
  const [appointmentType, setAppointmentType] = useState<AppointmentType>(
    prefilledTreatmentName
      ? prefilledTreatmentName.toLowerCase().includes('hair') ||
        prefilledTreatmentName.toLowerCase().includes('prp')
        ? 'Hair Consultation'
        : prefilledTreatmentName.toLowerCase().includes('laser')
        ? 'Laser Consultation'
        : prefilledTreatmentName.toLowerCase().includes('vitiligo')
        ? 'Vitiligo Evaluation'
        : 'Skin Treatment Consultation'
      : 'Dermatology Consultation'
  );

  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(
    prefilledDoctorId || DOCTORS[0].id
  );

  const [selectedLocationId, setSelectedLocationId] = useState<string>(
    prefilledLocationId || LOCATIONS[0].id
  );

  // Date selection (default to tomorrow's date or today)
  const getInitialDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const [selectedDate, setSelectedDate] = useState<string>(getInitialDate());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('11:00 AM');

  // Patient Info
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    prefilledTreatmentName ? `Interested in discussing: ${prefilledTreatmentName}` : ''
  );
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // Completed Appointment Result
  const [completedBooking, setCompletedBooking] =
    useState<AppointmentRequest | null>(null);

  // Available Time Slots definition
  const timeSlots = {
    Morning: ['10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM'],
    Afternoon: ['03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'],
    Evening: ['05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
  };

  const appointmentTypes: {
    type: AppointmentType;
    label: string;
    description: string;
    icon: string;
  }[] = [
    {
      type: 'Dermatology Consultation',
      label: 'Dermatology Consultation',
      description: 'General skin concerns, rashes, eczema, psoriasis, infections',
      icon: '🩺',
    },
    {
      type: 'Skin Treatment Consultation',
      label: 'Skin Treatment Consultation',
      description: 'Acne, acne scars, chemical peels, pigmentation, Dermapen',
      icon: '✨',
    },
    {
      type: 'Hair Consultation',
      label: 'Hair Consultation',
      description: 'Hair loss, androgenetic alopecia, PRP therapy, FUE hair transplant',
      icon: '🌿',
    },
    {
      type: 'Laser Consultation',
      label: 'Laser Consultation',
      description: 'Laser hair removal, tattoo / birthmark removal, scar resurfacing',
      icon: '⚡',
    },
    {
      type: 'Aesthetic Consultation',
      label: 'Aesthetic Consultation',
      description: 'Anti-aging, facial contouring, skin radiance & rejuvenation',
      icon: '💎',
    },
    {
      type: 'Vitiligo Evaluation',
      label: 'Vitiligo Evaluation',
      description: 'Targeted phototherapy (NB-UVB), medical repigmentation, grafting',
      icon: '🔬',
    },
  ];

  const handleNext = () => {
    if (currentStep === 6) {
      // Validate patient details
      if (!patientName.trim()) {
        alert('Please enter your full name.');
        return;
      }
      if (!phone.trim() || phone.length < 8) {
        alert('Please enter a valid contact phone number.');
        return;
      }

      const doctorObj = DOCTORS.find((d) => d.id === selectedDoctorId);
      const doctorId = doctorObj ? doctorObj.id : 'any';
      const doctorName = doctorObj ? doctorObj.name : 'First Available Specialist';
      const locationObj =
        LOCATIONS.find((l) => l.id === selectedLocationId) || LOCATIONS[0];

      const newBooking: AppointmentRequest = {
        id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
        patientName: patientName.trim(),
        phone: phone.trim(),
        email: email.trim() || 'Not provided',
        appointmentType,
        doctorId: doctorId,
        doctorName: doctorName,
        locationId: locationObj.id,
        locationName: locationObj.area,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        message: message.trim(),
        isFirstVisit,
        status: 'Pending',
        createdAt: new Date().toISOString(),
      };

      setCompletedBooking(newBooking);
      onBookingComplete(newBooking);
      setCurrentStep(7);

      // Trigger subtle celebration confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#115E59', '#14B8A6', '#047857', '#94A3B8'],
        });
      } catch (err) {
        // ignore
      }
    } else {
      setCurrentStep((prev) => Math.min(prev + 1, 7));
    }
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    setCurrentStep(1);
    setCompletedBooking(null);
    setPatientName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  // Step Progress labels
  const steps = [
    { num: 1, name: 'Service' },
    { num: 2, name: 'Doctor' },
    { num: 3, name: 'Clinic' },
    { num: 4, name: 'Date' },
    { num: 5, name: 'Time Slot' },
    { num: 6, name: 'Details' },
    { num: 7, name: 'Confirmed' },
  ];

  return (
    <section id="booking-section" className="py-12 sm:py-16 bg-[#FBFBFA] min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] text-[#115E59] text-xs font-semibold uppercase tracking-wider">
            <span>Online Appointment System</span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-4xl font-bold text-gray-900">
            Request an In-Clinic Consultation
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto font-normal">
            Select your preferred consultation type, dermatologist, location, and convenient time slot in Jalandhar.
          </p>
        </div>

        {/* Step Indicator Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 -z-0"></div>
            {steps.map((step) => {
              const isPassed = currentStep > step.num;
              const isCurrent = currentStep === step.num;

              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center relative z-10 space-y-1"
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isPassed
                        ? 'bg-[#115E59] text-white'
                        : isCurrent
                        ? 'bg-[#115E59] text-white ring-4 ring-[#115E59]/20'
                        : 'bg-gray-50 text-gray-400 border border-gray-200'
                    }`}
                  >
                    {isPassed ? <Check className="w-3.5 h-3.5" /> : step.num}
                  </div>
                  <span
                    className={`hidden md:block text-[11px] font-medium whitespace-nowrap ${
                      isCurrent
                        ? 'text-[#115E59] font-bold'
                        : isPassed
                        ? 'text-gray-700'
                        : 'text-gray-400'
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Step Content Card */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-xs space-y-6">
          {/* STEP 1: Select Appointment Type */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900 font-serif-custom">
                  Step 1: Select Appointment Type
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  Choose the primary nature of your visit to help us allocate adequate consultation time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {appointmentTypes.map((item) => {
                  const isSelected = appointmentType === item.type;
                  return (
                    <button
                      key={item.type}
                      onClick={() => setAppointmentType(item.type)}
                      className={`p-4 rounded-2xl text-left border transition-all flex items-start space-x-3.5 ${
                        isSelected
                          ? 'bg-[#F0FDF4] border-[#115E59] ring-1 ring-[#115E59]'
                          : 'bg-[#FBFBFA] border-gray-100 hover:bg-white hover:border-gray-200'
                      }`}
                    >
                      <span className="text-2xl shrink-0 p-1.5 bg-white rounded-xl border border-gray-100 shadow-2xs">
                        {item.icon}
                      </span>
                      <div className="space-y-1">
                        <p
                          className={`text-sm font-semibold ${
                            isSelected ? 'text-[#115E59]' : 'text-gray-900'
                          }`}
                        >
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-500 leading-snug font-normal">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Select Preferred Doctor */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900 font-serif-custom">
                  Step 2: Select Preferred Dermatologist
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  Choose the specialist you would like to consult with in Jalandhar.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Any Specialist Option */}
                <button
                  type="button"
                  onClick={() => setSelectedDoctorId('any')}
                  className={`p-5 rounded-2xl text-left border transition-colors flex flex-col justify-between space-y-4 ${
                    selectedDoctorId === 'any'
                      ? 'bg-[#F0FDF4] border-[#115E59] ring-1 ring-[#115E59]'
                      : 'bg-[#FAF8F5] border-stone-200 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="w-16 h-16 rounded-2xl bg-teal-800 text-white flex items-center justify-center shrink-0">
                      <Stethoscope className="w-7 h-7 text-teal-200" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-stone-900">
                        Any Available Specialist
                      </p>
                      <p className="text-xs font-medium text-[#115E59]">
                        First Available Consultation
                      </p>
                      <p className="text-[11px] text-stone-500">
                        Earliest slot with Dr. P.S. Aneja or Dr. Simran Pal Aneja
                      </p>
                    </div>
                  </div>
                  <div className="text-[11px] text-stone-600 bg-white p-2.5 rounded-xl border border-stone-200 leading-relaxed font-normal">
                    Recommended if you require earliest scheduling flexibility at our Jalandhar centres.
                  </div>
                </button>

                {DOCTORS.map((doc) => {
                  const isSelected = selectedDoctorId === doc.id;
                  return (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => setSelectedDoctorId(doc.id)}
                      className={`p-5 rounded-2xl text-left border transition-colors flex flex-col justify-between space-y-4 ${
                        isSelected
                          ? 'bg-[#F0FDF4] border-[#115E59] ring-1 ring-[#115E59]'
                          : 'bg-[#FAF8F5] border-stone-200 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start space-x-3.5">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          className="w-16 h-16 rounded-2xl object-cover border border-stone-200 shrink-0"
                        />
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-stone-900">
                            {doc.name}
                          </p>
                          <p className="text-xs font-medium text-[#115E59]">
                            {doc.title}
                          </p>
                          <p className="text-[11px] text-stone-500">
                            {doc.experience}
                          </p>
                        </div>
                      </div>

                      <div className="text-[11px] text-stone-600 bg-white p-2.5 rounded-xl border border-stone-200 leading-relaxed font-normal">
                        <strong className="text-stone-900 font-semibold">Specialties:</strong>{' '}
                        {doc.specialties.slice(0, 3).join(', ')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Select Location */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900 font-serif-custom">
                  Step 3: Select Clinic Location
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  Select your preferred Aneja Skin &amp; Hair Centre branch in Jalandhar.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {LOCATIONS.map((loc) => {
                  const isSelected = selectedLocationId === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocationId(loc.id)}
                      className={`p-5 rounded-2xl text-left border transition-all space-y-3 ${
                        isSelected
                          ? 'bg-[#F0FDF4] border-[#115E59] ring-1 ring-[#115E59]'
                          : 'bg-[#FBFBFA] border-gray-100 hover:bg-white hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#115E59] uppercase tracking-wider">
                          {loc.area}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-5 h-5 text-[#115E59]" />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          {loc.name}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {loc.address}, {loc.city}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          Landmark: {loc.landmark}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-600 space-y-0.5">
                        <p>Hours: {loc.timings}</p>
                        <p className="text-[#115E59] font-medium">Ph: {loc.phone}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Select Date */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900 font-serif-custom">
                  Step 4: Select Consultation Date
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  Select a convenient day for your appointment. (Clinics operate Mon–Sat, Sunday by special prior booking).
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Fast Next 7 Days Quick Select */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Quick Select Upcoming Days:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                    {Array.from({ length: 7 }).map((_, i) => {
                      const dateObj = new Date();
                      dateObj.setDate(dateObj.getDate() + (i + 1));
                      const dateStr = dateObj.toISOString().split('T')[0];
                      const dayName = dateObj.toLocaleDateString('en-US', {
                        weekday: 'short',
                      });
                      const monthDay = dateObj.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      });
                      const isSelected = selectedDate === dateStr;

                      return (
                        <button
                          key={dateStr}
                          onClick={() => setSelectedDate(dateStr)}
                          className={`p-3 rounded-2xl border text-center transition-all ${
                            isSelected
                              ? 'bg-[#115E59] text-white border-[#115E59] shadow-xs'
                              : 'bg-[#FBFBFA] text-gray-800 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <span className="block text-[11px] uppercase opacity-80">
                            {dayName}
                          </span>
                          <span className="block text-sm font-bold mt-0.5">
                            {monthDay}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Specific Date input */}
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Or select a specific calendar date:
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#115E59]/20 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Display Available Time Slots */}
          {currentStep === 5 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900 font-serif-custom">
                  Step 5: Select Preferred Time Slot
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  Showing available consultation windows for{' '}
                  <span className="font-semibold text-gray-800">
                    {new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  .
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {Object.entries(timeSlots).map(([section, slots]) => (
                  <div key={section} className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#115E59]" />
                      {section} Slots
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                      {slots.map((slot) => {
                        const isSelected = selectedTimeSlot === slot;
                        return (
                          <button
                            key={slot}
                            onClick={() => setSelectedTimeSlot(slot)}
                            className={`py-2.5 px-3 rounded-full text-xs font-medium border transition-all ${
                              isSelected
                                ? 'bg-[#115E59] text-white border-[#115E59] font-bold shadow-xs'
                                : 'bg-[#FBFBFA] text-gray-700 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6: Patient Information Form */}
          {currentStep === 6 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900 font-serif-custom">
                  Step 6: Patient Information
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  Please provide your contact information for reception verification and SMS/call confirmation.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                      Patient Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Navjot Kaur"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#115E59]/20 focus:border-[#115E59] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                      Phone Number (for SMS &amp; Call Confirmation){' '}
                      <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#115E59]/20 focus:border-[#115E59] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="patient@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#115E59]/20 focus:border-[#115E59] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                      Visit Status
                    </label>
                    <div className="flex items-center space-x-4 pt-2">
                      <label className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                        <input
                          type="radio"
                          name="visitStatus"
                          checked={isFirstVisit}
                          onChange={() => setIsFirstVisit(true)}
                          className="text-[#115E59] focus:ring-[#115E59]"
                        />
                        <span>First-Time Visit</span>
                      </label>
                      <label className="flex items-center space-x-2 text-xs text-gray-700 cursor-pointer">
                        <input
                          type="radio"
                          name="visitStatus"
                          checked={!isFirstVisit}
                          onChange={() => setIsFirstVisit(false)}
                          className="text-[#115E59] focus:ring-[#115E59]"
                        />
                        <span>Returning Patient</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                    Primary Concern / Notes for Dermatologist (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your skin/hair concern, symptom duration, or previous treatments..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#115E59]/20 focus:border-[#115E59] focus:outline-none"
                  ></textarea>
                </div>

                {/* Summary Box before submit */}
                <div className="p-4 rounded-2xl bg-[#FBFBFA] border border-gray-100 text-xs text-gray-700 space-y-1.5 font-normal">
                  <p className="font-bold text-gray-900">
                    Booking Summary for Review:
                  </p>
                  <p>
                    • Service:{' '}
                    <strong className="text-gray-900 font-semibold">{appointmentType}</strong>
                  </p>
                  <p>
                    • Doctor:{' '}
                    <strong className="text-gray-900 font-semibold">
                      {DOCTORS.find((d) => d.id === selectedDoctorId)?.name}
                    </strong>
                  </p>
                  <p>
                    • Location:{' '}
                    <strong className="text-gray-900 font-semibold">
                      {LOCATIONS.find((l) => l.id === selectedLocationId)?.name}
                    </strong>
                  </p>
                  <p>
                    • Date &amp; Time:{' '}
                    <strong className="text-gray-900 font-semibold">
                      {selectedDate} at {selectedTimeSlot}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: Confirmation Screen */}
          {currentStep === 7 && completedBooking && (
            <div className="space-y-6 text-center py-4 animate-in fade-in duration-200">
              <div className="w-16 h-16 rounded-full bg-[#115E59] text-white flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#115E59] uppercase tracking-wider bg-[#F0FDF4] border border-[#DCFCE7] px-3.5 py-1 rounded-full">
                  Reference: {completedBooking.id}
                </span>
                <h3 className="font-serif-custom text-2xl sm:text-3xl font-bold text-gray-900">
                  Appointment Request Received
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto font-normal">
                  Thank you, <strong className="text-gray-900">{completedBooking.patientName}</strong>. Your consultation request has been logged into the clinic queue.
                </p>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto bg-[#FBFBFA] p-6 rounded-2xl border border-gray-100 text-left space-y-3 text-xs sm:text-sm text-gray-800 shadow-2xs font-normal">
                <div className="flex items-start justify-between pb-3 border-b border-gray-200/60">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-bold text-gray-900">
                    {completedBooking.appointmentType}
                  </span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-gray-200/60">
                  <span className="text-gray-500">Doctor:</span>
                  <span className="font-bold text-[#115E59]">
                    {completedBooking.doctorName}
                  </span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-gray-200/60">
                  <span className="text-gray-500">Clinic Branch:</span>
                  <span className="font-bold text-gray-900">
                    {completedBooking.locationName}
                  </span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-gray-200/60">
                  <span className="text-gray-500">Scheduled Date:</span>
                  <span className="font-bold text-gray-900">
                    {new Date(completedBooking.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-gray-200/60">
                  <span className="text-gray-500">Allocated Slot:</span>
                  <span className="font-bold text-[#115E59]">
                    {completedBooking.timeSlot}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-gray-500">Patient Phone:</span>
                  <span className="font-bold text-gray-900">
                    {completedBooking.phone}
                  </span>
                </div>
              </div>

              {/* Demo Notice */}
              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-2xl max-w-md mx-auto text-xs text-amber-900 flex items-start space-x-2 text-left font-normal">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Sales Demo Notice:</strong> This appointment is captured in the client-side Admin Demo portal so you can review clinic workflows and appointment management.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                {onGoToAdminDemo && (
                  <button
                    onClick={onGoToAdminDemo}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>View in Staff Admin Demo</span>
                    <ArrowRight className="w-4 h-4 text-teal-200" />
                  </button>
                )}

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 text-xs font-medium transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Book Another Consultation</span>
                </button>
              </div>
            </div>
          )}

          {/* Navigation Controls (Steps 1 to 6) */}
          {currentStep < 7 && (
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 text-xs font-semibold transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div></div>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                <span>
                  {currentStep === 6 ? 'Confirm & Submit Request' : 'Continue'}
                </span>
                <ChevronRight className="w-4 h-4 text-teal-200" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
