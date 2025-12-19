export default function Hero() {
  return (
    <section
      style={{
        width: "100vw",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        textAlign: "center",
        padding: "40px",
      }}
    >
     
     <h1
  style={{
    fontSize: "42px",
    marginBottom: "15px",
    color: "#000",   // 👈 ADD THIS
  }}
>
  We Build Amazing Digital Products
</h1>

<p
  style={{
    fontSize: "18px",
    maxWidth: "600px",
    marginBottom: "25px",
    color: "#333",   // 👈 ADD THIS
  }}
>
  We help startups and companies build high quality websites and applications.
</p>


      <button
        style={{
          padding: "12px 28px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}
