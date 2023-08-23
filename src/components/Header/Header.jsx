// @ts-nocheck
import { useLocation } from "preact-iso";
import { HeaderNavStyle } from "./HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faHome } from "@fortawesome/free-solid-svg-icons"; // Import the home icon

export function Header() {
  const { url } = useLocation();
  return (
    <HeaderNavStyle>
      <a href="/" class={url === "/" ? "active" : ""}>
        <FontAwesomeIcon icon={faHome} style={{ fontSize: "1.5rem" }} />{" "}
        <h1>Shopping App</h1>
      </a>
    </HeaderNavStyle>
  );
}
