import { Col, Image, Row } from 'react-bootstrap'; // Імпортуємо компоненти React-Bootstrap
import { NavBarContainer, Text, Title } from './Navbar.styled';

const NavBar = () => {
  return (
    <NavBarContainer>
      <Row>
        <Col md={3}>
          <Image
            src={`${process.env.PUBLIC_URL}/images/BohdanMusiienko.png`}
            alt="Me"
            roundedCircle
            fluid
          />
        </Col>
        <Col md={9}>
          <Title>BOHDAN MUSIIENKO</Title>
          <Text>JUNIOR FRONT-END DEVELOPER</Text>
          <Text>
            CONTACT INFORMATION:
            <ul>
              <li>067 580 33 65</li>
              <li>bohdan.musiienko.dev@gmail.com</li>
              <li>Telegram</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Kyiv, Ukraine</li>
            </ul>
          </Text>
        </Col>
      </Row>
    </NavBarContainer>
  );
};

export default NavBar;
