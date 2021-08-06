import { colors, typography } from "../tokens";
const contrast = {
  palette: {
    type: "dark",
    primary: {
      main: colors.red100,
    },
    secondary: {
      main: colors.red200,
    },
    background: {
      default: "#4c69f6",
      paper: "#4c94f6",
    },
  },
  typography: {
    body1: {
      fontFamily: typography.family,
    },
    fontFamily: "Bangers",
    caption: {
      fontFamily: "Do Hyeon",
    },
    overline: {
      fontFamily: "Do Hyeon",
    },
    body2: {
      fontFamily: "Roboto",
    },
  },
};

export default contrast;
