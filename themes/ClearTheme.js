import Colors from "../tokens/Colors";
console.log(Colors.purple100);

const ClearTheme = {
  palette: {
    type: "dark",
    primary: {
      main: Colors.purple100,
      paper: "#4c94f6",
    },
    secondary: {
      main: Colors.purple500,
      paper: "#4c94f6",
    },
    background: {
      default: "#4c69f6",
      paper: "#4c94f6",
    },
  },
  typography: {
    body1: {
      fontFamily: "sans",
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

export default ClearTheme;
