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
import {useRef} from "react";


const Home = () => {
    const svgRef = useRef(null);

    const {scrollYProgress} = useScroll({target: svgRef});
    const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -450, -400]);

    const cardData = [
        {
            category: "PRESS RELEASES",
            cardTitle: "Micron to Select Athinia™ for Pioneering Data Collaboration",
            cardDescription:
                "Today, Athinia™ announced that Micron Tehcnology, Inc. (Nasdaq: MU), a global leader in innovative memory and storage solutions, plans to use the Athinia™ data analytics platform to create a pioneering data collaboration ecosystem that will help lead a continued journey of digital transformation with Micron’s critical suppliers.",
            cardlink: "/micron-to-select-athinia-for-pioneering-data-collaboration/",
        },

        {
            category: "PRESS RELEASES",
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

                <section className="w-full flex-initial h-auto break-words pt-20">
                    <div className="max-w-screen-xl mx-auto ">
                        <h1
                            className="text-sm-large md:text-lg-large my-4 md:my-0 tracking-[-1px]
                                    text-left px-8 md:px-10 lg:px-8 "
                        >
                            Get in Contact
                        </h1>
                        <div className="relative">
                            <motion.small
                                className="block"
                                style={{x: yPosAnim}}
                                ref={svgRef}
                            >
                                <Image
                                    src={"/images/icon2.svg"}
                                    alt="icon2"
                                    width={100}
                                    height={100}
                                    className="ml-[150px] my-5 px-3 md:px-0"
                                />
                            </motion.small>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2  px-8">
                            <div>
                                <p className=" md:pl-5 lg:px-0">
                                    Interested in exploring the possibilities Athinia™ can unlock
                                    for your organization? We would love to hear from you.
                                </p>
                            </div>
                            <div></div>
                        </div>

                        <div className="mt-20">

                            <div className="bg-athinia-blue p-5 md:px-10  lg:p-[5%_20%_5%_20%]  md:py-10 lg:py-20">

                                <div className="flex items-center">
                                    <Image
                                        src={"/images/RusselKemp-300x300.jpeg"}
                                        alt="russel"
                                        width={150}
                                        height={150}
                                        className=" w-[90px] ml-5 h-[100px] md:h-[130px] md:w-[130px] rounded-full"
                                    />
                                    <div className="ml-8">
                                        <h3 className="text-sm-medium md:text-lg-medium">
                                            Russell Kempt
                                        </h3>
                                        <h3 className="text-white text-[22px] md:text-[28px]">
                                            Head of Revenue
                                        </h3>
                                    </div>
                                </div>

                                <div className="grid grid-cols-5	 md:flex-row	mt-10">
                                    <div className="col-span-5 md:col-span-2">
                                        {" "}
                                        <div className="flex mx-5 md:mr-10  lg:mr-0 my-5 md:my-0">
                      <span>
                        {" "}
                          <FiMail
                              color="white"
                              size={40}
                              className={"md:h-[30px] md:w-[30px]"}
                          />
                      </span>{" "}
                                            <a
                                                href="mailto:russell.kempt@athinia.com"
                                                className="text-white  mx-3"
                                            >
                                                russell.kempt@athinia.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-span-0 md:col-span-1">

                                    </div>
                                    <div className="col-span-5 md:col-span-2">
                                        {" "}
                                        <div className="flex mx-5 md:mx-0 md:mr-10  lg:mr-0 my-5 md:my-0">
                      <span>
                        {" "}
                          <FaLinkedin
                              color="white"
                              size={40}
                              className={"md:h-[30px] md:w-[30px]"}
                          />
                      </span>{" "}
                                            <a
                                                target='_blank'
                                                href="https://www.linkedin.com/in/kempt/"
                                                className="text-white  mx-3"
                                            >
                                                Connect with Russel
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-athinia-dark p-5 md:p-8 lg:p-20">
                                <div className="grid grid-cols-1 md:grid-cols-2 text-white">
                                    <div className="mt-4">
                                        <h1 className="text-sm-large md:text-lg-medium md:pr-10 lg:pr-0">
                                            Press and Media Inquiries Contact:
                                        </h1>

                                        <p className="text-athinia-blue my-2">Nuria Aranda Bosch</p>
                                        <p>Marketing and Communications Manager</p>
                                        <div className="flex my-2">
                      <span>
                        <FiMail
                            size={40}
                            className={"md:h-[25px] md:w-[25px]"}
                        />
                      </span>
                                            <a
                                                className="mx-2"
                                                href="mailto:nuria.aranda-bosch@athinia.com"
                                            >
                                                nuria.aranda-bosch@athinia.com
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex my-5 hover:text-athinia-green">
                      <span>
                        <FaThumbtack
                            size={40}
                            className={"md:h-[25px] md:w-[25px] md:mt-2 lg:mt-0"}
                        />
                      </span>
                                            <a
                                                className="mx-2 "
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
                                                className="mx-2"
                                                target="_blank"
                                                href="https://www.linkedin.com/company/athinia"
                                            >
                                                @athinia
                                            </a>
                                        </div>
                                        <div className=" flex my-5 hover:text-athinia-green">
                      <span>
                        <FaTwitter
                            size={40}
                            className={"md:h-[25px] md:w-[25px]"}
                        />
                      </span>
                                            <a
                                                className="mx-2"
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
