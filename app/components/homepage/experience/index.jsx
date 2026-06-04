// // @flow strict

// import { experiences } from "@/utils/data/experience";
// import Image from "next/image";
// import { BsPersonWorkspace } from "react-icons/bs";
// import experience from '../../../assets/lottie/code.json';
// import AnimationLottie from "../../helper/animation-lottie";
// import GlowCard from "../../helper/glow-card";

// function Experience() {
//   return (
//     <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
//       <Image
//         src="/section.svg"
//         alt="Section Divider"
//         width={1572}
//         height={795}
//         className="absolute top-0 -z-10"
//       />

//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex  items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
//             Experiences
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
//           <div className="flex justify-center items-start">
//             <div className="w-full h-full">
//               <AnimationLottie animationPath={experience} />
//             </div>
//           </div>

//           <div>
//             <div className="flex flex-col gap-6">
//               {
//                 experiences.map(experience => (
//                   <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
//                     <div className="p-3 relative">
//                       <Image
//                         src="/blur-23.svg"
//                         alt="Background Effect"
//                         width={1080}
//                         height={200}
//                         className="absolute bottom-0 opacity-80"
//                       />
//                       <div className="flex justify-center">
//                         <p className="text-xs sm:text-sm text-[#16f2b3]">
//                           {experience.duration}
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-x-8 px-3 py-5">
//                         <div className="text-violet-500  transition-all duration-300 hover:scale-125">
//                           <BsPersonWorkspace size={36} />
//                         </div>
//                         <div>
//                           <p className="text-base sm:text-xl mb-2 font-medium uppercase">
//                             {experience.title}
//                           </p>
//                           <p className="text-sm sm:text-base">
//                             {experience.company}
//                           </p>
//                         </div>
//                       </div>

//                       {/* Responsibilities */}
//                       {experience.responsibilities && (
//                         <div className="px-3 py-3">
//                           <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
//                             {experience.responsibilities.map((responsibility, index) => (
//                               <li key={index} className="leading-relaxed">
//                                 {responsibility}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}

//                       {/* Skills */}
//                       {experience.skills && experience.skills.length > 0 && (
//                         <div className="px-3 py-3">
//                           <div className="flex flex-wrap gap-2">
//                             {experience.skills.map((skill, index) => (
//                               <span 
//                                 key={index}
//                                 className="bg-[#1a1443] text-[#16f2b3] text-xs sm:text-sm px-3 py-1 rounded-full border border-[#16f2b3]/30"
//                               >
//                                 {skill}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </GlowCard>
//                 ))
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import experience from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Section Divider"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
              <div className="mt-6 grid grid-cols-2 gap-4 px-4">
  <div className="rounded-xl border border-[#25213b] bg-[#0d1224]/80 p-4 text-center shadow-lg backdrop-blur-md">
    <h3 className="text-2xl font-bold text-[#16f2b3]">1+</h3>
    <p className="mt-1 text-xs sm:text-sm text-gray-400">Years Experience</p>
  </div>

  <div className="rounded-xl border border-[#25213b] bg-[#0d1224]/80 p-4 text-center shadow-lg backdrop-blur-md">
    <h3 className="text-2xl font-bold text-violet-400">5+</h3>
    <p className="mt-1 text-xs sm:text-sm text-gray-400">Projects Delivered</p>
  </div>

  <div className="rounded-xl border border-[#25213b] bg-[#0d1224]/80 p-4 text-center shadow-lg backdrop-blur-md">
    <h3 className="text-2xl font-bold text-[#16f2b3]">40%</h3>
    <p className="mt-1 text-xs sm:text-sm text-gray-400">Faster Deployment</p>
  </div>

  <div className="rounded-xl border border-[#25213b] bg-[#0d1224]/80 p-4 text-center shadow-lg backdrop-blur-md">
    <h3 className="text-2xl font-bold text-violet-400">35%</h3>
    <p className="mt-1 text-xs sm:text-sm text-gray-400">Less Manual Work</p>
  </div>
</div>

<div className="mt-5 rounded-2xl border border-[#25213b] bg-[#0d1224]/80 p-5 mx-4 shadow-lg backdrop-blur-md">
  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
    I build scalable frontend interfaces and automate deployment workflows using
    modern DevOps practices, focusing on performance, reliability, and clean user experience.
  </p>

  <div className="mt-4 flex flex-wrap gap-2">
    {["React.js","React Native","Node js", "Next.js", "Docker", "Kubernetes", "CI/CD", "Linux"].map(
      (skill) => (
        <span
          key={skill}
          className="rounded-full border border-[#16f2b3]/30 bg-[#16f2b3]/10 px-3 py-1 text-xs text-[#16f2b3]"
        >
          {skill}
        </span>
      )
    )}
  </div>
</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="relative pl-8 sm:pl-12">
              {/* Vertical Line */}
              <div className="absolute left-3 sm:left-5 top-0 h-full w-[2px] bg-gradient-to-b from-[#16f2b3] via-violet-500 to-transparent"></div>

              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className="relative mb-10 last:mb-0 group"
                >
                  {/* Timeline Icon */}
                  <div className="absolute -left-[34px] sm:-left-[42px] top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#16f2b3]/50 bg-[#0d1224] text-[#16f2b3] shadow-[0_0_20px_rgba(22,242,179,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:border-violet-500 group-hover:text-violet-400">
                    <BsPersonWorkspace size={20} />
                  </div>

                  {/* Timeline Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#25213b] bg-[#0d1224]/80 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#16f2b3]/60 hover:shadow-[0_0_30px_rgba(22,242,179,0.12)]">
                    <Image
                      src="/blur-23.svg"
                      alt="Background Effect"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 left-0 -z-10 opacity-60"
                    />

                    {/* Duration */}
                    <div className="mb-3 inline-flex rounded-full border border-[#16f2b3]/30 bg-[#16f2b3]/10 px-3 py-1">
                      <span className="text-xs sm:text-sm font-medium text-[#16f2b3]">
                        {experience.duration}
                      </span>
                    </div>

                    {/* Title and Company */}
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold uppercase text-white">
                        {experience.title}
                      </h3>

                      <p className="mt-1 text-sm sm:text-base font-medium text-violet-400">
                        {experience.company}
                      </p>

                      {experience.location && (
                        <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                          <FaLocationDot size={13} />
                          <span>{experience.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Responsibilities */}
                    {experience.responsibilities && (
                      <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                        {experience.responsibilities.map(
                          (responsibility, index) => (
                            <li
                              key={index}
                              className="flex gap-2 leading-relaxed"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16f2b3]"></span>
                              <span>{responsibility}</span>
                            </li>
                          )
                        )}
                      </ul>
                    )}

                    {/* Skills */}
                    {experience.skills && experience.skills.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs sm:text-sm text-violet-300 transition-all duration-300 hover:border-[#16f2b3]/50 hover:text-[#16f2b3]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;