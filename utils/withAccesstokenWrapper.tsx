import { useRouter } from "next/router";
import { Component, useEffect } from "react";

const withAccessToken = (Component: any) => {
	return function WrappedComponent(props: any) {
		const router = useRouter();

		useEffect(() => {
			const accessToken = localStorage.getItem("accessToken");
			if (!accessToken) {
				router.push("/login");
			}
		}, []);

		return <Component {...props} />;
	};
};

export default withAccessToken;
