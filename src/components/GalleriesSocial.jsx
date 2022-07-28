import '../styles/gallery-social.css'

import Img from "./Img"
import Text from "./Text"

export default function Galleries(props) {
    // const {gal} = Galleries

    return (
        <div className={"galleries"}>
          <div className={"gallery"}>
            <Img />
            <Text />
          </div>
          <div className={"gallery reverse"}>
            <Img />
            <Text />
          </div>
          <div className={"gallery"}>
            <Img />
            <Text />
          </div>
          <div className={"gallery reverse"}>
            <Img />
            <Text />
          </div>
        </div>
    )
}