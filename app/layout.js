'use client'; // Needed for client-side hooks
import { usePathname } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import '@/app/globals.css';

export default function Layout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Hide Navbar on the login/signup/reset page
  const hideNavbar = pathname === '/login' || pathname === '/signup' || pathname === '/reset';

  return (
    <html lang="en">
      <head>
        <title>Young CEO Entertainment</title>
        <meta name="Designed & Developed by YCE Tech Team" content="YCE MUSIC DISTRIBUTION" />
      </head>
      <body>
        {!hideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}

