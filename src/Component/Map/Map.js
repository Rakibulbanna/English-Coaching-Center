import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Col, Container, Row } from 'react-bootstrap';
const containerStyle = {
    width: '500px',
    height: '400px',
    borderRedious:'5px'
  };
  
  const center = {
    lat: 23.746466,
    lng: 90.376015
  };
const Map = () => {
    return (
    <Container>
         <Row>

<Col sm={6}>
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
</Col>
<Col sm={6}>
   <iframe width="500px" height="400px" src="https://www.youtube.com/embed/FkLZ3xs-V5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
</Col>
</Row>
 
      <br />
      
      </Container>
    );
};

export default Map;