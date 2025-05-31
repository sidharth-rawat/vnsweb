"use client";

import { motion } from "framer-motion";
import {
  RefreshCw,  
  BookOpen,
  ChartLine,
  Building2,
  ChartNoAxesColumn,
  House,
  IdCard,
  CirclePercent,
  DownloadIcon,
  Banknote,
  Settings,
  PersonStanding,
  Recycle,
} from "lucide-react";
import serviceImage from "../../assets/images/service-us.jpg";

export default function About() {
  return (
    <div className="min-h-screen">
     <div className="container mx-auto px-4 py-6">
        <section
          className="h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${serviceImage.src})` }}
        ></section>
      </div>
      {/* Main Content */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative   "
            >
              <h2 className="text-3xl font-medium mb-6 text-[#17A2BB] text-center underline">
                Our services
              </h2>
              <p className="text-gray-600 mb-6 text-xl">
                At VnS Solutions, we take pride in being your trusted partner
                for all your loan needs. Our comprehensive range of services is
                designed to simplify your journey to financial success. Whether
                you're looking for a personal loan, a business loan, equity
                financing or a mortgage, we've got you covered. Here's how we
                can help you:
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden my-8 hover:shadow-xl transition-shadow duration-300 "
              >
                <div className="p-6">
                  <div className="text-[#17A2BB] mb-4">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl text-[#17A2BB] font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 text-center ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative  rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-[#17A2BB] mb-4 flex justify-center">
                  <Recycle className="w-12 h-12" />
                </div>
                <h3 className="text-xl text-[#17A2BB] font-semibold mb-3">
                  Loan Re-Financing:
                </h3>
                <p className="text-gray-600 mb-4">
                  Looking to lower your interest rates or monthly payments? Our
                  loan refinancing services help you explore opportunities to
                  improve your financial situation.Loan refinancing is a smart
                  financial move for borrowers looking to optimize their
                  existing loans. By replacing your current loan with a new one,
                  refinancing can help you secure a lower interest rate, reduce
                  monthly payments, or adjust the loan term to better suit your
                  financial goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
const services = [
  {
    icon: Building2,
    title: "CGTSME Loans",
    description:
      "The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) is a scheme established by the Government of India in collaboration with the Small Industries Development Bank of India (SIDBI). It aims to provide collateral-free credit to Micro and Small Enterprises (MSEs), thereby facilitating easier access to finance for these businesses.",
  },
  {
    icon: ChartLine,
    title: "MSME Loans",
    description:
      "MSMEs benefit from government schemes like CGTMSE, Mudra Loans, and MSME Udyam Registration, which provide financial aid, subsidies, and tax benefits to support business growth. Let me know if you need details on specific schemes!",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Project Finance",
    description:
      "Every business reaches a point in its lifecycle where it requires sufficient capital for the next step in its growth journey. At VnS Solutions our experienced financial consultants help you unlock the power of your Equity and raise capital at fair valuation and favorable terms. Contact us for a seamless journey towards your required financing and achieve your growth potential.",
  },
  {
    icon: House,
    title: "Start Up Loan:",
    description:
      "Turning Vision into Reality: Fueling Your Start-up Journey” Starting a business from the ground up is an exciting, yet often capital-intensive endeavor. At VnS Solutions, we are dedicated to supporting aspiring entrepreneurs like you in transforming innovative ideas into thriving businesses. Our Start-up Loan service is your gateway to financial support, ensuring your start-up gets the resources it needs to flourish.",
  },
  {
    icon: RefreshCw,
    title: "Government Funding Policy:",
    description:
      "A Government Funding Policy refers to the structured approach by which a government allocates financial resources to support businesses, startups, industries, and social initiatives. Such as MSME policies,Start-up funding Women centeric policies, Industry based policies and more as offered by public banks on time to time bases.",
  },
  {
    icon: IdCard,
    title: "Business Loans:",
    description:
      "Entrepreneurs, startups, and established businesses can rely on our tailored business loan solutions. We understand the unique challenges of the business world and offer financing options to meet your specific needs.",
  },
  {
    icon: CirclePercent,
    title: "Bill Discounting:",
    description:
      "Bill Discounting is a financial service where a business sells its unpaid invoices (bills of exchange) to a bank or financial institution at a discounted rate to get immediate cash. This helps businesses manage cash flow and working capital efficiently.",
  },
  {
    icon: BookOpen,
    title: "Home Loans:",
    description:
      "Your dream home is within reach with our home loan services. We'll assist you in finding the right mortgage plan, whether you're a first-time homebuyer or looking to refinance your existing home. A home loan provides the financial support you need to purchase, build, or renovate your dream house, with options tailored to suit your needs and budget.",
  },
  {
    icon: DownloadIcon,
    title: "Export Financing:",
    description:
      "Export financing refers to various financial instruments and services designed to support businesses in exporting their goods or services to international markets. These solutions help exporters manage risks, improve cash flow, and provide working capital to fulfill export orders.",
  },

  {
    icon: Banknote,
    title: "Equity Financing",
    description:
      "Embarking on a new project or expanding an existing one often requires substantial financial backing. At VnS Solutions, we understand the challenges and opportunities that come with project financing. Our Project Loans are designed to provide the financial support you need to turn your vision into reality.",
  },

  {
    icon: Settings,
    title: "Lease Rental Discounting:",
    description:
      "Unlock the hidden potential of your leased assets with our Lease Rental Discontinuing service. At VnS Solutions, we understand that leases can be restrictive, and circumstances change. Our Lease Rental Discontinuing service empowers you to optimize your lease agreements, exit them when needed, and gain more financial flexibility.",
  },
  {
    icon: PersonStanding,
    title: "Loan Consultation/AMC::",
    description:
      "Not sure which loan is best for you? Our experienced financial advisors provide expert guidance and personalized consultation to match you with the loan that suits your requirements and financial goals. VnS Solutions is specialized in Annual Maintenance Contracts (AMCs), which provides tailored financial solutions for businesses seeking to manage and budget their maintenance expenses efficiently.",
  },
];
