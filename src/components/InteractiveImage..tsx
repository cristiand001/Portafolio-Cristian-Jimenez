"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

interface InteractiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function InteractiveImage({
  src,
  alt,
  className = "",
}: InteractiveImageProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(x, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(y, { stiffness: 120, damping: 20 });
  const scale = useSpring(1, { stiffness: 150, damping: 10 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const percentX = offsetX / rect.width - 0.5;
    const percentY = offsetY / rect.height - 0.5;

    const newX = percentY * -15;
    const newY = percentX * 15;

    x.set(newX);
    y.set(newY);
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      className="w-full flex justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 1000,
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`rounded-2xl shadow-xl w-full h-full object-cover ${className}`}
      />
    </motion.div>
  );
}
