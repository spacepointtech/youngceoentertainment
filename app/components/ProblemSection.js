// ProblemSection.js
'use client'; // for client side rendering
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ProblemSection() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    { src: '/images/apple-music.svg', alt: 'Apple Music', message: 'Distribute your music on Apple Music' },
    { src: '/images/spotify.svg', alt: 'Spotify', message: 'Distribute your music on Spotify' },
    { src: '/images/music.svg', alt: 'Music', message: 'Distribute your music on Amazon Music' },
    { src: '/images/shazam.svg', alt: 'Shazam', message: 'Distribute your music on Shazam' },
    { src: '/images/instagram.svg', alt: 'Instagram', message: 'Distribute your music on Instagram' },
    { src: '/images/youtube.svg', alt: 'YouTube', message: 'Distribute your music on YouTube' },
  ];

  return (
    <div className="min-h-screen bg-black text-white text-center py-20 px-4 md:px-0 font-hammersmith-one">
      <h2 className="text-5xl font-bold mb-8">THE PROBLEM WE ARE SOLVING</h2>
      <p className="text-xl mb-4">
        While music streaming has been popular these days,
        <br />
        it doesn&apos;t really highlight up and upcoming musicians and indie artists.
      </p>
      <p className="text-3xl font-semibold mb-8">
        No Borders, No Limits:
        <br />
        Distribute your music worldwide
      </p>
      <div className="flex justify-center space-x-6 mb-8 mt-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="relative w-15 h-15 transform transition-transform duration-300 hover:scale-125"
            onMouseEnter={() => setHoveredIcon(icon.alt)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <Image src={icon.src} alt={icon.alt} width={56} height={56} />
            {hoveredIcon === icon.alt && (
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16 bg-gray-900 text-xs px-2 py-1 rounded-md opacity-95 text-white whitespace-nowrap shadow-lg">
                {icon.message}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="italic mb-8 mt-4 text-opacity-20">MANY MORE...</p>
    
     <Link href="/signup"><button className="bg-gray-600 text-white px-8 py-5 text-lg rounded transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
        Distribute Your Music Worldwide
      </button> </Link> 
    </div>
  );
}
