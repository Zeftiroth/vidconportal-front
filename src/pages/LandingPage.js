import React from 'react'
import { useHistory } from "react-router-dom";

function LandingPage() {
    let history = useHistory();
    const home = e => {
        e.preventDefault()
        history.push("/authRouting")
    }
    return (
        <div>
            This is the landing page
            <div>
                <button onClick={home} >Login/Sigup</button>
            </div>
        </div>
    )
}

export default LandingPage
