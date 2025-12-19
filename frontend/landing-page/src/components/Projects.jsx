import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data));
  }, []);

  return (
    <section style={{ padding: "60px", background: "#111", color: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "36px" }}>
        Our Projects
      </h2>

      <div style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" }}>
        {projects.map(p => (
          <div
            key={p._id}
            style={{
              background: "#fff",
              color: "#000",
              width: "280px",
              borderRadius: "8px",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <img
  src={p.image || "https://picsum.photos/400/250"}
  alt="project"
  style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    background: "#eee",
  }}
/>


            <div style={{ padding: "15px" }}>
              <h3 style={{ marginBottom: "10px" }}>
                {p.title || "Project Title"}
              </h3>

              <p style={{ fontSize: "14px", marginBottom: "15px" }}>
                {p.description}
              </p>

              <a
                href={p.link || "#"}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "8px 18px",
                  background: "#000",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
