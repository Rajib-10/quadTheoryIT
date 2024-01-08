import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";

function App() {
  return (
     <div className="bg-gray-300">
      <Navbar className="hidden" />
      <Banner />
      <Popular />
      <Recommended />
      <Footer />
   </div>
  );
}

export default App;
