import styled from "styled-components";

export const HeaderNavStyle = styled.nav`
  background-color: #fe5c5c;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  border-radius: 10px;

  h1 {
    font-size: 1.5rem;
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
