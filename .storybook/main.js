module.exports = {
  stories: ['../src/stories/components/**/*.stories.js'],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    'addon-screen-reader'
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

