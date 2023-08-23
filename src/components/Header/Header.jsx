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
      <a href="/404" class={url === "/404" ? "active" : ""}>
        404
      </a>
      <div class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </div>
    </HeaderNavStyle>
  );
}
