import './App.css';
import Amazing from './components/amazing/amazing';
import Clients from './components/clients/clients';
import Deation from './components/deation/deation';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Project from './components/project/project';
import Services from './components/services/services';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Project />
      <Deation />
      <Amazing />
      <Footer />
    </>
  );
}

export default App;
