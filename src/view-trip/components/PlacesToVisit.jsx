import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {
  return (
    <div>
      <h2 className='font-bold text-lg'>Places to Visit</h2>
      <div >
        {trip.tripData?.itinerary &&
          Object.entries(trip.tripData.itinerary).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true })).map(([day, details],index)=>(
            <div className='mt-3' >
                <h2 className='font-medium text-lg'>{day}</h2>
                <div className='grid grid-cols-2 gap-5'>
                {details.activities?.map((place, index)=>(
                    <div className='my-3'>
                        <h2 className='font-medium text-sm text-orange-400'>{details.best_time_to_visit}</h2>
                        <PlaceCardItem  place={place}/>
                    </div>
                ))}
                </div>
            </div>
        ))}
     </div>
    </div>
  )
}

export default PlacesToVisit
