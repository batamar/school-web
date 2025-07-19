import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: 'Orchlon School has provided my daughter with an exceptional education. The teachers are dedicated, and the curriculum is both challenging and engaging.',
      author: 'Sarah Johnson',
      role: 'Parent of Grade 10 Student',
      avatar: '/api/placeholder/64/64',
    },
    {
      id: 2,
      content: 'The holistic approach to education at Orchlon has helped me grow not just academically, but also as a person. I feel prepared for university and beyond.',
      author: 'Michael Chen',
      role: 'Grade 12 Student',
      avatar: '/api/placeholder/64/64',
    },
    {
      id: 3,
      content: 'As a teacher at Orchlon, I appreciate the supportive environment and the resources available to help students succeed. It\'s truly a special place.',
      author: 'Emily Rodriguez',
      role: 'Mathematics Teacher',
      avatar: '/api/placeholder/64/64',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Community Says
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Hear from our students, parents, and teachers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-xl bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-blue-200" />
              <p className="mb-6 text-gray-700">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-300">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;