import React from 'react';
import Image from 'next/image';
import { Award, Target, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for academic excellence and personal growth in every student.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We foster honesty, respect, and ethical behavior in all our interactions.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace new ideas and methods to enhance learning experiences.',
    },
    {
      icon: Eye,
      title: 'Diversity',
      description: 'We celebrate different cultures and perspectives in our community.',
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold text-gray-900 md:text-5xl">
            About Orchlon School
          </h1>
          <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
            Shaping minds and building futures since 1995
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 1995, Orchlon School has grown from a small educational institution 
                to one of Mongolia&apos;s premier schools. Our journey began with a simple vision: 
                to provide world-class education that prepares students for global success while 
                maintaining strong roots in Mongolian culture and values.
              </p>
              <p className="mb-4 text-gray-600">
                Over the years, we have expanded our facilities, enhanced our curriculum, and 
                built a community of dedicated educators and engaged families. Today, we serve 
                over 2,000 students from kindergarten through grade 12, offering a comprehensive 
                education that balances academic rigor with personal development.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence has resulted in countless success stories, with 
                graduates going on to attend top universities worldwide and becoming leaders 
                in various fields.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src="/api/placeholder/600/400"
                  alt="Orchlon School Campus"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg bg-blue-100"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Mission & Vision
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card bg-blue-900 text-white">
              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p>
                To provide exceptional education that nurtures intellectual curiosity, 
                develops character, and prepares students to become responsible global 
                citizens who contribute positively to society.
              </p>
            </div>
            <div className="card bg-yellow-400 text-blue-900">
              <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
              <p>
                To be the leading educational institution in Mongolia, recognized for 
                academic excellence, innovative teaching methods, and producing graduates 
                who are prepared to succeed in an ever-changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-900 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Join Our Community</h2>
          <p className="mb-8 text-lg">
            Discover how Orchlon School can help your child reach their full potential
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              Apply Now
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}