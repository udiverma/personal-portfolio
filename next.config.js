/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['github.com', 'raw.githubusercontent.com']
    },
    webpack(config) {
        config
            .module
            .rules
            .push({test: /\.svg$/, use: ["@svgr/webpack"]});

        return config;
    }
}

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['github.com', 'raw.githubusercontent.com'],
    },
};