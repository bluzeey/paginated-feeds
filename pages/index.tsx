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
      await fetch('./api/feed',{
        method:"post",
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          id:page
        })
      }).then(res=>res.json()).then(data=>setFeedData([...feedData,...data])).catch(err=>{
        alert('There is some error with fetching data')
      })
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
