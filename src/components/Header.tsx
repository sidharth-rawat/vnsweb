"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Navigation mapping to handle URL routing correctly
  const navigationMap: Record<string, string> = {
    Home: "/",
    Services: "/services",
    About: "/about",
    Contact: "/contact",
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <header className="fixed w-full h-16 md:h-20 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <nav className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link
            href="https://blinq.me/t2J2SGFGN2wF"
            className="text-xl sm:text-2xl font-bold text-[#17A2BB] hover:underline"
          >
            VnS SOLUTIONS
          </Link>
        </nav>
      </header>
    );
  }

  return (
    <>
      {/* Add CSS custom property for header height */}
      <style jsx global>{`
        :root {
          --header-height: 4rem; /* 64px for mobile */
        }
        @media (min-width: 768px) {
          :root {
            --header-height: 5rem; /* 80px for desktop */
          }
        }
      `}</style>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 w-full h-16 md:h-20 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-white/20"
      >
        <nav className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="https://blinq.me/t2J2SGFGN2wF"
                className="text-xl sm:text-2xl font-bold text-[#17A2BB] transition-colors hover:underline"
              >
                VnS SOLUTIONS
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center space-x-6 lg:space-x-8"
            >
              <Link
                href="/"
                className="text-[#2B2B2b]  transition-colors duration-200 text-sm lg:text-base font-medium hover:text-[#17A2BB] hover:underline"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-[#2B2B2b]  transition-colors duration-200 text-sm lg:text-base font-medium hover:text-[#17A2BB] hover:underline"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-[#2B2B2b]  transition-colors duration-200 text-sm lg:text-base font-medium hover:text-[#17A2BB] hover:underline"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#2B2B2b]  transition-colors duration-200 text-sm lg:text-base font-medium hover:text-[#17A2BB] hover:underline"
              >
                Contact
              </Link>
              <Link
                href="https://www.cgtmse.in/"
                className="text-[#2B2B2b]  transition-colors duration-200 text-sm lg:text-base font-medium hover:text-[#17A2BB] hover:underline"
              >
                CGTMSE
              </Link>
              <Link
                href="https://www.mudra.org.in/"
                className="text-[#2B2B2b]  transition-colors duration-200 text-sm lg:text-base font-medium hover:text-[#17A2BB] hover:underline"
              >
                Mudra
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-[#2B2B2b]  transition-colors p-2 rounded-lg "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-3">
                    {["Home", "Services", "About", "Contact"].map((item) => (
                      <motion.div
                        key={item}
                        variants={menuItemVariants}
                        whileHover={{ x: 10 }}
                      >
                        <Link
                          href={navigationMap[item]}
                          className="text-[#2B2B2b]  block py-3 px-2 font-medium transition-colors duration-200  rounded-lg hover:text-[#17A2BB] hover:underline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}
