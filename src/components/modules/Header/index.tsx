import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Button from '../../elements/Button';

import { Container } from './styles'

export default function Header() {
  return (
    <Container>
      <div className="logo">
        <Link href="/">
          <a>
            <h1>{"<Tava1 />"}</h1>
          </a>
        </Link>
      </div>

      <div className="social-media">
        <Button icon={FaGithub} />
        <Button icon={FaLinkedinIn} />
      </div>
    </Container>
  )
}
