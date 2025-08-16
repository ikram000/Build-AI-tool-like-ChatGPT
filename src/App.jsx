import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState(undefined);

  const API_KEY = "AIzaSyBeWVZJlT6f2_lAFYdk9J3LlCvowJilm3w"; // replace with your actual key
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${"AIzaSyBeWVZJlT6f2_lAFYdk9J3LlCvowJilm3w"}`;

  const askQuestion = async () => {
    const payLoad = {
      contents: [
        {
          parts: [
            {
              text: question || "Explain how AI works in a few words",
            },
          ],
        },
      ],
    };

    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      });

      response = await response.json();
      //console.log(response.candidates[0].content.parts[0].text);
      setResult(response.candidates[0].content.parts[0].text)

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="grid grid-cols-5 h-screen text-center">
      <div className="col-span-1 bg-zinc-800 "></div>

      <div className="col-span-4 p-10">
        <div className="container h-110 ">
          <div className="text-white">
          {result}
          </div>
        </div>

        <div className="bg-zinc-800 w-1/2 text-white m-auto p-1 pr-5 rounded-4xl border border-zinc-700 flex h-16">
          <input
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            className="w-full h-full p-3 outline-none"
            placeholder="Ask me Anything"
          />
          <button onClick={askQuestion} className="px-4 bg-blue-600 rounded-lg">
            ASK Anything
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
