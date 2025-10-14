"use client"; // required for hooks

import { useState, useEffect } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  const fullText = "Saransh"; // name to show
  const typeSpeed = 150; // ms per letter

  useEffect(() => {
    let index = 0;

    // Typewriter effect
    const typeInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) clearInterval(typeInterval);
    }, typeSpeed);

    // Hide loader after 10 seconds
    const timer = setTimeout(() => setLoading(false), 10000);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-4xl font-mono">
        {displayedText}
        <span className="animate-pulse">|</span> {/* blinking cursor */}
      </div>
    );
  }

  return (
    <div className="h-screen">
      {/* Your 3D element here */}
      <h1 className="text-2xl text-center mt-10">Your 3D scene is ready!</h1>
    </div>
  );
}