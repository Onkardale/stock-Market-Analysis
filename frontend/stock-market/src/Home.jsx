import { useState } from 'react';




function Home() {
      // const navigate = useNavigate();
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [userPrompt, setUserPrompt] = useState('');


  const askAI = async () => {
    if (!userPrompt.trim()) {
      setAiResponse("Please enter a question about the stock market.");
      return;
    }

    setIsLoading(true);
    setAiResponse('');
    
    try {
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userPrompt
        })
      });

      const data = await response.json();
      
      if (data.error) {
        setAiResponse(`Error: ${data.error}`);
      } else {
        setAiResponse(data.response);
      }
    } catch (error) {
      setAiResponse("Unable to connect to the server. Please make sure your Spring Boot application is running on port 8080.");
    }
    setIsLoading(false);
  };

  const handleButtonClick = () => {
    if (!showInput) {
      setShowInput(true);
    } else {
      askAI();
    }
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .page-wrapper {
          background: linear-gradient(135deg, #0f172a 0%, #e7710aff 50%, #0f172a 100%);
          min-height: 100vh;
          color: white;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          z-index: 50;
          padding: 1rem 2rem;
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-brand h3 {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #81a99aff;
        }

        .whatsapp-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: #25d366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.5);
          z-index: 50;
          text-decoration: none;
          transition: transform 0.3s;
          cursor: pointer;
        }

        .whatsapp-btn:hover {
          transform: scale(1.1);
          background: #20ba5a;
        }

        .main-content {
          padding-top: 8rem;
          padding-bottom: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        .hero {
          text-align: center;
          margin-bottom: 4rem;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: bold;
          background: linear-gradient(to right, #34d399, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
        }

        .hero p {
          font-size: 1.25rem;
          color: #9ca3af;
          max-width: 600px;
          margin: 0 auto 1.5rem;
        }

        .ai-button {
          margin-top: 20px;
          padding: 12px 24px;
          border-radius: 8px;
          background: #34d399;
          border: none;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 1rem;
        }

        .ai-button:hover {
          background: #2bb380;
          transform: scale(1.05);
        }

        .ai-button:disabled {
          background: #6b7280;
          cursor: not-allowed;
        }

        .ai-input-container {
          margin-top: 1.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .ai-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border: 2px solid rgba(52, 211, 153, 0.3);
          background: rgba(15, 23, 42, 0.8);
          color: white;
          font-size: 1rem;
          margin-bottom: 1rem;
          transition: border-color 0.3s;
        }

        .ai-input:focus {
          outline: none;
          border-color: #34d399;
        }

        .ai-input::placeholder {
          color: #9ca3af;
        }

        .ai-response {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.3);
          border-radius: 0.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .card {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(52, 211, 153, 0.2);
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .card:hover {
          transform: scale(1.05);
          border-color: rgba(52, 211, 153, 0.5);
        }

        .card:nth-child(2) {
          border-color: rgba(34, 211, 238, 0.2);
        }

        .card:nth-child(2):hover {
          border-color: rgba(34, 211, 238, 0.5);
        }

        .card:nth-child(3) {
          border-color: rgba(168, 85, 247, 0.2);
        }

        .card:nth-child(3):hover {
          border-color: rgba(168, 85, 247, 0.5);
        }

        .card-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-size: 2rem;
        }

        .card:nth-child(1) .card-icon {
          background: rgba(52, 211, 153, 0.1);
          color: #34d399;
        }

        .card:nth-child(2) .card-icon {
          background: rgba(34, 211, 238, 0.1);
          color: #22d3ee;
        }

        .card:nth-child(3) .card-icon {
          background: rgba(168, 85, 247, 0.1);
          color: #a855f7;
        }

        .card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .card p {
          color: #9ca3af;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .card-footer {
          font-weight: 600;
        }

        .card:nth-child(1) .card-footer {
          color: #34d399;
        }

        .card:nth-child(2) .card-footer {
          color: #22d3ee;
        }

        .card:nth-child(3) .card-footer {
          color: #a855f7;
        }

        .stats {
          background: linear-gradient(to right, rgba(52, 211, 153, 0.1), rgba(34, 211, 238, 0.1));
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(52, 211, 153, 0.2);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #9ca3af;
        }

        .stat:nth-child(1) .stat-value {
          color: #34d399;
        }

        .stat:nth-child(2) .stat-value {
          color: #22d3ee;
        }

        .stat:nth-child(3) .stat-value {
          color: #a855f7;
        }

        .stat:nth-child(4) .stat-value {
          color: #34d399;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .nav-links {
            gap: 1rem;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-wrapper">
        <nav className="navbar">
          <div className="nav-content">
            <div className="nav-brand">
              <span style={{ fontSize: '2rem' }}>📈</span>
              <h3>Stock Market Pro</h3>
            </div>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#markets">Markets</a>
              <a href="#about">About</a>
            </div>
          </div>
        </nav>

        <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>

        <div className="main-content">
          <div className="hero">
            <h1>Welcome to Stock Analysis</h1>
            <p>Track, analyze, and make informed decisions with real-time market data</p>
            
           

            
          </div>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>Live Trading</h3>
              <p>Monitor real-time stock prices and market movements with advanced analytics</p>
              <div className="card-footer"><button>Live Market</button>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">📉</div>
              <h3>Market Analysis</h3>
              <p>Get detailed insights and charts to understand market trends effectively</p>
              <div className="card-footer"><button onClick={() => navigate ("/news")}>View reports / news</button></div>
            </div>

            <div className="card">
              <div className="card-icon">💼</div>
              <h3>Portfolio Tracking</h3>
              <p>Keep track of your investments and watch your portfolio grow over time</p>
              <div className="card-footer"><button>track Now</button></div>
            </div>
          </div>

          <div className="stats">
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-value">500+</div>
                <div className="stat-label">Active Stocks</div>
              </div>
              <div className="stat">
                <div className="stat-value">$2.4B</div>
                <div className="stat-label">Trading Volume</div>
              </div>
              <div className="stat">
                <div className="stat-value">10K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support</div>
              </div>
               <button
              onClick={handleButtonClick}
              disabled={isLoading}
              className="ai-button"
            >
              {isLoading ? '⏳ Loading...' : showInput ? '📤 Send Question' : '🤖 Ask AI Market Trend'}
            </button>

            {showInput && (
              <div className="ai-input-container">
                <input
                  type="text"
                  className="ai-input"
                  placeholder="Ask anything about stock market trends, analysis, or predictions..."
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && askAI()}
                  disabled={isLoading}
                />
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;