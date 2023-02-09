import React from 'react'
import moment from 'moment'
import Image from 'next/image'

function Feed({feedData}) {
  console.log(feedData)
  if(feedData){
      return (
        <div>
        {feedData.map(feedItem=>
        <div key={feedItem?.node?.title} className='flex p-8 max-w-5xl m-auto'>
            <Image width={200} height={200} className='w-60 h-36 rounded-lg' src={feedItem?.node?.field_photo_image_section}/>
            <div className='flex flex-col justify-between p-4'>
                <h2 className='font-bold'>{feedItem?.node?.title}</h2>
                <p className='text-gray-500'>{moment.unix(feedItem?.node?.last_update).format('LLLL')}</p>
            </div>
        </div>)}
        </div>
      )
    }
  return <p className='m-auto'>Error fetching Data</p>
  }

export default Feed