import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const getMessage = async () => {
    const res = await fetch("http://localhost:5000/api/message");
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Full Stack App</h1>
      <button onClick={getMessage}>Get Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
