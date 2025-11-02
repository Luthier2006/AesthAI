import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  const [content, setContent] = useState("");
  const [critiques, setCritiques] = useState([]);

  const handleAnalyze = async () => {
    if (!content) return alert("Digite algo para analisar!");
    const res = await fetch("http://localhost:4000/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });
    const data = await res.json();
    setCritiques(data.critiques);
  };

  return (
    <div className="container">
      <header>
        <h1>AesthAI</h1>
      </header>
      <main>
        <textarea
          placeholder="Digite a descrição da obra ou cole a arte em texto..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="btn-primary" onClick={handleAnalyze}>Analisar</button>

        <section className="cards-section">
          {critiques.map((c, i) => (
            <div key={i} className="card">{c}</div>
          ))}
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
