import styled from "styled-components";

export const SearchItemStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  h2 {
    font-size: 1.2rem;
    margin-left: 60px;
    text-transform: uppercase;
  }

  .form-inline {
    margin-right: 0.4rem !important;
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
