import BentoGridSection from "./components/BentoGridSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter"
import ProductListSection from "./components/ProductListSection"






function App() {

  return (
    <>
  <Header/>

  <main>
    <Hero/>
    <ProductListSection title="New Arrivals" limit={4}/>
    <ProductListSection title="Top Selling"  category="jewelery" limit={4}/>
    <BentoGridSection/>
    <Newsletter/>

  </main>

  <Footer/>

    </>
  )
}

export default App
