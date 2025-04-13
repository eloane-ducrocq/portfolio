'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="navbar">
          <div className="navbar-container">
            <div className="navbar-wrapper">
              <div className="navbar-logo">
                <h1>
                  <Link href="/" className="logo-link">
                    Mon Portfolio
                  </Link>
                </h1>
              </div>

              <nav className="desktop-nav">
                <ul className="nav-list">
                  <li>
                    <Link href="/" className="nav-link">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link href="/aPropos" className="nav-link">
                      À Propos de moi
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="contact-button">
                      Contactez moi
                    </Link>
                  </li>
                </ul>
              </nav>

              <button
                className="mobile-menu-button"
                onClick={toggleMenu}
                aria-label="Menu principal"
              >
                <svg
                  className="menu-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {isMenuOpen && (
              <nav className="mobile-nav">
                <ul className="mobile-nav-list">
                  <li>
                    <Link href="/" className="mobile-nav-link" onClick={toggleMenu}>
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link href="/aPropos" className="mobile-nav-link" onClick={toggleMenu}>
                      À Propos de moi
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="mobile-contact-button" onClick={toggleMenu}>
                      Contactez moi
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
