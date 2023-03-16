import React from "react"

import grid2 from "../../assets/Img/grid2.png"

const Lounge = () => {
	return (
		<div className='lounge container section'>
			<div className='sectionContainer grid'>
				<div className='imgDiv'>
					<img src={grid2} alt='' />
				</div>

				<div className='textDiv'>
					<h2>Wybierz ofertę, która najbardziej Ci odpowiada.</h2>

					<div className='grids grid'>
						<div className='singleGrid'>
							<span className='gridTitle'>Kupon podarunkowy</span>
							<p>Zaskocz swoich bliskich i podaruj im możliwość podróżowania</p>
						</div>

						<div className='singleGrid'>
							<span className='gridTitle'>Priority Boarding</span>
							<p>
								Korzystaj z priorytetowej odprawy i pierszeństwa wejścia na
								pokład
							</p>
						</div>

						<div className='singleGrid'>
							<span className='gridTitle'>Parking na lotnisku</span>
							<p>Zareserwuj bezproblemowe parkowanie i zaoszczędź do 60%!</p>
						</div>

						<div className='singleGrid'>
							<span className='gridTitle'>Transfer na lotnisko</span>
							<p>
								Korzystaj z transferów z lotniska do miasta w cenie już od
								2$/osobę
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Lounge
