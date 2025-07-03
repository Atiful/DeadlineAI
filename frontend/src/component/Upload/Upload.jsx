import React, { useState, useRef, useContext } from "react";
import { Upload as UploadIcon, Image, FileText, Loader } from "lucide-react";
import styles from "./Upload.module.css";
import Results from "../Results/Results";
import { createWorker } from "tesseract.js";
import { GoogleGenAI } from "@google/genai";
import AddTask from "./Form";
import { toast } from "react-toastify";
import { userContext } from "../../Context/createContext";

const Upload = () => {
  const [activeTab, setActiveTab] = useState("image");
  const [text, setText] = useState("");
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [loadingText, setLoadingText] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const geminiApiKey = import.meta.env.VITE_APP_GEMINI_API_KEY;
  const { user, isLogin } = useContext(userContext);
  

  const prompt =
    "Extract the following information from the given text: 1. A suitable ** topic**   2. A ** deadline ** (use any date found if an explicit deadline is not mentioned  3. The ** time ** (if available)  - Only return the ** topic **, ** deadline **, and ** time ** in a form of array (no need to give json or extra things) and if something is not present add false to it - Format the ** deadline ** in `DD-MM-YYYY` format.- Format the ** time ** in `HH:MM AM/PM` format if present.- Do not include any extra explanation.";

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const recognizeText = async (imageUrl) => {
    setIsLoading(true);
    try {
      const worker = await createWorker({
        logger: (m) => {
          setLoadingText(`Progress: ${(m.progress * 100).toFixed(2)}%`);
        },
      });

      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const {
        data: { text },
      } = await worker.recognize(imageUrl);
      setText(text);
      setLoadingText("Recognition completed!");
      await googleGeminiTextAnalyzier(text);
      await worker.terminate();
    } catch (error) {
      console.error("Error recognizing text:", error);
      setLoadingText("Error processing image");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setLoadingText("");
      }, 1000);
    }
  };

  const googleGeminiTextAnalyzier = async (ocrText) => {
    setLoadingText("Analyzing text with AI...");
    try {
      const ai = new GoogleGenAI({
        apiKey: geminiApiKey,
      });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `${prompt} Text: ${ocrText}`,
      });
      setOutput(response.text);
      setLoadingText("Analysis completed!");
    } catch (error) {
      console.error("Error analyzing text:", error);
      setLoadingText("Error analyzing text");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = async () => {
  
    if (!user) {
      toast.error("please login or Signup to use our services");
      return;
    }

    setIsLoading(true);
    if (activeTab === "image" && image) {
      await recognizeText(image);
    } else if (activeTab === "text" && text) {
      await googleGeminiTextAnalyzier(text);
      setTimeout(() => {
        setIsLoading(false);
        setLoadingText("");
        toast.success("details generated");
      }, 1000);
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "image" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("image")}
        >
          <Image size={18} /> Image Upload
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "text" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("text")}
        >
          <FileText size={18} /> Text Input
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "ManuallyAdd" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("ManuallyAdd")}
        >
          <FileText size={18} /> Add Task by Form
        </button>
      </div>

      {activeTab === "image" && (
        <div
          className={styles.uploadBox}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          <UploadIcon className={styles.uploadIcon} size={48} />
          <p className={styles.uploadText}>
            {image
              ? "Image selected"
              : "Drop your image here or click to upload"}
          </p>
          {image && (
            <div className={styles.imagePreview}>
              <img
                src={image}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  marginTop: "10px",
                  borderRadius: "8px",
                }}
              />
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            className={styles.uploadInput}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      )}

      {activeTab === "text" && (
        <textarea
          className={styles.textArea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
        />
      )}

      {activeTab === "ManuallyAdd" && <AddTask output={setOutput}></AddTask>}

      {activeTab != "ManuallyAdd" && (
        <button
          className={`${styles.submitButton} ${
            isLoading ? "pulseBackground" : ""
          }`}
          onClick={handleSubmit}
          disabled={
            (activeTab === "image" && !image) ||
            (activeTab === "text" && !text) ||
            isLoading
          }
        >
          {isLoading ? (
            <div className="loaderContainer">
              <span className="loader"></span>
              <span>{loadingText || "Processing..."}</span>
            </div>
          ) : (
            `Process ${activeTab === "image" ? "Image" : "Text"}`
          )}
          {isLoading && loadingText.includes("Progress: ") && (
            <div
              className="progressBar"
              style={{
                width:
                  loadingText.replace("Progress: ", "").replace("%", "") + "%",
              }}
            ></div>
          )}
        </button>
      )}

      {output && (
        <Results
          output={output}
        />
      )}
    </div>
  );
};

export default Upload;
