import React from 'react'
import './write.css'
import writeimg from  './pexels-lisa-fotios-1083822.jpg'

function Write() {
  return (
    <div className='write'>
        <img src={writeimg} alt="" className="writeImg" />
        <form className="writeForm">
            <div className="writeformGroup">
                <label htmlFor="fileInput">
                    <i className='writeIcon fas fa-plus'></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} />
                <input type="text" placeholder='Title' className='writeInput' id='writeInput' autoFocus={true} />
            </div>
            <div className="writeformGroup">
                <textarea placeholder='tell your story..' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write