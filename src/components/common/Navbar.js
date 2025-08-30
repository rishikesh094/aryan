"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleLinkClick = () => {
    setServicesOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#000000b2] backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Left - Menu Button */}
          <button
            className="flex flex-col justify-center items-center gap-2 p-3 z-50 hover:bg-[#ffffff3d] rounded-lg py-4 hover:cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="w-8 h-[3px] rounded-md bg-white"></span>
            <span className="w-8 h-[3px] rounded-md bg-white"></span>
          </button>

          {/* Center - Logo */}
          <div className="flex justify-center items-center flex-1">
            <Link href="/">
              <div className="text-white font-bold text-2xl">
                <span className="text-red-500">Crez</span>vatic
              </div>
            </Link>
          </div>

          {/* Right - Call Button */}
          <div className="flex items-center gap-4">
            {/* Call Button with Ripple + Glow */}
            <a
              href="#"
              className="relative flex justify-center items-center w-[50px] h-[50px] bg-[#6d0000] text-white rounded-full shadow-lg text-2xl 
               hover:bg-[#a30000] transition overflow-hidden group animate-pulseRing"
              aria-label="Call us"
            >
              📞
              {/* Shine Effect */}
              <span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
                     translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
              ></span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-white text-2xl">
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-[#E4405F] transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-[#1877F2] transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="hover:text-[#FF0000] transition"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-[#00000025] bg-opacity-60 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-100 bg-[#4a0101] text-white shadow-lg z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            className="text-xl bg-white text-gray-500 px-3 py-1 rounded-md cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="space-y-2 text-lg font-medium">
          <li>
            <Link
              href="/"
              onClick={handleLinkClick}
              className="block w-full hover:bg-white hover:text-[#4a0101] px-4 py-2 rounded-xl transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={handleLinkClick}
              className="block w-full hover:bg-white hover:text-[#4a0101] px-4 py-2 rounded-xl transition-all duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={handleLinkClick}
              className="block w-full hover:bg-white hover:text-[#4a0101] px-4 py-2 rounded-xl transition-all duration-200"
            >
              Blog
            </Link>
          </li>

          {/* Services with Dropdown */}
          <li className="rounded-xl transition-all duration-200">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between items-center w-full hover:bg-white hover:text-[#4a0101] rounded-lg px-4 py-2"
            >
              Services
            </button>
            {servicesOpen && (
              <ul className="mt-2 ml-2 space-y-2 bg-white text-gray-700 rounded-lg shadow-lg p-3">
                <li>
                  <Link
                    href="/services/web"
                    onClick={handleLinkClick}
                    className="block w-full hover:text-[#4a0101] px-2 py-1"
                  >
                    Website Design and Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/seo"
                    onClick={handleLinkClick}
                    className="block w-full hover:text-[#4a0101] px-2 py-1"
                  >
                    Search Engine Optimization (SEO)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/smm"
                    onClick={handleLinkClick}
                    className="block w-full hover:text-[#4a0101] px-2 py-1"
                  >
                    Social Media Marketing (SMM)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ppc"
                    onClick={handleLinkClick}
                    className="block w-full hover:text-[#4a0101] px-2 py-1"
                  >
                    Pay Per Click (PPC)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/video"
                    onClick={handleLinkClick}
                    className="block w-full hover:text-[#4a0101] px-2 py-1"
                  >
                    Video Creation
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/careers"
              onClick={handleLinkClick}
              className="block w-full hover:bg-white hover:text-[#4a0101] px-4 py-2 rounded-xl transition-all duration-200"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block w-full hover:bg-white hover:text-[#4a0101] px-4 py-2 rounded-xl transition-all duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
