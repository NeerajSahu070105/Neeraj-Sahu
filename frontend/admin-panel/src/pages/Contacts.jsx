import { useEffect, useState } from "react";
import api from "../api";
import AdminLayout from "../components/AdminLayout";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contacts").then((res) => setContacts(res.data));
  }, []);

  return (
    <AdminLayout title="Contact Messages">
      <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
        {contacts.map((c) => (
          <div
            key={c._id}
            style={{
              background: "#fff",
              color: "#000",
              padding: "15px",
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "6px",
            }}
          >
            <p><b>Name:</b> {c.name}</p>
            <p><b>Email:</b> {c.email}</p>
            <p><b>Mobile:</b> {c.mobile}</p>
            <p><b>City:</b> {c.city}</p>
            <p><b>Message:</b> {c.message}</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
