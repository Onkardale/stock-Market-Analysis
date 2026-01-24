import { useState } from "react";

function TrackNow() {
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const handleNavigation = (path) => {
    console.log(`Navigate to: ${path}`);
    // In your actual app, this will use react-router-dom's Link component
  };

  const patterns = [
    {
      id: 1,
      name: "Head and Shoulders",
      category: "reversal",
      type: "Bearish Reversal",
      description: "A chart pattern that appears as a baseline with three peaks, the middle peak being the highest. Signals a reversal from bullish to bearish trend.",
      reliability: "High",
      color: "#ef4444"
    },
    {
      id: 2,
      name: "Inverse Head and Shoulders",
      category: "reversal",
      type: "Bullish Reversal",
      description: "The opposite of head and shoulders, with three troughs instead of peaks. Indicates a reversal from bearish to bullish trend.",
      reliability: "High",
      color: "#22c55e",
      example: "Stock falls to $30 (left shoulder), drops to $25 (head), recovers to $32, dips to $30 (right shoulder), then breaks above $35 neckline - buy signal.",
      howToTrade: "Enter long position on neckline breakout. Stop-loss below right shoulder. Target: neckline plus head depth."
    },
    {
      id: 3,
      name: "Double Top",
      category: "reversal",
      type: "Bearish Reversal",
      description: "Two consecutive peaks at roughly the same price level. Indicates strong resistance and potential trend reversal downward.",
      reliability: "Medium-High",
      color: "#ef4444",
      example: "Tesla hits $250 twice but can't break through. After second rejection, it drops below $240 support - time to short or exit longs.",
      howToTrade: "Sell when price breaks support between the two tops. Stop-loss above second peak. Target: support minus pattern height."
    },
    {
      id: 4,
      name: "Double Bottom",
      category: "reversal",
      type: "Bullish Reversal",
      description: "Two consecutive troughs at approximately the same price level. Suggests strong support and potential upward reversal.",
      reliability: "Medium-High",
      color: "#22c55e",
      example: "Apple drops to $150 twice, finding strong support. After second bounce, it breaks above $155 resistance - bullish signal.",
      howToTrade: "Buy on breakout above resistance. Stop-loss below second bottom. Target: resistance plus pattern height."
    },
    {
      id: 5,
      name: "Triple Top",
      category: "reversal",
      type: "Bearish Reversal",
      description: "Three peaks at similar price levels showing strong resistance. More reliable than double top pattern.",
      reliability: "High",
      color: "#ef4444",
      example: "Stock tests $100 three times over 2 months but fails each time. Third rejection with declining volume signals exhaustion - bearish.",
      howToTrade: "Short after third peak rejection or support break. Stop above highest peak. Target equals pattern height."
    },
    {
      id: 6,
      name: "Triple Bottom",
      category: "reversal",
      type: "Bullish Reversal",
      description: "Three troughs at similar levels indicating strong support. More reliable than double bottom.",
      reliability: "High",
      color: "#22c55e",
      example: "Microsoft bounces at $300 three times. Third bounce with increasing volume shows strong buying - bullish reversal imminent.",
      howToTrade: "Buy after third bounce or resistance breakout. Stop below lowest trough. Target equals pattern height upward."
    },
    {
      id: 7,
      name: "Ascending Triangle",
      category: "continuation",
      type: "Bullish Continuation",
      description: "Flat upper trendline with rising lower trendline. Usually breaks upward continuing the bullish trend.",
      reliability: "Medium-High",
      color: "#22c55e",
      example: "Amazon consolidates between $180 flat resistance and rising support from $170 to $175. Breakout above $180 continues uptrend.",
      howToTrade: "Buy on upside breakout with volume. Stop-loss below rising support. Target: resistance plus triangle height."
    },
    {
      id: 8,
      name: "Descending Triangle",
      category: "continuation",
      type: "Bearish Continuation",
      description: "Flat lower trendline with declining upper trendline. Typically breaks downward continuing bearish trend.",
      reliability: "Medium-High",
      color: "#ef4444",
      example: "Stock finds support at $50 but makes lower highs at $58, $55, $52. Break below $50 confirms continuation of downtrend.",
      howToTrade: "Short on downside breakdown. Stop-loss above declining resistance. Target: support minus triangle height."
    },
    {
      id: 9,
      name: "Symmetrical Triangle",
      category: "continuation",
      type: "Continuation",
      description: "Converging trendlines with lower highs and higher lows. Can break either direction but usually continues existing trend.",
      reliability: "Medium",
      color: "#3b82f6",
      example: "During uptrend, stock forms triangle between $90-$100. Breaks above $100 with volume - uptrend continues to $110.",
      howToTrade: "Trade breakout direction. Place stop on opposite side. Target: triangle width added to breakout point."
    },
    {
      id: 10,
      name: "Bull Flag",
      category: "continuation",
      type: "Bullish Continuation",
      description: "Sharp price increase followed by consolidation in a downward sloping channel. Signals continuation of uptrend.",
      reliability: "High",
      color: "#22c55e",
      example: "Stock surges from $40 to $50 (flagpole), consolidates between $48-$49 for 1 week, then breaks to $60 - classic bull flag.",
      howToTrade: "Buy on breakout above flag. Stop below flag bottom. Target: flagpole height added to breakout."
    },
    {
      id: 11,
      name: "Bear Flag",
      category: "continuation",
      type: "Bearish Continuation",
      description: "Sharp price decline followed by consolidation in an upward sloping channel. Indicates continuation of downtrend.",
      reliability: "High",
      color: "#ef4444",
      example: "Stock drops from $60 to $50 (pole), bounces in channel $51-$52 for days, then crashes to $40 - bear flag confirmed.",
      howToTrade: "Short on breakdown below flag. Stop above flag top. Target: pole length subtracted from breakdown."
    },
    {
      id: 12,
      name: "Bullish Pennant",
      category: "continuation",
      type: "Bullish Continuation",
      description: "Small symmetrical triangle following sharp upward move. Short-term consolidation before uptrend continues.",
      reliability: "Medium-High",
      color: "#22c55e",
      example: "After surging 15% in 3 days, stock forms tight pennant for 5 days, then explodes another 10% - momentum continuation.",
      howToTrade: "Enter on upside breakout. Tight stop below pennant. Target: initial surge length from breakout."
    },
    {
      id: 13,
      name: "Bearish Pennant",
      category: "continuation",
      type: "Bearish Continuation",
      description: "Small symmetrical triangle after sharp downward move. Brief pause before downtrend resumes.",
      reliability: "Medium-High",
      color: "#ef4444",
      example: "Stock plunges 20%, forms small pennant, then continues falling another 15% - bearish momentum preserved.",
      howToTrade: "Short on breakdown. Stop above pennant apex. Target: initial drop distance from breakdown."
    },
    {
      id: 14,
      name: "Cup and Handle",
      category: "continuation",
      type: "Bullish Continuation",
      description: "U-shaped cup followed by small downward drift (handle). Powerful bullish continuation pattern.",
      reliability: "High",
      color: "#22c55e",
      example: "Netflix forms cup $400-$300-$400 over 6 months, handle dips to $380, breaks to new highs at $450 - strong buy.",
      howToTrade: "Buy on handle breakout above cup rim. Stop in handle. Target: cup depth added to rim."
    },
    {
      id: 15,
      name: "Rounding Bottom",
      category: "reversal",
      type: "Bullish Reversal",
      description: "Gradual U-shaped curve showing slow reversal from bearish to bullish sentiment.",
      reliability: "Medium",
      color: "#22c55e",
      example: "Over 4 months, stock slowly forms U-shape from $80 to $65 to $80, then accelerates to $95 - long-term reversal.",
      howToTrade: "Enter as curve completes or on resistance break. Stop below low. Target: pattern depth upward."
    },
    {
      id: 16,
      name: "Rounding Top",
      category: "reversal",
      type: "Bearish Reversal",
      description: "Inverted U-shape indicating gradual shift from bullish to bearish trend.",
      reliability: "Medium",
      color: "#ef4444",
      example: "Stock peaks at $120, slowly rounds over to $110, then accelerates down to $95 - distribution pattern complete.",
      howToTrade: "Short as pattern completes or breaks support. Stop above high. Target: pattern depth downward."
    },
    {
      id: 17,
      name: "Rising Wedge",
      category: "reversal",
      type: "Bearish Reversal",
      description: "Upward sloping converging trendlines. Despite upward movement, indicates weakening momentum and bearish reversal.",
      reliability: "Medium",
      color: "#ef4444",
      example: "Stock rises from $50 to $60 but in narrowing range $58-$60. Breaks down to $52 - rising wedge failure.",
      howToTrade: "Short on breakdown below support. Stop above wedge. Target: wedge base to breakdown point."
    },
    {
      id: 18,
      name: "Falling Wedge",
      category: "reversal",
      type: "Bullish Reversal",
      description: "Downward sloping converging trendlines. Shows decreasing selling pressure and potential bullish reversal.",
      reliability: "Medium",
      color: "#22c55e",
      example: "Stock falls from $70 to $55 in tightening range. Breaks above wedge at $58, rallies to $68 - buying pressure builds.",
      howToTrade: "Buy on upside breakout. Stop below wedge. Target: wedge height added to breakout."
    },
    {
      id: 19,
      name: "Rectangle Pattern",
      category: "continuation",
      type: "Continuation",
      description: "Price moves between parallel support and resistance levels. Breakout continues previous trend.",
      reliability: "Medium",
      color: "#3b82f6",
      example: "During uptrend, stock trades between $85-$90 for 3 weeks. Breaks to $95 on volume - uptrend resumes.",
      howToTrade: "Trade breakout direction. Stop on opposite side of rectangle. Target: rectangle height from break."
    },
    {
      id: 20,
      name: "Hammer",
      category: "candlestick",
      type: "Bullish Reversal",
      description: "Single candlestick with small body and long lower shadow. Forms at bottom of downtrend signaling reversal.",
      reliability: "Medium",
      color: "#22c55e",
      example: "After 5 red days, stock opens at $45, drops to $42, closes at $44.80 - long lower wick shows buyers stepping in.",
      howToTrade: "Buy next candle if it confirms upward move. Stop below hammer low. Target: recent resistance level."
    },
    {
      id: 21,
      name: "Shooting Star",
      category: "candlestick",
      type: "Bearish Reversal",
      description: "Small body with long upper shadow at top of uptrend. Indicates rejection of higher prices.",
      reliability: "Medium",
      color: "#ef4444",
      example: "After rally, stock opens $88, spikes to $92, closes $88.50 - long upper wick shows selling pressure at highs.",
      howToTrade: "Short if next candle confirms. Stop above shooting star high. Target: nearby support level."
    },
    {
      id: 22,
      name: "Engulfing Pattern",
      category: "candlestick",
      type: "Reversal",
      description: "Second candle completely engulfs first. Bullish engulfing at bottom, bearish at top of trend.",
      reliability: "Medium-High",
      color: "#3b82f6",
      example: "Small red candle ($50-$49) followed by large green ($48.50-$52) - bullish engulfing shows strong buying takeover.",
      howToTrade: "Trade direction of engulfing candle. Stop beyond pattern. Target: swing high/low or key levels."
    },
    {
      id: 23,
      name: "Doji",
      category: "candlestick",
      type: "Indecision",
      description: "Open and close at same price creating cross shape. Signals market indecision and potential reversal.",
      reliability: "Medium",
      color: "#a855f7",
      example: "After strong uptrend, doji appears at $75 (opens/closes $75, ranges $74-$76) - bulls and bears in equilibrium.",
      howToTrade: "Wait for confirmation candle. Trade breakout direction. Use tight stops as reversal is uncertain."
    },
    {
      id: 24,
      name: "Morning Star",
      category: "candlestick",
      type: "Bullish Reversal",
      description: "Three-candle pattern: long bearish, small-bodied, long bullish. Strong reversal signal at bottoms.",
      reliability: "High",
      color: "#22c55e",
      example: "Day 1: Large red $55-$50. Day 2: Small body $50-$49. Day 3: Large green $49-$54 - powerful bullish reversal.",
      howToTrade: "Buy on third candle close. Stop below pattern low. Target: recent swing high or resistance."
    },
    {
      id: 25,
      name: "Evening Star",
      category: "candlestick",
      type: "Bearish Reversal",
      description: "Three-candle pattern: long bullish, small-bodied, long bearish. Strong reversal at market tops.",
      reliability: "High",
      color: "#ef4444",
      example: "Day 1: Big green $80-$85. Day 2: Doji $85-$85.50. Day 3: Big red $85-$80 - top formation complete.",
      howToTrade: "Short after third candle. Stop above pattern high. Target: recent support or swing low."
    },
    {
      id: 26,
      name: "Harami Pattern",
      category: "candlestick",
      type: "Reversal",
      description: "Small candle contained within previous large candle. Signals weakening momentum and potential reversal.",
      reliability: "Medium",
      color: "#3b82f6",
      example: "After large red candle $70-$65, small candle $67-$66 forms inside - selling pressure diminishing.",
      howToTrade: "Wait for confirmation. Trade reversal direction. Stop beyond mother candle. Target: key level."
    },
    {
      id: 27,
      name: "Channel Pattern",
      category: "continuation",
      type: "Trend Continuation",
      description: "Price moves between two parallel trendlines. Trade within channel until breakout.",
      reliability: "Medium",
      color: "#3b82f6",
      example: "Uptrending channel: buy near lower line $90, sell near upper $100. Breakout above $100 continues uptrend to $110.",
      howToTrade: "Trade bounces off channel lines. On breakout, trade direction with target of channel width."
    }
  ];

  const categories = [
    { id: "all", name: "All Patterns", icon: "📊" },
    { id: "reversal", name: "Reversal", icon: "🔄" },
    { id: "continuation", name: "Continuation", icon: "📈" },
    { id: "candlestick", name: "Candlestick", icon: "🕯️" }
  ];

  const filteredPatterns = selectedCategory === "all" 
    ? patterns 
    : patterns.filter(p => p.category === selectedCategory);

  return (
    <div className="page-wrapper" style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>

      {/* Navbar */}
      <nav style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ fontSize: "2rem" }}>📈</span>
            <h3 style={{ margin: 0, fontSize: "1.5rem", color: "#1f2937" }}>Stock Market Pro</h3>
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <a href="/" style={{
              textDecoration: "none",
              color: "#4b5563",
              fontWeight: 500,
              transition: "color 0.3s",
              fontSize: "1rem",
              cursor: "pointer"
            }}>Home</a>
            <a href="/market" style={{
              textDecoration: "none",
              color: "#667eea",
              fontWeight: 600,
              fontSize: "1rem",
              borderBottom: "2px solid #667eea",
              cursor: "pointer"
            }}>Markets</a>
            <a href="/about" style={{
              textDecoration: "none",
              color: "#4b5563",
              fontWeight: 500,
              transition: "color 0.3s",
              fontSize: "1rem",
              cursor: "pointer"
            }}>About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9))",
        padding: "4rem 2rem",
        textAlign: "center",
        color: "white"
      }}>
        <h1 style={{
          fontSize: "3rem",
          margin: "0 0 1rem 0",
          fontWeight: 700,
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
        }}>📚 Chart Pattern Encyclopedia</h1>
        <p style={{
          fontSize: "1.25rem",
          maxWidth: "700px",
          margin: "0 auto",
          opacity: 0.95
        }}>Master the essential patterns that professional traders use to predict market movements</p>
      </div>

      {/* Category Filter */}
      <div style={{
        maxWidth: "1200px",
        margin: "2rem auto",
        padding: "0 2rem"
      }}>
        <div style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: "0.75rem 1.5rem",
                border: "none",
                borderRadius: "50px",
                background: selectedCategory === cat.id 
                  ? "linear-gradient(135deg, #667eea, #764ba2)"
                  : "white",
                color: selectedCategory === cat.id ? "white" : "#4b5563",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: selectedCategory === cat.id 
                  ? "0 4px 12px rgba(102, 126, 234, 0.4)"
                  : "0 2px 8px rgba(0,0,0,0.1)",
                transform: selectedCategory === cat.id ? "scale(1.05)" : "scale(1)"
              }}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Patterns Grid */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem"
        }}>
          {filteredPatterns.map(pattern => (
            <div
              key={pattern.id}
              onClick={() => setSelectedPattern(pattern)}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "1.5rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "all 0.3s",
                transform: selectedPattern?.id === pattern.id ? "scale(1.02)" : "scale(1)",
                border: selectedPattern?.id === pattern.id ? "3px solid #667eea" : "3px solid transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                if (selectedPattern?.id !== pattern.id) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem"
              }}>
                <h3 style={{
                  margin: 0,
                  fontSize: "1.25rem",
                  color: "#1f2937",
                  fontWeight: 700
                }}>{pattern.name}</h3>
                <span style={{
                  padding: "0.25rem 0.75rem",
                  borderRadius: "12px",
                  background: pattern.color,
                  color: "white",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap"
                }}>{pattern.reliability}</span>
              </div>
              
              <div style={{
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                background: `${pattern.color}15`,
                color: pattern.color,
                fontSize: "0.875rem",
                fontWeight: 600,
                marginBottom: "1rem",
                display: "inline-block"
              }}>
                {pattern.type}
              </div>

              <p style={{
                margin: 0,
                color: "#6b7280",
                fontSize: "0.95rem",
                lineHeight: "1.6"
              }}>{pattern.description}</p>

              <div style={{
                marginTop: "1rem",
                paddingTop: "1rem",
                borderTop: "1px solid #e5e7eb",
                fontSize: "0.85rem",
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                {pattern.category.charAt(0).toUpperCase() + pattern.category.slice(1)} Pattern
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pattern Detail Modal */}
      {selectedPattern && (
        <div
          onClick={() => setSelectedPattern(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            padding: "2rem"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "2.5rem",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
            }}
          >
            <button
              onClick={() => setSelectedPattern(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "#f3f4f6",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s"
              }}
            >×</button>

            <h2 style={{
              margin: "0 0 1rem 0",
              fontSize: "2rem",
              color: "#1f2937",
              fontWeight: 700
            }}>{selectedPattern.name}</h2>

            <div style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap"
            }}>
              <span style={{
                padding: "0.5rem 1rem",
                borderRadius: "12px",
                background: selectedPattern.color,
                color: "white",
                fontSize: "0.875rem",
                fontWeight: 600
              }}>{selectedPattern.type}</span>
              
              <span style={{
                padding: "0.5rem 1rem",
                borderRadius: "12px",
                background: "#f3f4f6",
                color: "#4b5563",
                fontSize: "0.875rem",
                fontWeight: 600
              }}>Reliability: {selectedPattern.reliability}</span>
            </div>

            <p style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#4b5563",
              marginBottom: "1.5rem"
            }}>{selectedPattern.description}</p>

            <div style={{
              background: "#f0f9ff",
              padding: "1.5rem",
              borderRadius: "12px",
              marginBottom: "1.5rem",
              borderLeft: "4px solid #3b82f6"
            }}>
              <h4 style={{
                margin: "0 0 0.75rem 0",
                color: "#1f2937",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>💡 Real Example</h4>
              <p style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: "1.7",
                fontSize: "0.95rem"
              }}>{selectedPattern.example}</p>
            </div>

            <div style={{
              background: "#f9fafb",
              padding: "1.5rem",
              borderRadius: "12px",
              borderLeft: `4px solid ${selectedPattern.color}`
            }}>
              <h4 style={{
                margin: "0 0 0.75rem 0",
                color: "#1f2937",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>📈 How to Trade</h4>
              <p style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: "1.7",
                fontSize: "0.95rem",
                fontWeight: 500
              }}>{selectedPattern.howToTrade}</p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div style={{
        maxWidth: "1200px",
        margin: "3rem auto 2rem",
        padding: "0 2rem",
        textAlign: "center"
      }}>
        <a href="/" style={{
          display: "inline-block",
          padding: "1rem 2.5rem",
          background: "white",
          color: "#667eea",
          textDecoration: "none",
          borderRadius: "50px",
          fontWeight: 600,
          fontSize: "1rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "all 0.3s",
          cursor: "pointer"
        }}>
          ← Back to Home
        </a>
      </div>

      {/* Footer */}
      <div style={{
        background: "rgba(255,255,255,0.1)",
        color: "white",
        textAlign: "center",
        padding: "2rem",
        marginTop: "4rem"
      }}>
        <p style={{ margin: 0, fontSize: "0.95rem" }}>
          💡 Tip: Always combine pattern analysis with other technical indicators for best results
        </p>
      </div>

    </div>
  );
}

export default TrackNow;