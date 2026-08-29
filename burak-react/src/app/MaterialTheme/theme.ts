import { createTheme } from "@mui/material/styles";

/**
 * BURAK REACT - CUSTOM MATERIAL-UI THEME
 */
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#d97706",
      contrastText: "#000000",
    },
    secondary: {
      main: "#0f172a",
      light: "#1e293b",
      dark: "#020617",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#64748b",
    },
  },
  typography: {
    fontFamily: ['"Plus Jakarta Sans"', '"Outfit"', "sans-serif"].join(","),
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "8px 22px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(245, 158, 11, 0.25)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
          border: "1px solid #e2e8f0",
        },
      },
    },
  },
});

export default customTheme;
