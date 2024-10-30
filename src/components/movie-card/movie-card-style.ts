import { SxProps } from "@mui/material";

export const movieCardCardStyle: SxProps = {
  position: "relative",
  width: "348px",
  height: "259px",
  border: 1,
  borderColor: "white",
  borderRadius: "20px",
};

export const movieCardCardMediaStyle: SxProps = {
  height: "259px",
  position: "absolute",
  top: 0,
  left: 0,
};

export const movieCardCardContentStyle: SxProps = {
  width: "348px",
  position: "absolute",
  bottom: 0,
  backgroundColor: "rgba(256, 256, 256, 0.6)",
  color: "black",
};

export const movieCardTypographyTitleStyle: SxProps = { fontWeight: "bold" };

export const movieCardCardActionsStyle: SxProps = {
  position: "absolute",
  top: "16px",
  right: "16px",
};

export const movieCardIconButtonStyle: SxProps = {
  color: "#6100C2",
  background: "white",
  borderRadius: "8px",
  "&:active": {
    borderRadius: "8px",
  },
};
