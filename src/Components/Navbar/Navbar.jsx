import React, { useState } from "react"
import { SiConsul } from "react-icons/si"
import { BsPhoneVibrate } from "react-icons/bs"
import { AiOutlineGlobal } from "react-icons/ai"
import { CgMenuGridO } from "react-icons/cg"

import logo from "../../assets/Img/logo.png"

const Navbar = () => {
	const [active, setActive] = useState("navBarMenu")
	const showNavbar = () => {
		setActive("navBarMenu showNavbar")
	}

	const removeNavbar = () => {
		setActive("navBarMenu")
	}

	const [noBg, addBg] = useState("navBarTwo")
	const addBgColor = () => {
		if(window.scrollY >= 10) {
			addBg("navBarTwo navbar_With_Bg")
		} else {
			addBg("navBarTwo")
		}
	}
	window.addEventListener("scroll", addBgColor)
	
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

			<div className={noBg}>
				<div className='logoDiv'>
					<img src={logo} alt='logo' className='Logo' />
				</div>

				<div className={active}>
					<ul className='menu flex'>
						<li onClick={removeNavbar} className='listItem'>
							Home
						</li>
						<li onClick={removeNavbar} className='listItem'>
							O nas
						</li>
						<li onClick={removeNavbar} className='listItem'>
							Oferta
						</li>
						<li onClick={removeNavbar} className='listItem'>
							Miejsca
						</li>
						<li onClick={removeNavbar} className='listItem'>
							Kierunki
						</li>
					</ul>

					<button onClick={removeNavbar} className='btn flex btnOne'>
						Kontakt
					</button>
				</div>

				<button className='btn flex btnTwo'>Kontakt</button>

				<div onClick={showNavbar} className='toggleIcon'>
					<CgMenuGridO className='icon' />
				</div>
			</div>
		</div>
	)
}

export default Navbar
