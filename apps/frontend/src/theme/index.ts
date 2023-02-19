import { Poppins } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    "extra-small": true;
  }
}

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
        },
      },
    },

    MuiTextField: {
      variants: [
        {
          props: { size: "extra-small" },
          style: {
            "& .MuiInputBase-input": {
              fontSize: 12,
              padding: "8px 10px",
            },
          },
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "12px 12px",
        },
      },
    },
  },
});

export default theme;
