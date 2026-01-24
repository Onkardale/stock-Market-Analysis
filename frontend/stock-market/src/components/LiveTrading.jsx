import { useState, useEffect } from "react";
import { Home, TrendingDown, AlertCircle } from "lucide-react";

function LiveTrading() {
  const [glitchText, setGlitchText] = useState("404");
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setParticles(newParticles);

    // Glitch effect
    const interval = setInterval(() => {
      const glitchChars = ['4', '0', '4', '€', '₹', '$', '¥', '£'];
      const randomGlitch = Array.from({ length: 3 }, () => 
        glitchChars[Math.floor(Math.random() * glitchChars.length)]
      ).join('');
      
      setGlitchText(randomGlitch);
      
      setTimeout(() => setGlitchText("404"), 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Animated background particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.left}%`,
            bottom: "-50px",
            width: "3px",
            height: "3px",
            background: "rgba(102, 126, 234, 0.6)",
            borderRadius: "50%",
            animation: `float ${particle.duration}s ease-in infinite`,
            animationDelay: `${particle.animationDelay}s`,
            boxShadow: "0 0 10px rgba(102, 126, 234, 0.8)"
          }}
        />
      ))}

      {/* Navbar */}
      <nav style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        padding: "1rem 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>📈</span>
            <h3 style={{ margin: 0, fontSize: "1.5rem", color: "white", fontWeight: "700" }}>
              Stock Market Pro
            </h3>
          </div>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <button style={{
              background: "none",
              border: "none",
              color: "rgba(255, 255, 255, 0.7)",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "1rem",
              transition: "color 0.3s"
            }}>
              Home
            </button>
            <button style={{
              background: "none",
              border: "none",
              color: "rgba(255, 255, 255, 0.7)",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "1rem",
              transition: "color 0.3s"
            }}>
              Markets
            </button>
            <button style={{
              background: "none",
              border: "none",
              color: "rgba(255, 255, 255, 0.7)",
              cursor: "pointer",
              fontWeight: 500,
              fontSize: "1rem",
              transition: "color 0.3s"
            }}>
              About
            </button>
          </div>
        </div>
      </nav>

      {/* Main 404 Content */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 80px)",
        padding: "2rem",
        position: "relative",
        zIndex: 1
      }}>
        {/* Stock chart crash animation */}
        <div style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          opacity: 0.1,
          animation: "crash 2s ease-out infinite"
        }}>
          <TrendingDown size={200} color="#ef4444" strokeWidth={1} />
        </div>

        {/* Alert Icon */}
        <div style={{
          marginBottom: "2rem",
          animation: "pulse 2s ease-in-out infinite"
        }}>
          <AlertCircle size={80} color="#ef4444" strokeWidth={1.5} />
        </div>

        {/* Glitch 404 Text */}
        <h1 style={{
          fontSize: "10rem",
          fontWeight: "900",
          margin: "0",
          background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "0 0 30px rgba(102, 126, 234, 0.5)",
          position: "relative",
          animation: "glitch 1s infinite",
          letterSpacing: "0.1em"
        }}>
          {glitchText}
        </h1>

        {/* Error Message */}
        <div style={{
          textAlign: "center",
          marginTop: "2rem",
          maxWidth: "600px"
        }}>
          <h2 style={{
            color: "white",
            fontSize: "2.5rem",
            fontWeight: "700",
            margin: "0 0 1rem 0"
          }}>
            Market Crash Detected
          </h2>
          <p style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "1.2rem",
            lineHeight: 1.6,
            margin: "0 0 1rem 0"
          }}>
            Oops! The trading page you're looking for has gone bearish and can't be found.
          </p>
          <p style={{
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "1rem",
            margin: "0 0 3rem 0"
          }}>
            Error Code: PAGE_NOT_FOUND | Status: 404 | Trading: Suspended
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "12px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(102, 126, 234, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(102, 126, 234, 0.4)";
            }}
          >
            <Home size={20} />
            Return to Dashboard
          </button>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "transparent",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "12px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
          >
            View Markets
          </button>
        </div>

        {/* Stock ticker style error info */}
        <div style={{
          marginTop: "4rem",
          padding: "1.5rem 2rem",
          background: "rgba(239, 68, 68, 0.1)",
          border: "1px solid rgba(239, 68, 68, 0.3)",
          borderRadius: "12px",
          maxWidth: "800px",
          width: "100%"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1.5rem",
            color: "white"
          }}>
            <div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)", marginBottom: "0.25rem" }}>
                Status
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: "600", color: "#ef4444" }}>
                NOT FOUND
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)", marginBottom: "0.25rem" }}>
                Error Code
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                404
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)", marginBottom: "0.25rem" }}>
                Response Time
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                0ms
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)", marginBottom: "0.25rem" }}>
                Market Status
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: "600", color: "#f59e0b" }}>
                SUSPENDED
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes crash {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
}

export default LiveTrading;