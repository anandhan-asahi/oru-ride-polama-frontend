import React, { useState } from "react";
import AddRideForm from "components/Rides/AddRideForm";

const NewRideForm = () => {
	const initialCities = ["Kodaikkanal", "Ooty", "Coimbatore", "Kashmir"];
	const [cities, setCities] = useState(initialCities);
	return (
		<div className="flex flex-col h-full w-1/4 justify-center items-center gap-5">
			<AddRideForm />
		</div>
	);
};

export default NewRideForm;
