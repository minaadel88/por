module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-external-image-domain.com',
        pathname: '/**',
      },
    ],
  },
};
