import React from 'react'
import "../CSS/SigninButton.css"

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
