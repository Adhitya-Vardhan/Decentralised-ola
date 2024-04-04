import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState } from "react";
import { fromPlaceId, setKey } from "react-geocode";

export default function InputLocation({ type }) {
  const [value, setValue] = useState(null);
  setKey(process.env.REACT_APP_PLACE_KEY);
  // get the lat and log from the placeId so as to push it into the block chain
  const getLatAndLng = (place, type) => {
    const placeId = place.value.place_id;

    fromPlaceId(placeId)
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        console.log(lat, lng);
      })
      .catch(console.error);
    // const service = new google.maps.places.PlacesService(
    //   document.createElement("div")
    // );
    // service.getDetails({ placeId }, (place, status) => {
    //   if (status === "OK" && place.geometry && place.geometry.location) {
    //     console.log(place.geometry.location.lat());
    //   }
    // });

    console.log(placeId);
  };
  return (
    <div className="input" style={{ marginBottom: "10px" }}>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_PLACE_KEY}
        selectProps={{
          value,
          onChange: (place) => {
            getLatAndLng(place, type);
            setValue(place);
          },
          placeholder: "pickup Location",
          isClearable: true,
          components: {
            DropdownIndicator: false,
          },
        }}
      />
    </div>
  );
}
