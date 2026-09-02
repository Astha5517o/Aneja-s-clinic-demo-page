import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  MessageSquare,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
import { FAQS, LOCATIONS } from '../data/clinicData';

interface ContactSectionProps {
  onBookAppointment: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onBookAppointment,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact-section" className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] text-[#115E59] text-xs font-semibold uppercase tracking-wider">
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Contact Aneja Skin &amp; Hair Centre
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Reach out to our Jalandhar clinic reception for consultation inquiries, treatment details, or location assistance.
          </p>
        </div>

        {/* Contact Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Channels & Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif-custom text-2xl font-bold text-gray-900">
                Direct Clinic Helpdesk
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                Our reception team is available Monday through Saturday to answer questions, guide appointments, and coordinate follow-up visits.
              </p>
            </div>

            <div className="space-y-3">
              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#FBFBFA] border border-gray-100 flex items-start space-x-4 shadow-2xs">
                <div className="p-2.5 rounded-xl bg-[#F0FDF4] text-[#115E59] border border-[#DCFCE7] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-xs sm:text-sm">
                  <p className="font-bold text-gray-900">Telephone / Reception</p>
                  <p className="text-gray-600">
                    New Jawahar Nagar:{' '}
                    <a href="tel:+911812224589" className="text-[#115E59] font-semibold hover:underline">
                      +91 181 222 4589
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Nakodar Road:{' '}
                    <a href="tel:+911812457890" className="text-[#115E59] font-semibold hover:underline">
                      +91 181 245 7890
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#FBFBFA] border border-gray-100 flex items-start space-x-4 shadow-2xs">
                <div className="p-2.5 rounded-xl bg-[#F0FDF4] text-[#115E59] border border-[#DCFCE7] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-xs sm:text-sm">
                  <p className="font-bold text-gray-900">Email Inquiries</p>
                  <p className="text-gray-600">
                    <a href="mailto:contact@anejaskincentre.com" className="text-[#115E59] hover:underline">
                      contact@anejaskincentre.com
                    </a>
                  </p>
                  <p className="text-gray-400 text-xs">Responses typically within 24 business hours</p>
                </div>
              </div>

              {/* Instagram & Social */}
              <div className="p-4 rounded-2xl bg-[#FBFBFA] border border-gray-100 flex items-start space-x-4 shadow-2xs">
                <div className="p-2.5 rounded-xl bg-[#F0FDF4] text-[#115E59] border border-[#DCFCE7] shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-xs sm:text-sm">
                  <p className="font-bold text-gray-900">Instagram &amp; Updates</p>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#115E59] font-medium hover:underline text-xs"
                  >
                    @anejaskinclinic.jalandhar
                  </a>
                  <p className="text-gray-400 text-xs">Educational skin tips &amp; clinic updates</p>
                </div>
              </div>
            </div>

            {/* Quick Book Appointment Banner */}
            <div className="p-6 rounded-3xl bg-[#115E59] text-white space-y-3 shadow-md">
              <h4 className="font-serif-custom text-xl font-bold text-white">
                Need an Immediate Consultation?
              </h4>
              <p className="text-xs text-teal-100/90 leading-relaxed font-normal">
                Use our automated online booking tool to reserve your preferred doctor and time slot in less than 2 minutes.
              </p>
              <button
                onClick={onBookAppointment}
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-white hover:bg-gray-100 text-[#115E59] text-xs font-semibold transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#115E59]" />
                <span>Open Appointment Booking</span>
              </button>
            </div>
          </div>

          {/* Right: Message / Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FBFBFA] p-6 sm:p-8 rounded-3xl border border-gray-100 space-y-6 shadow-xs">
            <div>
              <h3 className="font-serif-custom text-2xl font-bold text-gray-900">
                Send an Inquiry Message
              </h3>
              <p className="text-xs text-gray-500 mt-1 font-normal">
                Have a question regarding treatments, timings, or pre-procedure care? Fill out the form below.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-center space-y-3 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-[#115E59] mx-auto" />
                <h4 className="font-bold text-gray-900 text-base">
                  Inquiry Message Received
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed max-w-md mx-auto">
                  Thank you, {formData.name}. In this interactive demo prototype, your inquiry has been simulated. The clinic reception would review this and contact your number ({formData.phone}).
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jasleen Kaur"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#115E59]/20 focus:border-[#115E59] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#115E59]/20 focus:border-[#115E59] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#115E59]/20 focus:border-[#115E59] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#115E59]/20 focus:border-[#115E59] focus:outline-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Acne & Scars">Acne &amp; Scar Revision</option>
                      <option value="Laser Hair Removal">Laser Hair Removal</option>
                      <option value="Hair Restoration / PRP">Hair Restoration / PRP</option>
                      <option value="Vitiligo Care">Vitiligo Phototherapy</option>
                      <option value="Doctor Timings">Doctor Consultation Timings</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-800 uppercase tracking-wider">
                    Your Message / Question
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your query or specific concern..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-4 bg-white border border-gray-200 rounded-2xl text-xs sm:text-sm text-gray-900 focus:ring-2 focus:ring-[#115E59]/20 focus:border-[#115E59] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4 text-teal-200" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Clinical FAQs Accordion */}
        <div className="pt-8 border-t border-gray-100 space-y-6">
          <div className="max-w-2xl">
            <h3 className="font-serif-custom text-2xl sm:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-normal">
              Key information about clinical appointments, preparation, and location access.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-100 bg-[#FBFBFA] overflow-hidden transition-colors shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#115E59]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/60 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
