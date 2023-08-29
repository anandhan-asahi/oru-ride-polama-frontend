import { useRouter } from "next/router";
import { useState } from "react";
import axios from "utils/axios";
const ForgetPassword = ({ email }: any) => {
	const router = useRouter();
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [error, setError] = useState("");

	const changePasswordHandler = async () => {
		await axios
			.put("/auth/forget-password", { email, oldPassword, newPassword })
			.then((data) => {
				router.push("/login");
			})
			.catch((err) => {
				setError(err.response.data.message);
			});
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		await changePasswordHandler();
	};
	return (
		<div className="relative w-1/4 flex flex-col p-12 bg-gray-200/90 rounded-lg shadow-xl border border-gray-400/30 justify-center">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Forget Password
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
							Old password
						</label>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brown-200 sm:text-sm sm:leading-6"
								onChange={(e) => {
									setOldPassword(e.target.value);
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
								New Password
							</label>
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
									setNewPassword(e.target.value);
								}}
							/>
						</div>
					</div>

					<div className="flex gap-6">
						<button
							type="button"
							className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
							onClick={() => router.push("/login")}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-brown-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-200"
						>
							Confirm
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
};
export default ForgetPassword;
