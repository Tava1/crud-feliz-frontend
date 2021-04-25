import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { Container } from './styles';

const Footer: React.FC = () => (
  <Container>
    <div className="social-media">
      <a href="https://www.linkedin.com/in/gustavoczsantos/">
        <img src="./assets/linkedin-circle.svg" alt="Linkedin" />
      </a>
      <a href="https://github.com/Tava1/">
        <FaGithub size={36} />
      </a>
    </div>

    <a href="https://github.com/Tava1">Developed by Gustavo Santos</a>
  </Container>
);

export default Footer;
