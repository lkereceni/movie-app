"use client";

import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-poppins)",
  },
  palette: {
    primary: {
      main: "#6100C2",
    },
    background: {
      default: "#21201E",
    },
  },
});

export default darkTheme;
