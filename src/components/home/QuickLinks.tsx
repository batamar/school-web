import React from 'react';
import Link from 'next/link';
import { GraduationCap, Users, Calendar, BookOpen } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    {
      title: 'Сургалтын хөтөлбөр',
      description: 'Манай иж бүрэн сургалтын хөтөлбөр, суралцах боломжуудтай танилцаарай',
      icon: GraduationCap,
      href: '/academics',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Элсэлт',
      description: 'Бидэнтэй хамт аялалаа эхлээрэй. Элсэлтийн талаар мэдээлэл аваарай',
      icon: Users,
      href: '/admissions',
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Сургуулийн хуваарь',
      description: 'Чухал өдрүүд, үйл явдлуудын талаар мэдээлэл аваарай',
      icon: Calendar,
      href: '#',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Сурагчдын амьдрал',
      description: 'Хичээлийн гадуур үйл ажиллагаа, сурагчдын боломжуудтай танилцаарай',
      icon: BookOpen,
      href: '/student-life',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Хурдан холбоос
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Хэрэгтэй мэдээллээ хялбар, хурдан олоорой
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                href={link.href}
                className="card group transition-all hover:-translate-y-1"
              >
                <div className={`mb-4 inline-flex rounded-lg p-3 ${link.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {link.title}
                </h3>
                <p className="text-gray-600">{link.description}</p>
                <div className="mt-4 text-blue-600 group-hover:text-blue-700">
                  Дэлгэрэнгүй →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;