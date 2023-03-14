import React from "react"
import { SiConsul } from "react-icons/si"
import { BsPhoneVibrate } from "react-icons/bs"
import { AiOutlineGlobal } from "react-icons/ai"
import { CgMenuGridO } from "react-icons/cg"

import logo from "../../assets/Img/logo.png"

const Navbar = () => {
	return (
		<div className='navBar flex'>
			<div className='navBarOne flex'>
				<div>
					<SiConsul className='icon' />
				</div>

				<div className='none flex'>
					<li className='flex'>
						{" "}
						<BsPhoneVibrate className='icon' /> Support{" "}
					</li>
					<li className='flex'>
						{" "}
						<AiOutlineGlobal className='icon' /> Język{" "}
					</li>
				</div>

				<div className='atb flex'>
					<span>Zaloguj</span>
					{/* <span>Wyloguj</span> */}
				</div>
			</div>

			<div className='navBarTwo flex'>
				<div className='logoDiv'>
					<img src={logo} alt='logo' className='Logo' />
				</div>

				<div className='navBarMenu'>
					<ul className='menu flex'>
						<li className='listItem'>Home</li>
						<li className='listItem'>O nas</li>
						<li className='listItem'>Oferta</li>
						<li className='listItem'>Miejsca</li>
						<li className='listItem'>Kierunki</li>
					</ul>

					<button className='btn flex btnOne'>Kontakt</button>
				</div>

				<button className='btn flex btnTwo'>Kontakt</button>

				<div className='toggleIcon'>
					<CgMenuGridO className='icon' />
				</div>
			</div>
		</div>
	)
}

export default Navbar
