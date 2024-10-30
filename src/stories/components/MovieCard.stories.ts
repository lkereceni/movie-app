import MovieCard from "@/components/movie-card/movie-card";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/MovieCard",
  component: MovieCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MovieCardExample: Story = {
  args: {
    title: "House of Gucci",
    year: "2022",
    genre: "Drama",
  },
};
