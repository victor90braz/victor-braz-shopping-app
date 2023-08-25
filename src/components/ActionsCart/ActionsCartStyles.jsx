import styled from "styled-components";

export const ActionsCartStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

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

  .list-group-item {
    padding: 0;
  }
`;
