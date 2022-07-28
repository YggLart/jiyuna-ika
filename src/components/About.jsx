import '../styles/about.css'

import Text from './Text'
import Cookie from './Cookies/Cookie'
import Staff from './Staff'
import Img from './Img'

export default function About() {
    return (
        <div className="page-box">
          <div className="box">
            <Cookie />
            <Text />
          </div>
          <div className="box">
            <Text />
          </div>
          <Staff />
          <div className="box">
            <Img />
            <Text className="housing" />
          </div>
          <div className="box flex">
            <Img />
            <Text paragraphs={1}/>
          </div>
        </div>
    )
}