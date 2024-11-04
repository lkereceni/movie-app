import type { Preview } from "@storybook/react";
import withBackgrounds from "@storybook/addon-backgrounds";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#191817" },
      ],
    },
  },
};

export default preview;
