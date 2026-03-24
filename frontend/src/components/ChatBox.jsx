import { useState } from "react";
import { askQuestion } from "../api/api";

function ChatBox() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question) return;

    try {
      setLoading(true);
      const res = await askQuestion(question);
      setAnswer(res.answer || "No response");
    } catch (error) {
      console.error(error);
      setAnswer("Error getting response");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Ask Question</h3>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Thinking..." : "Ask"}
      </button>

      {answer && (
        <div style={{ marginTop: "10px" }}>
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default ChatBox;