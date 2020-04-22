import React, { useState, } from 'react';
import ReactDOM from 'react-dom';
import InlineTextEdit from './inlineTextEdit'
import Reactions from "./reactions"
import "./reset.css"
import "./normalize.css"
import "./style.css"

function Main() {
  
  const [img1, setImg1] = useState()
  const [img2, setImg2] = useState()

  return (
    <div className="card">
      <div className="upper">
        <div className="cardHead">
          <input type="file" name="file1" id="file1" className="inputfile" accept="image/png, image/jpeg" 
          onChange={e=>setImg2(URL.createObjectURL(e.target.files[0]))}
          />
          <label htmlFor="file1" className="chooseFile">
          <div className="headImage changeImg" style={{backgroundImage: img2 ? `url(${img2})` : `url(//unsplash.it/500/300)` }} />
          </label>
          <div className="headText">
            <h4 className="card-headline">
              <InlineTextEdit>Care Šmare</InlineTextEdit>
            </h4>
            <span className="head-time">
              <InlineTextEdit>Yesterday at 11:56 AM</InlineTextEdit>
            </span>
          </div>
        </div>
        <div className="postText">
          <InlineTextEdit>
            This is my face for the past three days. I've already updated Spark and IG app, but still can't use test links at all
          </InlineTextEdit>
        </div>
      </div>
      <input type="file" name="file2" id="file2" className="inputfile" accept="image/png, image/jpeg" 
      onChange={e=>setImg1(URL.createObjectURL(e.target.files[0]))}
      />
      <label htmlFor="file2" className="chooseFile">
       { /*<div className="middle">
          <h1 className="textOverlay">Change Image...</h1>
        </div>*/ }
        <div className="changeImg bodyImg" style={{backgroundImage: img1 ? `url(${img1})` : `url(//unsplash.it/500/300)` }} />
      </label>
      <div className="cardText">
        <div className="reactions-div">
          <Reactions></Reactions>
          <div className="bottom-text reactions-comments">
            <InlineTextEdit>4</InlineTextEdit>comments
          </div>
        </div>
        <div className="like-comment-share">
          <div className="button-action">
            <i className="action-icons icon-like"></i>Like
          </div>
          <div className="button-action">
            <i className="action-icons icon-comment"></i>Comment
          </div>
          <div className="button-action">
            <i className="action-icons icon-share"></i>Share
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));