import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import MarkerClusterer from '@googlemaps/markerclustererplus'
import { extractLocations } from '../utils/helpers'

function Map({ places, highlightMarker }) {
  const loader = new Loader({
    apiKey: 'AIzaSyBtsHHByKghcjcYf9VPrAI398r6K1eavhg',
    version: 'weekly',
  })

  const locations = extractLocations(places)

  let map
  let infoWindow
 
  useEffect(() => {
    loader
      .load()
      .then(() => {
        infoWindow = new google.maps.InfoWindow()

        map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: 60.17008291523957,
            lng: 24.938301287516396,
          },
          zoom: 11
        })

        const markers = locations.map(item => {
          const marker = new google.maps.Marker({
            position: item.location,
          })

          google.maps.event.addListener(marker, 'click', () => {
            infoWindow.setContent(item.name['en'])
            infoWindow.open(map, marker)
          })

          google.maps.event.addListener(marker, 'mouseover', () => {
            highlightMarker(item.id)
          })

          google.maps.event.addListener(marker, 'mouseout', () => {
            highlightMarker('')
          })

          return marker
        })

        const markerCluster = new MarkerClusterer(map, markers, {
          imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        })
      })
  }, [places])

  return (
    <div id='map' style={{
      flex: 1,
      height: '500px',
      marginTop: '80px',
      marginLeft: '10px',
      marginRight: '10px',
    }}></div>
  )
}

export default Map
