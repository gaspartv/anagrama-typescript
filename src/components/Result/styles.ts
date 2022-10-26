import styled from "styled-components";

export const ResultStyled = styled.div`
  position: absolute;
  background-color: #24c0eb;
  width: 400px;
  border-radius: 6px;
  > button {
    position: absolute;
    right: 5px;
    top: 5px;
    border: none;
    background-color: transparent;
    font-size: 22px;
    font-weight: 700;
    font-family: var(--font-family-1);
    cursor: pointer;
    transition: 0.3s;
    color: #fff;
    :hover {
      font-size: 23px;
    }
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    justify-content: center;
    height: 300px;
    > p {
      font-size: 19px;
      letter-spacing: 1px;
      font-weight: 500;
      cursor: default;
    }
  }
`;
