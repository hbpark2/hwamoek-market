import styled from "styled-components";

export const Button = styled.button<{ disabled?: boolean }>`
  display: block;
  width: 100%;
  padding: 12px 10px;
  background-color: #555;
  color: ${({ theme }) => theme.color.beige2};
  border-radius: 5px;
  font-size: 1.6rem;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  transition: all 0.5s;
  &:hover {
    background-color: #333;
  }
`;

export const Avatar = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => (width ? width : "50px")};
  height: ${({ height }) => (height ? height : "50px")};
  background-color: #777;
  border-radius: 50%;
`;
