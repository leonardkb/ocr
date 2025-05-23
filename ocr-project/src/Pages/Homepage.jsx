import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
function Homepage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 md:px-20">
                {/* Description (Left) */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 flex flex-col items-center md:items-start text-center md:text-left mt-24">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800 mt-10 leading-snug tracking-wider">MarkSnap</h1>
                    <p className="text-lg text-gray-700 tracking-wider max-w-xl leading-loose">
                        MarkSnap is a business-grade application powered by LLaMA OCR that transforms
                        physical or digital documents, handwritten notes, invoices, or printed pages
                        into clean, well-structured Markdown. Ideal for startups, writers, researchers,
                        consultants, and finance professionals who want to digitize and organize content
                        instantly with AI.
                    </p>
                    <Link to="/ocr">
                        <button className="mt-6 bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-black transition duration-300">
                            Explore
                        </button>
                    </Link>
                </div>
                {/* Image (Right) */}
                <div className="md:w-1/2 flex justify-center mt-24 hidden md:flex">
                    <img
                        src="logo.jpg"
                        alt="OCR App"
                        className="w-80 max-w-full rounded-xl shadow-lg"
                    />
                </div>
            </section>

           

            {/* Use Cases Section */}
            <section className="px-6 md:px-20 pb-24  flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-bold">Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                    {/* Card 1 */}
                    <div className="bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg transition duration-300 hover:border-gray-200 hover:border-2">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Consulting Firms</h3>
                        <p className="text-gray-700">
                            Convert whiteboard discussions or client session notes into Markdown-based meeting minutes.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg transition duration-300 hover:border-gray-200 hover:border-2">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Writers &amp; Bloggers</h3>
                        <p className="text-gray-700">
                            Convert handwritten storyboards or printed notes to blog-ready markdown content.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg transition duration-300 hover:border-gray-200 hover:border-2">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Finance Teams</h3>
                        <p className="text-gray-700">
                            Scan invoices and receipts into structured markdown for easy parsing and tracking.
                        </p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg transition duration-300 hover:border-gray-200 hover:border-2">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Software Engineers</h3>
                        <p className="text-gray-700">
                            Turn API docs, design docs, and diagrams into Markdown files for GitHub repos.
                        </p>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg transition duration-300 hover:border-gray-200 hover:border-2">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Legal Professionals</h3>
                        <p className="text-gray-700">
                            Scan legal agreements and extract summaries, sections, and bullet points.
                        </p>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-gray-100 rounded-xl shadow p-6 hover:shadow-lg transition duration-300 hover:border-gray-200 hover:border-2">
                        <h3 className="font-bold text-lg mb-2 text-gray-800">Healthcare Industry</h3>
                        <p className="text-gray-700">
                            Digitize patient notes or prescriptions into structured Markdown for easy review.
                        </p>
                    </div>
                </div>
            </section>
         {/* Benefits Section */}
            <section className="px-6 md:px-20 py-12  flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Benefits</h2>
                <p className="text-gray-700 max-w-2xl text-center mb-8 text-lg">
                    MarkSnap streamlines your workflow by instantly converting any document or note into clean, structured Markdown. Save time on manual transcription, reduce errors, and keep your content organized and searchable. Whether you’re a professional, writer, or team, MarkSnap empowers you to digitize and manage information efficiently with the power of AI.
                </p>
            </section>
        <Footer/>
        </div>
    );
}

export default Homepage;