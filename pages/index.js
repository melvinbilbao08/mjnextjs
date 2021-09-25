import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from "../components/Navbar";
import Project from '../components/Project';



export default function Home() {
  return (
    <>
      <Head>
        <title>Melvin John Bilbao | Portfolio</title>
      </Head>
     
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}
