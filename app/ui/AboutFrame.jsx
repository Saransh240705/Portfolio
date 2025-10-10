"use client";


import { Minus, Square, X } from "lucide-react";

// Register the Draggable plugin

const AboutFrame = () => {
  

  return (
    <div>
      <div>
        <div className="flex justify-between items-center rounded-tl-xl rounded-tr-xl border-white bg-black border-[0.5px] h-9 w-[700px] cursor-move">
          <span className="font-NeueMachina pl-2 text-white">about-me</span>
          <div className="flex gap-2 pr-2  items-center justify-center">
            <span className="text-white">
              <Minus />
            </span>
            <span className=" text-white">
              <Square />
            </span>
            <span className="text-white">
              <X />
            </span>
          </div>
        </div>
        <div className="border-white text-white rounded-bl-xl rounded-br-xl bg-black border-[0.5px] h-[25rem] max-w-[700px]">
          <ol className="list-decimal p-4 font-NeueMachina pt-2 text-[15px] pl-6 w-fit max-w-[700px]">
            <li>
              Hi, I’m <span className="code-green">Saransh</span> — a freelance <span className="code-blue">Full-Stack Web Developer</span> passionate
              about building digital experiences that balance <span className="code-yellow">creativity and
              technical depth.</span> 
            </li>
            <li>
              My skills sit at the intersection of modern <span className="text-highlighted">front-end development</span> 
              and <span className="code-red">robust back-end </span>engineering, allowing me to deliver projects
              that are both visually engaging and technically sound.
            </li>
            <li>
              I integrate  <span className="code-purple">smooth animations, micro-interactions, and
              performance-focused logic</span> to ensure websites feel dynamic,
              intuitive, and memorable.
            </li>
            <li>
              I write <span className="code-yellow">clean, scalable, and well-structured code</span>, keeping in mind
              <span className="code-aqua">accessibility, performance optimization, and technical SEO</span>, while
              collaborating closely with designers to achieve a polished final
              product.
            </li>
            <li>
              My core technologies include <span className="text-highlighted"> JavaScript (ES6+), React,
              TailwindCSS, Node.js, Express, Django, and REST APIs</span>, alongside
              database management with<span className="text-highlighted"> MongoDB and SQL</span>.
            </li>
            <li>
              I work with the <span className="code-red">JAMstack paradigm</span> and enjoy handling the full
              pipeline — from <span className="code-blue">CMS configuration and API integration to
              deployment</span> on cloud platforms like <span className="code-red">Vercel</span> and <span className="code-red">Netlify</span>.
            </li>
            <li>
              Beyond development, I focus on <span className="code-red">web performance, scalability, and
              cloud readiness</span>, ensuring products are future-proof and impactful.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutFrame;
