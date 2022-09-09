const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  staticDirs: ['../public'],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  features: {
    interactionsDebugger: true,
  },
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config) => {
    // used for tsconfig paths
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin()
    ]
    return config
  }
}