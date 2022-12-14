import { GeneratedRoutes } from "../routes/GeneratedRoutes"
import { Link } from 'react-router-dom'
import { useEffect } from "react"

export const Generate = () => {

    useEffect(() => {
        document.title = "Generated"
    })

    const url = window.location.href;
    const urlSplit = url.split("/");
    const name = urlSplit[urlSplit.length - 1];

    const finalUrl = `${name}`

    return (
        <div className="Reader">
            <br /><br />
            <div className="d-flex justify-content-end ">
                <Link to={"/google-sheets-api/Generate/" + finalUrl} className="btn-accent black"><i className="fa-solid fa-arrow-left-long"></i> Back</Link>
            </div>

            <div className="d-flex justify-content-center pt-5">
                <Link to={"/google-sheets-api/Generate/AppScript/" + finalUrl} className="btn-accent green blk">AppScript</Link>
            </div>

            <GeneratedRoutes />
        </div>
    )
}   
