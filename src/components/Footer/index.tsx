import { FooterContainer } from "styles/components/Footer";

interface FooterProps {
  children?: string;
}

const Footer = ({ children }: FooterProps) => {
  return <FooterContainer>{children}</FooterContainer>;
};

export default Footer;
