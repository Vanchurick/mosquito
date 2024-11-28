import mosquitoLogo from "../../assets/images/logo.jpeg";

import { StyledHeader, LogoContainer } from "./StyledComponents";

const Header = () => (
  <StyledHeader>
    <LogoContainer>
      <img src={mosquitoLogo} alt="Mosquito Logo" />
    </LogoContainer>
  </StyledHeader>
);
export default Header;
