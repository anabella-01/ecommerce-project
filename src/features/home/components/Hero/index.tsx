import Banner from "../Banner";
import Button from "../../../../shared/components/Button";
import Statistics from "../Statistics";
import HeroImage from '/assets/images/hero/heroImage.png'


const Hero = () => {
    return (
        <section className="bg-primary">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="md:flex ">
                    <div className="space-y-5 md:px-6 lg:space-y-8">
                        <h1 className="font-primary text-4xl leading-[34px] text-balance pt-5 md:pt-8 "> FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className="font-secondary text-[14px] leading-5 opacity-60">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <div className="flex justify-center md:justify-start">
                            <Button type="button" >Shop now</Button>
                        </div>
                        
                            <div className="flex gap-3 m-1 h-24 justify-around items-center">
                            <Statistics title="200+" description="International Brands" />
                            <Statistics title="2,000+" description="High-Quality Products" />
                            <Statistics title="30,000+" description="Happy Customers" />
                        </div>
                    </div>

                    <div className="max-w-[1440px] overflow-hidden">
                        <img className="w-full h-120 object-cover object-center" src={HeroImage} alt="Models posing" />
                    </div>
                    
                </div>
            </div>

                <div className="w-full h-32 bg-black flex justify-center">
                    <Banner />
                </div>
        </section>
    )
}

export default Hero;