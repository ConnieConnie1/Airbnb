import './sass/main.scss';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Footer from './components/Footer';
import Accomodations from './components/Accomodations';
import Accomodation from './components/Accomodation';



function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Filters */}
      <Filters />
      {/* Cards-Rentals */}
      <Accomodations />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
