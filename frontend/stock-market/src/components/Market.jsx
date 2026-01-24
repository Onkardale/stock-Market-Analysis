import { useState } from "react";
import { TrendingUp, TrendingDown, DollarSign, ArrowRight, Home, BarChart3, Info } from "lucide-react";

function Market() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const marketData = [
    { symbol: "AAPL", name: "Apple Inc.", price: 185.92, change: 2.34, percent: 1.27, volume: "52.4M" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 378.91, change: -1.45, percent: -0.38, volume: "28.1M" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 142.67, change: 3.21, percent: 2.30, volume: "31.2M" },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 172.43, change: 4.56, percent: 2.72, volume: "45.8M" },
    { symbol: "TSLA", name: "Tesla Inc.", price: 248.50, change: -5.23, percent: -2.06, volume: "98.3M" },
    { symbol: "META", name: "Meta Platforms", price: 487.33, change: 6.78, percent: 1.41, volume: "19.7M" },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 875.28, change: 12.45, percent: 1.44, volume: "62.1M" },
    { symbol: "JPM", name: "JPMorgan Chase", price: 189.56, change: -0.89, percent: -0.47, volume: "15.3M" }
  ];

  const newsArticles = [
    {
      id: 1,
      category: "tech",
      title: "Apple Announces Record iPhone Sales in Q4",
      excerpt: "Tech giant surpasses expectations with 15% revenue growth driven by strong iPhone demand across global markets.",
      time: "2 hours ago",
      impact: "high"
    },
    {
      id: 2,
      category: "market",
      title: "Federal Reserve Hints at Rate Cuts in 2026",
      excerpt: "Market rallies as Fed officials signal potential monetary policy shift amid cooling inflation data.",
      time: "4 hours ago",
      impact: "high"
    },
    {
      id: 3,
      category: "energy",
      title: "Oil Prices Surge 5% on Middle East Tensions",
      excerpt: "Crude futures jump as geopolitical concerns raise supply disruption fears in key producing regions.",
      time: "6 hours ago",
      impact: "medium"
    },
    {
      id: 4,
      category: "tech",
      title: "Tesla Unveils New Affordable EV Model",
      excerpt: "Stock jumps 3% in after-hours trading following announcement of $25,000 electric vehicle targeting mass market.",
      time: "8 hours ago",
      impact: "high"
    },
    {
      id: 5,
      category: "finance",
      title: "JPMorgan Reports Strong Q4 Earnings",
      excerpt: "Banking giant beats estimates with 12% profit growth, raising dividend outlook for 2026 fiscal year.",
      time: "1 day ago",
      impact: "medium"
    },
    {
      id: 6,
      category: "market",
      title: "S&P 500 Reaches New All-Time High",
      excerpt: "Major index closes above 6,900 for first time as tech stocks lead broad rally on optimistic economic data.",
      time: "1 day ago",
      impact: "high"
    }
  ];

  const filteredNews = selectedCategory === "all" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      {/* Navbar */}
      <nav style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        padding: "1rem 0",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>📈</span>
            <h3 style={{ margin: 0, fontSize: "1.5rem", color: "#667eea", fontWeight: "700" }}>Stock Market Pro</h3>
          </div>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <button style={{ background: "none", border: "none", color: "#333", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 500, fontSize: "1rem" }}>
              <Home size={18} /> Home
            </button>
            <button style={{ background: "none", border: "none", color: "#333", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 500, fontSize: "1rem" }}>
              <BarChart3 size={18} /> Markets
            </button>
            <button style={{ background: "none", border: "none", color: "#333", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 500, fontSize: "1rem" }}>
              <Info size={18} /> About
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9))",
        padding: "3rem 1.5rem",
        textAlign: "center",
        color: "white"
      }}>
        <h1 style={{ fontSize: "3rem", margin: "0 0 1rem 0", fontWeight: "700" }}>📰 Market News & Reports</h1>
        <p style={{ fontSize: "1.25rem", opacity: 0.95, maxWidth: "800px", margin: "0 auto" }}>
          Stay updated with the latest stock market news, analysis, and real-time market data
        </p>
      </div>

      {/* Live Market Ticker */}
      <div style={{
        background: "#1a1a2e",
        padding: "1.5rem 0",
        overflow: "hidden",
        position: "relative"
      }}>
        <div style={{
          display: "flex",
          gap: "2rem",
          animation: "scroll 40s linear infinite",
          paddingLeft: "100%"
        }}>
          {[...marketData, ...marketData, ...marketData].map((stock, idx) => (
            <div key={idx} style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              minWidth: "300px",
              background: "rgba(255,255,255,0.05)",
              padding: "0.75rem 1.25rem",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s"
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: "white", fontWeight: "700", fontSize: "1rem" }}>{stock.symbol}</div>
                <div style={{ color: "#888", fontSize: "0.85rem" }}>{stock.name}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "white", fontWeight: "600", fontSize: "1.1rem" }}>${stock.price}</div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  justifyContent: "flex-end",
                  color: stock.change > 0 ? "#10b981" : "#ef4444",
                  fontSize: "0.9rem",
                  fontWeight: "600"
                }}>
                  {stock.change > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {stock.change > 0 ? "+" : ""}{stock.change} ({stock.percent}%)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
        
        {/* Category Filters */}
        <div style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "2.5rem",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {["all", "tech", "market", "finance", "energy"].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: "25px",
                border: "none",
                background: selectedCategory === category 
                  ? "linear-gradient(135deg, #667eea, #764ba2)" 
                  : "white",
                color: selectedCategory === category ? "white" : "#333",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: selectedCategory === category 
                  ? "0 4px 15px rgba(102, 126, 234, 0.4)" 
                  : "0 2px 8px rgba(0,0,0,0.1)",
                textTransform: "capitalize",
                fontSize: "0.95rem"
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3rem"
        }}>
          {filteredNews.map(article => (
            <div
              key={article.id}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "1.5rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
              }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: article.impact === "high" 
                  ? "linear-gradient(90deg, #f59e0b, #ef4444)" 
                  : "linear-gradient(90deg, #3b82f6, #8b5cf6)"
              }} />
              
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem"
              }}>
                <span style={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "white",
                  padding: "0.3rem 0.85rem",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  {article.category}
                </span>
                <span style={{ color: "#888", fontSize: "0.85rem", fontWeight: 500 }}>{article.time}</span>
              </div>

              <h3 style={{
                margin: "0 0 0.75rem 0",
                fontSize: "1.25rem",
                color: "#1a1a2e",
                lineHeight: 1.4,
                fontWeight: "700"
              }}>
                {article.title}
              </h3>

              <p style={{
                color: "#666",
                lineHeight: 1.6,
                marginBottom: "1.25rem",
                fontSize: "0.95rem"
              }}>
                {article.excerpt}
              </p>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#667eea",
                fontWeight: 600,
                fontSize: "0.9rem"
              }}>
                Read More <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Market Summary Cards */}
        <h2 style={{ color: "white", fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center", fontWeight: "700" }}>
          📊 Market Overview
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2.5rem"
        }}>
          <div style={{
            background: "linear-gradient(135deg, #10b981, #059669)",
            borderRadius: "16px",
            padding: "2rem",
            color: "white",
            boxShadow: "0 8px 25px rgba(16, 185, 129, 0.3)",
            transition: "transform 0.3s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <DollarSign size={40} style={{ marginBottom: "1rem", opacity: 0.9 }} />
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "2.5rem", fontWeight: "700" }}>6,852</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: "1.1rem" }}>S&P 500 Index</p>
            <p style={{ margin: "0.5rem 0 0 0", fontSize: "1.1rem", fontWeight: "600" }}>+0.87% Today</p>
          </div>

          <div style={{
            background: "linear-gradient(135deg, #3b82f6, #2563eb)",
            borderRadius: "16px",
            padding: "2rem",
            color: "white",
            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
            transition: "transform 0.3s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <TrendingUp size={40} style={{ marginBottom: "1rem", opacity: 0.9 }} />
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "2.5rem", fontWeight: "700" }}>42.8B</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: "1.1rem" }}>Total Volume</p>
            <p style={{ margin: "0.5rem 0 0 0", fontSize: "1.1rem", fontWeight: "600" }}>Across Markets</p>
          </div>

          <div style={{
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            borderRadius: "16px",
            padding: "2rem",
            color: "white",
            boxShadow: "0 8px 25px rgba(245, 158, 11, 0.3)",
            transition: "transform 0.3s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <TrendingDown size={40} style={{ marginBottom: "1rem", opacity: 0.9 }} />
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "2.5rem", fontWeight: "700" }}>12.4</h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: "1.1rem" }}>VIX Index</p>
            <p style={{ margin: "0.5rem 0 0 0", fontSize: "1.1rem", fontWeight: "600" }}>Low Volatility</p>
          </div>
        </div>

        <button style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "white",
          color: "#667eea",
          padding: "1rem 2rem",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: 600,
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          transition: "all 0.3s",
          border: "none",
          cursor: "pointer",
          fontSize: "1rem"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateX(-4px)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateX(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        }}
        >
          ← Back to Home
        </button>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}

export default Market;