
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";




function App() {
  return (
    <div className="bg-slate-900">
      <NavBar/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contacts/>
   

    
    </div>
  );
}

export default App;
