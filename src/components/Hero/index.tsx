import Banner from "../Banner";
import Button from "../Button";
import Statistics from "../Statistics";
import HeroImage from '/assets/images/hero/heroImage.png'


const Hero = () => {
    return (
        <section className="bg-primary">
            <div className="max-w-7xl mx-auto">

                <div className="px-4 space-y-4">
                    <h1 className="font-primary text-4xl leading-[34px] text-balance pt-5 "> FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className="font-secondary text-[14px] leading-5 opacity-60 text-balance">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Button>Shop now</Button>
                    <div className="flex justify-center items-center gap-3">
                        <Statistics title="200+" description="International Brands" />
                        <Statistics title="2,000+" description="High-Quality Products" />
                        <Statistics title="30,000+" description="Happy Customers" />
                    </div>
                </div>

                     <img className="w-full h-120 object-cover object-center" src={HeroImage} alt="Models posing" />

                <div className="bg-black h-32 flex justify-center">
                    <Banner/>
                </div>
            </div>
        </section>
    )
}

export default Hero;