import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MainHome = () => {
	const router = useRouter();
	const [token, setToken] = useState<string | null>(null);
	useEffect(() => {
		const storedToken = localStorage.getItem("accessToken");
		setToken(storedToken);
	}, []);

	return (
		<div className="w-1/3 h-1/4 flex gap-5 justify-between">
			<div
				className="flex h-full w-full bg-gray-200/90 justify-center items-center rounded-xl shadow-lg border border-gray-400/30 text-xl font-medium cursor-pointer transform hover:scale-105 hover:shadow-xl duration-200"
				onClick={() => router.push(`${token ? "/rides" : "/login"}`)}
			>
				Admin Portal
			</div>
			<div
				className="flex h-full w-full bg-gray-200/90 justify-center items-center rounded-xl shadow-lg border border-gray-400/30 text-xl font-medium cursor-pointer transform hover:scale-105 hover:shadow-xl duration-200"
				onClick={() => router.push("/rides")}
			>
				Riders Portal
			</div>
		</div>
	);
};

export default MainHome;
