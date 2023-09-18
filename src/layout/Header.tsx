import { Container } from "./Container";
import { Content } from "./Content";

import { ReactComponent as EndlessLogo } from "../assets/logos/logo-endless.svg";

export const Header = () => {
  return (
    <Container className="header-wrapper">
      <Content>
        <EndlessLogo fill="rgb(79, 227, 193)" height="21px" />
      </Content>
    </Container>
  );
};
