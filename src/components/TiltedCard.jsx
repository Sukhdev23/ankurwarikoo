import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const TiltedCard = ({
  imageSrc,
  altText,
  captionText,
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  rotateAmplitude = 12,
  scaleOnHover = 1.2,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent = null,
}) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        width: containerWidth,
        height: containerHeight,
        perspective: 1000,
        cursor: 'pointer',
      }}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: scaleOnHover }}
      animate={{ scale: 1 }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          rotateX,
          rotateY,
          background: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          position: 'relative',
        }}
        className="transition-shadow duration-300"
      >
        <img
          src={imageSrc}
          alt={altText}
          style={{ width: imageWidth, height: imageHeight, objectFit: 'cover' }}
          className="block mx-auto rounded-t-lg"
        />
        {captionText && (
          <div className="p-2 text-center font-semibold text-gray-800 bg-white/80">
            {captionText}
          </div>
        )}
        {displayOverlayContent && overlayContent && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {overlayContent}
          </div>
        )}
        {showTooltip && (
          <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            {altText}
          </div>
        )}
      </motion.div>
      {showMobileWarning && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-900 text-xs px-2 py-1 rounded shadow">
          Tilt effect works best on desktop
        </div>
      )}
    </motion.div>
  );
};

export default TiltedCard; 