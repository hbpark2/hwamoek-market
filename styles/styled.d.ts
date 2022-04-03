import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      red: string;
      beige1: string;
      beige2: string;
      grey: string;
    };
    boxShadow: {
      normal: "0 3px 8px 0 rgb(0 0 0 / 10%)";
      purple: "0 3px 8px 0 #d6c9ff";
      blue: "0 3px 8px 0 #b3e2e6";
    };
  }
}
