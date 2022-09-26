// AIzaSyCHYv7S2AV6UyGpznp5q4A45QoTFk - bvao

import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'


const MyLocation = () => {
  const { isLoaded} = useLoadScript({googleMapsApiKey: 'AIzaSyCHYv7S2AV6UyGpznp5q4A45QoTFk-bvao'})
  if(!isLoaded) return <div>Loading...</div>
  return (
    <MapInit/>
  )
}
export default MyLocation

const MapInit = () => {
  const center = useMemo(() => ({lat: 43.2567, lng: 76.85125}), [])

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="containerStyle">
      <Marker position={center} />
    </GoogleMap>
  )
}
