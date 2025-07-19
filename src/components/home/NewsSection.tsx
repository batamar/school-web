import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Annual Science Fair 2024',
      excerpt: 'Students showcase innovative projects at our biggest science fair yet',
      date: '2024-03-15',
      category: 'Events',
      image: '/api/placeholder/400/300',
    },
    {
      id: 2,
      title: 'New Sports Complex Opening',
      excerpt: 'State-of-the-art facilities to enhance student athletic programs',
      date: '2024-03-10',
      category: 'Announcements',
      image: '/api/placeholder/400/300',
    },
    {
      id: 3,
      title: 'International Day Celebration',
      excerpt: 'Celebrating diversity and cultural exchange among our students',
      date: '2024-03-05',
      category: 'Events',
      image: '/api/placeholder/400/300',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Latest News & Events
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with what&apos;s happening at Orchlon School
            </p>
          </div>
          <Link
            href="/news"
            className="hidden items-center text-blue-600 hover:text-blue-700 md:flex"
          >
            View all news
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {news.map((item) => (
            <article key={item.id} className="card group overflow-hidden p-0">
              <div className="aspect-video overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center text-sm text-gray-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                  {item.category}
                </span>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-600">{item.excerpt}</p>
                <Link
                  href={`/news/${item.id}`}
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            View all news
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;