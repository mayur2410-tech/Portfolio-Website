// @flow strict
'use client';

import { useState, useEffect, useRef } from 'react';
import { certificates } from "@/utils/data/certificates";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import lottieFile from '../../../assets/lottie/education.json';
import AnimationLottie from "../../helper/animation-lottie";

function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollRef = useRef(null);

  const totalCertificates = certificates.length;

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCertificates);
      }, 3000); // Scroll every 3 seconds
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, totalCertificates]);

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalCertificates - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCertificates);
  };

  const getVisibleCertificates = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = totalCertificates + index;
      if (index >= totalCertificates) index = index - totalCertificates;
      visible.push({ cert: certificates[index], position: i });
    }
    return visible;
  };

  const visibleCertificates = getVisibleCertificates();

  return (
    <div id="certificates" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Section Divider"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Certificate Counter */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#1a1443] text-[#16f2b3] px-6 py-2 rounded-full text-sm font-medium">
          {currentIndex + 1} of {totalCertificates}
        </div>
      </div>

      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
              {visibleCertificates.map(({ cert, position }, idx) => (
                <div
                  key={cert.id}
                  className={`certificate-card absolute transition-all duration-500 ease-in-out ${
                    position === 0
                      ? 'z-30 scale-100 opacity-100'
                      : position === -1
                      ? 'z-20 scale-75 opacity-60 -translate-x-[70%] lg:-translate-x-[60%]'
                      : 'z-20 scale-75 opacity-60 translate-x-[70%] lg:translate-x-[60%]'
                  }`}
                  style={{
                    width: position === 0 ? 'clamp(300px, 45%, 500px)' : 'clamp(250px, 35%, 400px)',
                  }}
                >
                  <div className="relative bg-gradient-to-br from-[#101123] to-[#1a1443] border border-[#2a2e5a] rounded-xl overflow-hidden shadow-2xl hover:border-violet-500 transition-all duration-300">
                    {/* Certificate Image Container */}
                    <div className="relative aspect-[4/3] bg-[#0d1224] flex items-center justify-center p-6">
                      {/* Placeholder for certificate image - Replace with actual certificate images */}
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900/20 to-[#16f2b3]/20 rounded-lg border border-[#2a2e5a]">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-violet-500/20 rounded-full flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-[#16f2b3]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-400 text-xs">Certificate Preview</p>
                        </div>
                      </div>
                      {/* Uncomment below and comment above div when you have actual images */}
                       <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain"
                      /> 
                    </div>

                    {/* Certificate Info */}
                    <div className="p-6 text-center">
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                        {cert.title}
                      </h3>
                      {cert.description && (
                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                          {cert.description}
                        </p>
                      )}
                      <div className="flex items-center justify-center gap-2 text-xs text-[#16f2b3]">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrevious}
                className="bg-[#1a1443] hover:bg-violet-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous certificate"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="bg-[#1a1443] hover:bg-violet-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next certificate"
              >
                <FaChevronRight size={20} />
              </button>
            </div>

            {/* Auto-scroll indicator */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className="text-xs text-gray-400 hover:text-[#16f2b3] transition-colors duration-300"
              >
                {isAutoScrolling ? '⏸ Pause Auto-scroll' : '▶ Resume Auto-scroll'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
