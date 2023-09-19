import Image from 'next/image'
import About from './components/About'
import Hero from './components/Hero'
import Lottery from './components/Lottery'
import OnTheway from './components/OnTheway'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    {/* <h1 className='bg-red-400'>haiakdfj</h1> */}
    <Hero/>
    <About/>
    <Lottery/>
    <OnTheway/>
    <Footer/>
    </>
  )
}
