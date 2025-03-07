import { Button } from '@/components/ui/button';
import React from 'react'
import { IoLocation } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { GetPlaceDetails } from '@/service/GlobalApi';
import { PHOTO_RFF_URL } from '@/service/GlobalApi';


function PlaceCardItem({place}) {

   const [photoUrl,setPhotoUrl]=useState('')
     useEffect(()=>{
      place&&GetPlacePhoto()
   
     },[place]) 
   
     const GetPlacePhoto=async()=>{
       const data={
         textQuery: place.place_name
       }
       const result = await GetPlaceDetails(data).then(resp=>{
        
         const PhotoUrl=PHOTO_RFF_URL.replace('{NAME}',resp.data.places[0].photos[2].name)
         setPhotoUrl(PhotoUrl)
       })
     }

   
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=lumen+field'+place.place_name} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 
    transition-all hover:shadow-md cursor-pointer'>
      <img src={photoUrl?photoUrl :'/placeholder.jpg'}
      className='w-[130px] h-[100px] rounded-xl object-cover'
      />
       <div>
        <h2 className='font-bold text-xs'>{place.place_name}</h2>
        <p className='text-xs text-gray-900 mt-2'>{place.place_details}</p>
        <h2 className='mt-2  text-xs font-medium'>⏰ {place.travel_time}</h2>
       { <Button size='xm'><IoLocation /></Button>}
       </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem
