import '../styles/text.css'
import {useState} from 'react'

export default function Text(props) {
    
    // const [paragraph, setParagraph] = useState("");
    // const [className, paragraphs] = Text;

    // var paragraphList = [];

    // for (let i=0; i < paragraphs; i++) {
    //     paragraphList.push("Sed fermentum ornare porttitor. Morbi non mauris mi. Fusce metus orci, placerat vel libero sit amet, ornare porttitor neque. Donec convallis, mi quis hendrerit sagittis, tellus augue accumsan turpis, nec vehicula risus metus vulputate leo. Nam odio orci, mollis quis mattis in, venenatis id metus. Morbi sapien sapien, venenatis eu elit et, ullamcorper aliquet nibh. Mauris ut ullamcorper enim.")
    // }

    // setParagraph(paragraphList)
    
    return (
        <div className={"text " + props.className }>
            <h3>Lorem ipsum dolor sit amet</h3>
            {/* {paragraph} */}
        </div>
    )
} 