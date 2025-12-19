export default function AdminLayout({ title, children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f4f4",
        padding: "40px",
      }}
    >
      <h2
        style={{
          marginBottom: "30px",
          fontSize: "28px",
          fontWeight: "600",
          color: "#000",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          maxWidth: "600px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
