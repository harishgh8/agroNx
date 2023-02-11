import "./App.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />

      <Hero />
      <Products />
    </div>
  );
}

export default App;
