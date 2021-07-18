import React from 'react'
import icon2 from "../images/icon2.PNG"
import Custombutton from "../components/CustomButton"
import TextArea from '../components/TextArea'
import "../CSS/LoginWallet.css"

const LoginMetaMask = () => {

    return (
        <div className="mysection">
            <TextArea />
            <Custombutton img={icon2} color="#252736" >Login With MetaMask</Custombutton>
        </div >
    )
}

export default LoginMetaMask
