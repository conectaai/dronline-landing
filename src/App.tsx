import Header from './components/header';
import Hero from './components/hero';
import OurSoftware from './components/our-software';
import OurInterfaces from './components/our-interfaces';
import Testimonials from './components/testimonials';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <OurSoftware/>
      <OurInterfaces/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default App;