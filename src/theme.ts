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
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "F5F5F5",
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
          borderRadius: 10,
        },
        "::-webkit-scrollbar": {
          width: "10px",
          backgroundColor: "F5F5F5",
        },
        "::-webkit-scrollbar-thumb": {
          borderRadius: 10,
          backgroundImage:
            "-webkit-gradient(linear,left bottom,left top,color-stop(0.44, rgb(122,153,217)),color-stop(0.72, rgb(73,125,189)),color-stop(0.86, rgb(28,58,148)))",
        },
      },
    },
  },
});

export default theme;
