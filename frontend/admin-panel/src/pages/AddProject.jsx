import { useState } from "react";
import api from "../api";
import AdminLayout from "../components/AdminLayout";

export default function AddProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/projects", form);
      alert("Project added successfully 🚀");
      setForm({ title: "", description: "", image: "", link: "" });
    } catch (err) {
      alert("Error adding project");
      console.error(err);
    }
  };

  return (
    <AdminLayout title="Add Project">
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          required
          style={input}
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={form.description}
          onChange={handleChange}
          required
          style={{ ...input, minHeight: "100px" }}
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          style={input}
        />

        <input
          name="link"
          placeholder="Live Project Link"
          value={form.link}
          onChange={handleChange}
          style={input}
        />

        <button type="submit" style={btn}>
          Add Project
        </button>
      </form>
      {form.image && (
  <img
    src={form.image}
    alt="preview"
    style={{
      width: "100%",
      height: "180px",
      objectFit: "cover",
      marginBottom: "15px",
      borderRadius: "6px",
      border: "1px solid #ddd",
    }}
  />
)}

    </AdminLayout>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "15px",
};
