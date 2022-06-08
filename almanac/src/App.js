import About from "./About/About";
import "./App.css";
import News from "./News/News";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Team from "./Team/Team";
import Service from "./Service/Service";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Service />
       <Team />
       <News />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
