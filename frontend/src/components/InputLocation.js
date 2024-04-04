import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId } from "react-google-places-autocomplete";
import console from "console-browserify";
import { useContext, useEffect, useState } from "react";
//import { fromPlaceId, setKey, geocode, RequestType } from "react-geocode";
import { SourceContext } from "../context/SourceContext";
import { DestinationContext } from "../context/DestinationContext";

export default function InputLocation({ type }) {
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceholder] = useState();
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);

  // setKey(process.env.REACT_APP_PLACE_KEY);

  useEffect(() => {
    type === "source"
      ? setPlaceholder("Pickup Location")
      : setPlaceholder("Dropoff Location");
  }, []);

  useEffect(() => {
    if (source) {
      console.log(source);
    } else if (destination) {
      console.log(destination);
    }
  }, [source, destination]);

  // get the lat and log from the placeId so as to push it into the block chain
  const getLatAndLng = (place, type) => {
    const placeId = place.value.place_id;
    geocodeByPlaceId(placeId)
      .then((results) => console.log(results[0].geometry.location.lat()))
      .catch((error) => console.error(error));
    //const{PlacesService} = await google.maps.importLibrary("places")
    // const service = new google.maps.places.PlacesService(
    //   document.createElement("div")
    // );
    // PlacesService.getDetails({ placeId }, (place, status) => {
    //   if (status === "OK" && place.geometry && place.geometry.location) {
    //     console.log(place.geometry.location.lat());
    //   }
    // });
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
  };

  const handlePlaceChange = (place) => {
    if (place) {
      getLatAndLng(place, type);
    }
    setValue(place);
  };
  return (
    <div className="input" style={{ marginBottom: "10px" }}>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_PLACE_KEY}
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
