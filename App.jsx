import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/companies/companies";

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
    </div>
  );
}

export default App;
