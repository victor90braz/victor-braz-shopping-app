import styled from "styled-components";

export const SearchItemStyle = styled.nav`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.2rem;
    margin-left: 25px;
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
