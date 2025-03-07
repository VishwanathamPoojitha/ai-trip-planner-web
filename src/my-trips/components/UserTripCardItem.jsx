import React from 'react'
import { useEffect,useState } from 'react'
import { GetPlaceDetails } from '@/service/GlobalApi'
import { PHOTO_RFF_URL } from '@/service/GlobalApi'
import { Link } from 'react-router-dom'

function UserTripCardItem({trip}) {
     const [photoUrl,setPhotoUrl]=useState('')
      useEffect(()=>{
       trip&&GetPlacePhoto()
    
      },[trip]) 
    
      const GetPlacePhoto=async()=>{
        const data={
          textQuery: trip?.userSelection?.location?.label
        }
        const result = await GetPlaceDetails(data).then(resp=>{
          console.log(resp.data.places[0].photos[2].name)
    
          const PhotoUrl=PHOTO_RFF_URL.replace('{NAME}',resp.data.places[0].photos[2].name)
          setPhotoUrl(PhotoUrl)
        })
      }
  return (
     <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all'>
      <img src={photoUrl?photoUrl:"/placeholder.jpg"} className='object-cover rounded-xl h-[180px]' />
      <div>
        <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
        <h2 className='text-xs'>{trip?.userSelection.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
      </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem
