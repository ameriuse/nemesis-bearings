'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  tone?: 'dark' | 'light';
}

export default function SearchBar({ tone = 'dark' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  const isLight = tone === 'light';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
    setQuery('');
  };

  return (
    <form onSubmit={handleSearch} role="search" className="relative w-full">
      <label htmlFor="site-search" className="sr-only">
        Search by part number, dimensions, or keyword
      </label>
      <div
        className={`relative rounded-full transition-all duration-200 ${
          focused ? 'translate-y-[-1px]' : ''
        }`}
      >
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search part number, interchange, or dimensions"
          className={`w-full rounded-full border pl-12 pr-34 py-3.5 text-sm shadow-sm transition-all ${
            isLight
              ? 'bg-white/90 text-steel-900 placeholder:text-steel-500 border-steel-200 focus:border-blue-400 focus:bg-white'
              : 'bg-white/6 text-white placeholder:text-steel-500 border-white/10 focus:border-amber-400 focus:bg-white/10'
          }`}
        />
        <svg
          className={`absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 ${
            isLight ? 'text-steel-500' : 'text-steel-400'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <button
          type="submit"
          className={`absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.18em] uppercase transition-all ${
            isLight
              ? 'bg-navy-900 text-white hover:bg-navy-800'
              : 'bg-amber-500 text-navy-950 hover:bg-amber-400'
          }`}
        >
          Search
        </button>
      </div>
    </form>
  );
}
