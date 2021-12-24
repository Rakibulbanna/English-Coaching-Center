import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Container } from 'react-bootstrap';
const containerStyle = {
    width: '1100px',
    height: '400px'
  };
  
  const center = {
    lat: 23.746466,
    lng: 90.376015
  };
const Map = () => {
    return (
    <Container>
        
        <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      <br />
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FkLZ3xs-V5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Container>
    );
};

export default Map;