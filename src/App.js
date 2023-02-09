import './styling/home.css';
import Header from "./components/header";
import Home from './components/home';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
