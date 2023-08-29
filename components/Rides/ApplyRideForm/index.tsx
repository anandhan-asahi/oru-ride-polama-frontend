import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/20/solid";
import axios from "utils/axios";
export default function ApplyRideForm() {
	const router = useRouter();
	const [imageUrl, setImageUrl] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const isValid = firstName && lastName && email;
	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (isValid) {
			// await axios
			// 	.post("/rides", { name, price: "$" + price, date, imageUrl })
			// 	.then(({ data }) => {
			// 		if (data) {
			// 			router.push("/rides");
			// 		}
			// 	})
			// 	.catch((err) => {
			// 		setError(err.response.data.message);
			// 	});
		}
	};
	return (
		<div className="flex flex-col w-full p-12 bg-gray-200/90 rounded-lg shadow-xl border border-gray-400/30">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Apply Ride
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
							htmlFor="first_name"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							First Name{" "}
						</label>
						<div className="mt-2">
							<input
								id="first_name"
								name="first_name"
								type="text"
								required
								className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-200 sm:text-sm sm:leading-6"
								onChange={(e) => {
									setFirstName(e.target.value);
								}}
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="last_name"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Last Name{" "}
						</label>
						<div className="mt-2">
							<input
								id="last_name"
								name="last_name"
								type="text"
								required
								className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-200 sm:text-sm sm:leading-6"
								onChange={(e) => {
									setLastName(e.target.value);
								}}
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Email{" "}
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								required
								className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-200 sm:text-sm sm:leading-6"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="flex justify-between">
						<button
							type="button"
							className="flex w-24 justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm"
							onClick={() => router.push("/")}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="flex w-24 justify-center rounded-md bg-brown-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-200"
						>
							Apply
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
