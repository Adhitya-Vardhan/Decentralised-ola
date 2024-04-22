import Layout from "../components/Layout";
import SelectSection from "../components/SelectSection";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Plan from "../components/Plan";
import Rooms from "../components/Rooms";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SelectSection />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </>
  );
}
