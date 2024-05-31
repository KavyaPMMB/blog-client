import React from 'react'
import './single.css'
import SideBar from '../../sidebar/SideBar'
import SinglePost from '../../singlepost/SinglePost'


function Single() {
  return (
    <div className='single'>
      <SinglePost/>
<SideBar/>

    </div>
  )
}

export default Single