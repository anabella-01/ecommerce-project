interface IStatistics {
    title: string;
    description: string;

}

const Statistics = ({ title, description }: IStatistics) => {
    return (
        
            <div className="flex flex-col w-fit h-20">
                <h3 className="font-secondary font-bold text-2xl">{title}</h3>
                <p className="font-secondary leading-[22px] text-[12px] text-black opacity-60">{description}</p>
            </div>

        
    )
}

export default Statistics
