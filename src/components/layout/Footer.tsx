import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Орчлон Сургууль</h3>
            <p className="mb-4 text-gray-300">
              Оюун төгөлдөр, ирээдүй бүтээнэ. 1995 оноос хойш боловсролын шилдэг байгууллага.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Холбоосууд</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Бидний тухай
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-white">
                  Сургалтын хөтөлбөр
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-white">
                  Элсэлт
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="text-gray-300 hover:text-white">
                  Сурагчдын амьдрал
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Нэмэлт</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Эцэг эхийн портал
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Сурагчийн портал
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Хуваарь
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Ажлын байр
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Холбоо барих</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <p className="text-gray-300">
                  Баянзүрх дүүрэг, Улаанбаатар, Монгол 14200
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                <p className="text-gray-300">+976 7000 1234</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                <p className="text-gray-300">info@orchlon.edu.mn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-800 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Орчлон Сургууль. Бүх эрх хуулиар хамгаалагдсан. |{' '}
            <Link href="#" className="hover:text-white">
              Нууцлалын бодлого
            </Link>{' '}
            |{' '}
            <Link href="#" className="hover:text-white">
              Үйлчилгээний нөхцөл
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;