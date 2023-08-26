// @ts-nocheck
import { useLocation } from "preact-iso";
import { HeaderNavStyle } from "./HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useFetchProduct } from "../../hooks/useFetchProduct";

export function Header() {
  const { url } = useLocation();
  const { data: products } = useFetchProduct(null, true);

  return (
    <HeaderNavStyle>
      <a href="/" class={url === "/" ? "active" : ""}>
        <FontAwesomeIcon
          icon={faHome}
          style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
        />
        <h1>Shopping App</h1>
      </a>
      <div class="product-count">
        <span>{products.length}</span> Total Products
      </div>
    </HeaderNavStyle>
  );
}
