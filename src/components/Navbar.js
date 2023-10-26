import { Image } from 'react-bootstrap'; // Імпортуємо компоненти React-Bootstrap
import {
  Container,
  NavBarContainer,
  StyledIcon,
  StyledLink,
  StyledList,
  StyledListItem,
  TechListItem,
  Text,
  Title,
  TitlePosition,
} from './Navbar.styled';

const NavBar = () => {
  return (
    <NavBarContainer>
      <Container>
        <Image
          src={`${process.env.PUBLIC_URL}/images/BohdanMusiienko.png`}
          alt="Me"
          style={{ maxWidth: '150px' }}
        />
        <div>
          <Title>BOHDAN MUSIIENKO</Title>
          <TitlePosition>JUNIOR FRONT-END DEVELOPER</TitlePosition>
          <Text>CONTACT INFORMATION</Text>
          <StyledList>
            <StyledListItem>
              <StyledIcon className="fas fa-phone"></StyledIcon>
              <StyledLink href="tel:0675803365">067 580 33 65</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledIcon className="fas fa-envelope"></StyledIcon>
              <StyledLink href="mailto:bohdan.musiienko.dev@gmail.com">
                bohdan.musiienko.dev@gmail.com
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledIcon className="fab fa-telegram"></StyledIcon>
              <StyledLink href="https://t.me/Bohdan_Musiienko">
                Telegram
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledIcon className="fab fa-linkedin"></StyledIcon>
              <StyledLink href="https://www.linkedin.com/in/bohdan-musiienko/">
                LinkedIn
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledIcon className="fab fa-github"></StyledIcon>
              <StyledLink href="https://github.com/BohdanMus">
                GitHub
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledIcon className="fas fa-map-marker"></StyledIcon> Kyiv,
              Ukraine
            </StyledListItem>
          </StyledList>
          <Text>TECH SKILLS</Text>
          <StyledList>
            <TechListItem>JavaScript</TechListItem>
            <TechListItem>React/Redux</TechListItem>
            <TechListItem>HTML5/CSS3/SASS</TechListItem>
            <TechListItem>REST API</TechListItem>
            <TechListItem>Node.js</TechListItem>
            <TechListItem>MongoDB</TechListItem>
            <TechListItem>Webpack</TechListItem>
            <TechListItem>Git</TechListItem>
            <TechListItem>Handlebars</TechListItem>
            <TechListItem>Parcel</TechListItem>
            <TechListItem>Responsive/Adaptive design</TechListItem>
          </StyledList>
        </div>
      </Container>
    </NavBarContainer>
  );
};

export default NavBar;
