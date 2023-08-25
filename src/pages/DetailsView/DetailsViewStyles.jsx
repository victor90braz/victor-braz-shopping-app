import styled from "styled-components";

export const DetailsViewStyles = styled.section`
  padding: 25px;
  display: flex;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  background-color: #10020212;
  flex-direction: column;
  height: 80vh;

  @media (max-width: 715px) {
    height: 100vh;
  }

  h2 {
    font-size: 1.2rem;
    margin-left: 60px;
    width: 100%;
  }

  .btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .btn-primary .svg-inline--fa {
    margin-right: 8px;
  }
`;
