import Image from "next/image";
import moment from "moment";
import { XCircleIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const RideCard = ({ ride, onDelete }: any) => {
	const router = useRouter();
	const [hover, setHover] = useState(false);
	const [token, setToken] = useState<string | null>(null);
	useEffect(() => {
		const storedToken = localStorage.getItem("accessToken");
		setToken(storedToken);
	}, []);
	return (
		<div
			className="relative flex items-center gap-5 h-24 py-5 px-5 w-5/12 bg-gray-200/90 rounded-xl shadow-lg border border-gray-400/30 cursor-pointer transform hover:scale-105 hover:shadow-xl duration-200"
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<div className="w-16">
				<Image src={ride.imageUrl} alt="trip" height={50} width={50} />
			</div>
			<span className="flex flex-1 text-lg font-medium">
				{ride?.name}
			</span>
			<span className="flex flex-1 text-lg font-medium">
				{ride?.price}
			</span>
			<span className="flex text-lg font-medium">
				{moment(ride?.date).format("MMMM Do YYYY")}
			</span>

			{token ? (
				<div className="flex gap-1">
					<PencilSquareIcon
						className={`cursor-pointer h-6 w-6 flex-shrink-0 text-gray-900`}
						aria-hidden="true"
						onClick={() => router.push(`/rides/${ride._id}`)}
					/>
					<XCircleIcon
						className={`cursor-pointer h-6 w-6 flex-shrink-0 text-gray-900`}
						aria-hidden="true"
						onClick={() => onDelete(ride._id)}
					/>
				</div>
			) : (
				<button
					type="button"
					className="flex w-24 h-fit justify-center rounded-md bg-brown-200 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brown-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-200"
					onClick={() => router.push("/rides/apply")}
				>
					Apply
				</button>
			)}
		</div>
	);
};
export default RideCard;
