import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect ,useState } from 'react'
import { GetPlaceDetails } from '@/service/GlobalApi'
import { PHOTO_RFF_URL } from '@/service/GlobalApi'

function HotelCardItem({hotel}) {

     const [photoUrl,setPhotoUrl]=useState('')
       useEffect(()=>{
        hotel&&GetPlacePhoto()
     
       },[hotel]) 
     
       const GetPlacePhoto=async()=>{
         const data={
           textQuery: hotel?.hotel_name
         }
         const result = await GetPlaceDetails(data).then(resp=>{
           console.log(resp.data.places[0].photos[2].name)
     
           const PhotoUrl=PHOTO_RFF_URL.replace('{NAME}',resp.data.places[0].photos[2].name)
           setPhotoUrl(PhotoUrl)
         })
       }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=lumen+field'+hotel?.hotel_name+"," + hotel?.hotel_address} target='_blank'>
    <div className='hover:scale-105 transition-all'>
    <img src={photoUrl?photoUrl :'/placeholder.jpg'}   className='rounded-xl h-[180px] w-full object-cover'/>
    <div className='my-2 flex flex-col gap-2'>
        <h2 className='font-medium text-xs'>{hotel?.hotel_name}</h2>
        <h2 className='text-gray-800 text-xs'>📍 {hotel?.hotel_address}</h2>
        <h2 className='text-sm font-bold'>💰 ${hotel?.price_per_night} per night</h2>
        <h2 className='text-sm'>⭐ {hotel?.rating} stars</h2>
    </div>
    </div>
    </Link>
  )
}

export default HotelCardItem
