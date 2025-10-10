'use client';
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export default function Planet() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/4lrgi-98HtAKLM9g/scene.splinecode" 
      />
    </main>
  );
}
