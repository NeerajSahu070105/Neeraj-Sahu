import { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/subscribers", { email });
    alert("Subscribed successfully");
    setEmail("");
  };

  return (
  <section
    style={{
      padding: "50px",
      background: "#000",
      color: "#fff",
      textAlign: "center",
    }}
  >
    <h2>Subscribe to our Newsletter</h2>

    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          padding: "10px",
          width: "250px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          background: "#fff",
          color: "#000", 
          border: "none",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
    </form>
  </section>
);

};

export default Newsletter;
