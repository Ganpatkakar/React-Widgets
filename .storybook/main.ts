import type { StorybookConfig } from "@storybook/react-webpack5";
import custom from '../webpack.config.js'

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // webpackFinal: async (config) => {
  //   return {
  //     ...config,
  //     module: { ...config.module, rules: [...config.module.rules, ...custom.module.rules] },
  //   };
  // },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    '@storybook/preset-scss'
  ],
  docs: {
    autodocs: "tag",
  },
};
export default config;
