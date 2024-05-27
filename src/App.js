import Footer from './pages/Footer';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Navbar />
        <article className="MainContainer">
        <ContactUs />
        </article>
        <Footer />
      </div>
    </div>
  );
}

export default App;
