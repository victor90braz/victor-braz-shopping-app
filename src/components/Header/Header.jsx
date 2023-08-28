// @ts-nocheck
import { useEffect, useState } from "preact/hooks";
import { useLocation } from "preact-iso";
import { HeaderNavStyle } from "./HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { revalidateCartData } from "../../redux/thunks/thunksProducts";

export function Header() {
  const { url } = useLocation();
  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setProductsLength(cartItems.length);
    revalidateCartData();

    const handleStorageChange = (event) => {
      if (event.key === "cartItems") {
        const updatedCartItems = JSON.parse(event.newValue) || [];
        setProductsLength(updatedCartItems.length);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
        Total Products <span>{productsLength}</span>
      </div>
    </HeaderNavStyle>
  );
}
