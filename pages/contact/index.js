import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";
import {
    FaThumbtack,
    FaLinkedinIn,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import TwoCards from "../../components/Sections/TwoCards";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef, useState, useEffect} from "react";


const Home = () => {
    const svgRef = useRef(null);
    const [width, setWidth] = useState(0)
    useEffect(() => {
        if (window != undefined) {
            // browser code
            setWidth(window.innerWidth)
        }
    })


    const {scrollYProgress} = useScroll({target: svgRef})
    let yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], width > 768 ? [800, 0, 0] : [0, 0, 0])


    const cardData = [
        {
            category: "PRESS RELEASE",
            cardTitle: "Micron to Select Athinia™ for Pioneering Data Collaboration",
            cardDescription:
                "Today, Athinia™ announced that Micron Tehcnology, Inc. (Nasdaq: MU), a global leader in innovative memory and storage solutions, plans to use the Athinia™ data analytics platform to create a pioneering data collaboration ecosystem that will help lead a continued journey of digital transformation with Micron’s critical suppliers.",
            cardlink: "/micron-to-select-athinia-for-pioneering-data-collaboration/",
        },

        {
            category: "PRESS RELEASE",
            cardTitle:
                "Athinia to Accelerate the Use of AI and Big Data to Solve Critical Semiconductor Challenges",
            cardDescription:
                "Merck KGaA, Darmstadt, Germany, a leading science and technology company, and Palantir Technologies Inc. (NYSE:PLTR), a leading builder of operating systems for the modern enterprise, today announced a new partnership to deliver a secure collaborative data analytics platform for the semiconductor industry.",
            cardlink:
                "/athinia-to-accelerate-the-use-of-ai-and-big-data-to-solve-critical-semiconductor-challenges/",
        },
    ];

    return (
        <>
            <Header/>

            <div className="flex min-h-screen">
                <Head>
                    <title>
                        Athinia &#x2022; Smart data collection & collaborative analytics
                    </title>
                    <meta
                        name="description"
                        content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
                    />
                    <link rel="icon" href="/cropped-Athinia-favicon-150x150.png"/>
                </Head>

                <section className="w-full flex-initial h-auto break-words pt-[5%]">
                    <div className="p-[2em] md:p-[10px]" style={{maxWidth: "1400px", marginRight: "auto", marginLeft: "auto"}}>
                        <h2 className="md:text-lg-large sm:my-0 text-left sm:text-[3em] mx-0 px-0 text-[2em] font-medium mb-[20px] sm:tracking-[-2px] tracking-[0]" style={{color: "#172337"}}>
                            Get in Contact
                        </h2>
                        <div className="relative overflow-hidden">
                            <motion.small
                                className="block"
                                style={{x:yPosAnim}}
                                ref={svgRef}>
                                <Image
                                    src={"/images/icon2.svg"}
                                    alt="icon2"
                                    width={100}
                                    height={100}
                                    className="lg:w-[100px] md:w-[125px] md:my-5 md:px-0 lg:mb-2 sm:my-0 my-0"/>
                            </motion.small>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:p-[10px]">
                            <div>
                                <p className="md:pr-5 md:pl-0 lg:px-0 lg:mb-0 sm:mb-[48px] pl-0 sm:mb-[48px] sm:mt-0 mt-[10px] mb-[1em]">
                                    Interested in exploring the possibilities Athinia™ can unlock
                                    for your organization? We would love to hear from you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:m-[4%_0_5%_0] sm:mb-[5%] mb-[5%] sm:mt-0 mt-[3%]" style={{maxWidth: "1400px", marginRight: "auto", marginLeft: "auto"}}>
                        <div className="bg-athinia-blue lg:p-[5%_20%_5%_20%] sm:p-[2em] p-[2em]">
                            <div className="flex">
                                <Image
                                    src={"/images/RusselKemp-300x300.jpeg"}
                                    alt="russel"
                                    width={150}
                                    height={150}
                                    className="sm:h-[125px] sm:w-[125px] h-[97px] w-[97px] rounded-full"
                                />
                                <div className="sm:ml-[20px] ml-[20px]">
                                    <h3 className="text-sm-medium sm:text-lg-medium sm:tracking-[-1px]" style={{color: "#172337"}}>
                                        Russell Kempt
                                    </h3>
                                    <h3 className="text-white text-[22px] md:text-[28px]">
                                        Head of Revenue
                                    </h3>
                                </div>
                            </div>
                            <div className="md:grid grid-cols-2 md:mt-[20px] md:p-[10px] sm:block block">
                                <div className="lg:col-span-1">
                                    {" "}
                                    <div className="flex md:mr-10 lg:mr-0 sm:my-5 my-7 md:my-0 ">
                                        <span>
                                            {" "}
                                            <FiMail color="white" size={40} className={"md:h-[30px] md:w-[30px]"}/>
                                        </span>
                                            {" "}
                                        <a href="mailto:russell.kempt@athinia.com" className="text-white mx-3">russell.kempt@athinia.com</a>
                                    </div>
                                </div>
                                {/*<div className="lg:col-span-1"></div>*/}
                                <div className="lg:col-span-1 md:pl-[10px]">
                                    {" "}
                                    <div className="flex md:mx-0 md:mr-10  lg:mr-0 my-5 md:my-0">
                                        <span>
                                            {" "}
                                            <FaLinkedin color="white" size={40} className={"md:h-[30px] md:w-[30px]"}/>
                                        </span>
                                            {" "}
                                        <a target='_blank' href="https://www.linkedin.com/in/kempt/" className="text-white mx-3">
                                            Connect with Russel
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-athinia-dark sm:p-[5%] p-[5%]">
                            <div className="grid grid-cols-1 md:grid-cols-2 text-white">
                                <div className="md:p-[10px]">
                                    <h1 className="text-sm-medium md:text-lg-medium lg:pr-0 md:tracking-[-1px] sm:text-[2em] text-[1.5em]">
                                        Press and Media Inquiries Contact:
                                    </h1>
                                    <p className="text-athinia-blue sm:my-[10px] my-[10px]" style={{fontWeight: 500}}>Nuria Aranda Bosch</p>
                                    <p className="md:mb-0 mb-[20px]">Marketing and Communications Manager</p>
                                    <div className="flex my-2 md:my-2 mb-4">
                                        <span>
                                            <FiMail size={40} className={"md:h-[25px] md:w-[25px]"}/>
                                        </span>
                                        <a className="mx-2 md:mx-2 ml-[1em]" href="mailto:nuria.aranda-bosch@athinia.com">
                                            nuria.aranda-bosch@athinia.com
                                        </a>
                                    </div>
                                </div>
                                <div className="lg:p-[10px] md:p-[10px_0_0_10px]">
                                    <div className="flex mb-5 hover:text-athinia-green">
                                        <span>
                                            <FaThumbtack
                                                size={40}
                                                className={"md:h-[25px] md:w-[25px] md:mt-2 lg:mt-0"}
                                            />
                                        </span>
                                        <a
                                            className="mx-4 md:self-auto self-center"
                                            target="_blank"
                                            href="https://www.google.com/maps/place/245+First+St,+Cambridge,+MA+02142/@42.363518,-71.0812198,17z/"
                                        >
                                            245 First Street, Floor 18, Cambridge,&nbsp;MA 02142
                                        </a>
                                    </div>
                                    <div className="flex my-5 hover:text-athinia-green">
                                        <span>
                                            <FaLinkedinIn
                                                size={40}
                                                className={"md:h-[25px] md:w-[25px]"}
                                            />
                                        </span>
                                        <a
                                            className="mx-4 md:self-auto self-center"
                                            target="_blank"
                                            href="https://www.linkedin.com/company/athinia"
                                        >
                                            @athinia
                                        </a>
                                    </div>
                                    <div className="flex my-5 hover:text-athinia-green md:mb-5 mb-0">
                                        <span>
                                            <FaTwitter
                                                size={40}
                                                className={"md:h-[25px] md:w-[25px]"}
                                            />
                                        </span>
                                        <a
                                            className="mx-4 md:self-auto self-center"
                                            target="_blank"
                                            href="https://twitter.com/Data4Pioneers"
                                        >
                                            @Data4Pioneers
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <TwoCards
                        titlePosition={"text-center"}
                        title={"Latest Press Releases"}
                        cardData={cardData}
                    />
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
