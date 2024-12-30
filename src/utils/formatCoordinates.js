import { forward } from "mgrs";

export default function formatCoordinates(googleCoordinates) {
  const mgrsCoordinates = forward([
    googleCoordinates.lng,
    googleCoordinates.lat,
  ]);

  return mgrsCoordinates
    .split("")
    .map((sign, index) => {
      if (index === 2 || index === 4 || index === 9) return `${sign} `;
      return sign;
    })
    .join("");
}
