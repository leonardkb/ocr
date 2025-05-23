import { useRef, useState } from "react";
import { ocr } from "./ocr";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faDownload } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";

// Import jsPDF for PDF download
import jsPDF from "jspdf";

function Markdown() {
  const [file, setFile] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === "image/jpeg") {
      setFile(uploadedFile);
    } else {
      alert("Please upload a valid JPG file!");
      setFile(null);
    }
  };

  const handleOCR = async () => {
    try {
      if (!file) {
        alert("Please upload a file!");
        return;
      }
      setLoading(true);
      const result = await ocr({ file });
      setMarkdown(result);
    } catch (error) {
      console.error("Error during OCR:", error);
      alert("An error occurred while processing the OCR.");
    } finally {
      setLoading(false);
    }
  };

  const handleClearFile = () => {
    setFile(null);
    setMarkdown("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Download markdown as PDF
  const handleDownloadPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth() - 20; // 10 margin on each side
  const lines = markdown.split("\n");
  let y = 10;
  doc.setFont("courier", "normal");
  lines.forEach(line => {
    // Split long lines to fit page width
    const splitLines = doc.splitTextToSize(line, pageWidth);
    splitLines.forEach(splitLine => {
      doc.text(splitLine, 10, y);
      y += 8;
      if (y > 280) {
        doc.addPage();
        y = 10;
      }
    });
  });
  doc.save("output.pdf");
};

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="flex flex-col md:flex-row justify-center items-start w-full px-4 md:px-20 py-10 flex-1">
        {/* Upload Section (Left) */}
        <div className="w-full md:w-1/2 flex flex-col mt-28 items-center md:items-start mb-10 md:mb-0 md:pr-8">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center md:text-left">
            Markdown Converter
          </h1>
          <h4 className="text-base sm:text-lg font-semibold text-center md:text-left text-gray-700 mb-6">
            Markdown your bills, documents faster and easier within a short span of time
          </h4>

          {/* Custom File Input */}
          <div className="relative w-full sm:w-auto mb-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg"
              onChange={handleFileChange}
              className="absolute opacity-0 w-full h-full cursor-pointer"
            />
            <label
              htmlFor="file-upload"
              className="block w-full sm:w-auto p-6 bg-gray-100 text-center rounded border-4 border-dotted border-blue-200 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
            >
              <div className="flex justify-center items-center space-x-2">
                <FontAwesomeIcon icon={faImage} className="text-gray-500 text-2xl" />
                <span className="text-lg sm:text-xl text-gray-700">
                  {file ? file.name : "Upload Image (JPG only)"}
                </span>
              </div>
            </label>
          </div>

          {/* Clear File Button */}
          {file && (
            <button
              onClick={handleClearFile}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2"
            >
              Clear File
            </button>
          )}

          {/* Convert Button */}
          <button
            onClick={handleOCR}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
            disabled={loading}
          >
            {loading ? "Processing..." : "Convert to Markdown"}
          </button>

          {/* Loading Indicator */}
          {loading && (
            <div className="mt-4">
              <p className="text-blue-500">Processing your image, please wait...</p>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="hidden md:flex h-[400px] w-px bg-gray-300 mx-8 mt-28"></div>
    
        {/* Markdown Output Section (Right) */}
       <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="w-full bg-white p-4 mt-24 rounded shadow min-h-[200px] flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">Markdown Output:</h2>
              {markdown && (
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                  title="Download as PDF"
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Download PDF
                </button>
              )}
            </div>
           
            <div className="bg-gray-100 p-2 rounded overflow-x-auto max-w-full flex-1">
              {markdown ? (
                // Render markdown with bold for **text**
                <pre className="text-sm min-w-[400px] whitespace-pre-line break-words">
                  {
                    markdown.split('\n').map((line, idx) => {
                      const parts = [];
                      let lastIndex = 0;
                      const boldRegex = /\*\*(.*?)\*\*/g;
                      let match;
                      let key = 0;
                      while ((match = boldRegex.exec(line)) !== null) {
                        if (match.index > lastIndex) {
                          parts.push(
                            <span key={key++}>
                              {line.slice(lastIndex, match.index)}
                            </span>
                          );
                        }
                        parts.push(
                          <strong key={key++} className="font-bold text-black">
                            {match[1]}
                          </strong>
                        );
                        lastIndex = match.index + match[0].length;
                      }
                      if (lastIndex < line.length) {
                        parts.push(
                          <span key={key++}>
                            {line.slice(lastIndex)}
                          </span>
                        );
                      }
                      return <div key={idx}>{parts}</div>;
                    })
                  }
                </pre>
              ) : (
                <div className="text-gray-400 text-center py-8">
                  Markdown output will be shown here
                </div>
              )}
            </div>
          </div>
        </div>



      </div>

      <Footer />
    </div>
  );
}

export default Markdown;
