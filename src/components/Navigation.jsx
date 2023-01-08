import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Search from "./Search";

library.add(fas);


export default function Navigation({ onSearch }) {

	const [toggle, setToggle] = React.useState(false);
	const links = [
		{ name: "All", path: "/" },
		{ name: "Movies", path: "/movies" },
		{ name: "Series", path: "/series" },
		{ name: "Cartoons", path: "/cartoons" },
	];

	return (
		<Router>
			<div className="py-6 px-4 md:px-10 flex">
				<button
					className="z-50 md:hidden"
					onClick={() => setToggle(!toggle)}
				>
					<FontAwesomeIcon
						icon={toggle ? "close" : "bars"}
						size="lg"
					/>
				</button>
				<nav className={`primary__nav ${toggle ? "nav-active" : ""} w-full justify-between items-center flex bg-white md:bg-trasparent`}>
					<ul className="primary__nav-list flex gap-12 font-medium text-xl">
						{
							links.map(link => (
								<li
									className=""
									key={link.name}
								>
									<NavLink
										to={link.path}
										className={
											({ isActive }) =>
												`${isActive ? "text-indigo-600" : "text-black hover:opacity-70"}`
										}
									>
										{link.name}
									</NavLink>
								</li>
							))
						}
					</ul>
					<Search className="primary__nav-search" onSearch={onSearch} />
				</nav>
			</div>
		</Router>
	);
}
