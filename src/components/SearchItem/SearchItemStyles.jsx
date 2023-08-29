import styled from "styled-components";

export const SearchItemStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media (max-width: 715px) {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.2rem;
    margin-left: 60px;
    text-transform: uppercase;

    @media (max-width: 715px) {
      margin-left: 0;
    }
  }

  .form-inline {
    margin-right: 0.4rem;

    @media (max-width: 715px) {
      margin-right: 0;
    }
  }

  input {
    text-align: right;

    @media (max-width: 715px) {
      text-align: left;
    }
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
