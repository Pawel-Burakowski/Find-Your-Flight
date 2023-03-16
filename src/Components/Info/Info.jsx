import React from "react"

import { RxCalendar } from "react-icons/rx"
import { BsShieldCheck, BsBookmarkCheck } from "react-icons/bs"

const Info = () => {
    return (
        <div className="info section">
            <div className="infoContainer container">

                <div className="titleDiv flex">
                    <h2>Podróżować to żyć</h2>
                    <button className="btn">
                        Zobacz
                    </button>
                </div>

                <div className="cardsDiv grid">

                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                            <BsShieldCheck className="icon"/>
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p> Możesz rónież zadzwonić i zarezerwować bilety przez telefon! </p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                            <RxCalendar className="icon"/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p> Możesz rónież zadzwonić i zarezerwować bilety przez telefon! </p>
                    </div>

                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                            <BsBookmarkCheck className="icon"/>
                        </div>
                        <span className="cardTitle">Save More</span>
                        <p> Możesz rónież zadzwonić i zarezerwować bilety przez telefon! </p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Info