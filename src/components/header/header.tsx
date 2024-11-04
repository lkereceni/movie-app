import { NotificationsNone, SearchOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import {
  headerChildBoxStyle,
  headerIconStyle,
  headerParentBoxStyle,
} from "./header-style";
import HeaderProfile from "./header-profile";

const Header = () => {
  const headerItems: string[] = ["Movies", "Series", "Documentaries"];

  return (
    <Box component="header" sx={headerParentBoxStyle}>
      <Box sx={headerChildBoxStyle}>
        {headerItems.map((item, index) => (
          <Typography key={index} sx={{ color: "white" }}>
            {item}
          </Typography>
        ))}
      </Box>
      <Box sx={headerChildBoxStyle}>
        <IconButton sx={headerIconStyle}>
          <SearchOutlined />
        </IconButton>
        <IconButton sx={headerIconStyle}>
          <NotificationsNone />
        </IconButton>
        <HeaderProfile name="Lovro" />
      </Box>
    </Box>
  );
};

export default Header;
