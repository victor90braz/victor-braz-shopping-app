import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  return (
    <header
      style={{
        padding: "15px",
        margin: "16px",
        border: "2px solid black",
        display: "flex",
        justifyContent: "flex-start",
        fontSize: "1.2em",
      }}
    >
      <nav
        style={{
          marginRight: "16px",
        }}
      >
        <a
          href="/"
          class={url == "/" && "active"}
          style={{
            marginRight: "16px",
          }}
        >
          Home
        </a>
        <a href="/404" class={url == "/404" && "active"}>
          404
        </a>
      </nav>
    </header>
  );
}
