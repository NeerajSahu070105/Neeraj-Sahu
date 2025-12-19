import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacts", form);
    alert("Message sent successfully");
    setForm({ name: "", email: "", mobile: "", city: "", message: "" });
  };

  return (
    <section style={{ padding: "60px", background: "#f5f5f5" }}>
      
      <h2
  style={{
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "36px",
    fontWeight: "600",
    color: "#000",   // 👈 IMPORTANT (force black)
  }}
>
  Contact Us
</h2>


      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required style={input} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required style={input} />
        <input name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} required style={input} />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} required style={input} />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} style={{ ...input, height: "90px" }} />

        <button style={btn}>Send Message</button>
      </form>
    </section>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#000",
  color: "#fff",
  border: "none",
};
