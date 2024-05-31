import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import SideBar from '../../sidebar/SideBar'
import './home.css'
import axios, {} from 'axios'
import { useLocation } from 'react-router-dom'




function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div>
        <Header/>
        <div className='home'>
            <Posts posts={posts}/>
            <SideBar/>

        </div>
    </div>
  )
}

export default Home