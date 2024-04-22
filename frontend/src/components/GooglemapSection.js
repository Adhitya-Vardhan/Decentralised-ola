import React, { useContext, useEffect, useState, useCallback } from "react";
import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import { SourceContext } from "../context/SourceContext";
import { DestinationContext } from "../context/DestinationContext";
import console from "console-browserify";

export default function GooglemapSection() {
  const containerStyle = {
    width: "100%",
    height: window.innerWidth,
  };

  const [directionRoutePoints, setDirectionRoutePoints] = useState();
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);

  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  const [map, setMap] = useState(null);

  useEffect(() => {
    if (source?.length != [] && map) {
      map.panTo({
        lat: source.lat,
        lng: source.lng,
      });
      setCenter({
        lat: source.lat,
        lng: source.lng,
      });
    }
    if (source?.length != [] && destination?.length != []) {
      directionRoute();
    }
  }, [source]);

  useEffect(() => {
    if (destination?.length != [] && map) {
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }

    if (source?.length != [] && destination?.length != []) {
      directionRoute();
    }
  }, [destination]);

  const directionRoute = () => {
    if (!source || !destination) {
      console.log("Source or destination is undefined.");
      return;
    }
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: { lat: source.lat, lng: source.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionRoutePoints(result);
        } else {
          console.error("Error");
        }
      }
    );
    console.log("function is being called");
  };

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
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: "ef9a11eb4a2d2a70" }}
    >
      {source?.lat && source?.lng && (
        <MarkerF position={{ lat: source.lat, lng: source.lng }} />
      )}

      {destination?.lat && destination?.lng && (
        <MarkerF position={{ lat: destination.lat, lng: destination.lng }} />
      )}

      <DirectionsRenderer
        directions={directionRoutePoints}
        options={{
          polylineOptions: {
            strokeColor: "#0000FF",
            strokeWeight: 5,
          },
        }}
      />
    </GoogleMap>
  );
}
