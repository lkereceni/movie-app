import { SxProps } from "@mui/material";

const drawerWidth = 274;

export const sidebarDrawerStyle: SxProps = {
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    border: "none",
  },
};

export const sidebarDrawerListStyle: SxProps = {
  height: "100svh",
  paddingTop: "40px",
  background: "#21201E",
  display: "flex",
  flexDirection: "column",
};

export const sidebarListItemIconStyle = (isActive: boolean): SxProps => ({
  color: "white",
  ...(!isActive ? { opacity: "80%" } : {}),
});

export const sidebarListItemTextStyle = (isActive: boolean): SxProps => ({
  color: "white",
  fontSize: 16,
  textWrap: "nowrap",
  ...(!isActive ? { opacity: "80%" } : {}),
});

export const sidebarListItemLogoStyle: SxProps = {
  marginBottom: "58px",
  paddingLeft: "40px",
};

export const sidebarListItemStyle: SxProps = {
  ":hover": { background: "#191817" },
  paddingLeft: "40px",
  paddingY: "24px",
};
