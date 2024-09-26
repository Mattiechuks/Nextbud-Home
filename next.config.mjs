import withPlugins from 'next-compose-plugins';
import withImages from 'next-images';

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default withPlugins([withImages], nextConfig);
