import { useRef, useState } from "react";
import { ocr } from "./ocr";

function App() {
  const [file, setFile] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const fileInputRef= useRef(null);

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
      <h1 className="text-2xl font-bold mb-4">OCR Markdown Converter</h1>
      <input
        type="file"
        accept="image/jpeg"
        onChange={handleFileChange}
        className="block p-2 bg-gray-100 rounded border border-gray-300 cursor-pointer"
      />
      {file && (
          <button
            onClick={handleClearFile}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear File
          </button>
        )}
      <button
        onClick={handleOCR}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Convert to Markdown
      </button>
      {markdown && (
        <div className="mt-6 w-full max-w-2xl bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Markdown Output:</h2>
          <pre className="text-sm bg-gray-100 p-2 rounded overflow-auto">
            {markdown}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
