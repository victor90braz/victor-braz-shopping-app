import styled from "styled-components";

export const ItemListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  justify-content: center;
  justify-items: center;

  @media (max-width: 715px) {
    padding: 10px;
  }
`;
