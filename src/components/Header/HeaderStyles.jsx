import styled from "styled-components";

export const HeaderNavStyle = styled.nav`
  background-color: #fe5c5c;
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;

  @media (max-width: 715px) {
    flex-direction: row;
    padding: 4px;
    margin: 0;
    border-radius: 0;
  }

  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  span {
    background-color: black;
    border-radius: 49%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 13px;
  }

  .product-count {
    display: flex;
    font-size: 14px;
    color: white;
    margin-top: 0.5rem;
    text-transform: uppercase;
    gap: 10px;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;

    @media (max-width: 715px) {
      font-size: 14px;
      color: white;
      margin-top: 0.5rem;
      text-transform: uppercase;
    }
  }

  a {
    color: black;
    margin-right: 10px;
    margin-left: 16px;
    text-decoration: none;
    margin-left: 25px;
    display: flex;
    gap: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
