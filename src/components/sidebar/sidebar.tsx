"use client";

import {
  CalendarTodayRounded,
  FavoriteBorderRounded,
  LocalMoviesRounded,
  TrendingUpRounded,
} from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import {
  sidebarDrawerListStyle,
  sidebarDrawerStyle,
  sidebarListItemIconStyle,
  sidebarListItemLogoStyle,
  sidebarListItemStyle,
  sidebarListItemTextStyle,
} from "./sidebar-style";
import logo from "@/app/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (itemPath: string) => {
    return pathname === itemPath;
  };

  const sidebarList = [
    {
      text: "Home",
      icon: <LocalMoviesRounded />,
      href: "/",
      isActive: isActive("/"),
    },
    {
      text: "Favorites",
      icon: <FavoriteBorderRounded />,
      href: "/favorites",
      isActive: isActive("/favorites"),
    },
    {
      text: "Trending",
      icon: <TrendingUpRounded />,
      href: "/trending",
      isActive: isActive("/trending"),
    },
    {
      text: "Coming soon",
      icon: <CalendarTodayRounded />,
      href: "/coming-soon",
      isActive: isActive("/coming-soon"),
    },
  ];

  return (
    <Drawer variant="permanent" anchor="left" sx={sidebarDrawerStyle}>
      <List sx={sidebarDrawerListStyle}>
        <Link href="/">
          <ListItem sx={sidebarListItemLogoStyle}>
            <Image src={logo} alt="logo" />
          </ListItem>
        </Link>
        {sidebarList.map((item, index) => (
          <Link href={item.href} key={index}>
            <ListItem sx={sidebarListItemStyle}>
              <ListItemIcon sx={sidebarListItemIconStyle(item.isActive)}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={sidebarListItemTextStyle(item.isActive)}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
