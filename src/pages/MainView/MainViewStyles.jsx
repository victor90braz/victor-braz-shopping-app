import styled from "styled-components";

export const MainViewStyles = styled.section`
  padding: 9px;
  background-color: #10020212;
  margin: 10px;
  border-radius: 10px;

  @media (max-width: 715px) {
    padding: 0;
    margin: 0;
    border-radius: 0;
  }

  .spinnerspinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: auto;
  }
`;
