import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Certificates from "./components/homepage/certificates";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import YouTube from "./components/homepage/youtube";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export const metadata = {
  title: "Home",
  description: "Mayur Arvind Waykar - Professional Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and AWS. View my projects, experience, and get in touch for collaboration.",
};

export default async function Home() {
  const blogs = await getData();
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mayur Arvind Waykar",
    "alternateName": "Mayur Waykar",
    "url": "https://mayurwaykar.vercel.app",
    "image": "https://mayurwaykar.vercel.app/profile.jpg",
    "jobTitle": "Full Stack Developer",
    "description": "Professional Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and modern web technologies",
    "sameAs": [
      "https://github.com/mayur2410-tech",
      "https://www.linkedin.com/in/mayur-a-waykar/",
      "https://x.com/Mayur_A_Waykar",
      "https://leetcode.com/u/Mayur2410-tech"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "MySQL",
      "AWS",
      "Docker",
      "Full Stack Development",
      "Web Development"
    ],
    "email": "mailto:mayurwaykar9@gmail.com",
    "telephone": "+918080853186",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <YouTube />
      <ContactSection />
    </div>
    </>
  )
};