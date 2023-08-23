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
    max-width: 58%;
    margin: auto;
    align-self: center;
    margin-top: -16px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    font-weight: bold;
    color: black;
  }
`;
