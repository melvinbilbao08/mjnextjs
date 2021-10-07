import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Navbar from '../components/sections/Navbar'
import About from '../components/sections/About'
import Project from '../components/sections/Project'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

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
