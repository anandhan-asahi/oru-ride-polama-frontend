import React from "react";
import ApplicationLogin from "components/Login";
import { useRouter } from "next/router";

const Login = () => {
	const router = useRouter();
	const { type } = router.query;

	return <ApplicationLogin type={type} />;
};

export default Login;
