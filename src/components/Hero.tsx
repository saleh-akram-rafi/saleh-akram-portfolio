"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/Profile/profile.webp";

const validFrames: number[] = [];
for (let i = 0; i <= 70; i++) {
  if (i >= 45 && i <= 52) continue;
  validFrames.push(i);
}
const FRAME_COUNT = validFrames.length; // 63 frames

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Transform scroll 0-1 to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      const actualFrameNum = validFrames[i];
      const numStr = actualFrameNum.toString().padStart(2, "0");
      // Matches the exact filename convention in your public/sequence folder
      img.src = `/sequence/frame_${numStr}_delay-0.047s.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Draw the current frame on the canvas whenever the frame index changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const currentFrame = Math.round(latest);
    const img = images[currentFrame];

    if (img && img.complete) {
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);

      const renderWidth = img.width * ratio;
      const renderHeight = img.height * ratio;

      const x = (canvas.width - renderWidth) / 2;
      const y = (canvas.height - renderHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, renderWidth, renderHeight);
    }
  });

  // Handle canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      frameIndex.set(frameIndex.get() + 0.0001);
      setTimeout(() => frameIndex.set(frameIndex.get() - 0.0001), 0);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [frameIndex]);

  // Opacity & Y-Transforms for the 4 Views
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], ["0%", "-20%"]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], ["20%", "0%", "0%", "-20%"]);

  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], ["20%", "0%", "0%", "-20%"]);

  const opacity4 = useTransform(scrollYProgress, [0.8, 0.85, 0.95, 1], [0, 1, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.8, 0.85, 1], ["20%", "0%", "0%"]);

  return (
    <div ref={containerRef} className="h-[400vh] relative w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden">

        {/* Left Side: Profile & Text */}
        <div className="md:w-1/2 w-full flex flex-col justify-center relative p-8 lg:p-16 h-[55vh] md:h-full z-20 bg-[#121212] md:bg-transparent flex-shrink-0">
          <div className="flex flex-col w-full max-w-2xl mx-auto md:mx-0">
            {/* Profile Picture */}
            <Image
              src={profilePic}
              alt="Saleh Akram"
              className="w-48 md:w-64 h-auto rounded-2xl shadow-2xl border border-white/10 mb-8 z-20"
            />

            {/* Overlay Text Views Container */}
            <div className="relative w-full h-[250px] md:h-[300px]">

              {/* View 1 */}
              <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 w-full flex flex-col justify-start">
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFB067] pb-2">
                  Saleh Akram
                </h1>
                <p className="text-lg md:text-2xl mt-4 font-light text-gray-300 drop-shadow-md w-full">
                  B.Sc. Computer Science & Engineering Student at Daffodil International University.
                </p>
              </motion.div>

              {/* View 2 */}
              <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 w-full flex flex-col justify-start">
                <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFB067] pb-2">
                  Engineering the <br />Future
                </h2>
                <p className="text-base md:text-xl mt-4 text-gray-300 drop-shadow-md w-full">
                  Specializing in C, C++, Python, and full-stack database architecture.
                </p>
              </motion.div>

              {/* View 3 */}
              <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 w-full flex flex-col justify-start">
                <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFB067] pb-2">
                  Driven by <br />Innovation
                </h2>
                <p className="text-base md:text-xl mt-4 text-gray-300 drop-shadow-md w-full">
                  From academic research in IoT to building scalable tech startups.
                </p>
              </motion.div>

              {/* View 4 */}
              <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute inset-0 w-full flex flex-col justify-start">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFB067] pb-2">
                  Explore My Journey
                </h2>
                <p className="text-lg md:text-2xl mt-4 font-light text-gray-300 drop-shadow-md w-full">
                  Scroll down to dive into my technical arsenal and projects.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Side: Canvas Sequence */}
        <div className="md:w-1/2 w-full h-[45vh] md:h-full relative flex-1">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block opacity-70 object-cover"
          />
        </div>

      </div>
    </div>
  );
}
