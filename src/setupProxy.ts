import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app: any) {
	app.use(
		"/", // Your API endpoint
		createProxyMiddleware({
			target: "http://localhost:9000", // Your API server address
			changeOrigin: true,
		})
	);
};
