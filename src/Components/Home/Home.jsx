import React from "react"

import aeroplane1 from "../../assets/Img/airplane1.png"
import aeroplane2 from "../../assets/Img/airplane2.png"
import video from "../../assets/Vid/bg.mp4"

const Home = () => {
	return (
		<div className='home flex container'>
			<div className='mainText'>
				<h1>
					Create Ever-lasting Memories <br /> With Us
				</h1>
			</div>

			<div className='homeImages flex'>
				<div className='videoDiv'>
					<video src={video} autoPlay muted loop className='video'></video>
				</div>

				<img src={aeroplane1} className='plane'></img>
			</div>
		</div>
	)
}

export default Home
