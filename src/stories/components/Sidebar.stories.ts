import Sidebar from "@/components/sidebar/sidebar";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarStory: Story = {};
