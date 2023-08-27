// @ts-nocheck
import { useState } from "preact/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faArrowLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import FavoritesItems from "../../pages/FavoritesItems/FavoritesItems";
import { CardActionsStyles } from "./CardActionStyles";
import { wrongAction } from "../../modal/modals";
import { useDispatch } from "react-redux";
import { actionCreateNewProduct } from "../../redux/features/sliceProducts";
import { useSelector } from "react-redux";
import { thunkAddToCart } from "../../redux/thunks/thunksProducts";

const CardActions = ({ product }) => {
  const [selectedStorage, setSelectedStorage] = useState("defaultStorage");
  const [selectedColor, setSelectedColor] = useState("defaultColor");
  const [showModal, setShowModal] = useState(false);
  const [favoritesItems, setFavoritesItems] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (
      selectedStorage === "defaultStorage" ||
      selectedColor === "defaultColor"
    ) {
      wrongAction(
        "Please select both storage and color before adding to cart."
      );
      return;
    }

    const newItem = {
      id: product.id,
      selectedColor,
      selectedStorage,
    };

    setFavoritesItems((prevFavoritesItems) => [...prevFavoritesItems, newItem]);
    // Dispatch the action to add the item to the Redux cart
    dispatch(actionCreateNewProduct(newItem));

    // Update the local storage state with the latest cart items
    localStorage.setItem(
      "__redux__state",
      JSON.stringify(dispatch(thunkAddToCart(newItem)))
    );
  };

  const handleBackPreviousPage = () => {
    window.location.href = `/`;
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <CardActionsStyles>
      <div className="container-card-actions">
        <div className="selected-storage">
          <select
            value={selectedStorage}
            onChange={(event) => setSelectedStorage(event.target.value)}
          >
            <option value="defaultStorage">Select Storage</option>
            {product.options.storages.map((storageOption) => (
              <option key={storageOption.key} value={storageOption.key}>
                {storageOption.name}
              </option>
            ))}
          </select>
        </div>

        <div className="selected-color">
          <select
            value={selectedColor}
            onChange={(event) => setSelectedColor(event.target.value)}
          >
            <option value="defaultColor">Select Color</option>
            {product.options.colors.map((colorOption) => (
              <option key={colorOption.key} value={colorOption.key}>
                {colorOption.name}
              </option>
            ))}
          </select>
        </div>

        <div className="cart">
          <button className="button-style" onClick={handleAddToCart}>
            ADD BAG
          </button>
        </div>
      </div>

      <div className="cart-container">
        <div
          className="cart-icon"
          onClick={toggleModal}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faShoppingCart} style={{ color: "blue" }} />
        </div>
        <div
          className="cart-count"
          onClick={toggleModal}
          style={{ cursor: "pointer" }}
        >
          <span style={{ color: "green" }}>100</span>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={toggleModal}
        animation={false}
        size="lg"
        className="favorites-modal"
      >
        <Modal.Header>
          <Modal.Title>Favorites Items</Modal.Title>
          <button
            type="button"
            className="btn-close-modal"
            aria-label="Close"
            onClick={toggleModal}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: "0.5rem",
              fontSize: "1.5rem",
              color: "red",
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Modal.Header>
        <Modal.Body>
          <FavoritesItems favoritesItems={favoritesItems} />
        </Modal.Body>
      </Modal>

      <button className="btn btn-primary" onClick={handleBackPreviousPage}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
    </CardActionsStyles>
  );
};

export default CardActions;
