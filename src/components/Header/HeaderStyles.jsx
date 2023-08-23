import styled from "styled-components";

export const HeaderNavStyle = styled.nav`
  background-color: red;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: white;
    margin-right: 10px;
    margin-left: 16px;
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: 25px;
    &:hover {
      text-decoration: underline;
    }
  }

  .btn {
    color: white;
  }
`;
