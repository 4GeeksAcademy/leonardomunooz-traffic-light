import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const dimentionLight = {
	width:"300px",
	height:"300px"
}
const Home = () => {
	return (
		<>
		<div className="sostenedor">
		</div>
		<div className="semaforo">
			<div className="light red">
			</div>
			<div className="light yellow">
			</div>
			<div className="light green">
			</div>
		</div>
		</>
		
	);
};

export default Home;
