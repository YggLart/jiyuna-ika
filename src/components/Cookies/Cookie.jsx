import '../../styles/cookie.css'

import Party from "./Party"
import Duty from "./Duty"
import Img from "./Img"

export default function Cookie() {
    return (
        <div className="cookie-container">
            <Party />
            <Duty />
            <Img />
        </div>
    )
}