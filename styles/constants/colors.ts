import { Tokens } from "@vanilla-extract/css/dist/declarations/src/types";

export const lightColors: IThemeColors = {
  background: "hsl(0, 0%, 98%)",
  foreground: "hsl(199, 18%, 40%)",
  text: "hsl(199, 15%, 64%)",
  selectionBg: "hsl(174, 42%, 65%)",
  selectionFg: "hsl(199, 18%, 40%)",
  buttons: "hsl(210, 9%, 96%)",
  secondBg: "hsl(0, 0%, 100%)",
  disabled: "hsl(200, 3%, 83%)",
  contrast: "hsl(0, 0%, 93%)",
  active: "hsl(240, 2%, 91%)",
  border: "hsl(200, 31%, 87%)",
  highlight: "hsl(240, 2%, 91%)",
  tree: "hsl(174, 42%, 65%)",
  notifications: "hsl(0, 5%, 91%)",
  accent: "hsl(187, 100%, 42%)",
  excludedFiles: "hsl(193, 16%, 83%)",
  green: "hsl(85, 40%, 54%)",
  yellow: "hsl(35, 92%, 58%)",
  blue: "hsl(217, 38%, 55%)",
  red: "hsl(1, 77%, 55%)",
  purple: "hsl(256, 100%, 65%)",
  orange: "hsl(13, 92%, 62%)",
  cyan: "hsl(184, 52%, 47%)",
  gray: "hsl(199, 22%, 73%)",
  white: "hsl(0, 0%, 15%)",
  black: "hsl(0, 0%, 15%)",
  error: "hsl(1, 77%, 55%)",
  comments: "hsl(199, 22%, 73%)",
  variables: "hsl(0, 0%, 15%)",
  links: "hsl(184, 52%, 47%)",
  functions: "hsl(217, 38%, 55%)",
  keywords: "hsl(256, 100%, 65%)",
  tags: "hsl(1, 77%, 55%)",
  strings: "hsl(85, 40%, 54%)",
  operators: "hsl(184, 52%, 47%)",
  attributes: "hsl(35, 92%, 58%)",
  numbers: "hsl(13, 92%, 62%)",
  parameters: "hsl(13, 92%, 62%)",
};
export const darkColors: IThemeColors = {
  background: "hsl(0, 0%, 13%)",
  foreground: "hsl(200, 15%, 73%)",
  text: "hsl(0, 0%, 45%)",
  selectionBg: "hsl(0, 0%, 25%)",
  selectionFg: "hsl(0, 0%, 100%)",
  buttons: "hsl(0, 0%, 16%)",
  secondBg: "hsl(0, 0%, 16%)",
  disabled: "hsl(0, 0%, 28%)",
  contrast: "hsl(0, 0%, 10%)",
  active: "hsl(0, 0%, 20%)",
  border: "hsl(0, 0%, 16%)",
  highlight: "hsl(0, 0%, 25%)",
  tree: "hsl(0, 0%, 20%)",
  notifications: "hsl(0, 0%, 10%)",
  accent: "hsl(36, 100%, 50%)",
  excludedFiles: "hsl(0, 0%, 20%)",
  green: "hsl(84, 66%, 73%)",
  yellow: "hsl(39, 100%, 71%)",
  blue: "hsl(221, 100%, 75%)",
  red: "hsl(357, 81%, 69%)",
  purple: "hsl(276, 68%, 75%)",
  orange: "hsl(14, 90%, 70%)",
  cyan: "hsl(197, 100%, 77%)",
  gray: "hsl(0, 0%, 38%)",
  white: "hsl(180, 100%, 97%)",
  black: "hsl(180, 100%, 97%)",
  error: "hsl(350, 100%, 66%)",
  comments: "hsl(0, 0%, 38%)",
  variables: "hsl(180, 100%, 97%)",
  links: "hsl(174, 42%, 65%)",
  functions: "hsl(221, 100%, 75%)",
  keywords: "hsl(276, 68%, 75%)",
  tags: "hsl(357, 81%, 69%)",
  strings: "hsl(84, 66%, 73%)",
  operators: "hsl(197, 100%, 77%)",
  attributes: "hsl(39, 100%, 71%)",
  numbers: "hsl(14, 90%, 70%)",
  parameters: "hsl(14, 90%, 70%)",
};

export interface IThemeColors {
  [key: string]: string | Tokens;
  background: string;
  foreground: string;
  text: string;
  selectionBg: string;
  selectionFg: string;
  buttons: string;
  secondBg: string;
  disabled: string;
  contrast: string;
  active: string;
  border: string;
  highlight: string;
  tree: string;
  notifications: string;
  accent: string;
  excludedFiles: string;
  green: string;
  yellow: string;
  blue: string;
  red: string;
  purple: string;
  orange: string;
  cyan: string;
  gray: string;
  white: string;
  black: string;
  error: string;
  comments: string;
  variables: string;
  links: string;
  functions: string;
  keywords: string;
  tags: string;
  strings: string;
  operators: string;
  attributes: string;
  numbers: string;
  parameters: string;
}
