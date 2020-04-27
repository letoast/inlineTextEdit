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
    
    const [reactions, setReactions] = useState([
        bgOffsets[0],
        bgOffsets[1],
        bgOffsets[2]
    ])
    
    const [popup, setPopup] = useState(false)
    
    const [currSel, setCurrSel] = useState(null)
    
    const [availReactions, setAvailReactions] = useState([])
    
    const handleClick = (e, id) => {
        setPopup(true)
        // console.log(e.target.getAttribute("something"))
        setCurrSel(id)
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
        // console.log(reactions.map( (value, i)=> i === currSel ? availReactions[idx] : value ))
        setReactions( reactions.map( (value, i)=> {
            // console.log(i, currSel)
            return i === currSel ? availReactions[idx] : value 
        }) )
        setPopup(false)
        document.removeEventListener("click", clickListener);
        // console.log("adasas")
    }
    
    return (
            <div className="reactions-icons-div">
                <Popup ref={node} popup={popup} availReactions={availReactions} reactionChange={reactionChange}></Popup>
                <div style={{display: "flex", marginRight: "0.6rem"}}>
                    { reactions.map((value, idx, array) => 
                        <i  className="reaction-icon" 
                            key={idx}
                            style={{ zIndex: array.length-idx, backgroundPosition: reactions[idx] }}
                            onClick={(e)=>handleClick(e, idx)}
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