import React from "react";
import UserCard from "components/UserCard";

const Users = () => {
	const sample = ["Chennai", "Bangalore", "Delhi", "Ladakh"];
	return (
		<div className="flex flex-col h-full w-full justify-center items-center gap-5">
			{sample.map((city) => (
				<UserCard name={city} />
			))}
		</div>
	);
};

export default Users;
