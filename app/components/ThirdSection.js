// ThirdSection.js 

'use client'; // for client side rendering

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ThirdSection() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-0 font-hammersmith-one">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-5xl font-bold">WE’RE SOLELY FOR THE SMALL AND INDEPENDENT ARTISTS</h2>
          <p className="text-2xl">
            YCE is your hub for discovering new artists. Hear under-the-radar artists here first.
          </p>
        </div>
        
        {/* Images Section */}
        <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          {/* Artist 1 */}
          <div
            className="image-container bg-gray-700 p-4 rounded"
            data-aos="fade-right" // Animation effect
          >
            <Image
              src="/images/artist1.jpeg"
              alt="Artist 1"
              width={200}
              height={300}
              className="image-style rounded"
            />
          </div>
          
          {/* Artist 3 */}
          <div
            className="image-container bg-gray-700 p-4 rounded"
            data-aos="fade-left" // Animation effect
          >
            <Image
              src="/images/artist3.jpeg"
              alt="Artist 3"
              width={200}
              height={300}
              className="image-style rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
