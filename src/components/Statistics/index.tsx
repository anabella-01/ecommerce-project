interface IStatistics{
    title: string;
    description: string;

}

const Statistics = ({title,description}: IStatistics) =>{
    return(

         <div className='flex flex-col w-24 h-12'>
            <h3 className="font-secondary font-bold text-2xl">{title}</h3>
            <p className="font-secondary font-light text-sm text-black opacity-60">{description}</p>
        </div>

    )
}

export default Statistics
