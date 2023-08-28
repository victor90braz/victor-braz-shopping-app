import styled from "styled-components";

export const CardActionsStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .container-card-actions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 715px) {
      justify-content: center;
    }
  }

  select {
    padding: 5px;
  }

  .container-actions button {
    margin: 10px;
  }

  .button-style {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    padding: 5px;
  }

  .button-style:hover {
    background-color: #0056b3;
  }

  .cart-container {
    display: flex;
    flex-direction: row;
  }

  .icon {
    color: blue;
    transition: all 0.3s ease;
  }

  .icon:hover {
    color: green;
    border: 1px solid yellow;
  }

  .cart-icon {
    margin-right: 10px;
    font-size: 2rem;
  }

  .cart-count {
    font-size: 1rem;
    font-weight: 700;
    font-size: 2rem;
  }

  .container-info-items {
    display: flex;
    flex-direction: row;
  }

  .cart-container {
    padding: 2px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }

  .cart-container:hover {
    padding: 5px;
    border: 1px solid greenyellow;
  }

  .btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 206px;
    flex-direction: row;
    justify-content: center;
  }

  .btn-primary .svg-inline--fa {
    margin-right: 8px;
  }
`;
