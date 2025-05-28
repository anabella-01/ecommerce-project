import Button from "../Button";


const Newsletter = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 rounded-2xl m-2">
            <div className="bg-black p-8 rounded-[20px]">
                <h2 className="text-white font-primary text-[30px] text-balance leading-[35px] mb-8 grow">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
               
                <form  onSubmit={(e) => e.preventDefault()} 
                       className="flex flex-col">
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Enter your email address"
                    autoComplete="off"
                    aria-label="Email for newsletter" 
                    className="bg-tartiary w-full max-w-[320px] rounded-[62px] mb-4 p-3 text-center"/>
                    <Button className="text-black bg-white" type="submit">
                        Subscribe to Newsletter
                    </Button>
                </form>
            
            </div>
        </section>
    )
}

export default Newsletter;