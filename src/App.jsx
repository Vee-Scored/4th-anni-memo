import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./components/Counter";
import Header from "./components/Header";
import HeroText from "./components/HeroText";
import Container from "./components/Container";
import Celebration from "./components/Celiberation";
import CardCarousel from "./components/Card";
import Carousel from "./components/Carousel";
import { data } from "./data";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container>
        <section className="min-h-screen  overflow-hidden mx-auto my-auto">
          <div className="flex flex-col items-center justify-center gap-10 px-5 sm:px-20 sm:flex-row">
            <Counter />
            <HeroText />
          </div>
          <Celebration />
        </section>
        <section className="py-10">
         <div>
         <h1 className="text-red-50 text-center py-5 text-2xl font-semibold font-serif">
            What I love about you 💓{" "}
          </h1>
          <Carousel data={data} activeSlide={2} />
         </div>
        </section>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
