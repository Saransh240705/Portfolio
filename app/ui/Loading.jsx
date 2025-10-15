"use client";

import { useState, useEffect } from "react";
import Home from "./Home";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  const fullText = "Saransh"; 
  const typeSpeed = 150; 
  const extraDelayAfterTyping = 1500; 

  useEffect(() => {
    let index = 0;

    const typeInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;

      if (index === fullText.length) {
        clearInterval(typeInterval);
        setTimeout(() => setLoading(false), extraDelayAfterTyping);
      }
    }, typeSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-4xl font-mono">
        {displayedText}
        <span className="animate-pulse">|</span>
      </div>
    );
  }

  return (
    <div className="h-screen">
      
    </div>
  );
}
