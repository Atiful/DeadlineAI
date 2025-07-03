import { useState } from "react";
import { createWorker } from 'tesseract.js';
import { GoogleGenAI } from "@google/genai";

function Test() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [text, setText] = useState("");
    const [loadingText, setLoadingText] = useState("");
    const [output, setOutput] = useState("");
    const prompt = "Extract the following information from the given text: 1. A suitable ** topic**   2. A ** deadline ** (use any date found if an explicit deadline is not mentioned  3. The ** time ** (if available)  - Only return the ** topic **, ** deadline **, and ** time ** in a form of array and if something is not present add false to it - Format the ** deadline ** in `DD-MM-YYYY` format.- Format the ** time ** in `HH:MM AM/PM` format if present.- Do not include any extra explanation.";


    const handleImage = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            setPreview(imageUrl);
            await recognizeText(imageUrl);
        }
    };

    const recognizeText = async (imageUrl) => {
        const worker = await createWorker({
            logger: (m) => {
                setLoadingText(`Progress: ${(m.progress * 100).toFixed(2)}%`);
            }
        });

        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        const {
            data: { text },
        } = await worker.recognize(imageUrl);

        setText(text);
        setLoadingText("Recognition completed!");

        // Now pass text to Gemini analyzer
        await googleGeminiTextAnalyzier(text);

        await worker.terminate();
    };

    const googleGeminiTextAnalyzier = async (ocrText) => {
        const ai = new GoogleGenAI({ apiKey: "AIzaSyDUqaL5JkYY-Pvnrakjb4k9pfc1yWFzlt0" });
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `${prompt} Text: ${ocrText}`,
        });
        setOutput(response.text);
    };




    

    return (
        <>
            <input type="file" onChange={handleImage} />
            <input type="text" placeholder="Enter the text"></input>

            {preview && (
                <div className="mt-3">
                    <h4>Image Preview:</h4>
                    <img src={preview} alt="Uploaded Preview" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
            )}

            {loadingText && <p>{loadingText}</p>}

            {text && (
                <div>
                    <h4>Extracted Text:</h4>
                    <p>{text}</p>
                </div>
            )}

            {output && (
                <div>
                    <h4>Gemini Result (Topic & Deadline):</h4>
                    <p>{output}</p>
                </div>
            )}
        </>
    );
}

export default Test;
