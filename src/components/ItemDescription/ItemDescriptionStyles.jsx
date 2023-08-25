import styled from "styled-components";

export const ItemDescriptionStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .card {
    width: 60rem;
    padding: 15px;
    display: flex;
    margin: 10px;
    margin-right: 0.5rem !important;
    flex-direction: row;
    border: 1px solid gray;

    @media (max-width: 715px) {
      flex-direction: column;
    }
  }

  .container-image {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    max-height: 300px;

    @media (max-width: 715px) {
      justify-content: center;
    }
  }

  span {
    font-weight: 600;
  }

  .container-body {
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card-body {
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  .list-group-item {
    padding: 0;
  }

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
`;
