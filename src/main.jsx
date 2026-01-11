import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "RedHatText",
  },
  palette: {
    background: {
      default: "hsl(20, 50%, 98%)",
      paper: "white",
    },
    text: {
      primary: "hsl(14, 65%, 9%)",
      secondary: "hsl(12, 20%, 44%)",
    },
    primary: {
      main: "hsl(14, 86%, 42%)",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
