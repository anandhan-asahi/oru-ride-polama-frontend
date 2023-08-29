import React, { useState } from "react";
import EditRideForm from "components/Rides/EditRideForm";

const EditRide = () => {
	const initialCities = ["Kodaikkanal", "Ooty", "Coimbatore", "Kashmir"];
	const [cities, setCities] = useState(initialCities);
	return (
		<div className="flex flex-col h-full w-1/4 justify-center items-center gap-5">
			<EditRideForm />
		</div>
	);
};

export default EditRide;
