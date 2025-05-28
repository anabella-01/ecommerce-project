import versace from "/assets/images/banner/Versace.png"
import zara from "/assets/images/banner/Zara.png"
import gucci from "/assets/images/banner/Gucci.png"
import prada from "/assets/images/banner/Prada.png"
import calvin from "/assets/images/banner/Calvin.png"

const Banner = () => {
    return (
        
            <div className=" m-5 gap-4 flex justify-evenly items-center  flex-wrap ">
                <img src={versace} alt="Versace logo" />
                <img src={zara} alt="Zara logo" />
                <img src={gucci} alt="Gucci logo" />
                <img src={prada} alt="Prada logo" />
                <img src={calvin} alt="Calvin Klein logo" />
            </div>

    )
}

export default Banner