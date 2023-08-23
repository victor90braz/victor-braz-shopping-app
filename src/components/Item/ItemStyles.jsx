import styled from "styled-components";

export const ItemStyle = styled.div`
  .card {
    width: 28rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card-img-top {
    max-width: 50%; /* Set maximum width for the image */
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-weight: bold;
    color: black;
  }
`;
