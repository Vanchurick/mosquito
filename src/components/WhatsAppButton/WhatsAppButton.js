import { useState, useContext } from "react";

import { Context } from "../../store/Context";

import { WhatsAppButtonContainer, Title } from "./StyledComponents";

import { PHONE_NUMBER_LABEL } from "../../assets/consts";

import createWhatsAppMessage from "../../utils/createWhatsAppMessage";

import Selector from "../Selects/Selector/Selector";
import Button from "../Button/Button";


const WhatsAppButton = () => {
  const { state } = useContext(Context);
  const message = createWhatsAppMessage(state);
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendMessage = () => {
    if (!phoneNumber) return;
    const url = `https://wa.me/+38${phoneNumber.value}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Title>Відправити повідомлення (приклад: 0661234567)</Title>
      <WhatsAppButtonContainer>
        <Selector
          handler={setPhoneNumber}
          optionsData={{
            selected: phoneNumber,
            options: [],
            label: PHONE_NUMBER_LABEL,
          }}
          placeholder="Номер телефону"
        />
        <Button onClick={sendMessage} disabled={!phoneNumber}>
          Відправити в WhatsApp
        </Button>
      </WhatsAppButtonContainer>
    </>
  );
};

export default WhatsAppButton;
