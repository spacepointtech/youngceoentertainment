'use client';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // use useRouter for redirection
import axios from 'axios';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [formData, setFormData] = useState({
    artistName: '',
    whatsappNumber: '',
    signedToLabel: 'independent', // Default value
    nextSongDistribution: '',
    distributedBefore: '',
    spotifyLink: '',
    youtubeLink: '',
    instagramHandle: '',
    currentCost: '',
    currentPlan: '',
    issuesFaced: '',
    upcomingSongs: '',
    feedback: ''
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', { email, password });
      if (response.data.userExists) {
        setUserExists(true);
      } else {
        setShowQuestionnaire(true);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleSubmitQuestionnaire = async () => {
    try {
      await axios.post('/api/questionnaire', formData);
      // Redirect to dashboard after successful submission
      router.push('/dashboard');
    } catch (error) {
      console.error('Questionnaire submission error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleGoogleLogin = () => {
    // Implement Google login (OAuth2 or Firebase)
  };

  return (
    <div className="login-wrapper">
      <div className="background-image"></div>
      <div className="login-content">
        <div className="logo-container">
          <Link href="/">
            <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
          </Link>
        </div>
        {userExists ? (
          <p>User already exists. <Link href="/login">Log In</Link></p>
        ) : (
          !showQuestionnaire ? (
            <div className="login-form-container">
              <h2 className="login-title">Become The Young CEO!</h2>
              <p className="login-subtitle">
                Already Young CEO?{' '}
                <Link href="/login" className="signup-link">Log In</Link>
              </p>
              <form onSubmit={handleSignup}>
                <input
                  type="email"
                  placeholder="Email"
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="policy-checkbox">
                  <input type="checkbox" id="agree-policy" className="policy-input" required />
                  <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
                </div>
                <button type="submit" className="login-button">Become The Young CEO Now!!</button>
                <button type="button" className="google-login-button" onClick={handleGoogleLogin}>
                  <FaGoogle className="google-icon" />
                  Continue With Google
                </button>
              </form>
            </div>
          ) : (
            <div className="questionnaire-form-container">
              <div className="white-background-box">
                <h2> Who are We ? </h2>
                <div className="question-set">
                  <p className="question-description">
                    Young CEO Entertainment is a platform for local street artists, rappers, musicians, and beat producers
                    to empower them to become their own CEOs and bring them to major audio streaming platforms like Spotify,
                    Apple Music, JioSaavn, etc. We promise you all your royalties would be kept by you (100% percent). We
                    don't charge from Anyone's Art. Popular streaming platforms like these do not work with artists directly,
                    they only work with distribution companies. That is where we come into the picture. We enable artists to
                    leave the hassles of distribution to us and focus more on their art & creativity!
                  </p>
                  <input
                    type="text"
                    placeholder="Artist Name"
                    className="question-input"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Whatsapp Number"
                    className="question-input"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    required
                  />
                  <div className="radio-group">
                  Are you independent or are you signed to a Label? 
                    <label> 
                      <input
                        type="radio"
                        name="signedToLabel"
                        value="independent"
                        checked={formData.signedToLabel === 'independent'}
                        onChange={handleChange}
                        required
                      />
                      Independent
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="signedToLabel"
                        value="label"
                        checked={formData.signedToLabel === 'label'}
                        onChange={handleChange}
                        required
                      />
                      Signed to a Label
                    </label>
                  </div>
                  Your next Song Distribution?
                  <input
                    type="date"
                    placeholder="Your next Song Distribution?"
                    className="question-input"
                    name="nextSongDistribution"
                    value={formData.nextSongDistribution}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Have you distributed a song before?"
                    className="question-input"
                    name="distributedBefore"
                    value={formData.distributedBefore}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Previous Works on Spotify"
                    className="question-input"
                    name="spotifyLink"
                    value={formData.spotifyLink}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Previous Works on Youtube"
                    className="question-input"
                    name="youtubeLink"
                    value={formData.youtubeLink}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Link of your Instagram Handle"
                    className="question-input"
                    name="instagramHandle"
                    value={formData.instagramHandle}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="How much are you currently paying for the whole scene?"
                    className="question-input"
                    name="currentCost"
                    value={formData.currentCost}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="What is the plan that you're currently aligned with?"
                    className="question-input"
                    name="currentPlan"
                    value={formData.currentPlan}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Were there any issues faced in the past?"
                    className="question-input"
                    name="issuesFaced"
                    value={formData.issuesFaced}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="How many songs are yet to come?"
                    className="question-input"
                    name="upcomingSongs"
                    value={formData.upcomingSongs}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    placeholder="Any extra feedback that you want to provide us."
                    className="question-input"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="button" className="submit-button" onClick={handleSubmitQuestionnaire}>
                  REGISTER YOURSELF TO BECOME THE YOUNG CEO!
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
