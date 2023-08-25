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

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  h2 {
    font-size: 1.2rem;
    margin-left: 60px;
    width: 100%;
  }
`;
