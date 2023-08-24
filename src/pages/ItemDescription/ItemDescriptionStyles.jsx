import styled from "styled-components";

export const ItemDescriptionStyles = styled.div`
  background-color: #10020212;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  .card {
    display: flex;
    margin: 10px;
    margin-right: 0.5rem !important;
    flex-direction: row;
    align-items: center;

    @media (max-width: 520px) {
      flex-direction: column;
    }
  }

  .card-image {
    height: 100%;
    width: 100%;
  }

  .full-width-image {
    flex: 0.5;
    padding: 20px;
  }

  .card-body {
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    font-size: 0.8rem;
  }

  .list-group-item {
    padding: 0;
  }
`;
