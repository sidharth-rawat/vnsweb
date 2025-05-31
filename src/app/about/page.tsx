"use client";

import { motion } from "framer-motion";
import aboutUsImage from "../../assets/images/about-us.jpg";

export default function About() {
  return (
    <div className="min-h-screen">
     <div className="container mx-auto px-4 py-6">
  <section
    className="h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-md"
    style={{ backgroundImage: `url(${aboutUsImage.src})` }}
  ></section>
</div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 border border-gray-200 rounded-lg overflow-hidden p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-medium mb-6 text-[#17A2BB] text-center underline">
                Mission
              </h2>
              <p className="text-gray-600 mb-6 text-2xl">
                Our mission is to enable MSMEs and individuals to achieve their
                financial aspirations with tailored financing options. Combining
                deep expertise in both secured and unsecured financing and
                comprehensive service offerings, we help clients unleash their
                financial potential and seize opportunities for growth.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 border border-gray-200 rounded-lg overflow-hidden p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-medium mb-6 text-[#17A2BB] text-center underline">
                Vision
              </h2>
              <p className="text-gray-600 mb-6 text-2xl">
                To be a trusted partner for MSMEs and individuals, delivering
                innovative financing solutions that foster economic growth,
                business expansion, and financial resilience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-[#2B2B2B]  hover:text-[#17A2BB] hover:underline cursor-pointer"
          >
            Core Services
          </motion.h2>
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md my-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-[#17A2BB]">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    // icon: Lightbulb,
    title: "Project Financing for MSMEs:",
    description:
      "Customized funding options that empower businesses to scale operations, expand infrastructure, and drive growth.",
  },
  {
    // icon: Target,
    title: "Secured and Unsecured Loans:",
    description:
      "Since 2021, we have expanded our offerings to include unsecured loan options alongside secured products, providing clients with flexible.",
  },
  {
    // icon: Users,
    title: "Personal Loans:",
    description:
      "Tailored personal loans that cater to individual needs, whether for education, medical expenses, or personal projects.",
  },
  {
    // icon: Users,
    title: "Insurance Solutions:",
    description:
      "Comprehensive insurance options to safeguard businesses and individuals, providing security against unexpected events.",
  },
  {
    // icon: Users,
    title: "Government-Subsidized Policy Support:",
    description:
      "Leveraging expertise in government-backed financing, we guide clients to maximize benefits with lower interest rates and favorable terms..",
  },
];
