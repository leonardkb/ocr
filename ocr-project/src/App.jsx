import { useRef, useState } from "react";
import { ocr } from "./ocr";
import Navbar from "./Component/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Component/Footer";

function App() {
  const [file, setFile] = useState(null);
  const [markdown, setMarkdown] = useState("");
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

      const result = await ocr({ file });
      setMarkdown(result);
    } catch (error) {
      console.error("Error during OCR:", error);
      alert("An error occurred while processing the OCR.");
    }
  };

  const handleClearFile = () => {
    setFile(null);
    setMarkdown(""); // Optionally clear markdown output
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear file input
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

    <Navbar />
  
    <div className="py-6 sm:py-10">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
        OCR Markdown Converter
      </h1>
    </div>
  
    {/* Custom File Input */}
    <div className="relative w-full sm:w-auto">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg"
        onChange={handleFileChange}
        className="absolute opacity-0 w-full h-full cursor-pointer"
      />
      <label
        htmlFor="file-upload"
        className="block w-full sm:w-auto p-6 sm:p-8 lg:p-10 bg-gray-100 text-center rounded border-4 border-dotted border-blue-200 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
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
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
      >
        Clear File
      </button>
    )}
  
    {/* Convert Button */}
    <button
      onClick={handleOCR}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
    >
      Convert to Markdown
    </button>
  
    {/* Display Markdown Output */}
    {markdown && (
      <div className="mt-6 w-full sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Markdown Output:</h2>
        <pre className="text-sm bg-gray-100 p-2 rounded overflow-auto">
          {markdown}
        </pre>
      </div>
      
    )}
   <Footer/>
  </div>
  
  );
}

export default App;
