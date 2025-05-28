import Casual from "/assets/images/bento/Casual.png"
import Formal from "/assets/images/bento/Formal.png"
import Party from "/assets/images/bento/Party.png"
import Gym from "/assets/images/bento/Gym.png"
import BentoGridCard from "../BentoGridCard"



const BentoGridSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8 space-y-8 rounded-2xl">
            <div className="grid grid-cols-1 grid-rows-1 gap-3 justify-items-center py-8 bg-tartiary rounded-[20px]">
                <h2 className="text-center font-primary text-[32px] leading-9 text-balance mb-5 ">Browse By Dress Style</h2>
                <BentoGridCard title="Casual" image={Casual} />
                <BentoGridCard title="Formal" image={Formal} />
                <BentoGridCard title="Party" image={Party} />
                <BentoGridCard title="Gym" image={Gym} />
            </div>
        </section>
    )
}

export default BentoGridSection;