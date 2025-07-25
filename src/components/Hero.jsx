import React from "react";
import { ArrowRight, Globe } from "lucide-react";
import CircularTextCard from "./CircularTextCard";

// Utility for merging class names (simple version)
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const WrapButton = ({ className, children, href }) => {
  return (
    <div className="flex items-center justify-center">
      {href ? (
        <a href={href}>
          <div
            className={cn(
              "group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2  h-[64px] flex items-center p-[11px] rounded-full",
              className
            )}
          >
            <div className="border border-[#3B3A3A] bg-[#ff3f17]  h-[43px] rounded-full flex items-center justify-center text-white">
              <p className="font-medium tracking-tight mr-3 ml-2 flex items-center gap-2 justify-center ">
                {children}
              </p>
            </div>
            <div className="text-[#3b3a3a] group-hover:ml-2  ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]  ">
              <ArrowRight
                size={18}
                className="group-hover:rotate-45 ease-in-out transition-all "
              />
            </div>
          </div>
        </a>
      ) : (
        <div
          className={cn(
            "group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2  h-[64px] flex items-center p-[11px] rounded-full",
            className
          )}
        >
          <div className="border border-[#3B3A3A] bg-[#fe7500]  h-[43px] rounded-full flex items-center justify-center text-white">
            <Globe className="mx-2 animate-spin " />
            <p className="font-medium tracking-tight mr-3">
              {children ? children : "Get Started"}
            </p>
          </div>
          <div className="text-[#3b3a3a] group-hover:ml-2  ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]  ">
            <ArrowRight
              size={18}
              className="group-hover:rotate-45 ease-in-out transition-all "
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Hero = () => (
  <section
    id="home"
    className="relative flex flex-col md:flex-row items-center justify-center min-h-[100vh] bg-cover bg-center text-white"
    style={{ backgroundImage: "url('https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/06/DSC00977-scaled-1.webp')" }}
  >
    {/* Optional overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/40" />

    <div className="relative z-10 ml-2 px-4 flex flex-col items-center md:items-start md:justify-center w-full md:w-3/2 h-full text-center md:text-left">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg">
        <span className="block">
          <span className="bg-gradient-to-r from-[#00F2FE] via-[#4facfe] to-[#43e97b] bg-clip-text text-transparent animate-gradient-x">awareness</span>
        </span>
        <span className="block mt-2 relative">
          is <span className="inline-block relative">
            <span className="bg-gradient-to-r from-[#f7971e] via-[#ffd200] to-[#f7971e] bg-clip-text text-transparent drop-shadow-lg">everything</span>
            <span className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-[#f7971e] via-[#ffd200] to-[#f7971e] rounded-full animate-underline" />
          </span>
        </span>
      </h1>

      <p className="text-lg md:text-2xl max-w-2xl mb-8 text-white/90 drop-shadow-md">
        Make sure all the choices you make in life come from a point of <span className="font-semibold text-brand-teal">awareness</span> and not ignorance.
      </p>

      <div className="flex justify-center md:justify-center w-full">
        <WrapButton>Get Started</WrapButton>
      </div>
      <div className="block md:hidden mt-8">
        <CircularTextCard text="INSPIRE • CREATE • INNOVATE • " spinDuration={18} />
      </div>
    </div>
    {/* Show CircularTextCard on the right for desktop/tablet */}
    <div className="hidden md:flex flex-1 items-center justify-center relative z-10">
      <CircularTextCard text="INSPIRE • CREATE • INNOVATE • " spinDuration={18} />
    </div>
    <style>{`
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 3s ease-in-out infinite;
      }
      @keyframes underline {
        0%, 100% { width: 0; opacity: 0.5; }
        50% { width: 100%; opacity: 1; }
      }
      .animate-underline {
        animation: underline 2.5s cubic-bezier(0.4,0,0.2,1) infinite;
      }
    `}</style>
  </section>
);

export default Hero; 