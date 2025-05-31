"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
// import { useContactMutation, ContactFormData } from "@/hooks/useContactMutation";
import emailjs from "emailjs-com";

export default function Contact() {
  // const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  // const mutation = useContactMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({});
    setErrors({});

    // Remove empty optional fields
    const formDataToSubmit = {
      ...formData,
    };
    console.log("formDataToSubmit", formDataToSubmit);

    try {
      emailjs
        .send(
          "service_j2za09s",
          "template_e7fmxpr",
          formDataToSubmit,
          "OhgVnoQfBKEvy5FjU",
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            setSubmitStatus({
              success: true,
              message: "Email sent successfully",
            });
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
            setSelectedFiles([]);
          },
          (error) => {
            console.log("Failed to send email:", error.text);
            setSubmitStatus({
              success: false,
              message: error.message,
            });
          },
        );
    } catch (error) {
      // try {
      //   const response = await mutation.mutateAsync(formDataToSubmit);

      //   if (response.success) {
      //     setSubmitStatus({
      //       success: true,
      //       message: response.message
      //     });
      //     // Reset form after successful submission
      // setFormData({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   service: "",
      //   message: "",
      //   cc: "",
      //   bcc: "",
      //   attachments: [],
      // });
      // setSelectedFiles([]);
      //   } else {
      //     // Handle validation errors
      //     if (response.errors) {
      //       const newErrors: Record<string, string> = {};
      //       response.errors.forEach(error => {
      //         newErrors[error.field] = error.message;
      //       });
      //       setErrors(newErrors);
      //     }
      // setSubmitStatus({
      //   success: false,
      //   message: response.message
      // });
      //   }
      // }
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.",
      });
    }
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = Array.from(e.target.files || []);
  //   setSelectedFiles(prev => [...prev, ...files]);
  // };

  // const removeFile = (index: number) => {
  //   setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  // };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
  
    <div className="pb-20">
      {/* Hero Section */}

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 text-[#17A2BB]"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {/* Status message */}
              {submitStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.success ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#17A2BB] focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#17A2BB] focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#17A2BB] focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service Interested In{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#17A2BB] focus:border-transparent ${
                      errors.service ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="personal-loan">Personal loan</option>
                    <option value="car-loan">Car loan</option>
                    <option value="bank-loan">Bank loan</option>
                    <option value="home-loan">Home loan</option>
                    <option value="government-msme-loan">
                      Government MSME loans
                    </option>
                    <option value="other-loans">Other loans</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#17A2BB] focus:border-transparent ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Optional Fields Section */}
               

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  // disabled={mutation.isPending}
                  className="w-full bg-[#17A2BB] text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 disabled:bg-purple-400 disabled:cursor-not-allowed"
                >
                  {/* {mutation.isPending ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <> */}
                  <Send className="w-5 h-5" />
                  Send Message
                  {/* </>
                  )} */}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#17A2BB]">
                  Contact Information
                </h2>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 mt-2">
                    At VnS Solutions, we take pride in being your trusted
                    partner for all your loan needs.
                  </p>
                  <p className="text-gray-600 mt-2">
                    Our comprehensive range of services is designed to simplify
                    your journey to financial success.
                  </p>
                  <p className="text-gray-600 mt-2">
                    Whether you're looking for a personal loan, a business loan,
                    equity financing or a mortgage, we've got you covered.
                  </p>
                  <p className="text-gray-600 mt-2">
                    Get in touch with our team to discuss how we can help your
                    business achieve its financial goals.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#17A2BB] mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#17A2BB]">Address</h3>
                      <a
                        href="https://maps.app.goo.gl/vwMZuyBHBYPhfodp8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#17A2BB] transition-colors cursor-pointer"
                      >
                        B-98 Noida sec-02, UP-201301 Near Noida Sector 15 Metro
                        Station
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-[#17A2BB] mr-3" />
                    <div>
                      <h3 className="font-semibold text-[#17A2BB]">Phone</h3>
                      <a
                        href="tel:+7042177704"
                        className="text-gray-600 hover:text-[#17A2BB] transition-colors cursor-pointer"
                      >
                        +91 7042177704
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-[#17A2BB] mr-3" />
                    <div>
                      <h3 className="font-semibold text-[#17A2BB]">Email</h3>
                      <a
                        href="mailto:vnssolution3189@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#17A2BB] transition-colors cursor-pointer"
                      >
                        vnssolution3189@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1751.728632449532!2d77.316117!3d28.586056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458bb3ecf7b%3A0x391d9d72e2254689!2s98%2C%20B%20Block%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1748672201683!5m2!1sen!2sin"
                style={{ border: "0", width: "100%", height: "300px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
