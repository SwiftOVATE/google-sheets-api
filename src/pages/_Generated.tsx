import "prismjs/themes/prism.css";
import { Link } from "react-router-dom";


export const _Generated = ({ finalUrl }) => {

    return (
        <div className="Code">

            <h1>Steps</h1>

            <div className="d-block justify-content-center pt-2 ">
                <h1>1. Go to AppScripts</h1>
                <img src={require("../assets/1.png")} alt="structure" draggable='false' />
            </div>

            <div className="d-block justify-content-center pt-2 ">
                <h1>2. Paste the code from <kbd>/AppScript</kbd></h1>
            </div>

            <div className="d-block justify-content-center pt-2 ">
                <h1>3. Deploy</h1>
                <img src={require("../assets/2.png")} alt="structure" draggable='false' />
            </div>

        </div>
    )
}