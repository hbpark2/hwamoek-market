import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    black: "#333",
    red: "#ea6956",
    beige1: "#fffef2",
    beige2: "#f6f5e8",
    grey: "#777",
  },
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
    purple: "0 3px 8px 0 #d6c9ff",
    blue: "0 3px 8px 0 #b3e2e6",
  },
};

const customMediaQuery = (maxWidth: number): string => {
  return `@media (max-width: ${maxWidth}px)`;
};

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
