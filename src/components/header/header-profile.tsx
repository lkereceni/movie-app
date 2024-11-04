import { Avatar, Box, Typography } from "@mui/material";
import React, { FC } from "react";
import profilePhoto from "@/app/assets/profile-photo.jpg";

type HeaderProfileProps = {
  name: string;
};

const HeaderProfile: FC<HeaderProfileProps> = ({ name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <Avatar
        src={profilePhoto.src}
        alt="Profile"
        sx={{ width: "32px", height: "32px" }}
      />
      <Typography sx={{ color: "white" }}>{name}</Typography>
    </Box>
  );
};

export default HeaderProfile;
