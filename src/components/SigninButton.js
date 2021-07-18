import React from 'react'
import "../CSS/SigninButton.css"
import { Link } from 'react-router-dom'

const Signinbutton = ({ children, sendmail }) => {
    return (
        <div>
            <button className="signinbutton" onClick={sendmail}>
                {children}
            </button>
        </div>
    )
}

export default Signinbutton
