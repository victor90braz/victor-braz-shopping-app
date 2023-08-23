// @ts-nocheck
import { useLocation } from "preact-iso";
import { HeaderContainer } from "./HeaderStyles";

export function Header() {
  const { url } = useLocation();

  return (
    <HeaderContainer as="header">
      <nav>
        <a href="/" class={url === "/" ? "active" : ""}>
          Home
        </a>
        <a href="/404" class={url === "/404" ? "active" : ""}>
          404
        </a>
      </nav>
    </HeaderContainer>
  );
}
