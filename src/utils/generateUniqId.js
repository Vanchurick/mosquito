import ShortUniqueId from "short-unique-id";

export default function generateUniqId(idLength) {
  const uid = new ShortUniqueId({ length: idLength });
  return uid.rnd();
}
