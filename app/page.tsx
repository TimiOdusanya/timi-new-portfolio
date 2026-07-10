"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Timilehin Odusanya",
  alternateName: ["Timi Odusanya", "TimiOdusanya"],
  url: "https://timiodusanya.vercel.app",
  image: "https://timiodusanya.vercel.app/jsm-logo.png",
  jobTitle: "Senior Full Stack & AI Engineer",
  description:
    "Senior Full Stack & AI Engineer with 6+ years building production-grade, AI-powered platforms across Fintech, HRTech, and TravelTech. Expert in React, Next.js, TypeScript, Node.js, Python, and AWS.",
  email: "timmycruz36@gmail.com",
  telephone: "+2348146414524",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    "https://github.com/TimiOdusanya",
    "https://www.linkedin.com/in/timi-odusanya/",
    "https://twitter.com/timi_odusanya",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "Python",
    "FastAPI",
    "AWS",
    "PostgreSQL",
    "MongoDB",
    "AI Engineering",
    "LLM Integration",
    "Full Stack Development",
    "Software Engineering",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Full Stack & AI Engineer",
    occupationLocation: {
      "@type": "City",
      name: "Lagos, Nigeria",
    },
    skills:
      "React, Next.js, TypeScript, Node.js, Python, AWS, PostgreSQL, MongoDB, NestJS",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Timi Odusanya Portfolio",
  url: "https://timiodusanya.vercel.app",
  description:
    "Portfolio of Timilehin Odusanya — Senior Full Stack & AI Engineer",
  author: {
    "@type": "Person",
    name: "Timilehin Odusanya",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://timiodusanya.vercel.app/#projects",
    "query-input": "required name=search_term_string",
  },
};

const Home = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
