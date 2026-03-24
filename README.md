# 🧠 AI Document Assistant (Learning Project)

A full-stack AI application that allows users to upload PDF documents and ask questions based on their content using a simplified Retrieval-Augmented Generation (RAG) pipeline.

---

## 🚀 Features

- 📄 Upload PDF documents  
- 🧾 Extract text from PDF  
- ✂️ Chunk large text into smaller parts  
- 🔍 Retrieve relevant content based on user query (keyword-based)  
- 🤖 Generate answers using Gemini (Google AI)  
- 🌐 Full-stack app (React + Node.js)

---

## ⚠️ Note

This project is built **for learning purposes** to understand how AI-powered applications and RAG pipelines work.  
It is not optimized for production use.

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Fetch API

### Backend
- Node.js
- Express.js
- Multer (file upload)
- pdf-parse (PDF text extraction)

### AI
- Gemini API (`@google/generative-ai`)

---


---

## ⚙️ Setup Instructions (Local Machine)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd ai-doc-assistant
```

---

## 🔧 Backend Setup

### 2. Navigate to backend

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create `.env` file

```env
GEMINI_API_KEY=your_api_key_here
```

👉 Get API key from: https://makersuite.google.com/app/apikey

---

### 5. Start backend server

```bash
node index.js
```

Backend runs at:
```
http://localhost:5000
```

---

## 💻 Frontend Setup

### 6. Open new terminal and go to frontend

```bash
cd frontend
```

### 7. Install dependencies

```bash
npm install
```

### 8. Create `.env` file

```env
VITE_API_BASE_URL=http://localhost:5000
```

---

### 9. Start frontend

```bash
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## 🧪 How to Use

1. Open the frontend in browser  
2. Upload a PDF file  
3. Ask a question about the document  
4. Get an AI-generated answer based on document content  

---

## 🔄 System Flow

```
PDF Upload → Text Extraction → Chunking → Retrieval → Gemini → Answer
```

---

## 🧠 How It Works

1. PDF is uploaded to backend  
2. Text is extracted using `pdf-parse`  
3. Text is split into chunks  
4. Relevant chunks are selected using simple keyword matching  
5. Gemini generates answer using retrieved context  

---

## 👨‍💻 Author

Mahipal Kumawat  
IIT Mandi
