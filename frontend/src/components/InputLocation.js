import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import console from "console-browserify";
import { useContext, useEffect, useState } from "react";
import { SourceContext } from "../context/SourceContext";
import { DestinationContext } from "../context/DestinationContext";

export default function InputLocation({ type }) {
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceholder] = useState();
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);

  useEffect(() => {
    setPlaceholder(type === "source" ? "Pickup Location" : "Dropoff Location");
  }, [type]);

  useEffect(() => {
    if (source) {
      console.log(source);
    }
    if (destination) {
      console.log(destination);
    }
  }, [source, destination]);
  // get the lat and log from the placeId so as to push it into the block chain
  const getLatAndLng = (place, type) => {
    const placeId = place.value.place_id;

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry && place.geometry.location) {
        console.log(place.geometry.location.lat());
        if (type === "source") {
          setSource({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
        } else {
          setDestination({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          });
        }
      }
    });
  };

  const handlePlaceChange = (place) => {
    if (place) {
      setValue(place);
      getLatAndLng(place, type);
    }
  };
  return (
    <div className="input" style={{ marginBottom: "10px" }}>
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: (place) => {
            handlePlaceChange(place, type);
          },
          placeholder: placeholder,
          isClearable: true,
          components: {
            DropdownIndicator: false,
          },
        }}
      />
    </div>
  );
}

// name: place.label,
//   label: place.value.structured_formatting.main_text,

// geocodeByPlaceId(placeId)
//   .then((results) => console.log(results[0].geometry.location.lat()))
//   .catch((error) => console.error(error));

//const{PlacesService} = await google.maps.importLibrary("places")

//  console.log(place.geometry.location);
// setKey(process.env.REACT_APP_PLACE_KEY);
// fromPlaceId(placeId)
//   .then(({ results }) => {
//     const { lat, lng } = results[0].geometry.location;
//     if (type === "source") {
//       setSource({
//         lat: lat,
//         lng: lng,
//         name: place.label,
//         label: place.value.structured_formatting.main_text,
//       });
//     } else {
//       setDestination({
//         lat: lat,
//         lng: lng,
//         name: place.formatted_address,
//         label: place.name,
//       });
//     }
//   })
//   .catch(console.error);
