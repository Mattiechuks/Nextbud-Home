import { Configuration } from 'webpack';
import withSvgr from 'next-svgr';
import withPlugins from 'next-compose-plugins';
import withImages from 'next-images';

const nextConfig = {
  reactStrictMode: true,
  webpack(config: Configuration) {
    if (!config.module) {
      config.module = { rules: [] };
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default withPlugins([withSvgr, withImages], nextConfig);
