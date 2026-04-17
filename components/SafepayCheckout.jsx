'use client'
// components/SafepayCheckout.jsx

import React from 'react'

export default function SafepayCheckout({
  plan = 'pro',
  buttonLabel,
  className = '',
  style = {},
}) {
  const defaultLabel = plan === 'agency' ? 'Upgrade to Agency' : 'Upgrade to Pro'
  const label = buttonLabel ?? defaultLabel

  const handleClick = () => {
    // Redirect the user to the SaaS app, forcing them to log in before checking out
    window.location.href = `https://app.kobin.team/login?intent=upgrade&plan=${plan}`
  }

  const primaryBtn = {
    fontFamily: "'Geist', sans-serif",
    fontSize:   '14px',
    fontWeight: 500,
    cursor:     'pointer',
    transition: 'all 0.18s ease',
    border:     'none',
    borderRadius: '10px',
    padding:    '12px 22px',
    background: '#0E0E0D',
    color:      '#F0EDE6',
    ...style,
  }

  return (
    <button
      onClick={handleClick}
      className={className}
      style={primaryBtn}
      aria-label={`Upgrade to Kobin AI ${plan} plan`}
    >
      {label}
    </button>
  )
}