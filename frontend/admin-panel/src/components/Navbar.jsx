import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        padding: "20px 40px",
        backgroundColor: "#111",
        color: "#fff",
        alignItems: "center",
      }}
    >
      <Link style={{ color: "#fff", textDecoration: "none" }} to="/add-client">
        Add Client
      </Link>
      <Link style={{ color: "#fff", textDecoration: "none" }} to="/add-project">
        Add Project
      </Link>
      <Link style={{ color: "#fff", textDecoration: "none" }} to="/contacts">
        Contacts
      </Link>
      <Link style={{ color: "#fff", textDecoration: "none" }} to="/subscribers">
        Subscribers
      </Link>
    </div>
  );
}
