import styled from "styled-components";

export const SearchItemStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media (max-width: 715px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 20px 10px 10px 10px;
  }

  h2 {
    font-size: 1.2rem;
    margin-left: 80px;
    text-transform: uppercase;

    @media (max-width: 715px) {
      font-size: 1.2rem;
      margin-left: 5px;
      text-transform: uppercase;
    }
  }

  .form-inline {
    margin-right: 0.4rem;

    @media (max-width: 715px) {
    }
  }

  input {
    text-align: right;
  }

  a {
    color: white;
    margin-right: 10px;
    margin-left: 16px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
