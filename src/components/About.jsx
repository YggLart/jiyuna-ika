import '../styles/about.css'

import Text from './Text'
import Cookie from './Cookies/Cookie'

export default function About() {
    return (
        <div className="page-box">
            <div className="box">
                <Cookie />
                <Text />
            </div>
        </div>
    )
}