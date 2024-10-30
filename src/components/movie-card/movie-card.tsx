"use client";

import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import imagePlaceholder from "@/app/assets/image-placeholder.jpeg";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  movieCardCardActionsStyle,
  movieCardCardContentStyle,
  movieCardCardMediaStyle,
  movieCardCardStyle,
  movieCardIconButtonStyle,
  movieCardTypographyTitleStyle,
} from "./movie-card-style";

type MovieCardProps = {
  title: string;
  year: string;
  genre: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ title, year, genre }) => {
  const [isFavoriteClicked, setIsFavoriteClicked] = useState(false);

  const favoriteClickHandle = () => {
    setIsFavoriteClicked((prevState) => !prevState);
  };

  return (
    <Card variant="elevation" elevation={0} sx={movieCardCardStyle}>
      <CardMedia
        component="img"
        image={imagePlaceholder.src}
        alt="Movie Image"
        sx={movieCardCardMediaStyle}
      />
      <CardContent sx={movieCardCardContentStyle}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={movieCardTypographyTitleStyle}
        >
          {title}
        </Typography>
        <Typography variant="body2">
          {year} | {genre}
        </Typography>
      </CardContent>
      <CardActions sx={movieCardCardActionsStyle}>
        <IconButton
          aria-label="Add to favorites"
          onClick={favoriteClickHandle}
          sx={movieCardIconButtonStyle}
        >
          {isFavoriteClicked ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
