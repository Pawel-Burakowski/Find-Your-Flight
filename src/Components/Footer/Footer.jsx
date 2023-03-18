import React from "react"

import Logo from "../../assets/Img/logo.png"

import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from "react-icons/ti"

const Footer = () => {
	return (
		<div className='footer'>

            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={Logo} alt="" className="Logo"/>
                    </div>
                    <p>Your mind should be stronger than your feelings, fly!</p>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className="icon"/>
                        <TiSocialTwitter className="icon"/>
                        <TiSocialYoutube className="icon"/>
                        <TiSocialInstagram className="icon"/>
                    </div>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle"> Informacje </span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Szukaj</a>
                    </li>
                    <li>
                        <a href="">Status lotu</a>
                    </li>
                    <li>
                        <a href="">Podróż</a>
                    </li>
                    <li>
                        <a href="">Check-In</a>
                    </li>
                    <li>
                        <a href="">Zarządzaj rezerwacją</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle"> Przewodnik </span>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">Faktury za zakupy</a>
                    </li>
                    <li>
                        <a href="">Centrum informacji</a>
                    </li>
                    <li>
                        <a href="">Bagaż</a>
                    </li>
                    <li>
                        <a href="">Refund Hub</a>
                    </li>
                    <li>
                        <a href="">Podróż grupowa</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle"> Lotniska i turystyka </span>
                    <li>
                        <a href="">Odkryj Poznań!</a>
                    </li>
                    <li>
                        <a href="">Tanie loty do Albani</a>
                    </li>
                    <li>
                        <a href="">Tanie loty do Egiptu</a>
                    </li>
                    <li>
                        <a href="">Tanie loty do Gracji</a>
                    </li>
                    <li>
                        <a href="">Tanie loty do Norwegii</a>
                    </li>
                    <li>
                        <a href="">Tanie loty do Austrii</a>
                    </li>
                </div>

            </div>

		</div>
	)
}

export default Footer