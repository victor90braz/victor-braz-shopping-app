// @ts-nocheck
import { useLocation } from "preact-iso";
import { HeaderNavStyle } from "./HeaderStyles";

export function Header() {
  const { url } = useLocation();
  return (
    <HeaderNavStyle>
      <a href="/" class={url === "/" ? "active" : ""}>
        Home
      </a>
    </HeaderNavStyle>
  );
}
