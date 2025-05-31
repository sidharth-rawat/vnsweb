"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black py-6 border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} VnS solution
        </div>

        <nav className="flex space-x-6 text-sm lg:text-base font-medium">
          <Link
            href="/about"
            className="transition-colors duration-200 text-sm lg:text-base font-medium hover:text-[#17A2BB] hover:underline"
          >
            About
          </Link>
          <Link
            href="https://www.linkedin.com/posts/sagar-pasi-062108317_act-smart-brief-top-financial-strategies-activity-7252929482020306944-X9CM"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 text-sm lg:text-base font-medium hover:text-[#17A2BB] hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href="/services"
            className="transition-colors duration-200 text-sm lg:text-base font-medium hover:text-[#17A2BB] hover:underline"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="transition-colors duration-200 text-sm lg:text-base font-medium hover:text-[#17A2BB] hover:underline"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
