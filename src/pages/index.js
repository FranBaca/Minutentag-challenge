import ProductListing from "./ProductListing";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import products from "../../assets/products";
import axios from "axios";
export default function Home () {
  return(
    <>
      <Navbar/>
      <Hero/>
      <ProductListing/>
      <Footer/>
    </>
  )
}
