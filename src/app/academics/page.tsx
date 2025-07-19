import React from 'react';
import { BookOpen, Globe, FlaskConical, Calculator, Palette, Music } from 'lucide-react';

export default function AcademicsPage() {
  const programs = [
    {
      level: 'Early Years (K-5)',
      description: 'Building strong foundations through play-based and inquiry-driven learning',
      subjects: ['Language Arts', 'Mathematics', 'Science', 'Social Studies', 'Arts', 'Physical Education'],
    },
    {
      level: 'Middle School (6-8)',
      description: 'Developing critical thinking and preparing for advanced studies',
      subjects: ['Advanced Mathematics', 'Sciences', 'Languages', 'Technology', 'Arts', 'Sports'],
    },
    {
      level: 'High School (9-12)',
      description: 'Rigorous preparation for university and beyond',
      subjects: ['AP Courses', 'IB Program', 'STEM Focus', 'Liberal Arts', 'Career Preparation'],
    },
  ];

  const departments = [
    {
      icon: Globe,
      name: 'Languages',
      description: 'English, Mongolian, Chinese, and other world languages',
    },
    {
      icon: Calculator,
      name: 'Mathematics',
      description: 'From basic numeracy to advanced calculus and statistics',
    },
    {
      icon: FlaskConical,
      name: 'Sciences',
      description: 'Biology, Chemistry, Physics, and Environmental Science',
    },
    {
      icon: BookOpen,
      name: 'Humanities',
      description: 'History, Geography, Philosophy, and Social Studies',
    },
    {
      icon: Palette,
      name: 'Arts',
      description: 'Visual Arts, Drama, and Creative Expression',
    },
    {
      icon: Music,
      name: 'Music',
      description: 'Instrumental, Vocal, and Music Theory programs',
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold text-gray-900 md:text-5xl">
            Academic Excellence
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
            Comprehensive programs designed to challenge, inspire, and prepare students for success
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Programs
          </h2>
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="card">
                <h3 className="mb-2 text-2xl font-bold text-blue-900">{program.level}</h3>
                <p className="mb-4 text-gray-600">{program.description}</p>
                <div className="flex flex-wrap gap-2">
                  {program.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Academic Departments
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div key={index} className="card group hover:border-blue-200">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-600">
                    <Icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{dept.name}</h3>
                  <p className="text-gray-600">{dept.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                International Curriculum
              </h2>
              <p className="mb-4 text-gray-600">
                Orchlon School follows an internationally recognized curriculum that combines 
                the best of global educational standards with local context and values. Our 
                programs are designed to develop well-rounded individuals who can think 
                critically and creatively.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  Cambridge International Curriculum
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  Advanced Placement (AP) Courses
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  International Baccalaureate (IB) Option
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  STEM-focused programs
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Learning Resources
              </h2>
              <p className="mb-4 text-gray-600">
                Our state-of-the-art facilities support diverse learning experiences:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="mb-2 font-semibold text-blue-900">Modern Library</h4>
                  <p className="text-sm text-gray-700">
                    20,000+ books and digital resources
                  </p>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <h4 className="mb-2 font-semibold text-green-900">Science Labs</h4>
                  <p className="text-sm text-gray-700">
                    Fully equipped for hands-on experiments
                  </p>
                </div>
                <div className="rounded-lg bg-yellow-50 p-4">
                  <h4 className="mb-2 font-semibold text-yellow-900">Tech Center</h4>
                  <p className="text-sm text-gray-700">
                    Computer labs and maker spaces
                  </p>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <h4 className="mb-2 font-semibold text-purple-900">Arts Studios</h4>
                  <p className="text-sm text-gray-700">
                    Music rooms and art workshops
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Excel?</h2>
          <p className="mb-8 text-lg">
            Join our academic community and unlock your potential
          </p>
          <button className="btn-primary bg-yellow-400 text-blue-900 hover:bg-yellow-500">
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
}