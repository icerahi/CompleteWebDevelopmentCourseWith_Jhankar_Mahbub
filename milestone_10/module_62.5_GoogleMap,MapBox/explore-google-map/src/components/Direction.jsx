import React, { useState } from "react";
import { DirectionsRenderer } from "@react-google-maps/api";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
} from "@react-google-maps/api";

const location = {
  lat: 23.791599,
  lng: 90.389099,
};
const Direction = ({origin,destination}) => {
    const [response,setResponse]=useState(null);

    const directionsCallback =(response)=> {
        console.log(response)
    
        if (response !== null) {
          if (response.status === 'OK') {
            setResponse(
              () => ({
                response
              })
            )
          } else {
            console.log('response: ', response)
          }
        }
      }
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        // required
        id="direction-example"
        // required
        mapContainerStyle={{
          height: "100vh",
          width: "100%",
        }}
        // required
        zoom={14}
        // required
        const
        center={location}
      >
        <DirectionsService
          // required
          options={{
            origin: origin,

             destination: destination,
            travelMode: "DRIVING",
          }}
          // required
          callback={directionsCallback}
        />

        {response !== null && (
          <DirectionsRenderer
            // required
            options={{
               directions:  response,
            }}
            // optional
            onLoad={(directionsRenderer) => {
              console.log(
                "DirectionsRenderer onLoad directionsRenderer: ",
                directionsRenderer
              );
            }}
            // optional
            onUnmount={(directionsRenderer) => {
              console.log(
                "DirectionsRenderer onUnmount directionsRenderer: ",
                directionsRenderer
              );
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Direction;
