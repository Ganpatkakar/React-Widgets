import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
			name: `@storybook/preset-scss`,
			options: {
				rule: {
					test: /\.s[ca]ss$/,
				},
				cssLoaderOptions: {
					modules: {
						localIdentName: '[name]__[local]--[hash:base64:5]',
					},
				}
			},
		},
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
