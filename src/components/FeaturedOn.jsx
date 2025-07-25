import { motion, useAnimation } from 'framer-motion';
import React, { useRef, useEffect } from "react";
const logos = [
  { url: 'https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/07/logo-1.png?resize=1280%2C305&ssl=1', alt: 'Forbes' },
  { url: 'https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/07/imageedit_3_8408235035.png?w=800&ssl=1', alt: 'Business Insider' },
  { url: 'https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/07/moneycontrol-logo-freelogovectors.net_.png?resize=1280%2C278&ssl=1', alt: 'YourStory' },
  { url: 'http://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/07/The_Economic_Times_logo.svg.png?resize=1280%2C113&ssl=1', alt: 'NDTV' },
  { url: 'https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/07/Mint_newspaper_logo.svg.png?resize=1280%2C453&ssl=1', alt: 'Times of India' },
  { url: 'https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/07/NDTV_logo.svg.png?w=1280&ssl=1', alt: 'The Economic Times' },
];

const FeaturedOn = () => {
  const marqueeRef = useRef(null);
  const controls = useAnimation();

  // Duplicate logos for seamless loop
  const marqueeLogos = [...logos, ...logos];

  useEffect(() => {
    let isHovered = false;
    let animation;
    const animate = async () => {
      const marqueeWidth = marqueeRef.current.scrollWidth / 2;
      while (!isHovered) {
        await controls.start({
          x: [-0, -marqueeWidth],
          transition: { duration: 18, ease: 'linear', repeat: 0 },
        });
        controls.set({ x: 0 });
      }
    };
    animate();
    const node = marqueeRef.current;
    const handleMouseEnter = () => {
      isHovered = true;
      controls.stop();
    };
    const handleMouseLeave = () => {
      isHovered = false;
      animate();
    };
    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
    // eslint-disable-next-line
  }, [controls]);

  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold mb-6 text-gray-700">As Featured On</h3>
        <div className="overflow-x-hidden w-full">
          <motion.div
            ref={marqueeRef}
            className="flex gap-12 items-center w-max"
            animate={controls}
            style={{ x: 0 }}
          >
            {marqueeLogos.map((logo, idx) => (
              <img
                key={logo.url + idx}
                src={logo.url}
                alt={logo.alt}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
                draggable={false}
                onError={e => e.currentTarget.style.display = 'none'}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn; 