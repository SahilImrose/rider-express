import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

function Map() {

  return (
    <GoogleMap
      defaultZoom={10}
      maximumZoom={2}
      defaultCenter={{ lat:23.777176, lng: 90.399452 }}
    >
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MyLocation() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${`AIzaSyD4JMhZ3Ppj23nTDI8c5Gk0BNdVzXhIykI`}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}