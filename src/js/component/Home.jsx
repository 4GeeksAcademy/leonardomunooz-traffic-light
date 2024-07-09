import React, { useState } from "react";
import Figura from "./Figura"


const Home = () => {
	const [lightRed,setLightRed] = useState("");
	const [lightYellow,setLightYellow] = useState("");
	const [lightGreen,setLightGreen] = useState("");


	const onLight = (color) =>{
		if(color === "red"){
			setLightRed("selected")
			setLightYellow("")
			setLightGreen("")
		}else if(color==="yellow"){
			setLightYellow("selected")
			setLightRed("")
			setLightGreen("")
		}else if(color==="green"){
			setLightGreen("selected")
			setLightRed("")
			setLightYellow("")
		}
	}


	return (
		<>
			<div className="sostenedor">
			</div>
			<div className="semaforo">
				<div onClick={()=> onLight("red")}    className={`light red ${lightRed}`}></div>
				<div onClick={()=> onLight("yellow")} className={`light yellow ${lightYellow}`}></div>
				<div onClick={()=> onLight("green")}  className={`light green ${lightGreen}`}></div>
			</div>
		</>
		
	);
};

export default Home;
