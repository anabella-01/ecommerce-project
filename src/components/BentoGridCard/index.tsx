interface IBentoGridCard {
    image: string,
    title: string,

}

const BentoGridCard = ({ image, title }: IBentoGridCard) => {
    return (

        <a href="#">
            <div className="relative overflow-hidden rounded-[20px] w-[310px] h-[190px] shadow-2xs">
                <img src={image}
                    className="h-full w-full object-cover"
                    alt={title}/>
                <p className="absolute top-5 left-5 font-secondary font-bold text-2xl">{title}</p>
            </div>
        </a>

    )
}

export default BentoGridCard;