import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/20/solid";
import axios from "utils/axios";
import moment from "moment";
export default function EditRideForm() {
	const router = useRouter();
	const [imageUrl, setImageUrl] = useState("");
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [price, setPrice] = useState("");
	const [error, setError] = useState("");
	const { id } = router.query;

	const isValid = name && date && price && imageUrl;

	const fetchRideDetails = async (id: any) => {
		axios
			.get(`/rides/${id}`)
			.then(({ data }) => {
				if (data) {
					setName(data.name);
					setDate(moment(data.date).format("YYYY-MM-DD"));
					setPrice(data.price.replace("$", ""));
					setImageUrl(data.imageUrl);
				}
			})
			.catch((err) => {
				setError(err.response.data.message);
			});
	};

	useEffect(() => {
		if (id) {
			fetchRideDetails(id);
		}
	}, [id]);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (isValid) {
			await axios
				.put(`/rides/${id}`, {
					name,
					price: "$" + price,
					date,
					imageUrl,
				})
				.then(({ data }) => {
					router.push("/rides");
				})
				.catch((err) => {
					setError(err.response.data.message);
				});
		}
	};
	return (
		<div className="flex flex-col w-full p-12 bg-gray-200/90 rounded-lg shadow-xl border border-gray-400/30">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Edit your Ride
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
							htmlFor="ride_to"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Ride to
						</label>
						<div className="mt-2">
							<input
								id="ride_to"
								name="ride_to"
								type="text"
								required
								value={name}
								className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-200 sm:text-sm sm:leading-6"
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center w-full h-32">
						<label
							htmlFor="ride_to"
							className="block text-sm self-start font-medium leading-6 text-gray-900 mb-2"
						>
							Image
						</label>
						{imageUrl ? (
							<div className="relative">
								<XCircleIcon
									className="absolute cursor-pointer top-0 right-0 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
									aria-hidden="true"
									onClick={() => setImageUrl("")}
								/>
								<Image
									src={imageUrl}
									alt="trip"
									height={100}
									width={100}
								/>
							</div>
						) : (
							<label
								htmlFor="dropzone-file"
								className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
							>
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg
										className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 16"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
										/>
									</svg>
									<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
										<span className="font-semibold">
											Click to upload
										</span>{" "}
										or drag and drop
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										PNG, JPG
									</p>
								</div>
								<input
									id="dropzone-file"
									type="file"
									accept=".png, .jpg"
									className="hidden"
									onChange={async (event: any) => {
										let url: string = URL.createObjectURL(
											event.target.files[0]
										);
										setImageUrl(url);
									}}
								/>
							</label>
						)}
					</div>
					<div>
						<label
							htmlFor="price"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Price in dollars
						</label>
						<div className="mt-2">
							<input
								id="price"
								name="price"
								type="text"
								required
								value={price}
								className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-200 sm:text-sm sm:leading-6"
								onChange={(e) => {
									setPrice(e.target.value);
								}}
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="date"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Estimated Date
						</label>
						<div className="relative max-w-sm">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
								</svg>
							</div>
							<input
								type="date"
								className="mt-2 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-200 sm:text-sm sm:leading-6"
								placeholder="Select date"
								value={date}
								onChange={(e) => {
									console.log(e.target.value);

									setDate(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="flex justify-between">
						<button
							type="button"
							className="flex w-24 justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm"
							onClick={() => router.push("/rides")}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="flex w-24 justify-center rounded-md bg-brown-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-200"
						>
							Add
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
