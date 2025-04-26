"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const words = ["Hello", "Hola", "Bonjour", "Hallo"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 w-full min-h-screen flex flex-col scroll-smooth">
      <header className="w-full p-4 md:p-8 text-center fixed top-0 bg-slate-800 z-50">
        <div className="text-2xl md:text-4xl text-white font-bold mb-2">Lang Diary Development</div>
        <div className="flex justify-center gap-4 text-sm md:text-lg">
          <a href="#team" className="text-red-500 underline hover:text-white">Team</a>
          <a href="#process" className="text-red-500 underline hover:text-white">Process</a>
          <a href="#demo" className="text-red-500 underline hover:text-white">Demo</a>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center h-screen pt-32 px-4" id="landing">
        <AnimatePresence mode="wait">
          <motion.div
            key={words[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500 italic text-5xl md:text-7xl mb-8 text-center"
          >
            {words[index]}
          </motion.div>
        </AnimatePresence>

        <div className="mb-8">
          <img
            src="/book.png"
            className="w-40 md:w-64 h-auto mx-auto relative z-10 drop-shadow-xl transition-all hover:rotate-3 hover:scale-105 duration-300"
            alt="LangDiary Book Logo"
          />
        </div>

        <div className="text-base md:text-xl text-white px-6 md:px-10 text-center leading-relaxed max-w-2xl">
          <span className="border-b-2 border-red-400">LangDiary</span> is a web application designed to provide a path to <span className="italic">immersive language learning</span>.
        </div>
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 px-4" id="team">
        <div className="text-3xl md:text-4xl font-bold underline mb-8 text-white text-center">Our Team</div>

        <div className="flex flex-wrap gap-6 justify-center">
          {[
            { src: "/me.png", name: "Calvin", role: "Frontend Developer" },
            { src: "/daniil.jpg", name: "Daniil", role: "Backend Developer" },
            { src: "/Jiahao.png", name: "Jiahao", role: "Fullstack Developer" },
            { src: "/mark.jpg", name: "Mark", role: "Fullstack Developer" },
          ].map((member, idx) => (
            <div key={idx} className="w-32 h-32 md:w-40 md:h-40 bg-slate-600 rounded-lg flex flex-col group relative overflow-hidden">
              <img
                src={member.src}
                className="w-full h-full rounded-lg shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2 object-cover"
                alt={member.name}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs md:text-sm p-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2">
                {member.name}: <br /> {member.role}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 w-full max-w-3xl flex flex-col gap-5 border-solid border-2 rounded-xl text-sm md:text-lg border-red-500 p-5 text-white">
          <div>Calvin: Completed many frontend tasks such as creating the landing page UI, details section UI, exercises page UI, and Gemini integration for exercises feedback.</div>
          <div>Daniil: Completed backend tasks, managed dark theme UI, created admin panel features, comments, Django CI tools, and deployed the app.</div>
          <div>Jiahao: Built frontend login/register forms, flashcard page, Gemini API integration for flashcards, YouTube API for videos page.</div>
          <div>Mark: Designed Places API features for LangLocales, forgot password flow, Google Calendar integration for exercises, and developed backend testing.</div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen p-8 text-white text-center" id="process">
        <div className="text-3xl md:text-4xl font-bold underline mb-8">Our Process</div>
        <p className="max-w-2xl text-base md:text-lg leading-relaxed">
          We used Jira to organize work into small sprints with a scrum-based approach, communicating daily through Discord. Features were divided into user stories and completed based on priority.
        </p>
        <img src="/jira.png" className="w-full max-w-sm h-auto mt-10 border-2 border-red-500" alt="Jira Board" />
        <p className="text-sm md:text-base mt-4">Our complete Jira Board</p>
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen p-8 text-white text-center" id="demo">
        <div className="text-3xl md:text-4xl font-bold underline mb-8">Demo</div>
        <div className="w-full max-w-2xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ELNw_L6BQ0E?si=2QGCq5crOy-88c8t"
            title="YouTube demo video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
