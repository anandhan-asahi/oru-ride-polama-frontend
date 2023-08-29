import React, { useState } from "react";
import ApplyRideForm from "components/Rides/ApplyRideForm";

const ApplyRide = () => {
	const initialCities = ["Kodaikkanal", "Ooty", "Coimbatore", "Kashmir"];
	const [cities, setCities] = useState(initialCities);
	return (
		<div className="flex flex-col h-full w-1/4 justify-center items-center gap-5">
			<ApplyRideForm />
		</div>
	);
};

export default ApplyRide;
