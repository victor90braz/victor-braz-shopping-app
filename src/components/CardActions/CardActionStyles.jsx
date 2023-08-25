import styled from "styled-components";

export const CardActionsStyles = styled.div`
  .card-actions {
    display: flex;
    flex-direction: column;
  }

  .container-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  .container-actions button {
    margin: 10px;
  }

  .button-style {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  .button-style:hover {
    background-color: #0056b3;
  }

  .cart-container {
    display: flex;
    flex-direction: row;
  }

  .cart-icon {
    margin-right: 10px;
  }

  .cart-count {
    font-size: 1rem;
    font-weight: 700;
  }
`;
