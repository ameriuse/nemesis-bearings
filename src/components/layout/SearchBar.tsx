'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} role="search" className="relative w-full">
      <label htmlFor="site-search" className="sr-only">Search by part number, dimensions, or keyword</label>
      <div className={`relative transition-all duration-200 ${focused ? 'scale-[1.02]' : ''}`}>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search part #, brand, or dimensions..."
          className="w-full bg-navy-800/80 text-white placeholder-steel-600 border border-navy-600 rounded-lg pl-11 pr-24 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 focus:bg-navy-800 transition-all"
        />
        <svg className="absolute left-[14px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-steel-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <button
          type="submit"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-400 text-navy-900 px-4 py-1.5 rounded-md text-xs font-bold tracking-wider uppercase transition-colors"
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}
