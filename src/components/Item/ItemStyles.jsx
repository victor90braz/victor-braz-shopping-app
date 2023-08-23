import styled from "styled-components";

export const ItemStyle = styled.div`
  .card {
    width: 22rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px;
    margin-right: 0.5rem !important;
  }

  .card-img-top {
    max-width: 45%;
    object-fit: scale-down;
    margin: 10px;
  }

  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
  }

  p {
    font-weight: bold;
    color: black;
  }
`;
