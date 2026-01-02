import { useEffect } from "react";
import axios from "axios";

function Home() {

  useEffect(() => {
    axios.post("http://localhost:8080/api/chat", {
      prompt: "What is today's stock market trend?"
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <>
      {/* YOUR EXISTING JSX (NO CHANGE NEEDED) */}
    </>
  );
}

export default Home;
