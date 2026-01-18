import { Link } from "react-router-dom";

function About({ userEmail }) {
  return (
    <div className="about-page">
      <div className="about-card">
        <h2>User Profile</h2>

        <div className="info-row">
          <span>Email</span>
          <span>{userEmail || "user@email.com"}</span>
        </div>

        <div className="info-row">
          <span>Account Status</span>
          <span className="active">Active</span>
        </div>

        <div className="info-row">
          <span>Role</span>
          <span>User</span>
        </div>

        <div className="info-row">
          <span>Trader</span>
          <span>Beginner ✅</span>
        </div>

        <div className="info-row">
          <span>Joined On</span>
          <span>12 Jan 2026</span>
        </div>

        <div className="info-row">
          <span>Last Login</span>
          <span>Today</span>
        </div>

        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>

      {/* Inline CSS (safe, no extra files) */}
      <style>{`
        .about-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #020617);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          color: white;
        }

        .about-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          backdrop-filter: blur(10px);
        }

        .about-card h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 0.6rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          font-size: 0.95rem;
        }

        .info-row:last-child {
          border-bottom: none;
        }

        .active {
          color: #22c55e;
          font-weight: 600;
        }

        .back-btn {
          display: block;
          margin-top: 1.8rem;
          text-align: center;
          padding: 0.7rem;
          border-radius: 10px;
          background: #22c55e;
          color: black;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: #16a34a;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

export default About;
