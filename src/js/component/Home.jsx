import React from "react";
import Figura from "./Figura"
const Home = () => {
	return (
		<>
			<div className="sostenedor">
			</div>
			<div className="semaforo">
				<Figura clase="light red"/>
				<Figura clase="light yellow"/>
				<Figura clase="light green"/>
			</div>
		</>
		
	);
};

export default Home;
