export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FAF9F7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          width: "100%",
          textAlign: "center",
          color: "#E10600",
          border: "1.5px solid #E10600",
          padding: "48px 32px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "normal",
            marginBottom: "32px",
          }}
        >
          Para a Terra volta toda corpa em matéria
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "40px",
          }}
        >
          A página inicial é um ponto de partida.
          <br />
          Acesse aqui o projeto:
        </p>

        <a
          href="https://readymag.website/u19779918/5772071/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            border: "1.5px solid #E10600",
            color: "#E10600",
            textDecoration: "none",
            fontSize: "15px",
            transition: "all 0.2s ease",
          }}
        >
          Entrar no projeto
        </a>
      </div>
    </div>
  );
}
