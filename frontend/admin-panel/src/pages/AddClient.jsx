import AdminLayout from "../components/AdminLayout";

export default function AddClient() {
  return (
    <AdminLayout title="Add Client">
      <input style={input} placeholder="Name" />
      <input style={input} placeholder="Designation" />
      <input style={input} placeholder="Image URL" />
      <textarea style={input} placeholder="Description" />
      <button style={btn}>Add Client</button>
    </AdminLayout>
  );
}

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
};

const btn = {
  padding: "12px",
  width: "100%",
  background: "#000",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};
