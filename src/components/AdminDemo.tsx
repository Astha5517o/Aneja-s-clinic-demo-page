import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  UserCheck,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock3,
  CalendarDays,
  AlertTriangle,
  RotateCcw,
  Plus,
  MapPin,
  Stethoscope,
  X,
  Phone,
  Mail,
  Edit2,
  FileCheck,
} from 'lucide-react';
import { AppointmentRequest, AppointmentStatus, Doctor } from '../types';
import { DOCTORS, LOCATIONS } from '../data/clinicData';

interface AdminDemoProps {
  appointments: AppointmentRequest[];
  onUpdateStatus: (id: string, newStatus: AppointmentStatus) => void;
  onReschedule: (id: string, newDate: string, newTime: string) => void;
  onResetData: () => void;
  onOpenBooking: () => void;
}

export const AdminDemo: React.FC<AdminDemoProps> = ({
  appointments,
  onUpdateStatus,
  onReschedule,
  onResetData,
  onOpenBooking,
}) => {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('All');
  const [selectedDoctorFilter, setSelectedDoctorFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Reschedule modal state
  const [reschedulingAppt, setReschedulingAppt] =
    useState<AppointmentRequest | null>(null);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('11:30 AM');

  const todayStr = '2026-09-02';

  // Metrics
  const totalCount = appointments.length;
  const pendingCount = appointments.filter((a) => a.status === 'Pending').length;
  const confirmedCount = appointments.filter((a) => a.status === 'Confirmed').length;
  const todayCount = appointments.filter((a) => a.date === todayStr).length;

  const filteredAppointments = appointments.filter((appt) => {
    const matchesStatus =
      selectedStatusFilter === 'All' || appt.status === selectedStatusFilter;
    const matchesDoctor =
      selectedDoctorFilter === 'All' || appt.doctorId === selectedDoctorFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      appt.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.phone.includes(searchQuery) ||
      appt.appointmentType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appt.id.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesDoctor && matchesSearch;
  });

  const handleOpenReschedule = (appt: AppointmentRequest) => {
    setReschedulingAppt(appt);
    setNewDate(appt.date);
    setNewTime(appt.timeSlot);
  };

  const handleConfirmReschedule = () => {
    if (reschedulingAppt && newDate && newTime) {
      onReschedule(reschedulingAppt.id, newDate, newTime);
      setReschedulingAppt(null);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FBFBFA] min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header with Demo Notice */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-200">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] text-[#115E59] text-[11px] font-semibold uppercase tracking-wider">
              <span>Reception &amp; Clinic Staff Demo</span>
            </div>
            <h2 className="font-serif-custom text-2xl sm:text-3xl font-bold text-gray-900">
              Appointment Management Dashboard
            </h2>
            <p className="text-xs text-gray-500 font-normal">
              Interactive prototype demonstrating how Aneja Skin &amp; Hair Centre staff would manage incoming web booking requests.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onResetData}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-xs font-medium transition-colors shadow-2xs"
            >
              <RotateCcw className="w-3.5 h-3.5 text-gray-500" />
              <span>Reset Demo Queue</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-1.5 px-5 py-2 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <Plus className="w-3.5 h-3.5 text-teal-200" />
              <span>New Patient Request</span>
            </button>
          </div>
        </div>

        {/* 4 Summary Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
            <span className="text-xs text-gray-500 font-normal">
              Today&apos;s Appointments
            </span>
            <p className="text-2xl font-bold text-gray-900 font-serif-custom">
              {todayCount}
            </p>
            <span className="text-[11px] text-[#115E59] font-medium">
              Scheduled for today ({todayStr})
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
            <span className="text-xs text-gray-500 font-normal">
              Pending Web Requests
            </span>
            <p className="text-2xl font-bold text-amber-700 font-serif-custom">
              {pendingCount}
            </p>
            <span className="text-[11px] text-amber-700 font-medium">
              Require staff confirmation
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
            <span className="text-xs text-gray-500 font-normal">
              Confirmed Slots
            </span>
            <p className="text-2xl font-bold text-[#115E59] font-serif-custom">
              {confirmedCount}
            </p>
            <span className="text-[11px] text-[#115E59] font-medium">
              SMS/Call verified
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs space-y-1">
            <span className="text-xs text-gray-500 font-normal">
              Total Queue Size
            </span>
            <p className="text-2xl font-bold text-gray-900 font-serif-custom">
              {totalCount}
            </p>
            <span className="text-[11px] text-gray-400 font-medium">
              Across all Jalandhar branches
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {['All', 'Pending', 'Confirmed', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatusFilter(status)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedStatusFilter === status
                    ? 'bg-[#115E59] text-white font-semibold'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Doctor Filter */}
            <select
              value={selectedDoctorFilter}
              onChange={(e) => setSelectedDoctorFilter(e.target.value)}
              className="px-3.5 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#115E59]"
            >
              <option value="All">All Doctors</option>
              {DOCTORS.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>

            {/* Search */}
            <div className="relative min-w-[200px]">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search patient, phone, ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3.5 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-[#115E59]"
              />
            </div>
          </div>
        </div>

        {/* Appointments Table / Card View */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-2xs overflow-hidden">
          {filteredAppointments.length === 0 ? (
            <div className="p-12 text-center space-y-2">
              <p className="text-sm font-semibold text-gray-700">
                No appointment requests match your selected filters.
              </p>
              <p className="text-xs text-gray-400 font-normal">
                Try clearing the search query or status filter.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-700">
                <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-100 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-5">Ref &amp; Patient</th>
                    <th className="py-3.5 px-5">Appointment Type</th>
                    <th className="py-3.5 px-5">Doctor &amp; Branch</th>
                    <th className="py-3.5 px-5">Date &amp; Slot</th>
                    <th className="py-3.5 px-5">Status</th>
                    <th className="py-3.5 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredAppointments.map((appt) => {
                    const isPending = appt.status === 'Pending';
                    const isConfirmed = appt.status === 'Confirmed';
                    const isCancelled = appt.status === 'Cancelled';

                    return (
                      <tr
                        key={appt.id}
                        className="hover:bg-gray-50/70 transition-colors"
                      >
                        {/* Patient & Ref */}
                        <td className="py-3.5 px-5 space-y-0.5">
                          <div className="flex items-center space-x-1.5">
                            <span className="font-mono text-[11px] font-bold text-[#115E59] bg-[#F0FDF4] px-2 py-0.5 rounded-full border border-[#DCFCE7]">
                              {appt.id}
                            </span>
                            {appt.isFirstVisit && (
                              <span className="text-[9px] bg-gray-200 text-gray-700 font-semibold px-1.5 py-0.5 rounded-full">
                                New
                              </span>
                            )}
                          </div>
                          <p className="font-bold text-gray-900 text-sm">
                            {appt.patientName}
                          </p>
                          <div className="text-[11px] text-gray-500 flex items-center space-x-2">
                            <span>{appt.phone}</span>
                          </div>
                          {appt.message && (
                            <p className="text-[11px] text-gray-400 italic truncate max-w-xs mt-0.5 font-normal">
                              &ldquo;{appt.message}&rdquo;
                            </p>
                          )}
                        </td>

                        {/* Service */}
                        <td className="py-3.5 px-5">
                          <span className="font-medium text-gray-900 block">
                            {appt.appointmentType}
                          </span>
                        </td>

                        {/* Doctor & Location */}
                        <td className="py-3.5 px-5 space-y-0.5">
                          <p className="font-semibold text-gray-900">
                            {appt.doctorName}
                          </p>
                          <p className="text-[11px] text-gray-500 flex items-center gap-1 font-normal">
                            <MapPin className="w-3 h-3 text-gray-400" />
                            {appt.locationName}
                          </p>
                        </td>

                        {/* Date & Time */}
                        <td className="py-3.5 px-5 space-y-0.5">
                          <p className="font-semibold text-gray-900">
                            {appt.date}
                          </p>
                          <p className="text-[11px] text-[#115E59] font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {appt.timeSlot}
                          </p>
                        </td>

                        {/* Status Badge */}
                        <td className="py-3.5 px-5">
                          <span
                            className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                              isConfirmed
                                ? 'bg-[#F0FDF4] text-[#115E59] border border-[#DCFCE7]'
                                : isPending
                                ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {isConfirmed && <CheckCircle2 className="w-3 h-3 text-[#115E59]" />}
                            {isPending && <Clock3 className="w-3 h-3 text-amber-700" />}
                            {isCancelled && <XCircle className="w-3 h-3 text-gray-500" />}
                            <span>{appt.status}</span>
                          </span>
                        </td>

                        {/* Action Buttons */}
                        <td className="py-3.5 px-5 text-right">
                          <div className="flex items-center justify-end space-x-1.5">
                            {isPending && (
                              <button
                                onClick={() => onUpdateStatus(appt.id, 'Confirmed')}
                                className="px-3 py-1 bg-[#115E59] text-white rounded-full hover:bg-[#0D4A46] font-medium text-xs transition-colors"
                                title="Confirm appointment"
                              >
                                Confirm
                              </button>
                            )}

                            <button
                              onClick={() => handleOpenReschedule(appt)}
                              className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 rounded-full hover:bg-gray-200 font-medium text-xs transition-colors"
                              title="Reschedule slot"
                            >
                              Reschedule
                            </button>

                            {appt.status !== 'Cancelled' && (
                              <button
                                onClick={() => onUpdateStatus(appt.id, 'Cancelled')}
                                className="px-2.5 py-1 text-rose-700 hover:bg-rose-50 rounded-full font-medium text-xs transition-colors"
                                title="Cancel appointment"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Reschedule Modal */}
        {reschedulingAppt && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 border border-gray-100 shadow-2xl animate-in fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <h3 className="font-bold text-base text-gray-900 font-serif-custom">
                  Reschedule Appointment ({reschedulingAppt.id})
                </h3>
                <button
                  onClick={() => setReschedulingAppt(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-gray-700 font-normal">
                <p>
                  Patient:{' '}
                  <strong className="text-gray-900 font-semibold">
                    {reschedulingAppt.patientName}
                  </strong>{' '}
                  ({reschedulingAppt.phone})
                </p>
                <p>
                  Doctor:{' '}
                  <strong className="text-gray-900 font-semibold">
                    {reschedulingAppt.doctorName}
                  </strong>
                </p>

                <div className="space-y-1">
                  <label className="font-semibold text-gray-800 uppercase tracking-wider">
                    New Date:
                  </label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-full text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-gray-800 uppercase tracking-wider">
                    New Time Slot:
                  </label>
                  <select
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-gray-200 rounded-full text-xs"
                  >
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-3 border-t border-gray-100">
                <button
                  onClick={() => setReschedulingAppt(null)}
                  className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmReschedule}
                  className="px-5 py-2 rounded-full bg-[#115E59] hover:bg-[#0D4A46] text-white text-xs font-semibold"
                >
                  Save New Schedule
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
