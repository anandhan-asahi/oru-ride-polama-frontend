import Base from "axios";

const axios = Base.create({
	withCredentials: true,
	baseURL: process.env.NEXT_PUBLIC_HOST_URL,
});

axios.interceptors.request.use(
	(config) => {
		if (typeof window === "undefined") {
			return config;
		}
		const token = localStorage?.getItem("accessToken");
		if (token) {
			config.headers.Authorization = token;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default axios;
