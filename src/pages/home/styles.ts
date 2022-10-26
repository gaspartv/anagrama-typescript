import styled from "styled-components";

export const Div = styled.div`
  background-color: #eee8e8;

  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 50px;
  padding: 10px;

  > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    > h1 {
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      font-size: 32px;
      font-family: var(--font-family-1);
      font-weight: 700;
      letter-spacing: 2px;
    }
    > input {
      width: 84%;
      padding: 12px;
      border-radius: 4px;
      border: none;
      font-family: var(--font-family-1);
    }
    > button {
      width: 90%;
      padding: 8px;
      border-radius: 4px;
      border: none;
      background-color: #24c0eb;
      font-size: 22px;
      color: #fff;
      cursor: pointer;
      :hover {
        background-color: #24a0eb;
      }
    }
  }
`;
