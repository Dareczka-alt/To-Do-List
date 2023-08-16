import Home from './components/Home/Home'
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar'
import Favourite from './components/Favourite/Favourite'
import About from './components/About/About'
import List from './components/List/List'
import NotFound from './components/NotFound/NotFound'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/list/:listId" element={<List />} />
        </Routes>
      </Container>
    </main>
  );
};


export default App;