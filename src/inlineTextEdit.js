import React, { useState, useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';
import './inlineTextEdit.css'

const InlineTextEdit = (props) => {
  const hiddenText = useRef(null)
  const [text, setText] = useState(props.children)
  const [style, setStyle] = useState({
    width: "10px",
    height: "10px",
    lineHeight: "0"
    })
  
  useEffect(() => {
    const tempStyle = window.getComputedStyle( hiddenText.current )
    setStyle({
      width: tempStyle.width,
      height: tempStyle.height,
    })
  }, [text])

  return (
    <div>
        <div id="noHeight">
            <span id="hide" ref={hiddenText}>{text+" "}</span>
        </div>
        <textarea
            id="txt"
            type="text"
            value={text}
            style={style}
            onChange={(e)=>setText(e.target.value)}
            placeholder="Hello">
        </textarea>
    </div>
  );
}

export default InlineTextEdit