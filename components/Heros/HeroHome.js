

const HeroHome = () => {

    return (
        <section className="bg-athinia-dark w-full flex-initial z-[25]
                    min-h-[64vh] md:min-h-[65vh] lg:min-h-[75vh]
                    bg-hero-home bg-no-repeat bg-contain bg-right-bottom break-words">
            <div  className=" bg-hero-home grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-[1400px]  p-8 mx-auto lg:gap-8 xl:gap-0 lg:p-[10px] lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h2 className="max-w-2xl mb-4 text-sm-large md:text-[3em] lg:text-lg-large text-left md:text-5xl xl:text-7xl text-white animate-fade-in-right lg:mt-5 lg:letter-spacing--2">                        Data for Pioneers
                    </h2>
                    <h3 className="max-w-2xl mb-6 text-sm-medium md:text-lg-medium text-white text-left 
                                    animate-fade-in-right-500 lg:letter-spacing--1 lg:mt-5">
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