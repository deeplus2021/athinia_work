import Head from "next/head";
import Image from "next/image";
import CustomButton from "../../components/Buttons/CustomButton";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";

const Home = () => {
    return (
        <>
            <Header/>

            <div className="flex min-h-screen flex-col items-center lg:justify-center">
                <Head>
                    <title>
                        Careers &#x2022; Athinia
                    </title>
                    <meta
                        name="description"
                        content="Are you ready to lead the semiconductor industry revolution? We are looking for champions who are ready to unlock the power of data to build the future of semiconductors."
                    />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Careers • Athinia" />
                    <meta property="og:description" content="Are you ready to lead the semiconductor industry revolution? We are looking for champions who are ready to unlock the power of data to build the future of semiconductors." />
                    <meta property="og:url" content="https://athinia.com/about/careers/" />
                    <meta property="og:site_name" content="Athinia" />
                    <meta property="article:modified_time" content="2022-11-03T15:49:06+00:00" />
                    <meta property="og:image" content="https://athinia.com/wp-content/uploads/2021/10/Athinia-social-thumb.jpg" />
                    <meta property="og:image:width" content="800" />
                    <meta property="og:image:height" content="533" />
                    <meta property="og:image:type" content="image/jpeg" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="3 minutes" />
                    <link rel="icon" href="/cropped-Athinia-favicon-150x150.png"/>
                </Head>

                <section className="w-full flex-initial h-auto break-words p-[5%_0%_3%_0%]">
                    <div className="grid grid-cols-2 md:grid-cols-3 max-w-screen-xl mx-auto md:p-[10px] p-[2em]" style={{maxWidth: "1400px"}}>
                        <div className="col-span-2 md:col-span-3 lg:col-span-2 md:p-[10px]">
                            <p className="text-[24px] text-left mb-[20px] lg:text-[2em] sm:text-[1.5em] mb-[1em] tracking-[0px] sm:tracking-[0px] text-blue sm:leading-[1.5] leading-[1.54]">
                                Are you ready to lead the semiconductor industry revolution? We
                                are looking for champions who are ready to unlock the power of
                                data to build the future of semiconductors.
                            </p>
                        </div>

                        <div className="col-span-0 md:col-span-0 lg:col-span-1 "></div>
                    </div>
                </section>
                <section className="w-full flex-initial h-auto break-words bg-athinia-gray p-[6%_0%_6%_0%]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto p gap-0" style={{maxWidth: "1400px"}}>
                        <div className="sm:grid order-last lg:order-first mt-8 md:mt-0 md:p-[10px] md:m-0 m-[2em]">
                            <div className="md:p-[10px]">
                                <h1 className="text-[1.5em] font-medium md:text-lg-medium my-4 my-0 text-left px-5 px-0 mb-[20px] sm:text-[2em] text-blue sm:tracking-[-1px] tracking-[0]">
                                    Come join our team!
                                </h1>
                                <p className="px-0 mb-[38px]">
                                    If you have experience in data and technology and are interested
                                    in the future of the semiconductor industry, we would like to
                                    talk to you.
                                </p>
                                <CustomButton
                                    target="_blank"
                                    text={"CHECK OUT OUR OPEN POSITIONS"}
                                    background={"bg-athinia-blue !py-[20px]"}
                                    link="https://jobs.vibrantm.com/merck/search/?createNewAlert=false&q=Athinia&optionsFacetsDD_country=&optionsFacetsDD_customfield1=&optionsFacetsDD_customfield4=&optionsFacetsDD_customfield3=&locationsearch=%20"
                                    extraClass={
                                        "text-white text-sm-small text-[1.2em] hover:bg-athinia-purple inline  px-[30px] leading-[1em] tracking-[1px]"
                                    }
                                    wrapperClass={"flex mt-[38px] mx-0 text-center md:text-left sm:mb-[56px] mb-[84px]"}
                                />
                            </div>
                            <div className="bg-athinia-green sm:mx-0 p-[1em] md:p-[4em] lg:p-[3em] lg:mt-0 mt-[2em]">
                                <h1 className="text-sm-medium md:text-lg-medium mt-0 sm:tracking-[-1px] text-left mb-[20px] sm:text-[2em] text-[1.5em] text-blue">
                                    Don’t see an open role for you?
                                </h1>
                                <p className="mb-[38px] text-blue">
                                    We are always looking for the best talent. Reach out and share
                                    more information about yourself and the work you’re interested
                                    in doing.
                                </p>
                                <CustomButton
                                    isInternal={true}
                                    extraClass={
                                        "text-sm-small text-[1.2em] hover:bg-athinia-gray inline !py-[20px] px-[30px] leading-[1em] tracking-[1px]"
                                    }
                                    link='\contact'
                                    text={"CONTACT US"}
                                    background={"bg-white"}
                                    wrapperClass={"flex mt-[38px] text-blue"}
                                />
                            </div>
                        </div>
                        <div className="bg-career-image bg-cover bg-center bg-no-repeat lg:m-0 md:m-[0em_10em_0em_10em] m-[2em]
                         h-[310px] sm:h-[643px] lg:ml-[70px] lg:mr-0 lg:h-[555px] xl:h-[100%] order-first lg:order-last rounded-full relative md:mb-[20px]">
                            <Image
                                src={"/images/icon1.svg"}
                                alt="icon1"
                                width={200}
                                height={200}
                                className="absolute h-[106px] w-[100px] sm:h-[108px] sm:w-[100px] md:h-[133px] md:w-[125px] lg:h-[183px] lg:w-[175px]
                                bottom-0 left-[-5%] sm:left-0 sm:bottom-[5%] md:bottom-[29%] md:left-[-20%] lg:bottom-[28%] lg:left-[-5.5%]"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
