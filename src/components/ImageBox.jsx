import "../styles/imageBox.css";
import ImgInfo from './ImgInfo'
import Img from './Img'

export default function ImageBox() {

return (
<>
  <div className="imgBox-container">
    <Img />
    <ImgInfo />
  </div>
</>
)
}