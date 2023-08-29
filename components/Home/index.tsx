import { useRouter } from "next/router";

const Home = () => {
	const router = useRouter();

	return (
		<div className="w-1/3 h-1/4 flex gap-5 justify-between">
			<div
				className="flex h-full w-full bg-gray-200/90 justify-center items-center rounded-xl shadow-lg border border-gray-400/30 text-xl font-medium cursor-pointer transform hover:scale-105 hover:shadow-xl duration-200"
				onClick={() => router.push("/rides")}
			>
				Rides
			</div>
			<div
				className="flex h-full w-full bg-gray-200/90 justify-center items-center rounded-xl shadow-lg border border-gray-400/30 text-xl font-medium cursor-pointer transform hover:scale-105 hover:shadow-xl duration-200"
				onClick={() => router.push("/users")}
			>
				Users
			</div>
		</div>
	);
};

export default Home;
