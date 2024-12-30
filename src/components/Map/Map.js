import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

import { FlexContainer, Coordinates } from "./StyledComponents";

import formatCoordinates from "../../utils/formatCoordinates";

import Button from "../Button/Button";

const Map = ({ onCloseMap, onSetCoordinates }) => {
  const containerStyle = {
    width: "80vw",
    height: "60vh",
  };

  const [currentPosition, setCurrentPosition] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obtaining location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    setMarkerPosition({ lat, lng });
  };

  const handleSetCoordinates = () => {
    if (!markerPosition) return;
    const mgrsCoordinate = formatCoordinates(markerPosition);

    onSetCoordinates(mgrsCoordinate);
    onCloseMap();
  };

  const coordinates = markerPosition
    ? formatCoordinates(markerPosition)
    : "Координати не задані";

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={10}
        onClick={handleClick}
        mapTypeId="hybrid"
      >
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
      <FlexContainer>
        <Coordinates>{coordinates}</Coordinates>
        <Button onClick={handleSetCoordinates}>Задати координати</Button>
      </FlexContainer>
    </>
  );
};

export default Map;
