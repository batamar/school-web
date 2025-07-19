'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Нүүр', href: '/' },
    { name: 'Бидний тухай', href: '/about' },
    { name: 'Сургалт', href: '/academics' },
    { name: 'Элсэлт', href: '/admissions' },
    { name: 'Сурагчдын амьдрал', href: '/student-life' },
    { name: 'Мэдээ', href: '/news' },
    { name: 'Холбоо барих', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container relative">
        <div className="flex items-center gap-4 py-4">
          {/* Logo Section */}
          <Link href="/" className="flex flex-shrink-0 items-center space-x-3">
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-900"></div>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-bold text-blue-900 xl:text-xl">
                Орчлон Сургууль
              </h1>
              <p className="hidden truncate text-xs text-gray-600 sm:block">
                Боловсролын шилдэг байгууллага
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="mx-8 hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="whitespace-nowrap rounded-md px-2 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-900 lg:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden flex-shrink-0 md:block">
            <button className="btn-primary whitespace-nowrap px-4 py-2 text-sm lg:px-6 lg:py-3 lg:text-base">
              Элсэлтийн мэдүүлэг
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto rounded-md p-2 transition-colors hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="absolute left-0 right-0 top-full z-50 border-t bg-white shadow-lg">
              <div className="container space-y-1 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <button
                    className="btn-primary w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Элсэлтийн мэдүүлэг
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
