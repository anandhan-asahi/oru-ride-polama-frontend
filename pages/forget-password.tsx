import React from "react";
import ForgetPassword from "components/ForgetPassword";
import { useRouter } from "next/router";

const Login = () => {
	const router = useRouter();
	const { email }: any = router.query;
	return <ForgetPassword email={email} />;
};

export default Login;
