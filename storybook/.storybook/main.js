module.exports = {
  stories: ['../src/stories/components/**/*.stories.js'],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  features: {
    postcss: false,
    emotionAlias: false
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack4",
  },
};

