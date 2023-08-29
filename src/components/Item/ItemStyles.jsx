import styled from "styled-components";

export const ItemStyle = styled.div`
  .card {
    width: 22rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px;
    margin-right: 0.5rem;
    height: fit-content;

    @media (max-width: 715px) {
      width: 20.5rem;
      margin: 0;
    }
  }

  .image-container {
    flex: 1;
  }

  .card-body {
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    height: 100%;
    font-size: 0.7;
  }

  p {
    font-weight: bold;
    color: black;
    font-size: 0.8rem;
  }

  .action-container {
    display: flex;
    gap: 10px;
  }

  .btn-primary {
    font-size: 0.7rem; /* Adjust the font size */
    padding: 0.3rem 0.6rem; /* Adjust padding as needed */
  }
`;
