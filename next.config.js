/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		reactStrictMode: true,
		trailingSlash: true,
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
