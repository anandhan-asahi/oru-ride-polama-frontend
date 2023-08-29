import { useRouter } from "next/router";
import { useState } from "react";
import axios from "utils/axios";
import Link from "next/link";
// import { PlacesServiceStatus } from "@types/googlemaps";

export default function Login({ type }: any) {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validEmail, setValidEmail] = useState(false);
	const [error, setError] = useState("");
	const [value, setValue] = useState(null);
	const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
	const userType = type || "admin";
	const loginHandler = async () => {
		axios
			.post("/auth/login", { email, password })
			.then(
				({
					data: {
						login,
						data: { accessToken },
					},
				}) => {
					if (login) {
						localStorage.setItem("accessToken", accessToken);
						router.push("/rides");
					}
				}
			)
			.catch((err) => {
				setError(err.response.data.message);
			});
	};

	if (typeof window !== "undefined") {
		const autocompleteSessionToken = new (
			window as any
		).google.maps.places.AutocompleteSessionToken();
		console.log(autocompleteSessionToken, "window");
	}

	// const getMatches = () => {
	// 	// Create a new session token.
	// 	var sessionToken = new (
	// 		window as any
	// 	).google.maps.places.AutocompleteSessionToken();

	// 	// Pass the token to the autocomplete service.
	// 	var autocompleteService = new (
	// 		window as any
	// 	).google.maps.places.AutocompleteService();
	// 	autocompleteService.getPlacePredictions(
	// 		{
	// 			input: "pizza near Syd",
	// 			sessionToken: sessionToken,
	// 		},
	// 		displaySuggestions
	// 	);
	// };

	// const displaySuggestions = (predictions: any, status: any) => {
	// 	if (
	// 		status != window.google.maps.places.PlacesServiceStatus.OK ||
	// 		!predictions
	// 	) {
	// 		console.error("Error fetching place predictions:", status);
	// 		return;
	// 	}

	// 	predictions.forEach((prediction: any) => {
	// 		console.log(prediction.description);
	// 	});
	// };

	const validateEmail = (email: string) => {
		if (emailRegex.test(email)) {
			setValidEmail(true);
		} else {
			setValidEmail(false);
		}
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		await loginHandler();
	};
	return (
		<div className="relative w-1/4 flex flex-col p-12 bg-gray-200/90 rounded-lg shadow-xl border border-gray-400/30 justify-center">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
				<form
					className="space-y-6"
					action="#"
					method="POST"
					onSubmit={(e) => handleSubmit(e)}
				>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-200 sm:text-sm sm:leading-6"
								onChange={(e) => {
									validateEmail(e.target.value);
									setEmail(e.target.value);
								}}
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password
							</label>
							<div
								className={`text-sm font-semibold ${
									validEmail
										? "text-brown-200 hover:text-brown-100 cursor-pointer"
										: "text-gray-500"
								}`}
								onClick={() => {
									if (validEmail) {
										router.push(
											`/forget-password/?email=${email}`
										);
									}
								}}
							>
								Forgot password?
							</div>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-200 sm:text-sm sm:leading-6"
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-brown-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-200"
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
			{error && (
				<div className="absolute bottom-5 block text-sm font-medium leading-6 text-red-500">
					{error}
				</div>
			)}
		</div>
	);
}
