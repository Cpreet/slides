import { HeaderContainer, HeaderTitle } from "styles/components/Header";
import Logo from "assets/witslogo.png";

interface HeaderProps {
  children?: string;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderContainer>
      <img src={Logo} width={50} height={80} />
      <HeaderTitle>{children}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
