"use client";

import { useState } from "react";
import { Minus, Square, X } from "lucide-react";
import Image from "next/image";
import Footer from "./Footer";


export default function ContactMeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyvK65OAAoac9-gHDXda_aop8u3XKmM6C1l3UKKpFKLnsFUwZA0DMOWulgs-zqOqxE4/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setStatus("Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        website: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Error submitting form. Try again.");
    }
  };

  return (
    <div className="overflow-x-hidden w-full">
        <div className="bg-[#4D81ED] h-[6rem] w-[6rem] sm:h-[8rem] sm:w-[8rem] md:h-[9rem] md:w-[9rem] -z-100 top-[60rem] sm:top-[75rem] md:top-[90rem] left-[8rem] sm:left-[15rem] md:left-[19rem] absolute rounded-full blur-[4rem] sm:blur-[5rem] md:blur-[6rem]" />
        <div className="bg-[#4D81ED] h-[6rem] w-[6rem] sm:h-[8rem] sm:w-[8rem] md:h-[9rem] md:w-[9rem] -z-100 top-[40rem] sm:top-[55rem] md:top-[65rem] right-[8rem] sm:right-[12rem] md:right-[15rem] absolute rounded-full blur-[4rem] sm:blur-[5rem] md:blur-[6rem]" />
      <div className="flex items-center relative m-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[57rem] justify-center mb-4 sm:mb-6 md:mb-8 px-4 sm:px-6">
        <div className="w-full m-auto">
          <div className="flex justify-between m-auto items-center rounded-tl-xl rounded-tr-xl border-white transparent border-[0.5px] h-8 sm:h-9 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[530px]">
            <span className="font-NeueMachina pl-2 text-white text-xs sm:text-sm">contact-me</span>
            <div className="flex gap-1 sm:gap-2 pr-2 items-center justify-center">
              <span className="text-white w-3 h-3 sm:w-4 sm:h-4">
                <Minus size={16} className="sm:w-4 sm:h-4 w-3 h-3" />
              </span>
              <span className="text-white w-3 h-3 sm:w-4 sm:h-4">
                <Square size={16} className="sm:w-4 sm:h-4 w-3 h-3" />
              </span>
              <span className="text-white w-3 h-3 sm:w-4 sm:h-4">
                <X size={16} className="sm:w-4 sm:h-4 w-3 h-3" />
              </span>
            </div>
          </div>
          <div className="border-white m-auto w-full text-white rounded-bl-xl rounded-br-xl transparent border-[0.5px] h-fit max-w-[320px] sm:max-w-[400px] md:max-w-[530px] p-3 sm:p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3">
              <div className="flex gap-2 mt-3 sm:mt-4 font-NeueMachina">
                <span className="code-content text-xs sm:text-sm">01</span>
                <label className="text-xs sm:text-sm">
                  full-name <span className="text-red-500">*</span>{" "}
                </label>
              </div>
              <input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-black border mb-3 sm:mb-4 border-white p-2 sm:p-2.5 rounded text-white placeholder-gray-400 font-NeueMachina text-xs sm:text-sm focus:border-[#4D81ED] focus:outline-none w-full"
              />
              <div className="flex gap-2 font-NeueMachina">
                <span className="code-content text-xs sm:text-sm">02</span>
                <label className="text-xs sm:text-sm">
                  email <span className="text-red-500">*</span>
                </label>
              </div>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-black border mb-3 sm:mb-4 border-white p-2 sm:p-2.5 rounded text-white placeholder-gray-400 font-NeueMachina text-xs sm:text-sm focus:border-[#4D81ED] focus:outline-none w-full"
              />
              <div className="flex gap-2 font-NeueMachina">
                <span className="code-content text-xs sm:text-sm">03</span>
                <label className="text-xs sm:text-sm">website</label>
              </div>
              <input
                name="website"
                type="url"
                placeholder="Your website"
                value={formData.website}
                onChange={handleChange}
                className="bg-black border mb-3 sm:mb-4 border-white p-2 sm:p-2.5 rounded text-white placeholder-gray-400 font-NeueMachina text-xs sm:text-sm focus:border-[#4D81ED] focus:outline-none w-full"
              />
              <div className="flex gap-2 font-NeueMachina">
                <span className="code-content text-xs sm:text-sm">04</span>
                <label className="text-xs sm:text-sm">company</label>
              </div>
              <input
                name="company"
                type="text"
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
                className="bg-black border mb-3 sm:mb-4 border-white p-2 sm:p-2.5 rounded text-white placeholder-gray-400 font-NeueMachina text-xs sm:text-sm focus:border-[#4D81ED] focus:outline-none w-full"
              />
              <div className="flex gap-2 font-NeueMachina">
                <span className="code-content text-xs sm:text-sm">05</span>
                <label className="text-xs sm:text-sm">
                  message <span className="text-red-500">*</span>
                </label>
              </div>
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="bg-black border mb-3 sm:mb-4 border-white p-2 sm:p-2.5 rounded text-white placeholder-gray-400 font-NeueMachina text-xs sm:text-sm focus:border-[#4D81ED] focus:outline-none resize-none w-full min-h-[60px] sm:min-h-[80px]"
              />
              <button
                type="submit"
                className="bg-black border cursor-pointer flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 w-fit m-auto font-NeueMachina text-white rounded hover:bg-[#4D81ED] transition-colors duration-200 text-xs sm:text-sm gap-1 sm:gap-2"
              >
                send-it-over!
                <Image
                  src="/assets/Mail.svg"
                  alt="contact-me"
                  width={16}
                  height={16}
                  className="hover:opacity-80 sm:w-[18px] sm:h-[18px] w-4 h-4"
                />
              </button>
              {status && (
                <p className="font-NeueMachina text-xs sm:text-sm text-center text-gray-300 mt-2">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
