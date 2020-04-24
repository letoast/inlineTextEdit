import React, { useState, useRef, useCallback } from "react"
import InlineTextEdit from "./inlineTextEdit"

const Popup = React.forwardRef( ({ popup, availReactions, reactionChange, ...props}, node) => {
    
    return(
        <div ref={node} className={`test ${popup ? "show" : "hide"}`}>
                    { availReactions.map((offset, idx) => 
                        <i  key={idx}
                            className="reaction-icon" 
                            style={{ zIndex: {idx}, backgroundPosition: offset }}
                            onClick={ ()=>reactionChange(idx) }
                        />)
                    }
        </div>
    )
} )

const Reactions = ( props ) => {
    
    const node = useRef()
    
    const clickListener = useCallback((e) => {
        if (node.current.contains(e.target)) {
            return;
        }
        setPopup(false)
        document.removeEventListener("click", clickListener);
    }, [])
    
    const bgOffsets = [
        "-49px -1159px",
        "-68px -1159px",
        "-68px -1197px",
        "-68px -1140px",
        "-70px -1119px",
        "-49px -1178px",
    ]
    
    const [reactions, setReactions] = useState({
        first: bgOffsets[0],
        second: bgOffsets[1],
        third: bgOffsets[2]
    })
    
    const [popup, setPopup] = useState(false)
    
    const [currSel, setCurrSel] = useState()
    
    const [availReactions, setAvailReactions] = useState([])
    
    const handleClick = (e) => {
        setPopup(true)
        setCurrSel(e.target.id)
        setAvailReactions( bgOffsets.filter( element => {
            for( const key in reactions){
                if( element === reactions[key] ) return false
            }
            return true
        })
        )
        document.addEventListener("click", clickListener);
    }
    
    const reactionChange = (idx) => {
        setReactions( { ...reactions, [currSel]: availReactions[idx] } )
        setPopup(false)
        document.removeEventListener("click", clickListener);
    }
    
    return (
            <div className="reactions-icons-div">
                <Popup ref={node} popup={popup} availReactions={availReactions} reactionChange={reactionChange}></Popup>
                <div style={{display: "flex", marginRight: "0.6rem"}}>
                    { Object.keys(reactions).map((key, idx, array) => 
                        <i  className="reaction-icon" 
                            key={idx}
                            id={key}
                            style={{ zIndex: array.length-idx, backgroundPosition: reactions[key] }}
                            onClick={handleClick}
                        /> )
                    }
                </div>
                <span className="bottom-text">
                    <InlineTextEdit>323</InlineTextEdit>
                </span>
            </div>
    )
}

export default Reactions