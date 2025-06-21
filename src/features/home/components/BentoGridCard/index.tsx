interface IBentoGridCard {
    image: string,
    title: string,
    alt?: string;
    colSpan: string;
    link?: string;

}

const BentoGridCard = ({ image, title, alt, colSpan, link = "#" }: IBentoGridCard) => {
    return (
        <a
            href={link}
            className={`relative min-h-48 w-full ${colSpan} transition-transform hover:scale-105 duration-300`}
        >

            <span className="absolute top-5 left-7 text-2xl font-secondary font-bold">
                {title}
            </span>
            <div className="w-full h-full overflow-hidden">
                <img
                    className="rounded-[20px] w-full h-full object-cover object-right md:object-right-top"
                    src={image}
                    alt={alt}
                />
            </div>


        </a>

    )
}

export default BentoGridCard;