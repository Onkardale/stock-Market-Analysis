import { Link } from "react-router-dom";

function NewsReport() {
  return (
    <div className="page-wrapper">

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-brand">
            <span style={{ fontSize: "2rem" }}>📈</span>
            <h3>Stock Market Pro</h3>
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/market">Markets</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div style={{ padding: 40, color: "black" }}>
        <h1>📰 Market News & Reports</h1>
        <p>Latest stock market news and analysis.</p>

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>

    </div>
  );
}

export default NewsReport;
