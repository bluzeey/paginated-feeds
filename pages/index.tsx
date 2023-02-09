import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/feed'
import { useEffect,useState } from 'react'
import axios from 'axios'


const Home: NextPage = () => {
  const [feedData,setFeedData]=useState([])
  const [page,setPage]=useState(1)
  const PageHandler=()=>{
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) 
    {
      let newPage = page;
      newPage++;
      setPage(newPage);
    }
  }
  useEffect(()=>{
    const fetchData=async(page:number)=>{
      await axios.get('/api/feed',{
        params:{
          id:page
        }
      }).then(res=>setFeedData(res.data))
    }
    fetchData(page)
  },[page])
  if(typeof window!== "undefined"){
    window?.addEventListener('scroll',PageHandler)
  }
  
  return (


    <div className="">
      <Head>
        <title>Paginated Feeds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feed feedData={feedData}/>
    </div>
  )
}

export default Home
