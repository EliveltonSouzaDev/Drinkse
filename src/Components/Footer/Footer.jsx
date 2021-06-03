//icons
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

//image
import Logo from "../../images/logo.png";

//styled components
import { FooterContainer, Lists, Signature } from "./Footer.styles";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <Signature>
        <img
          src={Logo}
          alt={
            "Logo da Doarte. A palavra escrita normalmente, mas a letra 'O' é um círculo formado por mãos que se apoiam."
          }
        />

        <p>
          Um Website simples e prático para você encontrar as melhores receitas
          de drinks.
        </p>

        <section>
          <IconContext.Provider
            value={{ color: "var(--orange)", size: "1.7rem" }}
          >
            <FaFacebook />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "var(--orange)", size: "1.7rem" }}
          >
            <FaInstagram />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "var(--orange)", size: "1.7rem" }}
          >
            <FaTwitter />
          </IconContext.Provider>
        </section>
      </Signature>

      <Lists>
        <ul>
          <h4>MAPA</h4>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/contato">
            <li>Contato</li>
          </Link>
          <Link to="/time">
            <li>Nosso time</li>
          </Link>
          <Link to="/sobre">
            <li>Sobre Nos</li>
          </Link>
          <Link to="/drinks">
            <li>Drinks</li>
          </Link>
        </ul>

        <ul>
          <h4>LEGAL</h4>
          <li>Termos do cadastro</li>
          <li>Termos do usuario</li>
        </ul>

        <ul>
          <h4>CONTATO</h4>
          <li>Drinkse@drinkse.com</li>
          <li>(11) 2525-4486</li>
        </ul>
      </Lists>
    </FooterContainer>
  );
}

export default Footer;
