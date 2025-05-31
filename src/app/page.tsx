"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import aboutUsImage from "../assets/images/1st.jpg";
import secondImage from "../assets/images/2nd.jpg";
import thirdImage from "../assets/images/3rd.jpg";
import axiosBankImage from "../assets/images/axios-bank.png";
import aditiyaBankImage from "../assets/images/aditya-bank.png";
import bajajBankImage from "../assets/images/bajaj-bank.png";
import detscheBankImage from "../assets/images/dectsche-bank.png";
import hdfcBankImage from "../assets/images/hdfc-bank.jpg";
import iciciBankImage from "../assets/images/icici-bank.jpg";
import poonamwaliBankImage from "../assets/images/poonawalia-bank.png";
import tataBankImage from "../assets/images/tata-capital.png";
import unionBankImage from "../assets/images/union-bank.png";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#17A2BB]">
                Unleash Your Finance Potential
              </h2>
              <h4 className="text-2xl font-bold mb-6 text-[#2B2B2B]">
                Smart Loan for a Smart Future
              </h4>

              {[
                "CGTSME Loans",
                "MSME Loans",
                "Project Financing",
                "Startup Loans",
                "Loan consultancy Services",
                "Government Funding Policy",
              ].map((item, index) => (
                <div key={index} className="text-gray-600 mb-4">
                  {item}
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-100"
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src={aboutUsImage}
                  alt="About Us"
                  className="object-cover w-[55%] h-fit mx-auto"
                  
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-100"
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src={secondImage}
                  alt="About Us"
                  className="object-cover w-[55%] h-fit mx-auto"
                  
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#17A2BB]">
                VnS Solutions: Turning Financial Challenges into Opportunities
              </h2>

              <motion.div
                className="text-gray-600 mb-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p>
                  Applying for a loan with us is straightforward and
                  hassle-free. Our experienced team is here to guide you through
                  every step of the process, ensuring that you find the best
                  loan option for your needs. Trust VnS Solutions to help you
                  turn your financial goals into reality, with the security and
                  confidence that comes from partnering with a reliable and
                  reputable financial institution. Let&apos;s build a legacy of
                  success together.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Company Overview */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#17A2BB]">
                Company Overview
              </h2>

              <motion.div
                className="text-gray-600 mb-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p>
                  VnS Solutions is a leading financial services provider with
                  expertise in both secured and unsecured policies since 2021,
                  committed to empowering Micro, Small, and Medium Enterprises
                  (MSMEs) and individual clients. Specializing in
                  government-subsidized policies and partnering with top
                  financial institutions like SBI, PNB, Union Bank, HDFC, Kotak,
                  and NBFCs such as Bajaj, Aditya Birla, and Hero, we offer
                  customized solutions that support business growth and personal
                  financial security.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-100"
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src={thirdImage}
                  alt="Company Overview"
          className="object-cover w-[55%] h-fit mx-auto"
                  
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Why Choose VNS Solutions */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-[#17A2BB]"
          >
            Why Choose VNS Solutions?
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#17A2BB]">
                  {index + 1}. {value.title}
                </h3>
                <p className="text-[#2B2B2B]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* OUR BANKING PARTNERS */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-[#17A2BB]"
          >
            OUR BANKING PARTNERS
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 ">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-6xl px-4">
                <Slider {...settings}>
                  {[
                    axiosBankImage,
                    hdfcBankImage,
                    detscheBankImage,
                    aditiyaBankImage,
                    bajajBankImage,
                    poonamwaliBankImage,
                    iciciBankImage,
                    tataBankImage,
                    unionBankImage,
                  ].map((src, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <Image
                        src={src}
                        alt={`Logo ${index}`}
                        width={100}
                        height={100}
                        objectFit="contain"
                        className="mx-auto"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: " Strong Financial Partnerships:",
    description:
      "Collaborating with leading financial institutions like SBI, PNB, Union Bank, HDFC, Kotak, Bajaj, Aditya Birla, Hero, and more, we offer a diverse range of financing solutions",
  },
  {
    title: "Experience in Secured and Unsecured Financing:",
    description:
      "With a focus on both secured and unsecured policies since 2021, we meet a wide range of business and personal financial needs.",
  },
  {
    title: "Commitment to Your Success",
    description:
      "With a mission to help clients unleash their financial potential, we prioritize long-term success and security at every step.",
  },
];
