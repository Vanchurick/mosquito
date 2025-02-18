import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

import { FlexContainer, Coordinates } from "./StyledComponents";

import { toPoint } from "mgrs";

import formatCoordinates from "../../utils/formatCoordinates";

import Button from "../Button/Button";

import targetIcon from "../../assets/images/target.png";

const Map = ({ onCloseMap, onSetCoordinates, centerCoordinates }) => {
  const containerStyle = {
    width: "80vw",
    height: "60vh",
  };

  const [currentPosition, setCurrentPosition] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  const setMapCenter = (lat, lng) => {
    setCurrentPosition({
      lat,
      lng,
    });
  };

  useEffect(() => {
    if (centerCoordinates) {
      const [lng, lat] = toPoint(centerCoordinates.replace(/\s+/g, ""));
      setMarkerPosition({ lat, lng });
      setMapCenter(lat, lng);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMapCenter(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error obtaining location:", error);
          setMapCenter(51.385434, 31.391924);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setMapCenter(51.385434, 31.391924);
    }
  }, [centerCoordinates]);

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

  /* eslint-disable no-undef */

  const customMarkerIcon = {
    url: targetIcon,
    size: new google.maps.Size(48, 48),
    anchor: new google.maps.Point(24, 24),
  };

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={centerCoordinates ? 15 : 10}
        onClick={handleClick}
        mapTypeId="hybrid"
      >
        {markerPosition && (
          <Marker position={markerPosition} icon={customMarkerIcon} />
        )}
      </GoogleMap>
      <FlexContainer>
        <Coordinates>{coordinates}</Coordinates>
        <Button onClick={handleSetCoordinates}>Задати координати</Button>
      </FlexContainer>
    </>
  );
};

export default Map;
