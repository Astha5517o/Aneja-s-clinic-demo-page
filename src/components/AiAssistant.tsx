import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Calendar,
  MapPin,
  HelpCircle,
  Stethoscope,
  Clock,
} from 'lucide-react';
import { Category } from '../types';

interface AiAssistantProps {
  onOpenBooking: () => void;
  onExploreTreatments: (category?: Category) => void;
  onViewLocations: () => void;
  onViewDoctors: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actions?: {
    label: string;
    action: () => void;
  }[];
  timestamp: string;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({
  onOpenBooking,
  onExploreTreatments,
  onViewLocations,
  onViewDoctors,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 'msg-1',
      sender: 'bot',
      text: 'How can we help you today? We provide general clinic guidance. For medical diagnosis and treatment plans, please consult Dr. Aneja in person.',
      actions: [
        {
          label: 'Find the right treatment for your concern',
          action: () => {
            handleQuickAction('treatments');
          },
        },
        {
          label: 'Choose between Dr. P.S. Aneja & Dr. Simran Pal Aneja',
          action: () => {
            handleQuickAction('doctors');
          },
        },
        {
          label: 'Check clinic locations & timings',
          action: () => {
            handleQuickAction('locations');
          },
        },
        {
          label: 'Book an appointment',
          action: () => {
            setIsOpen(false);
            onOpenBooking();
          },
        },
      ],
      timestamp: 'Just now',
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleQuickAction = (actionType: string) => {
    if (actionType === 'treatments') {
      const userMsg: Message = {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: 'Find the right treatment for your concern',
        timestamp: 'Just now',
      };
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'We offer specialized clinical care across five primary areas: Skin & Acne, Hair Restoration & PRP, Laser Procedures, Vitiligo Phototherapy, and Aesthetic Treatments. Which category would you like to explore?',
        actions: [
          {
            label: 'Skin Treatments',
            action: () => {
              setIsOpen(false);
              onExploreTreatments('Skin');
            },
          },
          {
            label: 'Hair & PRP',
            action: () => {
              setIsOpen(false);
              onExploreTreatments('Hair');
            },
          },
          {
            label: 'Laser Hair & Scar Revision',
            action: () => {
              setIsOpen(false);
              onExploreTreatments('Laser');
            },
          },
          {
            label: 'Vitiligo Phototherapy',
            action: () => {
              setIsOpen(false);
              onExploreTreatments('Vitiligo');
            },
          },
          {
            label: 'All Treatments Directory',
            action: () => {
              setIsOpen(false);
              onExploreTreatments('All');
            },
          },
        ],
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, userMsg, botMsg]);
    } else if (actionType === 'doctors') {
      const userMsg: Message = {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: 'Choose between Dr. P.S. Aneja and Dr. Simran Pal Aneja',
        timestamp: 'Just now',
      };
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: '• Dr. P.S. Aneja: 30+ years of senior clinical experience specializing in general dermatology, complex skin disorders, and vitiligo phototherapy.\n• Dr. Simran Pal Aneja: Specialized in advanced laser procedures, hair restoration (FUE & PRP), acne scar revision, and aesthetic dermatology.',
        actions: [
          {
            label: 'View Full Doctor Profiles',
            action: () => {
              setIsOpen(false);
              onViewDoctors();
            },
          },
          {
            label: 'Book with Any Available Specialist',
            action: () => {
              setIsOpen(false);
              onOpenBooking();
            },
          },
        ],
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, userMsg, botMsg]);
    } else if (actionType === 'locations') {
      const userMsg: Message = {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: 'Check clinic locations and timings',
        timestamp: 'Just now',
      };
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Aneja Skin & Hair Centre operates at two centres in Jalandhar, Punjab:\n\n1. New Jawahar Nagar (Near Model Town Crossing)\n2. Nakodar Road (Near Jyoti Chowk)\n\nHours: Mon – Sat: 10:00 AM – 7:30 PM (Closed Sundays except by prior appointment).',
        actions: [
          {
            label: 'View Addresses & Maps',
            action: () => {
              setIsOpen(false);
              onViewLocations();
            },
          },
          {
            label: 'Book Appointment',
            action: () => {
              setIsOpen(false);
              onOpenBooking();
            },
          },
        ],
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, userMsg, botMsg]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputVal.trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setInputVal('');

    let botReplyText = '';
    let botActions: { label: string; action: () => void }[] | undefined = undefined;

    const lower = query.toLowerCase();
    const medicalKeywords = [
      'diagnose',
      'cure',
      'medicine',
      'tablet',
      'cream',
      'rash',
      'itch',
      'symptom',
      'disease',
      'fungus',
      'infection',
      'steroid',
      'what do i have',
      'treat my',
      'prescribe',
    ];

    if (medicalKeywords.some((k) => lower.includes(k))) {
      botReplyText =
        'We provide general clinic guidance. For medical diagnosis and treatment plans, please consult Dr. Aneja in person.';
      botActions = [
        {
          label: 'Book Consultation',
          action: () => {
            setIsOpen(false);
            onOpenBooking();
          },
        },
      ];
    } else if (lower.includes('book') || lower.includes('appointment')) {
      botReplyText =
        'You can request a consultation appointment online in a few simple steps.';
      botActions = [
        {
          label: 'Book Appointment',
          action: () => {
            setIsOpen(false);
            onOpenBooking();
          },
        },
      ];
    } else if (lower.includes('location') || lower.includes('where') || lower.includes('address')) {
      botReplyText =
        'We are located in New Jawahar Nagar and on Nakodar Road in Jalandhar.';
      botActions = [
        {
          label: 'View Clinic Locations',
          action: () => {
            setIsOpen(false);
            onViewLocations();
          },
        },
      ];
    } else {
      botReplyText =
        'We provide general clinic guidance. How may we direct you today?';
      botActions = [
        {
          label: 'Explore Treatments',
          action: () => {
            setIsOpen(false);
            onExploreTreatments('All');
          },
        },
        {
          label: 'Book Appointment',
          action: () => {
            setIsOpen(false);
            onOpenBooking();
          },
        },
      ];
    }

    const botMsg: Message = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: botReplyText,
      actions: botActions,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  return (
    <>
      {/* Subtle Floating Launcher */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white shadow-md text-xs font-medium transition-colors"
            aria-label="Need help finding your way?"
          >
            <HelpCircle className="w-4 h-4 text-stone-300" />
            <span>Need help finding your way?</span>
          </button>
        )}
      </div>

      {/* Floating Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 max-w-lg h-[500px] max-h-[85vh] bg-white rounded-2xl shadow-xl border border-stone-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-stone-900 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-stone-300" />
              <div>
                <h4 className="text-xs font-semibold text-white">
                  Clinic Navigation &amp; Guidance
                </h4>
                <p className="text-[10px] text-stone-300 font-normal">
                  Aneja Skin &amp; Hair Centre, Jalandhar
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Non-diagnostic notice */}
          <div className="px-3.5 py-1.5 bg-stone-100 border-b border-stone-200 text-[11px] text-stone-600 font-normal">
            We provide general clinic guidance. For medical diagnosis, please consult in person.
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF8F5] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl whitespace-pre-line leading-relaxed font-normal ${
                    msg.sender === 'user'
                      ? 'bg-[#115E59] text-white rounded-br-xs'
                      : 'bg-white text-stone-800 border border-stone-200 shadow-xs rounded-bl-xs'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Quick Actions */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="mt-2 flex flex-col gap-1.5 w-full max-w-[90%]">
                    {msg.actions.map((act, i) => (
                      <button
                        key={i}
                        onClick={act.action}
                        className="px-3 py-2 rounded-xl bg-white border border-stone-200 hover:border-[#115E59] hover:bg-[#F0FDF4] text-xs font-normal text-stone-800 transition-colors text-left"
                      >
                        {act.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-white border-t border-stone-200 flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Ask about treatments, locations, timings..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#115E59]"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-[#115E59] text-white hover:bg-[#0D4A46] transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5 text-teal-100" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
