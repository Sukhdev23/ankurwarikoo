import React, { useState, useEffect } from "react";
import CardSwap, { Card } from "./CardSwap";
import RotatingText from "./RotatingText";

const rotatingPhrases = [
  "Learn. Grow. Succeed.",
  "Transform your mindset.",
  "Master productivity.",
  "Build your brand.",
  "Achieve financial freedom.",
];

const courses = [
  {
    title: 'WebVeda',
    desc: 'Online education startup by Ankur Warikoo. Learn life, money, and career skills.',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', // CDN placeholder image
    link: '#',
  },
  {
    title: 'All Courses',
    desc: 'Explore all courses by Ankur Warikoo on entrepreneurship, money, and life.',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    link: '#',
  },
  {
    title: 'Productivity Mastery',
    desc: 'Master productivity with actionable frameworks and daily habits for success.',
    img: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
    link: '#',
  },
  {
    title: 'Personal Branding',
    desc: 'Build your personal brand and grow your influence online and offline.',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    link: '#',
  },
];

function useResponsiveCardSwapSize() {
  const [size, setSize] = useState({ width: 320, height: 260 });
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setSize({ width: 320, height: 260 });
      } else {
        setSize({ width: 350, height: 320 });
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}

const Courses = () => {
  const { width, height } = useResponsiveCardSwapSize();
  return (
    <section id="courses" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center min-h-[420px] gap-8">
        {/* Left: Creative Text */}
        <div className="flex-1 flex flex-col justify-center items-start mb-8 md:mb-0 md:pl-8 lg:pl-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="block text-neutral-900">Level Up Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500">Skills, Mindset & Success</span>
          </h2>
          <div className="mb-4">
            <RotatingText
              texts={rotatingPhrases}
              mainClassName="text-2xl md:text-3xl font-bold text-indigo-700"
              rotationInterval={2200}
              staggerDuration={0.03}
              splitBy="characters"
            />
          </div>
          <p className="text-lg text-neutral-800 mb-4 max-w-md">
            Transform your life, career, and mindset with practical, actionable courses designed for real-world impact. Whether you want to master productivity, build your brand, or learn money skills, there’s a course for you.
          </p>
          <ul className="list-disc pl-5 text-blue-700 space-y-1">
            <li>Real-life frameworks & tools</li>
            <li>Actionable lessons, not just theory</li>
            <li>Community & mentorship</li>
          </ul>
        </div>
        {/* Right: CardSwap */}
        <div className="flex-1 relative min-h-[120px] lg:min-h-[320px] sm:min-h-[250px] md:w-auto flex justify-center md:justify-center lg:mr-56 md:mt-0">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto md:h-[400px] lg:h-[320px]">
            <CardSwap width={width} height={height} cardDistance={60} verticalDistance={40} delay={3500} skewAmount={6}>
              {courses.map((course) => (
                <Card key={course.title} customClass="flex flex-col items-center justify-center p-4 sm:p-6 cursor-pointer w-full h-auto md:h-[400px] lg:h-[500px]">
                  <a href={course.link} className="flex flex-col items-center w-full h-full">
                    <img src={course.img} alt={course.title} className="h-20 w-20 sm:h-24 sm:w-24 object-contain mb-4 mx-auto" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center text-white">{course.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm text-center">{course.desc}</p>
                  </a>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses; 