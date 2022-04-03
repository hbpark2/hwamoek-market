import styled from "styled-components";

export const TextArea = styled.textarea`
  width: calc(100% - 20px);
  border: 1px solid #777;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.beige2};
  resize: none;
  font-family: inherit;
  font-size: 1.4rem;
  padding: 10px;
`;

export const ItemType = styled.i`
  display: flex;
  justify-content: center;
  width: 8rem;
  padding: 8px 0;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.beige2};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

export const Question = styled.p`
  margin: 10px 0;
  span {
    color: ${({ theme }) => theme.color.red};
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const ActionWrap = styled.ul`
  display: flex;
  align-items: center;
  li {
    display: flex;
    align-items: center;
    margin-right: 2rem;
  }
  svg {
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
  }
`;
