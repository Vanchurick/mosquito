import styled from "styled-components";

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const CustomCheckbox = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 1rem;
`;

export const CheckboxBox = styled.span`
  width: 30px;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px; /* Для закруглених кутів */
  background-color: white;
  position: relative;
  transition: all 0.3s;

  ${CustomCheckbox}:hover & {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  ${HiddenCheckbox}:checked + & {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  ${HiddenCheckbox}:checked + &::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 9px;
    width: 9px;
    height: 12px;
    border: solid ${({ theme }) => theme.colors.primary};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const CheckboxLabel = styled.span``;
