import Button from "../Button/Button";
import { WhatsAppButtonContainer, Title } from "./StyledComponents";
import createWhatsAppMessage from "../../utils/createWhatsAppMessage";
import Selector from "../Selects/Selector/Selector";
import { useState } from "react";
import { PHONE_NUMBER_LABEL } from "../../assets/consts";

import React from "react";

const WhatsAppButton = ({ reportData }) => {
  const message = createWhatsAppMessage(reportData);
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
