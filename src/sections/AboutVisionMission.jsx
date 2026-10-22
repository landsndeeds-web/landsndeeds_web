import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, 
  Target, 
  Award, 
  ShieldCheck, 
  Scale, 
  Compass, 
  FileCheck, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Layers,
  LayoutGrid,
  Columns3,
  Building,
  Check,
  ChevronRight
} from 'lucide-react';
import visionImage from '../assets/vision_image.webp';

const AboutVisionMission = () => {
  // View mode switcher: 'bento' (Executive 3-Column), 'editorial' (Split Showcase), 'matrix' (Detailed Pillars)
  const [activeView, setActiveView] = useState('bento');
  const [activeTab, setActiveTab] = useState('vision');

  // Core Pillars Data
  // Core Pillars Data - Unified Blue and White Theme
  const pillars = {
    vision: {
      id: 'vision',
      badge: '01 / THE HORIZON',
      title: 'Our Vision',
      tagline: "Tamil Nadu's Benchmark for Risk-Free Land Deals",
      statement: "To be Tamil Nadu's most trusted, transparent, and legally fortified property platform — where every buyer, seller, and institutional investor transacts with total peace of mind.",
      accentColor: 'from-[#0D1B2A] to-[#1A335E]',
      borderHover: 'hover:border-amber-400',
      glowColor: 'rgba(197, 160, 89, 0.25)',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200/80',
      icon: Eye,
      iconBg: 'bg-[#1A335E] text-[#E5C378]',
      tag: 'Risk-Free Property Benchmark',
      keyHighlights: [
        { label: '100% Legal Transparency', desc: 'Absolute clarity on title ownership, encumbrances, and revenue classification.' },
        { label: 'Dispute-Free Land Acquisitions', desc: 'Zero boundary overlaps and proactive civil litigation clearance across 38 districts.' },
        { label: 'Regulatory Authority Oversight', desc: 'Guidance spearheaded by former IAS, IRS, DRO, and senior legal advocates.' },
      ],
      metrics: [
        { label: 'Districts Covered', value: '38/38' },
        { label: 'Title Reliability', value: '100%' },
      ]
    },
    mission: {
      id: 'mission',
      badge: '02 / THE ENGINE',
      title: 'Our Mission',
      tagline: 'Safeguarding Every Acre Through Legal Precision',
      statement: 'To eliminate property disputes and transaction risks across Tamil Nadu through forensic revenue due diligence, meticulous document verification, and end-to-end legal clearance.',
      accentColor: 'from-[#0D1B2A] to-[#1A335E]',
      borderHover: 'hover:border-amber-400',
      glowColor: 'rgba(197, 160, 89, 0.25)',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200/80',
      icon: Target,
      iconBg: 'bg-[#1A335E] text-[#E5C378]',
      tag: 'Forensic Due Diligence Engine',
      keyHighlights: [
        { label: 'Forensic Document Verification', desc: 'Cross-auditing Patta, Chitta, Adangal, EC, and 30-year parent document chains.' },
        { label: 'On-Ground Boundary Inspection', desc: 'FMB sketch validation, physical site surveys, and local village revenue checks.' },
        { label: 'End-to-End Registration Safety', desc: 'Guiding clients smoothly from initial search to final Sub-Registrar registration.' },
      ],
      metrics: [
        { label: 'Audit Checkpoints', value: '10-Tier' },
        { label: 'Clearance Rate', value: '100%' },
      ]
    },
    values: {
      id: 'values',
      badge: '03 / THE FOUNDATION',
      title: 'Core Values & Goals',
      tagline: 'Uncompromising Ethics & Client-First Stewardship',
      statement: 'To uphold unwavering fiduciary duty, fair market valuation, and ethical business conduct — ensuring our clients are protected from fraud and market speculation.',
      accentColor: 'from-[#0D1B2A] to-[#1A335E]',
      borderHover: 'hover:border-amber-400',
      glowColor: 'rgba(197, 160, 89, 0.25)',
      badgeBg: 'bg-amber-50 text-amber-900 border-amber-200/80',
      icon: Scale,
      iconBg: 'bg-[#1A335E] text-[#E5C378]',
      tag: 'Ethical Governance & Trust',
      keyHighlights: [
        { label: 'Fiduciary Client Protection', desc: 'Unbiased advisory with zero conflict of interest and total confidentiality.' },
        { label: 'Transparent Pricing & Valuation', desc: 'Fair market assessments with no hidden markups or predatory commissions.' },
        { label: 'Senior Domain Specialization', desc: 'Decades of combined administrative, revenue, and constitutional legal expertise.' },
      ],
      metrics: [
        { label: 'Revenue Experience', value: '30+ Yrs' },
        { label: 'Integrity Rating', value: 'A+' },
      ]
    }
  };

  // Detailed 8 Pillars Data for Matrix View
  const deepPillars = [
    {
      category: 'Vision Pillar',
      icon: ShieldCheck,
      title: '100% Legal Transparency',
      desc: 'Establishing an absolute benchmark for risk-free land title checks and authentic property documentation in Tamil Nadu.',
      badge: 'Legal Shield'
    },
    {
      category: 'Vision Pillar',
      icon: ShieldAlert,
      title: 'Mitigating Transaction Risks',
      desc: 'Eliminating land disputes and fraud through systematic revenue record inspection and professional legal verification.',
      badge: 'Risk Mitigation'
    },
    {
      category: 'Vision Pillar',
      icon: Award,
      title: 'Empowering Buyers & Sellers',
      desc: 'Enabling clients to buy, sell, lease, or invest with complete confidence, fair valuation, and true value for money.',
      badge: 'Empowerment'
    },
    {
      category: 'Vision Pillar',
      icon: Sparkles,
      title: 'Domain Excellence',
      desc: 'Combining decades of experience from former IAS, IRS, DRO, and legal experts under one trusted platform.',
      badge: 'Expert Authority'
    },
    {
      category: 'Mission Goal',
      icon: FileCheck,
      title: 'Comprehensive Document Verification',
      desc: 'Checking title deeds, encumbrance certificates (EC), Patta, Chitta, Adangal, and parent documents with revenue authorities.',
      badge: 'Verification'
    },
    {
      category: 'Mission Goal',
      icon: Target,
      title: 'Dispute Clearance & Boundary Audit',
      desc: 'Identifying potential litigation risks, boundary overlaps, or encumbrances before any financial commitments are made.',
      badge: 'Clearance'
    },
    {
      category: 'Mission Goal',
      icon: Compass,
      title: 'End-to-End Client Guidance',
      desc: 'Guiding buyers, sellers, and lessees seamlessly through search, due diligence, agreement drafting, and final registration.',
      badge: 'Full Guidance'
    },
    {
      category: 'Mission Goal',
      icon: CheckCircle2,
      title: 'Fair Value & Ethical Practices',
      desc: 'Promoting ethical pricing, transparent commission structures, and unbiased property assessment across Tamil Nadu.',
      badge: 'Ethics First'
    }
  ];

  return (
    <section id="our-vision" className="pt-14 pb-16 md:pt-18 md:pb-20 bg-gradient-to-b from-white via-[#FBF9F4] to-slate-50/80 relative overflow-hidden border-b border-slate-200/80">
      {/* Anchor for mission compatibility */}
      <div id="our-mission" className="absolute top-0 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#1A335E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EB] text-[#8C6D23] border border-[#E7D6A7] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles size={14} className="text-[#B8860B]" />
            Purpose, Mission & Strategic Goals
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] tracking-tight leading-tight">
            Our Guiding Compass: <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent">
              Vision, Mission & Values
            </span>
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Bridging legal integrity, administrative authority, and modern real estate diligence to ensure every land deal in Tamil Nadu is 100% verified and secure.
          </p>

          {/* Perspective View Switcher */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200/90 shadow-sm backdrop-blur-md">
              <button
                onClick={() => setActiveView('bento')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-[13px] font-bold transition-all duration-300 ${
                  activeView === 'bento'
                    ? 'bg-[#0D1B2A] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0D1B2A] hover:bg-slate-100/70'
                }`}
              >
                <Columns3 size={15} />
                <span>Executive Bento</span>
              </button>
              
              <button
                onClick={() => setActiveView('editorial')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-[13px] font-bold transition-all duration-300 ${
                  activeView === 'editorial'
                    ? 'bg-[#0D1B2A] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0D1B2A] hover:bg-slate-100/70'
                }`}
              >
                <Building size={15} />
                <span>Editorial Split</span>
              </button>

              <button
                onClick={() => setActiveView('matrix')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-[13px] font-bold transition-all duration-300 ${
                  activeView === 'matrix'
                    ? 'bg-[#0D1B2A] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0D1B2A] hover:bg-slate-100/70'
                }`}
              >
                <LayoutGrid size={15} />
                <span>Diligence Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW 1: EXECUTIVE BENTO (3 Flagship Cards Side-by-Side) */}
        {activeView === 'bento' && (
          <motion.div
            key="bento"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-3 gap-6 lg:gap-7 items-stretch"
          >
            {/* 1. Vision Card */}
            <div className="relative group rounded-3xl bg-white text-[#0D1B2A] p-7 sm:p-8 flex flex-col justify-between border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-amber-50 text-amber-900 border border-amber-200/80">
                    {pillars.vision.badge}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#1A335E] text-[#E5C378] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Eye size={20} />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] tracking-tight">
                    {pillars.vision.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#B8860B] mt-1.5 tracking-wide">
                    {pillars.vision.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed italic">
                    "{pillars.vision.statement}"
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    Core Focus Points
                  </p>
                  {pillars.vision.keyHighlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-1 w-4 h-4 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#B8860B] shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <div>
                        <span className="text-xs sm:text-[13px] font-bold text-[#0D1B2A] block">
                          {point.label}
                        </span>
                        <span className="text-[11px] sm:text-xs text-slate-600 leading-snug block mt-0.5">
                          {point.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Districts: <strong className="text-[#0D1B2A]">38 Pan-TN</strong></span>
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 font-bold text-[11px] border border-amber-200/80">
                  100% Risk-Free
                </span>
              </div>
            </div>

            {/* 2. Mission Card */}
            <div className="relative group rounded-3xl bg-white text-[#0D1B2A] p-7 sm:p-8 flex flex-col justify-between border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-amber-50 text-amber-900 border border-amber-200/80">
                    {pillars.mission.badge}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#1A335E] text-[#E5C378] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Target size={20} />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] tracking-tight">
                    {pillars.mission.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#B8860B] mt-1.5 tracking-wide">
                    {pillars.mission.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed italic">
                    "{pillars.mission.statement}"
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    Operational Pillars
                  </p>
                  {pillars.mission.keyHighlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-1 w-4 h-4 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#B8860B] shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <div>
                        <span className="text-xs sm:text-[13px] font-bold text-[#0D1B2A] block">
                          {point.label}
                        </span>
                        <span className="text-[11px] sm:text-xs text-slate-600 leading-snug block mt-0.5">
                          {point.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Protocol: <strong className="text-[#0D1B2A]">10-Tier Due Diligence</strong></span>
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 font-bold text-[11px] border border-amber-200/80">
                  Forensic Checks
                </span>
              </div>
            </div>

            {/* 3. Core Values & Goals Card */}
            <div className="relative group rounded-3xl bg-white text-[#0D1B2A] p-7 sm:p-8 flex flex-col justify-between border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-amber-50 text-amber-900 border border-amber-200/80">
                    {pillars.values.badge}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#1A335E] text-[#E5C378] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Scale size={20} />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] tracking-tight">
                    {pillars.values.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#B8860B] mt-1.5 tracking-wide">
                    {pillars.values.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed italic">
                    "{pillars.values.statement}"
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    Ethical Commitments
                  </p>
                  {pillars.values.keyHighlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-1 w-4 h-4 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#B8860B] shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <div>
                        <span className="text-xs sm:text-[13px] font-bold text-[#0D1B2A] block">
                          {point.label}
                        </span>
                        <span className="text-[11px] sm:text-xs text-slate-600 leading-snug block mt-0.5">
                          {point.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Ethics: <strong className="text-[#0D1B2A]">Zero Conflict</strong></span>
                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 font-bold text-[11px] border border-amber-200/80">
                  Ex-IAS / DRO
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* VIEW 2: EDITORIAL SPLIT (Modernized Reference 2 with Rich Image & Interactive Badge Cards) */}
        {activeView === 'editorial' && (
          <motion.div
            key="editorial"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Visual Showcase with Glassmorphic Floating Badge */}
              <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden bg-[#0D1B2A] flex flex-col justify-between p-6 sm:p-8">
                <img
                  src={visionImage}
                  alt="Lands N Deeds Vision & Mission"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity scale-105 hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/70 to-[#0D1B2A]/40" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-[#C5A059]/25 text-[#E5C378] border border-[#C5A059]/40 backdrop-blur-md">
                    Tamil Nadu Advisory
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-[#E5C378]">
                    <Sparkles size={16} />
                  </div>
                </div>

                {/* Bottom Floating Glass Card */}
                <div className="relative z-10 mt-auto pt-16">
                  <div className="p-5 rounded-2xl bg-[#0D1B2A]/85 backdrop-blur-md border border-[#C5A059]/40 shadow-2xl space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-[#E5C378] text-xs font-bold uppercase tracking-wider">
                        Institutional Governance
                      </span>
                    </div>
                    <p className="text-white text-xs sm:text-[13px] leading-relaxed font-medium">
                      "We don't merely facilitate property deals — we verify, legally fortify, and protect every buyer’s hard-earned life savings."
                    </p>
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                      <span>Spearheaded by Retd. Revenue & Police Officers</span>
                      <strong className="text-[#E5C378]">Est. 2024</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Pillar Badges with Rich Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-6 bg-gradient-to-b from-white to-slate-50/50">
                
                {/* 1. Vision Row */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0D1B2A] text-white border border-blue-400/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <Eye size={22} />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#1A335E]">
                          Vision Statement
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">01 / Benchmark</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A]">
                        Tamil Nadu's Benchmark for Risk-Free Land Deals
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        To revolutionize real estate with 100% transparent legal checks, systematic revenue record verification, and authentic documentation across all 38 districts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Mission Row */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0D1B2A] text-white border border-blue-400/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <Target size={22} />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#1A335E]">
                          Mission Execution
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">02 / Engine</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A]">
                        Forensic Multi-Tier Due Diligence & Clearance
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Cross-auditing Patta, Chitta, Adangal, EC, boundary FMB sketches, and 30-year parent deeds with revenue authorities before any financial transaction is finalized.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Strategic Goals Row */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0D1B2A] text-white border border-blue-400/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <Scale size={22} />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#1A335E]">
                          Strategic Values & Goals
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">03 / Anchor</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A]">
                        Unbiased Governance & Ethical Pricing
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Fiduciary loyalty to clients with zero conflicts of interest, clear fair valuation, transparent commission standards, and lifetime dispute-free security.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* VIEW 3: DILIGENCE MATRIX (Comprehensive 8-Card Detailed Pillars) */}
        {activeView === 'matrix' && (
          <motion.div
            key="matrix"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Filter Tabs */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-[#0D1B2A] text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                All 8 Pillars
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'vision'
                    ? 'bg-[#0D1B2A] text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Vision Pillars (4)
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeTab === 'mission'
                    ? 'bg-[#0D1B2A] text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Mission Execution (4)
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {deepPillars
                .filter(p => activeTab === 'all' || (activeTab === 'vision' && p.category.includes('Vision')) || (activeTab === 'mission' && p.category.includes('Mission')))
                .map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform bg-[#1A335E] text-white border border-blue-400/30">
                            <Icon size={19} />
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border bg-blue-50 text-[#1A335E] border-blue-200">
                            {pillar.badge}
                          </span>
                        </div>

                        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0D1B2A] text-sm md:text-base leading-snug">
                          {pillar.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>

                      <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-[#1A335E] text-xs font-bold uppercase tracking-wider">
                        <CheckCircle2 size={13} />
                        <span>Guaranteed Assurance</span>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </motion.div>
        )}

        {/* Bottom Assurance Bar */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-blue-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1A335E] shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#0D1B2A]">
                Every land transaction verified by former Revenue & Police Officers
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500">
                100% authentic Patta, Chitta, EC, and FMB sketches backed by legal due diligence.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0D1B2A] to-[#1A335E] hover:from-[#1A335E] hover:to-[#0D1B2A] text-white font-bold text-xs uppercase tracking-wider border border-blue-400/40 shadow-sm transition-all duration-300 hover:scale-105 shrink-0"
          >
            <span>Consult Our Legal Experts</span>
            <ArrowRight size={14} className="text-white" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutVisionMission;
