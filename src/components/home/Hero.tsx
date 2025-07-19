import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-2xl text-white">
          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl">
            Орчлон Сургуульд тавтай морил
          </h1>
          <p className="mb-8 text-xl">
            1995 оноос хойш шинэлэг сургалтын аргаар сурагчдыг 
            бүтээлгүй хөгжүүлэн эрдэмийн их оргилд хүргэж байна.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              Элсэлтийн мэдүүлэг
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
              Айлчлах хүсэлт
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;