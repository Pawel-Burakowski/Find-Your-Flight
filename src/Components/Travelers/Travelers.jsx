import React from "react"

import paris from "../../assets/Img/paris.jpeg"
/* import dubaj from "../../assets/Img/dubaj.jpeg"
import London from "../../assets/Img/Lo.jpeg"
import NY from "../../assets/Img/NY.jpeg" */

import user1 from "../../assets/Img/user1.jpeg"
/* import user2 from "../../assets/Img/user2.jpeg"
import user3 from "../../assets/Img/user3.jpeg"
import user4 from "../../assets/Img/user4.jpeg" */

const travelers = [
	{
		id: 1,
		destinationImage: paris,
		travelerImage: user1,
		travelerName: "Marta",
		socialLink: "@marta_n",
	}
]

const Travelers = () => {
	return (
		<div className='travelers container section'>
			<div className='sectionContainer'>
				<h2>Top travelers of this month!</h2>

				<div className='travelersContainer grid'>
					{travelers.map(
						(id, destinationImage, travelerImage, travelerName, socialLink) => {
							return (        /* NIE DZIAŁA WCZYTYWANIE OBRAZKÓW!?!?! */
								<div key={id} className='singleTraveler'>
									<img
										src={paris}
										alt=''
										className='destinationImage'
									/>
									<div className='travelerDetails'>
										<div className='travelerPicture'>
											<img
												src={user1}
												alt=''
												className='travelerImage'
											/>
										</div>

										<div className='travelerName'>
											<span>Marta</span>
											<p>@marta_n</p>
										</div>
									</div>
								</div>
							)
						}
					)}
				</div>
			</div>
		</div>
	)
}

export default Travelers
