import { useState, useCallback, memo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import console from "console-browserify";

const containerStyle = {
  width: "400px",
  height: "400px",
};
const center = { lat: 23.185884, lng: 79.97438 };

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });
  console.log(process.env.REACT_APP_MAP_KEY);

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        ></GoogleMap>
      ) : (
        <>it is loading </>
      )}
      ;
    </>
  );
}

export default memo(Maps);
