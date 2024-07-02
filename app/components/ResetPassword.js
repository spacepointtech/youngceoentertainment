// ResetPasswordPage.js
import { FaKey } from 'react-icons/fa';
import Link from 'next/link';

export default function ResetPasswordPage() {
  return (
    <div className="reset-password-container">
      <div className="reset-password-box">
        <div className="reset-icon-container">
          <FaKey className="reset-icon" />
        </div>
        <h2>Reset Password</h2>
        <input type="email" placeholder="Email" className="reset-input" />
        <button className="reset-button">Reset Password</button>
        <div className="reset-text">
          <p>
            Remember Your Password?{' '}
            <Link href="/login" className="reset-link">Go Back &lt;&lt;</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
