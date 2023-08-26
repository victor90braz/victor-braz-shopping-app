import styled from "styled-components";

export const FavoritesItemsStyles = styled.div`
  padding: 20px;

  .favorites-list {
    list-style: none;
    padding: 0;
  }

  .favorites-item {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .favorites-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .favorites-storage,
  .favorites-color,
  .favorites-brand,
  .favorites-id {
    margin-right: 10px;
  }
`;
