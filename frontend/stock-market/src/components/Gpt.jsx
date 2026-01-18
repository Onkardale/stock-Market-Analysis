import { useState } from "react";

function Gpt() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [debugInfo, setDebugInfo] = useState("");

  const sendQuestion = async () => {
    console.log("🔵 Button clicked!");
    console.log("📝 Prompt:", prompt);
    
    if (!prompt.trim()) {
      setError("Please enter a question");
      console.log("❌ Empty prompt");
      return;
    }

    setLoading(true);
    setResponse("");
    setError("");
    setDebugInfo("Sending request...");

    try {
      console.log("🚀 Sending request to API...");
      
      const res = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt
        })
      });

      console.log("📥 Response status:", res.status);
      setDebugInfo(`Response status: ${res.status}`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("✅ Full API response:", data);
      setDebugInfo(`Received data: ${JSON.stringify(data)}`);
      
      // Try multiple possible response paths
      const aiResponse = data.response || data.message || data.answer || data.reply || JSON.stringify(data);
      console.log("💬 AI Response:", aiResponse);
      
      setResponse(aiResponse);
      setDebugInfo(`Success! Response length: ${aiResponse.length} characters`);
      
    } catch (err) {
      console.error("❌ Error details:", err);
      setError(`Failed: ${err.message}`);
      setDebugInfo(`Error: ${err.message}`);
    } finally {
      setLoading(false);
      console.log("🏁 Request completed");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendQuestion();
    }
  };

  const testConnection = async () => {
    console.log("🧪 Testing connection...");
    setDebugInfo("Testing connection...");
    try {
      const res = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: "test" })
      });
      const data = await res.json();
      console.log("Test response:", data);
      alert("Connection successful! Check console for response.");
      setDebugInfo(`Test successful: ${JSON.stringify(data)}`);
    } catch (err) {
      console.error("Test failed:", err);
      alert(`Connection failed: ${err.message}`);
      setDebugInfo(`Test failed: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto", background: "#0a0a0a", minHeight: "100vh" }}>
      <h2 style={{ color: "#1db954", marginBottom: "20px" }}>🤖 AI Chat Interface</h2>

      {/* DEBUG INFO BOX */}
      <div style={{
        padding: "15px",
        background: "#1a1a2e",
        border: "1px solid #444",
        borderRadius: "8px",
        marginBottom: "20px",
        fontFamily: "monospace",
        fontSize: "12px",
        color: "#888"
      }}>
        <strong style={{ color: "#1db954" }}>Debug Info:</strong>
        <div style={{ marginTop: "8px", color: "#aaa" }}>
          {debugInfo || "Ready to send request..."}
        </div>
      </div>

      {/* TEST CONNECTION BUTTON */}
      <button
        onClick={testConnection}
        style={{
          padding: "8px 16px",
          background: "#ff6b6b",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        🧪 Test API Connection
      </button>

      {/* INPUT AREA */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => {
            console.log("Input changed:", e.target.value);
            setPrompt(e.target.value);
          }}
          onKeyPress={handleKeyPress}
          placeholder="Ask something... (type 'hello' to test)"
          disabled={loading}
          autoComplete="off"
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "6px",
            border: "2px solid #444",
            background: "#1a1a1a",
            color: "#fff",
            fontSize: "16px"
          }}
        />
        
        <button
          onClick={() => {
            console.log("Send button clicked, prompt:", prompt);
            sendQuestion();
          }}
          disabled={loading}
          style={{
            padding: "14px 28px",
            background: loading ? "#666" : "#1db954",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            minWidth: "140px"
          }}
        >
          {loading ? "⏳ Thinking..." : "🚀 Send"}
        </button>
      </div>

      {/* CURRENT STATE */}
      <div style={{
        padding: "12px",
        background: "#1a1a2e",
        borderRadius: "6px",
        marginBottom: "20px",
        fontSize: "13px",
        color: "#888"
      }}>
        <strong style={{ color: "#1db954" }}>Current State:</strong>
        <div>Prompt: "{prompt}" ({prompt.length} chars)</div>
        <div>Loading: {loading ? "YES" : "NO"}</div>
        <div>Response: {response ? "YES" : "NO"} ({response.length} chars)</div>
        <div>Error: {error || "None"}</div>
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <div
          style={{
            marginBottom: "20px",
            padding: "16px",
            background: "#2d1515",
            color: "#ff5555",
            borderRadius: "8px",
            border: "2px solid #ff5555"
          }}
        >
          <strong>❌ Error:</strong> {error}
        </div>
      )}

      {/* AI RESPONSE */}
      {response && (
        <div
          style={{
            padding: "20px",
            background: "#0d1b0d",
            color: "#00ff00",
            borderRadius: "8px",
            border: "2px solid #00ff00",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            fontFamily: "monospace"
          }}
        >
          <strong style={{ display: "block", marginBottom: "12px", color: "#1db954", fontSize: "16px" }}>
            ✅ AI Response:
          </strong>
          <div style={{ lineHeight: "1.6" }}>{response}</div>
        </div>
      )}

      {/* LOADING INDICATOR */}
      {loading && (
        <div style={{
          padding: "20px",
          textAlign: "center",
          color: "#1db954",
          fontSize: "18px"
        }}>
          ⏳ Loading...
        </div>
      )}
    </div>
  );
}

export default Gpt;