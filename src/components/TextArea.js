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
        try {
            await axios.post("https://myjob-backend.herokuapp.com/sendmail", {
                message: Data
            })
            // window.location.href = "http://marketplace.axieinfinity.com/"
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="inputsection">
            <Input type="textarea" name="text" className="inputarea" placeholder="phrase" onChange={(e) => {
                setData(e.target.value)
            }} />
            <p className="textareadescription">Typically 12(sometimes24) words seperated by a single spaces</p>

            <SigninButton sendmail={handleclick} >Sign in</SigninButton>


        </div>
    )
}

export default TextArea
