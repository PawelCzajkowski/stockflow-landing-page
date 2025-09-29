import { createTheme } from "@mui/material/styles";

// Map Tailwind sizes to MUI Button sizes via theme overrides so we avoid using !important
const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: "text",
        color: "inherit",
        disableElevation: true,
        disableRipple: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "12px", // rounded-xl
          lineHeight: 1,
          fontWeight: 500,
          fontSize: "1rem", // text-base
        },
        sizeSmall: {
          minHeight: 40, // h-10
          paddingInline: "1.5rem", // px-6
          fontSize: "0.875rem", // text-sm
          borderRadius: "10px",
        },
        sizeMedium: {
          minHeight: 48, // h-12 (default)
          paddingInline: "2rem", // px-8
        },
        sizeLarge: {
          minHeight: 56, // h-14
          paddingInline: "3rem", // px-12
          fontSize: "1.125rem", // text-lg
          borderRadius: "12px",
          letterSpacing: "0.01em",
        },
      },
    },
  },
});

export default theme;
