import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import './Navbar.css'

const Navbar = () => {
	const [activeItem, setActiveItem] = useState("weekly");

 
	return (
		<Menu inverted className="navBar">
			<Menu.Item
				name="Weekly"
				active={activeItem === "weekly"}
				onClick={() => setActiveItem("weekly")}
			/>
			<Menu.Item
				name="Quarterly"
				active={activeItem === "quarterly"}
				onClick={() => setActiveItem("quarterly")}
			/>
			<Menu.Item
				name="Yearly"
				active={activeItem === "yearly"}
				onClick={() => setActiveItem("yearly")}
			/>
		</Menu>
	);
};
export default Navbar;
