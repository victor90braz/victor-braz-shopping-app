// @ts-nocheck
import { useState } from "preact/hooks";

const ActionsProducts = () => {
  const [selectedStorage, setSelectedStorage] = useState("defaultStorage"); // Cambia "defaultStorage" por la opción predeterminada si es diferente
  const [selectedColor, setSelectedColor] = useState("defaultColor"); // Cambia "defaultColor" por la opción predeterminada si es diferente
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    // Aquí deberías hacer la llamada al API para agregar el producto a la cesta
    // Usarías selectedStorage y selectedColor para enviar la información necesaria

    // Supongamos que obtienes el número de productos en la cesta como respuesta del API
    const responseFromAPI = { cartItemCount: 5 }; // Ejemplo de respuesta del API

    // Actualizar el contador de productos en la cesta con la respuesta del API
    setCartItemCount(responseFromAPI.cartItemCount);
  };

  return (
    <div>
      {/* Selector de Almacenamiento */}
      <select
        value={selectedStorage}
        onChange={(e) => setSelectedStorage(e.target.value)}
      >
        <option value="defaultStorage">Selecciona Almacenamiento</option>
        <option value="storageOption1">Opción de Almacenamiento 1</option>
        <option value="storageOption2">Opción de Almacenamiento 2</option>
        {/* Agregar más opciones de almacenamiento según sea necesario */}
      </select>

      {/* Selector de Colores */}
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="defaultColor">Selecciona Color</option>
        <option value="colorOption1">Opción de Color 1</option>
        <option value="colorOption2">Opción de Color 2</option>
        {/* Agregar más opciones de color según sea necesario */}
      </select>

      {/* Botón para agregar a la cesta */}
      <button onClick={handleAddToCart}>Añadir a la Cesta</button>

      {/* Mostrar el número de productos en la cesta */}
      <p>Productos en la cesta: {cartItemCount}</p>
    </div>
  );
};

export default ActionsProducts;
