"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import EmailIcon from '@mui/icons-material/Email';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import "../styles/auth.css"
import NavBar from "../components/Navbar"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isCardVisible, setIsCardVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Animation effect
  useState(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Password reset requested for:", email)
    // Add your password reset logic here
    setIsSubmitted(true)
  }

  return (
    <div className="auth-container">
      <NavBar />
      <div
        className="auth-card"
        style={{
          opacity: isCardVisible ? 1 : 0,
          transform: isCardVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {!isSubmitted ? (
          <>
            <h1 className="auth-title">Forgot Password</h1>
            <p className="auth-subtitle">Enter your email address and we'll send you a link to reset your password.</p>

            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="input-icon">
                  <EmailIcon style={{fontSize:'18px'}} />
                </div>
              </div>

              <button type="submit" className="auth-button">
                Reset Password
              </button>

              <div className="auth-footer">
                <Link to="/login" className="back-to-login">
                  <ArrowLeftIcon style={{fontSize:'18px'}} />
                  <span>Back to Login</span>
                </Link>
              </div>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h1 className="auth-title">Email Sent</h1>
            <p className="auth-subtitle">
              We've sent a password reset link to <strong>{email}</strong>. Please check your inbox and follow the
              instructions.
            </p>
            <p className="auth-subtitle small">If you don't see the email, please check your spam folder.</p>
            <Link to="/login" className="auth-button back-button">
              Return to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

