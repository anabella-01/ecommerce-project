import Casual from "/assets/images/bento/Casual.png"
import Formal from "/assets/images/bento/Formal.png"
import Party from "/assets/images/bento/Party.png"
import Gym from "/assets/images/bento/Gym.png"
import BentoGridCard from "../BentoGridCard"



const BentoGridSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8 space-y-8 rounded-2xl">
            <div className="bg-tartiary py-5 my-5 rounded-[40px]  md:px-4 ">
                <h2 className="text-center font-primary text-[32px] leading-9 text-balance mb-5">Browse By Dress Style</h2>

                <div className="grid grid-cols-1 gap-3 w-full md:grid-cols-3 px-4 md:auto-rows-[200px] justify-items-center py-8 bg-tartiary rounded-[20px] ">

                    <BentoGridCard image={Casual} title="Casual" colSpan="md:col-span-1"/>
                    <BentoGridCard image={Formal} title="Formal" colSpan="md:col-span-2"/>
                    <BentoGridCard image={Party} title="Party" colSpan="md:col-span-2"/>
                    <BentoGridCard image={Gym} title="Gym" colSpan="md:col-span-1"/>

                </div>

            </div>
        </section>
    )
}

export default BentoGridSection;