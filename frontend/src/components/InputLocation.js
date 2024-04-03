import GooglePlacesAutocomplete from "react-google-places-autocomplete";

export default function InputLocation({ type }) {
  return (
    <>
      <input
        type="text"
        placeholder={type == "source" ? "Pickup Location" : "Drop Location"}
      />
    </>
  );
}
