import React from 'react'
import "../CSS/Custombutton.css"
const Button = ({ img, children, color }) => {
    return (
        <div>

            <button className="mybutton" style={{ background: color }}>
                <img src={img} alt="" className="mybutton-icon" />
                {children}
            </button>
        </div>
    )
}

export default Button
