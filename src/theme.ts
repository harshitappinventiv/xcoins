import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgba(0, 156, 222, 0.1)",
      main: "#009cde",
      dark: "rgba(0, 156, 222, 0.3)",
    },
    secondary: {
      light: "#3a4e6f",
      main: "#637696",
      dark: "#abb5c7",
    },
  },
  spacing: 10,
});

export default theme;
