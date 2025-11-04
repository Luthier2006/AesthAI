<h1 align="center">AesthAI</h1>

**AesthAI** is a full-stack web application powered by AI that analyzes creative writing, such as poetry, lyrics, or essays, and generates deep, aesthetic critiques.  
It features an elegant minimalist design inspired by *Manus*, built with **React + Node.js + Express + OpenAI API**.

---

<h1 align="center">Features</h1>

-  Elegant UI with a soft aesthetic interface  
-  AI-powered critique generation using OpenAI GPT models  
-  Upload text or files for instant analysis  
-  Real-time response display  
-  Responsive and modern design with Tailwind CSS  
-  Full-stack deploy on Vercel (Frontend) and Render (Backend)

---

  <h1 align="center">Project Structure</h1>

<p>AesthAI/</p>
<p>├── client/ # Frontend (React + Vite)</p>
<p>│ ├── src/</p>
<p>│ │ ├── components/</p>
<p>│ │ │ ├── UploadForm.jsx</p>
<p>│ │ │ ├── CritiqueCard.jsx</p>
<p>│ │ ├── App.jsx</p>
<p>│ │ ├── main.jsx</p>
<p>│ ├── index.html</p>
<p>│ ├── package.json</p>
<p>│ ├── vite.config.js</p>
<p>│</p>
<p>├── server/ # Backend (Node + Express)</p>
<p>│ ├── routes/</p>
<p>│ │ └── api.js</p>
<p>│ ├── services/</p>
<p>│ │ └── ai.js</p>
<p>│ ├── index.js</p>
<p>│ ├── package.json</p>
<p>│</p>
<p>├── .gitignore</p>
<p>├── README.md</p>


---

##  Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/AesthAI.git
cd AesthAI
````

### 2. Install dependencies

Frontend

````
cd client
npm install
````


Backend

````
cd ../server
npm install
````

Environment Variables

In your /server directory, create a .env file:

````
OPENAI_API_KEY=your_openai_api_key_here
PORT=10000
````

Running Locally
1. Start backend

````
cd server
npm start
````

2. Start frontend

````

cd client
npm run dev
````

<h1>Deployment</h1>
<h1>Frontend (Vercel)</h1>

1. Go to Vercel

2. Import your GitHub repo.

3. Set the root directory to /client.

4. Build Command: npm run build

5. Output Directory: dist

<h1>Backend (Render)</h1>

1. Go to Render

2. Create a new Web Service.

3. Root directory: /server.

4. Start Command: npm start.

5. Add environment variable:

````
OPENAI_API_KEY = your_openai_api_key_here
````

API Endpoint

POST /api/analyze

Body:
FormData → file (text file)

Response Example:

````
{
  "critique": "The poem explores emotional introspection with vivid imagery..."
}
````

<h1>Tech Stack</h1>

| Layer      | Technology               |
| ---------- | ------------------------ |
| Frontend   | React, Vite, TailwindCSS |
| Backend    | Node.js, Express         |
| AI Service | OpenAI GPT API           |
| Deployment | Vercel + Render          |

Preview

##

License

MIT License © 2025 [Your Name]

“Beauty in words, logic in thought — AesthAI brings both to life.”
