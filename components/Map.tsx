import Mapbox, { Camera, LocationPuck, MapView } from '@rnmapbox/maps';

const accessToken =
  'pk.eyJ1IjoiZWNhcnJ5IiwiYSI6ImNsbDR4enltcDA4Z2EzbG8xb2ozOXA0bmoifQ.wnF8fme0DPl9Fah7tFjGdA';
Mapbox.setAccessToken(accessToken);

const Map = () => {
  return (
    <MapView style={{ flex: 1 }} styleURL="mapbox://styles/mapbox/satellite-v9">
      <Camera followZoomLevel={16} followUserLocation />
      <LocationPuck />
    </MapView>
  );
};

export default Map;
