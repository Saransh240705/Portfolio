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
    <div>
        <div className="bg-[#4D81ED] h-[9rem] w-[9rem] -z-100 top-[90rem]  left-[19rem] absolute rounded-full blur-[6rem]" />
        <div className="bg-[#4D81ED] h-[9rem] w-[9rem] -z-100 top-[65rem] right-[15rem] absolute rounded-full blur-[6rem]" />
      <div className="flex items-center relative m-auto w-[57rem] justify-center mb-15">
        <div className="w-full m-auto">
          <div className="flex justify-between m-auto items-center rounded-tl-xl rounded-tr-xl border-white transparent border-[0.5px] h-9 max-w-[530px]">
            <span className="font-NeueMachina pl-2 text-white">contact-me</span>
            <div className="flex gap-2 pr-2 items-center justify-center">
              <span className="text-white">
                <Minus />
              </span>
              <span className="text-white">
                <Square />
              </span>
              <span className="text-white">
                <X />
              </span>
            </div>
          </div>
          <div className="border-white m-auto w-full text-white rounded-bl-xl rounded-br-xl transparent border-[0.5px] h-fit max-w-[530px] p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex gap-2 mt-4 font-NeueMachina">
                <span className="code-content -pl-6">01</span>
                <label>
                  full-name <span className="text-red-500">*</span>{" "}
                </label>
              </div>
              <input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-black border mb-4 border-white p-2 rounded text-white placeholder-gray-400 font-NeueMachina text-sm focus:border-[#4D81ED] focus:outline-none"
              />
              <div className="flex gap-2 font-NeueMachina">
                <span className="code-content">02</span>
                <label>
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
                className="bg-black border mb-4 border-white p-2 rounded text-white placeholder-gray-400 font-NeueMachina text-sm focus:border-[#4D81ED] focus:outline-none"
              />
              <div className="flex gap-2 font-NeueMachina">
                <span className="code-content">03</span>
                <label>website</label>
              </div>
              <input
                name="website"
                type="url"
                placeholder="Your website"
                value={formData.website}
                onChange={handleChange}
                className="bg-black border mb-4 border-white p-2 rounded text-white placeholder-gray-400 font-NeueMachina text-sm focus:border-[#4D81ED] focus:outline-none"
              />
              <div className="flex gap-2 font-NeueMachina">
                <span className="code-content">04</span>
                <label>company</label>
              </div>
              <input
                name="company"
                type="text"
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
                className="bg-black border mb-4 border-white p-2 rounded text-white placeholder-gray-400 font-NeueMachina text-sm focus:border-[#4D81ED] focus:outline-none"
              />
              <div className="flex gap-2 font-NeueMachina">
                <span className="code-content">05</span>
                <label>
                  message <span className="text-red-500">*</span>
                </label>
              </div>
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-black border mb-4 border-white p-2 rounded text-white placeholder-gray-400 font-NeueMachina text-sm focus:border-[#4D81ED] focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="bg-black border cursor-pointer flex items-center justify-center pl-4 pr-4 w-fit m-auto font-NeueMachina text-white p-2 rounded hover:bg-[#4D81ED] transition-colors duration-200 text-sm"
              >
                send-it-over!
                <Image
                  src="/assets/Mail.svg"
                  alt="contact-me"
                  width={18}
                  height={18}
                  className="hover:opacity-80"
                />
              </button>
              {status && (
                <p className="font-NeueMachina text-sm text-center text-gray-300">
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
