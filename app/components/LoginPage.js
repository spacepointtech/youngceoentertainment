// LoginPage.js
import React from 'react';
import { FaGoogle } from 'react-icons/fa'; // Import FaGoogle icon
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="background-image"></div>
      <div className="login-content">
        <div className="logo-container">
          <Link href="/">
            <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="login-form-container">
          <h2 className="login-title">Welcome to YCE HUB</h2>
          <p className="login-subtitle">
            Want to Become Young CEO?{' '}
            <Link href="/signup" className="signup-link">Become Now?</Link>
          </p>
          <form>
            <input type="email" placeholder="Email" className="login-input" required />
            <input type="password" placeholder="Password" className="login-input" required />
            <div className="login-actions">
              <Link href="/reset" className="forgot-password-link">Forget Password?</Link>
            </div>
            <button type="submit" className="login-button">Get into your YCE HUB</button>
            <button type="button" className="google-login-button">
              <FaGoogle className="google-icon" />
              Continue With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
