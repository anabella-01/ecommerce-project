import BentoGridSection from "../features/home/components/BentoGridSection";
import Hero from "../features/home/components/Hero";
import ProductListSection from "../features/productList/components/ProductListSection";

const Home = () =>{

    return(
        <>
    <Hero/>
    <ProductListSection title="New Arrivals" limit={8}/>
    <ProductListSection title="Top Selling"  category="jewelery" limit={4}/>
    <BentoGridSection/>

        </>
    )
}

export default Home;