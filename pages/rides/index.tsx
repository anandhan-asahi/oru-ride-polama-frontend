import React, { useEffect, useState } from "react";
import RideCard from "components/Rides/RideCard";
import axios from "utils/axios";

interface RideProps {
	_id: any;
	name: any;
	price: any;
	imageUrl: any;
	date: any;
}

const Rides = () => {
	const [rides, setRides] = useState([]);
	const [error, setError] = useState("");

	const fetchRides = async () => {
		await axios
			.get("/rides")
			.then(({ data }) => {
				setRides(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const onDeleteHandler = (id: string) => {
		axios
			.delete(`/rides/${id}`)
			.then(({ data }) => {
				fetchRides();
			})
			.catch((err) => {
				setError(err.response.data.message);
			});
	};

	useEffect(() => {
		fetchRides();
	}, []);

	return (
		<div className="flex flex-col h-full w-full justify-center items-center gap-5">
			{rides.length > 0 ? (
				rides.map((ride: RideProps) => (
					<RideCard
						key={ride._id}
						ride={ride}
						onDelete={onDeleteHandler}
					/>
				))
			) : (
				<div className="p-10 bg-gray-200/90 rounded-xl shadow-lg text-gray-900 border border-gray-400/30">
					No Rides Found!
				</div>
			)}
		</div>
	);
};

export default Rides;
