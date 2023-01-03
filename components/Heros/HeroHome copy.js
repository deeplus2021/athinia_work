

const HeroHome = () => {

    return (
        <section className="bg-athinia-dark w-full flex-initial 
                    min-h-[64vh] md:min-h-[65vh] lg:min-h-[75vh]
                    bg-hero-home bg-no-repeat bg-contain bg-right-bottom break-words">
            <div className="bg-hero-home grid max-w-screen-xl p-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h2 className="max-w-2xl mb-4 text-sm-large md:text-lg-large text-left md:text-5xl xl:text-7xl text-white animate-fade-in-right">                        Data for Pioneers
                    </h2>
                    <h3 className="max-w-2xl mb-6 text-sm-medium md:text-lg-medium text-white text-left 
                                    animate-fade-in-right-500 tracking-[-1px]">
                        Athinia™ provides a secure data analytics platform for collaborating on relevant
                        information from participants across the semiconductor industry.
                    </h3>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    
                </div>
            </div>
        </section>

    )

}

export default HeroHome