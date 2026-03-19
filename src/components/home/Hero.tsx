'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section ref={sectionRef} className="relative bg-navy-900 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 grid-pattern" />

        {/* Gradient Orbs — animated */}
        <div
          className="absolute top-[-200px] right-[-100px] w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
            animation: 'pulse-glow 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
            animation: 'pulse-glow 10s ease-in-out infinite 2s',
          }}
        />

        {/* Decorative large text */}
        <div className="deco-text absolute top-[10%] left-[-2%] opacity-30">
          NMB
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-500 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `particle-float ${6 + i * 2}s ease-in-out infinite ${i * 0.5}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 py-24 md:py-32 lg:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="fade-up inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2 mb-8">
                <span className="w-2 h-2 bg-amber-500 rounded-full" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                <span className="text-amber-400 text-xs font-semibold tracking-[2px] uppercase">Industrial Bearing Solutions</span>
              </div>

              <h1 className="fade-up text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] font-black text-white leading-[0.95] tracking-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                PRECISION
                <br />
                <span className="relative inline-block">
                  <span className="text-amber-500">ENGINEERED</span>
                  <span
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-500 to-amber-400"
                    style={{ animation: 'reveal-line 1s ease forwards 0.8s', transformOrigin: 'left', transform: 'scaleX(0)' }}
                  />
                </span>
                <br />
                BEARINGS
              </h1>

              <p className="fade-up text-steel-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                Cross-reference support for major industry series.
                Quality-inspected alternatives with full specs, fast availability, and expert technical support.
              </p>

              <div className="fade-up flex flex-wrap gap-4 mb-12">
                <Link href="/shop" className="btn-amber text-sm">
                  BROWSE CATALOG
                </Link>
                <Link href="/quote" className="btn-outline text-sm">
                  REQUEST A QUOTE
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="fade-up flex flex-wrap gap-x-8 gap-y-4 text-sm text-steel-500">
                {[
                  'Same-Day Shipping',
                  'Quality Inspected',
                  'Expert Support',
                  'Batch Traceability',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2.5 group">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                      <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Professional Bearing Visual */}
            <div className="hidden lg:flex items-center justify-center scale-up">
              <div className="relative w-[500px] h-[500px]">
                {/* Ambient glow behind bearing */}
                <div
                  className="absolute inset-[15%] rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)',
                    animation: 'pulse-glow 4s ease-in-out infinite',
                  }}
                />

                {/* Outer decorative ring — rotating dashes */}
                <svg className="absolute inset-0 w-full h-full" style={{ animation: 'spin-slow 60s linear infinite' }}>
                  <circle cx="250" cy="250" r="245" fill="none" stroke="rgba(245,158,11,0.08)" strokeWidth="1" strokeDasharray="8 16" />
                </svg>

                {/* Second decorative ring — counter rotating */}
                <svg className="absolute inset-[4%] w-[92%] h-[92%]" style={{ animation: 'spin-slow-reverse 45s linear infinite' }}>
                  <circle cx="50%" cy="50%" r="48%" fill="none" stroke="rgba(245,158,11,0.05)" strokeWidth="1" strokeDasharray="4 12" />
                </svg>

                {/* Main Bearing — Photorealistic SVG */}
                <svg viewBox="0 0 500 500" className="relative w-full h-full drop-shadow-2xl" style={{ animation: 'spin-slow 80s linear infinite' }}>
                  <defs>
                    {/* Metallic gradients */}
                    <linearGradient id="outerRaceMetal" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#4a4e5e" />
                      <stop offset="25%" stopColor="#6b7082" />
                      <stop offset="50%" stopColor="#3d4150" />
                      <stop offset="75%" stopColor="#5a5f72" />
                      <stop offset="100%" stopColor="#4a4e5e" />
                    </linearGradient>

                    <linearGradient id="innerRaceMetal" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#5a5f72" />
                      <stop offset="50%" stopColor="#3d4150" />
                      <stop offset="100%" stopColor="#5a5f72" />
                    </linearGradient>

                    <radialGradient id="ballMetal" cx="0.3" cy="0.3">
                      <stop offset="0%" stopColor="#b0b4c4" />
                      <stop offset="30%" stopColor="#8b8fa2" />
                      <stop offset="70%" stopColor="#5a5f72" />
                      <stop offset="100%" stopColor="#3d4150" />
                    </radialGradient>

                    <radialGradient id="ballHighlight" cx="0.25" cy="0.25">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>

                    <linearGradient id="outerEdge" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5a5f72" />
                      <stop offset="50%" stopColor="#2a2d36" />
                      <stop offset="100%" stopColor="#5a5f72" />
                    </linearGradient>

                    <radialGradient id="coreGradient" cx="0.5" cy="0.5">
                      <stop offset="0%" stopColor="#151d33" />
                      <stop offset="100%" stopColor="#0a0e1a" />
                    </radialGradient>

                    {/* Shadow filter */}
                    <filter id="ballShadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="2" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
                    </filter>

                    <filter id="innerShadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#000" floodOpacity="0.3" />
                    </filter>
                  </defs>

                  {/* Outer race — outer edge */}
                  <circle cx="250" cy="250" r="220" fill="none" stroke="url(#outerEdge)" strokeWidth="3" />
                  <circle cx="250" cy="250" r="218" fill="none" stroke="#2a2d36" strokeWidth="36" />
                  <circle cx="250" cy="250" r="218" fill="none" stroke="url(#outerRaceMetal)" strokeWidth="34" opacity="0.8" />

                  {/* Outer race inner bevel */}
                  <circle cx="250" cy="250" r="200" fill="none" stroke="#1a1d26" strokeWidth="2" />

                  {/* Ball track groove (subtle) */}
                  <circle cx="250" cy="250" r="168" fill="none" stroke="#1a1d26" strokeWidth="40" opacity="0.4" />

                  {/* Bearing Balls — 9 balls with realistic shading */}
                  {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 250 + 168 * Math.cos(rad);
                    const y = 250 + 168 * Math.sin(rad);
                    return (
                      <g key={angle} filter="url(#ballShadow)">
                        {/* Ball body */}
                        <circle cx={x} cy={y} r="22" fill="url(#ballMetal)" />
                        {/* Ball highlight */}
                        <circle cx={x - 5} cy={y - 5} r="12" fill="url(#ballHighlight)" />
                        {/* Ball edge ring */}
                        <circle cx={x} cy={y} r="22" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
                      </g>
                    );
                  })}

                  {/* Inner race — outer edge */}
                  <circle cx="250" cy="250" r="130" fill="none" stroke="#1a1d26" strokeWidth="2" />
                  <circle cx="250" cy="250" r="118" fill="none" stroke="#2a2d36" strokeWidth="28" />
                  <circle cx="250" cy="250" r="118" fill="none" stroke="url(#innerRaceMetal)" strokeWidth="26" opacity="0.7" />
                  <circle cx="250" cy="250" r="104" fill="none" stroke="#1a1d26" strokeWidth="1.5" />

                  {/* Center bore */}
                  <circle cx="250" cy="250" r="85" fill="url(#coreGradient)" filter="url(#innerShadow)" />
                  <circle cx="250" cy="250" r="85" fill="none" stroke="#2a2d36" strokeWidth="2" />

                  {/* Keyway slot in bore */}
                  <rect x="246" y="165" width="8" height="20" rx="1" fill="#1a1d26" opacity="0.6" />

                  {/* Top highlight reflection */}
                  <ellipse cx="220" cy="180" rx="80" ry="60" fill="white" opacity="0.03" />
                </svg>

                {/* Floating spec cards */}
                <div
                  className="absolute top-6 right-[-10px] bg-navy-800/95 border border-navy-600/50 rounded-xl px-4 py-3 backdrop-blur-md shadow-xl"
                  style={{ animation: 'float 6s ease-in-out infinite' }}
                >
                  <p className="text-[10px] text-steel-500 uppercase tracking-[2px] mb-0.5">Dynamic Load</p>
                  <p className="text-amber-400 font-bold text-lg font-mono leading-tight">95 kN</p>
                </div>
                <div
                  className="absolute bottom-20 left-[-20px] bg-navy-800/95 border border-navy-600/50 rounded-xl px-4 py-3 backdrop-blur-md shadow-xl"
                  style={{ animation: 'float-delayed 7s ease-in-out infinite 1s' }}
                >
                  <p className="text-[10px] text-steel-500 uppercase tracking-[2px] mb-0.5">Max Speed</p>
                  <p className="text-amber-400 font-bold text-lg font-mono leading-tight">12,000 RPM</p>
                </div>
                <div
                  className="absolute bottom-4 right-4 bg-navy-800/95 border border-navy-600/50 rounded-xl px-4 py-3 backdrop-blur-md shadow-xl"
                  style={{ animation: 'float 5s ease-in-out infinite 2s' }}
                >
                  <p className="text-[10px] text-steel-500 uppercase tracking-[2px] mb-0.5">Precision</p>
                  <p className="text-amber-400 font-bold text-lg font-mono leading-tight">ABEC-1</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-800 to-transparent pointer-events-none" />
      </section>

      {/* Stats Bar — with animated counters */}
      <div className="bg-navy-800 border-y border-navy-700/50 relative overflow-hidden">
        {/* Subtle animated gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.03), transparent)',
            backgroundSize: '200% 100%',
            animation: 'gradient-shift 8s ease infinite',
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '833+', label: 'Products Available' },
              { number: '24hr', label: 'Quote Response' },
              { number: '99.5%', label: 'Order Accuracy' },
              { number: 'Same Day', label: 'Shipping on In-Stock' },
            ].map((stat, i) => (
              <div key={stat.label} className="fade-up group" style={{ transitionDelay: `${i * 100}ms` }}>
                <p className="text-3xl md:text-4xl font-black text-amber-500 mb-1.5 group-hover:text-amber-400 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.number}
                </p>
                <p className="text-xs text-steel-500 uppercase tracking-[2px] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
