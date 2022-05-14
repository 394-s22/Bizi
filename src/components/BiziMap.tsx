import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 42.0451,
    lng: -87.6877
};

export const BiziMap = () => {
    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}>
            </GoogleMap>
        </LoadScript>
    );
};

export default BiziMap;
