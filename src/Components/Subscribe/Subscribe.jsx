import React from "react"

const Subscribe = () => {
	return (
		<div className='subscribe section'>
			<div className='sectionContainer container'>
				<h2>Dołącz do Newslettera i bądź na bieżąco!</h2>
				<div className='inputDiv flex'>
					<input type='text' placeholder='Podaj swój email' />
					<button className='btn'>Subskrybuj</button>
				</div>
			</div>
		</div>
	)
}

export default Subscribe
