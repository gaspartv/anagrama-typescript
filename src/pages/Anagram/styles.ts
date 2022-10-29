import styled from "styled-components";

export const StartStyled = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 0;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    > p {
      background-color: #fafafa;
      padding: 7px 10px;
      border-radius: 4px;
      width: 15px;
      text-align: center;
    }
    > button {
      background-color: #038bbb;
      color: #fff;
      min-width: 50px;
      height: 50px;
      font-size: 30px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      :hover {
        filter: brightness(1.1);
      }
    }
  }
`;

export const WordsStyled = styled.div`
  background-color: black;
  color: white;
  display: flex;
  height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 0;
  > p {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    > div {
      display: flex;
      gap: 20px;
      > button {
        background-color: blue;
        color: #fff;
        width: 150px;
        padding: 12px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        :hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;

export const ResultStyled = styled.ul`
  background-color: white;
  display: flex;
  height: 100px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 0;
`;
