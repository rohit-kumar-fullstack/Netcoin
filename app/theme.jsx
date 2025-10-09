
'use client';
import { createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";


const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#0276E5",
    },
    secondary_primary: {
      main: "#e0f7fa",
    },
    primaryBlack: {
      main: "#2A2A2A",
    },
    secondary: {
      main: "#6A6A6A",
    },
    error: {
      main: "#FF2626",
    },
    success: {
      main: "#4CAF50",
    },
    info: {
      main: "#F28505",
    },
    background: {
      default: "#F2F8FD",
      paper: "#FFFFFF",
    },
    common: {
      black: "#2A2A2A",
      white: "#fff",
      red,
      green,
    },
    // Extra custom palette keys (if you use them in your code)
    primary2: {
      main: "#8338EC",
    },
  },
  typography: {
    fontFamily: "var(--font-manrope), sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      "@media (max-width:960px)": { fontSize: "2.5rem" },
      "@media (max-width:600px)": { fontSize: "2rem" },
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      "@media (max-width:960px)": { fontSize: "1.75rem" },
      "@media (max-width:600px)": { fontSize: "1.5rem" },
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1rem",
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    body1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 400,
      fontSize: "0.875rem",
    },
    body2: {
      fontWeight: 500,
      fontSize: "0.875rem",
    },
    caption: {
      fontFamily: "DM Sans, sans-serif",
      fontWeight: 400,
      fontSize: "0.85rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "large" && {
            padding: "10px 16px",
            height: "44px",
            fontSize: "1rem",
            fontWeight: 600,
          }),
          ...(ownerState.size === "medium" && {
            padding: "7px 12px",
            height: "36px",
            fontSize: "14px",
            fontWeight: 500,
          }),
          ...(ownerState.size === "small" && {
            padding: "4px 8px",
            height: "29px",
            fontSize: "0.875rem",
            fontWeight: 500,
          }),
          textTransform: "none",
          borderRadius: "4px",
          fontFamily: "Poppins, sans-serif",
        }),
      },
    },

    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     input: {
    //       padding: "11.8px 8px",
    //     },
    //   },
    // },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       "&.MuiOutlinedInput-root": {
    //         padding: "0px 8px",
    //       },
    //     },
    //   },
    // },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 32,
          height: 18,
          padding: 0,
          display: "flex",
          "& .MuiSwitch-switchBase": {
            padding: 2,
            "&.Mui-checked": {
              transform: "translateX(12px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                opacity: 1,
              },
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
            width: 14,
            height: 13,
            borderRadius: 6,
          },
          "& .MuiSwitch-track": {
            borderRadius: 9,
            opacity: 1,
            backgroundColor: "lightgrey",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { color: "#2A2A2A" },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { outline: "none" },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "#0276E5",
          fontWeight: 500,
          minWidth: "110px",
          fontSize: "0.875rem",
          padding: "0.5rem",
        },
        body: {
          color: "#2A2A2A",
          fontWeight: 500,
          fontSize: "0.875rem",
          padding: "0.5rem",
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: "#0276E5",
          fontWeight: 500,
          fontSize: "0.875rem",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: { root: { borderRadius: "0px" } },
    },
    MuiTableRow: {
      styleOverrides: { root: { borderBottomColor: "white" } },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "separate",
          borderSpacing: "0px 15px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "2px 4px 16px -5px rgba(2, 118, 229, 0.10)",
          borderRadius: "8px",
          border: "1px solid #FBFBFB",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 0,
          backgroundColor: ownerState.color === "primary" ? "white" : "inherit",
          color: ownerState.color === "primary" ? "black" : "inherit",
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: { root: { borderRadius: 0 } },
    }
  },
});

export default theme;
