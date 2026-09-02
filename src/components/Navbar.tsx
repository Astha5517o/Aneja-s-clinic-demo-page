import React, { useState } from 'react';
import {
  Calendar,
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  UserCheck,
} from 'lucide-react';
import { NavTab } from '../types';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenBooking: () => void;
  pendingCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenBooking,
  pendingCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'about', label: 'About' },
    { id: 'locations', label: 'Locations' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-gray-100 transition-all">
      {/* Top Clinical Announcement Bar */}
      <div className="bg-[#0B1E1C] text-gray-300 text-xs font-sans py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>New Jawahar Nagar &amp; Nakodar Road, Jalandhar</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Mon – Sat: 10:00 AM – 7:30 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+911812224589"
              className="flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-medium">+91 181 222 4589</span>
            </a>

            {/* Admin Demo discreet link */}
            <button
              onClick={() => handleNavClick('admin-demo')}
              className={`text-[11px] px-2.5 py-0.5 rounded-full border transition-colors flex items-center space-x-1.5 ${
                currentTab === 'admin-demo'
                  ? 'bg-teal-900 text-teal-100 border-teal-500'
                  : 'bg-white/10 text-gray-300 border-white/20 hover:text-white hover:bg-white/20'
              }`}
              title="View Staff Reception Portal Demo"
            >
              <UserCheck className="w-3 h-3 text-teal-300" />
              <span>Admin Demo</span>
              {pendingCount > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Clinic Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-[#115E59] text-white flex items-center justify-center shadow-xs group-hover:bg-[#0D4A46] transition-colors">
              <span className="font-serif-custom text-xl font-bold tracking-tight text-teal-50">
                A
              </span>
            </div>
            <div>
              <span className="font-serif-custom text-xl sm:text-2xl font-bold tracking-tight text-gray-900 block leading-tight">
                ANEJA
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#115E59] block">
                Skin &amp; Hair Centre
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-full text-[13px] font-medium transition-all ${
                    isActive
                      ? 'text-[#115E59] font-semibold bg-teal-50/80 border border-teal-100/80'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Book Appointment Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-[#115E59] hover:bg-[#0D4A46] active:bg-[#093330] text-white text-[13px] font-medium tracking-wide shadow-sm hover:shadow-md transition-all transform active:scale-98"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-200" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#115E59] text-white"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-left ${
                  currentTab === link.id
                    ? 'bg-teal-50 text-[#115E59] font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}

            <button
              onClick={() => handleNavClick('admin-demo')}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-left border ${
                currentTab === 'admin-demo'
                  ? 'bg-teal-50 text-[#115E59] border-teal-200'
                  : 'bg-gray-50 text-gray-600 border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <UserCheck className="w-4 h-4 text-[#115E59]" />
                <span>Admin &amp; Staff Demo Portal</span>
              </div>
              {pendingCount > 0 && (
                <span className="bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {pendingCount} Pending
                </span>
              )}
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-full bg-[#115E59] text-white font-medium text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4 text-teal-200" />
              <span>Book an Appointment</span>
            </button>
            <div className="mt-3 text-center">
              <a
                href="tel:+911812224589"
                className="inline-flex items-center text-xs text-gray-500 hover:text-gray-900"
              >
                <Phone className="w-3.5 h-3.5 mr-1 text-[#115E59]" />
                Call Clinic: +91 181 222 4589
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
