import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyles from '../data/mapStyles';
import { BusinessEntry } from '../types/BusinessTypes';
import { useState, useEffect } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 42.0451,
  lng: -87.6877,
};

const style = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

type BiziMapProps = {
  businessList: BusinessEntry[];
};

export const BiziMap: React.FC<BiziMapProps> = ({ businessList }) => {

  useEffect(() => {
    console.log('businesses change');
    console.log(businessList);;
  }, [businessList]);

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!
  })

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>'Loading maps'</p>;

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={style}
      >
        {businessList.map((business, idx) => {
          return (
            <Marker
              key={business.Title}
              position={business.GeoLocation ? business.GeoLocation : center}
            ></Marker>
          );
        })}
      </GoogleMap>
  );
};

export default BiziMap;