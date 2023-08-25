import styled from "styled-components";

export const ItemDescriptionStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;

  @media (max-width: 715px) {
    height: 100vh;
    margin-top: -60px;
  }

  .card {
    width: 52rem;
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
    font-size: 0.9rem;
  }

  .list-group-item {
    padding: 0;
  }

  .card-actions,
  .card-body {
    min-width: 424px;
    padding: 20px;
  }

  .card-actions {
    display: flex;
    flex-direction: column;
  }

  .container-actions {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
  }

  .container-actions button {
    margin: 10px;
  }
`;
