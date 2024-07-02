// // HeroSection.js

// 'use client'; // for client side rendering
// import React from 'react';
// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
//       <div className="text-center">
//         <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
//           <div className="w-52 mb-4 sm:mb-0 sm:w-auto">
//             <Image src="/images/logo.png" alt="Young CEO Entertainment" width={208} height={64} />
//           </div>
//           <div>
//             {/* Responsive text size adjustments */}
//             <h1 className="text-white text-4xl sm:text-6xl font-rubik-glitch">YOUNG CEO ENTERTAINMENT</h1>
//             <p className="text-white text-xl sm:text-2xl font-rubik-glitch mt-2">TRY NOW FOR FREE</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// HeroSection.js

'use client'; // for client side rendering
import React from 'react';
import Image from 'next/image';
 // Import custom CSS for this component

export default function HeroSection() {
  return (
    <div className="hero-section h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <div className="text-center">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
          <div className="w-52 mb-4 sm:mb-0 sm:w-auto">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" width={208} height={64} />
          </div>
          <div>
            {/* Responsive text size adjustments */}
            <h1 className="rubik-glitch text-white text-4xl sm:text-6xl">YOUNG CEO ENTERTAINMENT</h1>
            <p className="rubik-glitch text-white text-xl sm:text-2xl mt-2">TRY NOW FOR FREE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
