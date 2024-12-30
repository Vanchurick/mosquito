import Button from "../Button/Button";
import {
  Container,
  CoordinatesContainer,
  Coordinates,
} from "./StyledComponents";

const OpenModalMap = ({ label, selected, openModalMap }) => {
  const coordinates = selected ? selected : "Задати координати";
  return (
    <Container>
      <p>{label}</p>
      <CoordinatesContainer>
        <Coordinates>{coordinates}</Coordinates>
        <Button onClick={openModalMap}>Карта</Button>
      </CoordinatesContainer>
    </Container>
  );
};

export default OpenModalMap;
