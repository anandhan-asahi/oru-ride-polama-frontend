import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import "src/global.css";
import "src/common.css";
import Image from "next/image";
import Logo from "assets/Logo.png";
import BackgroundGradient from "assets/backgroundGradient.png";
import { useRouter } from "next/router";
import { store } from "redux/store";
import { Provider } from "react-redux";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	const { pathname } = router;
	const [token, setToken] = useState<string | null>(null);
	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		setToken(accessToken);

		// if (!accessToken && pathname !== "/login" && pathname !== "/") {
		// 	router.push("/login");
		// }
	});

	return (
		<>
			<Head>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/datepicker.min.js"></script>
				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBaA_LVNxaDZqE0TFFeCPm5tEwh09XaqLY&libraries=places&callback=initMap"></script>
			</Head>
			<Provider store={store}>
				<div
					className="flex flex-col bg-gradient-to-r from-amber-200 to-yellow-500"
					style={{ height: "100vh", width: "100vw" }}
				>
					<div
						className="fixed z-0 top-20"
						style={{ height: "100vh", width: "100vw" }}
					>
						<Image
							src={BackgroundGradient}
							alt="Background"
							style={{ objectFit: "contain", marginTop: "0vh" }}
							className="custom-spin"
						/>
					</div>
					<div
						className="relative flex justify-between px-5 bg-brown-100/50 border-b border-gray-400/30 shadow-lg z-10"
						style={{ height: "8vh" }}
					>
						<div
							className="flex h-full items-center cursor-pointer"
							onClick={() => {
								if (pathname !== "/login" && pathname !== "/") {
									router.push("/");
								}
							}}
						>
							<Image
								src={Logo}
								alt="ride"
								height={45}
								width={45}
							/>
						</div>
						<p className="absolute top-5 left-1/2 font-extrabold text-base -translate-x-1/2">
							ORU RIDE POVOMA
						</p>
						{pathname !== "/login" &&
							pathname !== "/" &&
							pathname !== "/forget-password" &&
							token && (
								<div className="flex gap-5 items-center">
									<button
										type="button"
										className="flex w-24 h-fit justify-center rounded-md bg-brown-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-200"
										onClick={() =>
											router.push("/rides/new")
										}
									>
										Add ride
									</button>
									<button
										type="button"
										className="flex w-24 h-fit justify-center rounded-md bg-brown-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-200"
										onClick={() => {
											localStorage.removeItem(
												"accessToken"
											),
												router.push("/");
										}}
									>
										Log out
									</button>
								</div>
							)}
					</div>
					<div
						className="z-10 flex w-full justify-center items-center"
						style={{ height: "92vh" }}
					>
						<Component {...pageProps} />
					</div>
				</div>
			</Provider>
		</>
	);
};

export default MyApp;
