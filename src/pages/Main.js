import React from 'react'
import Custombutton from "../components/CustomButton"
import icon1 from "../images/icon1.PNG"
import icon2 from "../images/icon2.PNG"
import "../CSS/Buttonselection.css"
import { Link } from "react-router-dom"

const Main = () => {
    return (
        <div className="mysection">
            <Link to="/signinwithroninwallet">
                <Custombutton img={icon1} color="#056cfb">Login With Ronin Wallet</Custombutton>
            </Link>
            <Link to="/signinwithmetamask">
                <Custombutton img={icon2} color="#252736">Login With MetaMask</Custombutton>
            </Link>

        </div>
    )
}

export default Main
