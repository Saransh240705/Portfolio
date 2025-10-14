'use client';
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export default function Planet() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[900px]">
        <Spline
          scene="https://prod.spline.design/4lrgi-98HtAKLM9g/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            minHeight: 'inherit'
          }}
        />
      </div>
    </div>
  );
}
