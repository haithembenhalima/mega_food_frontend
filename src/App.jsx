import "./App.css";
import Navbar from "./components/navbar/navbar";
import CarouselComponent from "./components/carousel/CarouselComponent";
import Section from "./components/section/Section";
import Product from "./components/product/Product";
import Category from "./components/category/Category";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <CarouselComponent />
      <Section />
      <Product />
      <Category />
      <Footer />
    </div>
  );
}



export default App;
