import { Link } from "react-router-dom";

function Market() {
  
  return (
    <div style={{ padding: 30 }}>
      
      <h2>Market Page</h2>
      <p>Live market data will be shown here.</p>
       <Link to="/" className="back-btn">← Back to Home</Link>
      
    </div>
  );
}

export default Market;
