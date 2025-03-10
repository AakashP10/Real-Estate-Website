import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/companies/companies";
import Residencies from "./components/Residencies/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
