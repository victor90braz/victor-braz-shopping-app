import styled from "styled-components";

export const HeaderNavStyle = styled.nav`
  background-color: #fe5c5c;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  border-radius: 10px;

  a {
    color: black;
    margin-right: 10px;
    margin-left: 16px;
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: 25px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
