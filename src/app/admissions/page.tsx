import React from 'react';
import Image from 'next/image';
import { Calendar, Users, CheckCircle } from 'lucide-react';

export default function AdmissionsPage() {
  const steps = [
    {
      number: '01',
      title: 'Submit Application',
      description: 'Complete our online application form with all required documents',
    },
    {
      number: '02',
      title: 'Assessment & Interview',
      description: 'Participate in age-appropriate assessments and family interview',
    },
    {
      number: '03',
      title: 'Admission Decision',
      description: 'Receive admission decision within 2 weeks of completing the process',
    },
    {
      number: '04',
      title: 'Enrollment',
      description: 'Complete enrollment procedures and prepare for the academic year',
    },
  ];

  const requirements = [
    'Birth certificate or passport',
    'Academic transcripts (if applicable)',
    'Health and immunization records',
    'Two passport-sized photographs',
    'Previous school reports (last 2 years)',
    'Letter of recommendation',
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold text-gray-900 md:text-5xl">
            Admissions
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
            Begin your journey with Orchlon School
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Welcome to Orchlon School
              </h2>
              <p className="mb-4 text-gray-600">
                We are delighted that you are considering Orchlon School for your child&apos;s 
                education. Our admissions process is designed to be transparent, fair, and 
                focused on finding the best fit for both students and families.
              </p>
              <p className="mb-4 text-gray-600">
                We welcome applications from students of all backgrounds who demonstrate 
                academic potential, character, and a commitment to learning. Our diverse 
                community enriches the educational experience for all students.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <Calendar className="mr-3 h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">
                    Applications open: September 1 - March 31
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-3 h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">
                    Limited seats available per grade level
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Students in classroom"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Application Process
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Required Documents
              </h2>
              <p className="mb-6 text-gray-600">
                Please ensure you have the following documents ready when applying:
              </p>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Tuition & Fees
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-blue-900">
                    Early Years (K-5)
                  </h3>
                  <p className="text-gray-700">Annual tuition: $8,000 - $10,000</p>
                </div>
                <div className="rounded-lg bg-green-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-green-900">
                    Middle School (6-8)
                  </h3>
                  <p className="text-gray-700">Annual tuition: $10,000 - $12,000</p>
                </div>
                <div className="rounded-lg bg-yellow-50 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-yellow-900">
                    High School (9-12)
                  </h3>
                  <p className="text-gray-700">Annual tuition: $12,000 - $15,000</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                * Financial aid and scholarships available for qualifying families
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Apply?</h2>
          <p className="mb-8 text-lg">
            Start your application today and join our community of learners
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              Apply Online
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
              Download Application
            </button>
          </div>
        </div>
      </section>
    </>
  );
}