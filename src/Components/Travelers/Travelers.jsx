import React from "react"

import paris from "../../assets/Img/paris.jpeg"
import dubaj from "../../assets/Img/dubaj.jpeg"
import London from "../../assets/Img/Lo.jpeg"
import NY from "../../assets/Img/NY.jpeg"

import user1 from "../../assets/Img/user1.jpeg"
import user2 from "../../assets/Img/user2.jpeg"
import user3 from "../../assets/Img/user3.jpeg"
import user4 from "../../assets/Img/user4.jpeg"

const travelers = [
	{
		id: 1,
		destinationImage: paris,
		travelerImage: user1,
		travelerName: "Marta",
		socialLink: "@marta_n",
	},
	{
		id: 2,
		destinationImage: dubaj,
		travelerImage: user2,
		travelerName: "Agnieszka",
		socialLink: "@aga_fa",
	},
	{
		id: 3,
		destinationImage: London,
		travelerImage: user3,
		travelerName: "Marcin",
		socialLink: "@mar_cin",
	},
	{
		id: 4,
		destinationImage: NY,
		travelerImage: user4,
		travelerName: "Kamil",
		socialLink: "@Kami_Deb",
	},

]

const Travelers = () => {
	return (
		<div className='travelers container section'>
			<div className='sectionContainer'>
				<h2>Najlepsze kierunki w tym miesiącu!</h2>

				<div className='travelersContainer grid'>
					{
					travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
							return (
								<div key={id} className='singleTraveler'>
									<img
										src={destinationImage}
										alt=''
										className='destinationImage'
									/>
									<div className='travelerDetails'>
										<div className='travelerPicture'>
											<img
												src={travelerImage}
												alt=''
												className='travelerImage'
											/>
										</div>

										<div className='travelerName'>
											<span>{travelerName}</span>
											<p>{socialLink}</p>
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
