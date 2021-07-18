import React from 'react'
import icon1 from "../images/icon1.PNG"
import Custombutton from "../components/CustomButton"
import TextArea from '../components/TextArea'
import "../CSS/LoginWallet.css"

const LoginRoninWallet = () => {
    return (

        <div className="mysection">
            <Custombutton img={icon1} color="#056cfb">Login With Ronin Wallet</Custombutton>
            <TextArea />
        </div >

    )
}

export default LoginRoninWallet
