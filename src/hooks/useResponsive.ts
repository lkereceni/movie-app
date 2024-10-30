import { useMediaQuery, useTheme } from "@mui/material";

export default function useResponsive(
  query: "up" | "down",
  key: "xs" | "sm" | "md" | "lg" | "xl"
) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints[query](key));
}
