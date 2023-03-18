import React, { useEffect } from "react"
import { RiAccountCircleLine } from "react-icons/ri"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { RxCalendar } from "react-icons/rx"

import Aos from "aos"
import "aos/dist/aos.css"

const Search = () => {

	useEffect(() => {
		Aos.init({duration: 2000})
	}, [])

	return (
		<div className='search container section'>
			<div data-aos="fade-up" data-aos-duration="2500" className='sectionContainer grid'>
				<div className='btns flex'>
					<div className='singleBtn'>
						<span>Klasa ekonomiczna</span>
					</div>

					<div className='singleBtn'>
						<span>Klasa biznes</span>
					</div>

					<div className='singleBtn'>
						<span>Pierwsza klasa</span>
					</div>
				</div>

				<div data-aos="fade-up" data-aos-duration="2000" className='searchInputs flex'>
					<div className='singleInput flex'>
						<div className='iconDiv'>
							<HiOutlineLocationMarker className='icon' />
						</div>
						<div className='texts'>
							<h4>Lokalizacja</h4>
							<input type='text' placeholder='Dokąd chcesz lecieć?' />
						</div>
					</div>

					<div className='singleInput flex'>
						<div className='iconDiv'>
							<RiAccountCircleLine className='icon' />
						</div>
						<div className='texts'>
							<h4>Ilość osób</h4>
							<input type='text' placeholder='Podaj liczbę osób' />
						</div>
					</div>

					<div className='singleInput flex'>
						<div className='iconDiv'>
							<RxCalendar className='icon' />
						</div>
						<div className='texts'>
							<h4>Check In </h4>
							<input type='text' placeholder='Podaj datę' />
						</div>
					</div>

					<div className='singleInput flex'>
						<div className='iconDiv'>
							<RxCalendar className='icon' />
						</div>
						<div className='texts'>
							<h4>Check Out </h4>
							<input type='text' placeholder='Podaj datę' />
						</div>
					</div>

					<button className='btn btnBlock flex'>Szukaj lotów</button>
				</div>
			</div>
		</div>
	)
}

export default Search
