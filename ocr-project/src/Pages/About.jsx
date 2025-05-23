import React from "react";
import Navbar from "../Component/Navbar";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center px-6 py-16">
        <Navbar/>
      <div className="max-w-2xl bg-white rounded-xl shadow-lg p-8 mt-16">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About MarkSnap</h1>
        <p className="text-gray-700 mb-4 text-lg">
          <span className="font-semibold">MarkSnap</span> was created by <span className="font-semibold">Leonard KB</span>, a creative Indian engineer passionate about making technology accessible and useful for everyone.
        </p>
        <p className="text-gray-700 mb-4 text-lg">
          This application leverages the power of <span className="font-semibold">LLaMA OCR</span> to convert physical or digital documents, handwritten notes, invoices, and printed pages into clean, well-structured Markdown. The goal was to simplify the process of digitizing and organizing information, making it easier for professionals, writers, researchers, and teams to manage their content efficiently.
        </p>
        <p className="text-gray-700 mb-4 text-lg">
          MarkSnap is especially helpful for those who want to save time on manual transcription, reduce errors, and keep their documents organized and searchable. By using advanced AI and OCR technology, MarkSnap empowers users to instantly transform their paperwork into digital assets, ready for editing, sharing, or archiving.
        </p>
        <p className="text-gray-700 text-lg">
          Thank you for using MarkSnap!<br />
          <span className="italic">— Leonard KB</span>
        </p>
      </div>
    </div>
  );
}

export default About;