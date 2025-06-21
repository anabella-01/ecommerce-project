import Button from "../../../../shared/components/Button";


const Newsletter = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 rounded-2xl m-2">
            <div className="bg-black p-8 rounded-[20px] md:flex max-w-7xl items-center">

                <h2 className="text-white font-primary text-[30px] text-balance lg:text-[40px] leading-[35px] mb-5">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                
                    <form onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col grow xl:inline-block">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"
                            autoComplete="off"
                            aria-label="Email for newsletter"
                            className="bg-tartiary max-w-[320px] xl:w-full rounded-[62px] mb-4 p-3 text-center " />
                        <Button className="text-black bg-white cursor-pointer" type="submit">
                            Subscribe to Newsletter
                        </Button>
                    </form>
               


            </div>
        </section>
    )
}

export default Newsletter;