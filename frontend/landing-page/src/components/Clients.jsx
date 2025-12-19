import { useEffect, useState } from "react";
import api from "../api";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("/clients")
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => {
        console.error("Error fetching clients", err);
      });
  }, []);

  return (
    <section style={{ padding: "60px 20px", background: "#f9fafb" }}>
      
           <h2
  style={{
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "36px",
    fontWeight: "600",
    color: "#000",   // 👈 IMPORTANT (force black)
  }}
>
   Happy Clients
</h2>




      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {clients.map((c) => (
          <div
            key={c._id}
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 10,
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            {c.image && (
              <img
                src={c.image}
                alt={c.name}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: 15,
                }}
              />
            )}

            <h3 style={{ marginBottom: 5 }}>{c.name}</h3>
            <p style={{ fontSize: 14, color: "#555", marginBottom: 10 }}>
              {c.designation}
            </p>

            <p style={{ fontSize: 14, color: "#666" }}>
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
