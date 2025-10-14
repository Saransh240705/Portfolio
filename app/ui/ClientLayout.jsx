"use client";
import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already visited (for smoother experience on navigation)
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}
      <div className={isLoading ? "invisible" : "visible"}>
        {children}
      </div>
    </>
  );
}
