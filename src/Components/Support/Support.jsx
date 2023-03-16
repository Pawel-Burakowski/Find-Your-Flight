import React from "react"

import gridImg from "../../assets/Img/grid.png"

const Support = () => {
	return (
		<div className='support container section'>
			<div className='sectionContainer'>
				<div className='tittlesDiv'>
					<small>travel support</small>
					<h2>Zaplanuj podróż z mami</h2>
					<p>
						Zaplanuj swoją wymarzoną podróż bez stresu i niespodzianek! Ciesz
						się swoim urlopem.
					</p>
				</div>

				<div className='infoDiv grid'>
					<div className='textDiv grid'>
						<div className='singleInfo'>
							<span className='number'>01</span>
							<h4>Wymagania przed podróżą do Dubaju</h4>
							<p>
								Otrzymaj pomoc przy rezerwacji i w planowaniu podróży. Z nami
								dowiesz się o wszsytkich wymaganiach dla podróżnych.
							</p>
						</div>

						<div className='singleInfo'>
							<span className='number colorOne'>02</span>
							<h4>Wynajem samochodów</h4>
							<p>
								Bezpłatne odwołanie w przypadku odwołania większości samochodów.
							</p>
						</div>

						<div className='singleInfo'>
							<span className='number colorTwo'>03</span>
							<h4>Ubezpieczenie w podróży</h4>
							<p>Ubezpiecznie w podróży od 15$.</p>
						</div>
					</div>

					<div className='imgDiv'>
						<img src={gridImg} alt='okno' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Support
