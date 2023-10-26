import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../index.css';
import NavBar from './Navbar';
import PortfolioItems from './PortfolioItems';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const items = [
  {
    name: 'Проект 1',
    image: `${process.env.PUBLIC_URL}/images/webstudio.png`,
    description: 'WebStudio project',
    link1: 'https://bohdanmus.github.io/goit-markup-hw-08/',
    link2: 'https://github.com/BohdanMus/goit-markup-hw-08',
  },
  {
    name: 'Проект 2',
    image: `${process.env.PUBLIC_URL}/images/Kancplus.png`,
    description: 'Опис проекту 2',
    link1: 'посилання_3',
    link2: 'посилання_4',
  },
  {
    name: 'Проект 3',
    image: `${process.env.PUBLIC_URL}/images/webstudio.png`,
    description: 'Опис проекту 3',
    link1: 'посилання_5',
    link2: 'посилання_6',
  },
  // Додайте більше елементів, якщо потрібно
];

function App() {
  return (
    <AppContainer>
      <NavBar />
      <PortfolioItems items={items} />
    </AppContainer>
  );
}

export default App;
