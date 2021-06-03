import React from "react";
import { Container, Section } from "../Time/Time.styles";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

const Time = () => {
  return (
    <Container className="animeLeft">
      <Section>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQEqe_P8iD9kRg/profile-displayphoto-shrink_800_800/0/1605576050136?e=1628121600&v=beta&t=fUbW_ov-SvwFgBfYd6YrvDiEn57AJPbhp52sKwpIytI"
          alt=""
        />
        <h3>Elivelton</h3>
        <p>
          s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div>
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
        </div>
      </Section>
      <Section>
        <img src="https://randomuser.me/api/portraits/men/94.jpg" alt="" />
        <h3>Steve Jobs</h3>
        <p>
          s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div>
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
        </div>
      </Section>
      <Section>
        <img src="https://randomuser.me/api/portraits/men/83.jpg" alt="" />
        <h3>Patrick</h3>
        <p>
          s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div>
          <IconContext.Provider
            value={{ color: "var(--orange)", size: "1.5rem" }}
          >
            <FaFacebook />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "var(--orange)", size: "1.5rem" }}
          >
            <FaInstagram />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: "var(--orange)", size: "1.5rem" }}
          >
            <FaTwitter />
          </IconContext.Provider>
        </div>
      </Section>
    </Container>
  );
};

export default Time;
