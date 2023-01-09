import Head from "next/head";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";
import LearnMore from "../../components/Sections/LearnMore";
import LeadershipTeam from "../../components/about/LeadershipTeam";
import ThreeCol from "../../components/about/ThreeCol";
import FourCol from "../../components/about/FourCol";

const Home = () => {
  return (
    <>
      <Header />

      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>
              About Us &#x2022; Athinia
          </title>
          <meta
            name="description"
            content="At Athinia™, we are data scientists and material scientists dedicated to unlocking a new standard in semiconductor manufacturing. One built on advanced analytics and secure collaboration."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="About Us • Athinia" />
          <meta property="og:description" content="At Athinia™, we are data scientists and material scientists dedicated to unlocking a new standard in semiconductor manufacturing. One built on advanced analytics and secure collaboration." />
          <meta property="og:url" content="https://athinia.com/about/" />
          <meta property="og:site_name" content="Athinia" />
          <meta property="article:modified_time" content="2022-11-03T15:49:06+00:00" />
          <meta property="og:image" content="https://athinia.com/wp-content/uploads/2021/10/Athinia-social-thumb.jpg" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="533" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="3 minutes" />
          <link rel="icon" href="/cropped-Athinia-favicon-150x150.png" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center   text-center">
          <LearnMore
            isAnimateGreen={true}
            secondColClass={'pt-[1.35rem] lg:pt-0'}
            textClass={"mx-0 lg:px-0 leading-[1.4] md:leading-[1.6em] lg:leading-[1.4] lg:mx-0 lg:mt-[30px] md:pt-[10rem] lg:pt-[4.75rem] tracking-[0] md:tracking-[-1px] lg:tracking-[-1.3px] md:pr-5 lg:pr-0"}
            gap="md:gap-x-10  pt-10 lg:gap-x-5"
            colOneOrderSM="order-last mt-[1.5rem] md:mt-0"
            colTwoOrderSM="order-first"
            itemsCenter={false}
            bgClass={
              "h-[335px] w-[335px] md:h-[380px] md:w-[380px] lg:h-[660px] lg:w-[660px] mt-5 ml-auto mr-auto md:ml-0 md:mr-8 lg:mr-0 lg:mt-[0.3rem]"
            }
            text={
              "We are data scientists and material scientists dedicated to unlocking a new standard in semiconductor manufacturing. One built on advanced analytics and secure collaboration."
            }
            svgGreenClass={
              "h-[100px] w-[100px] md:h-[0] lg:h-[175px] md:w-[125px] lg:w-[175px] absolute md:relative lg:absolute float-left mb-10 md:ml-[100px] lg:ml-[-100px] ml-5 md:ml-0 mt-[1.5rem] md:mt-0"
            }
            svgBlueClass={
              "h-[100px] w-[100px] md:w-[125px] lg:w-[175px] mt-[-80px] mr-[3px] md:mr-0 lg:mr-6 md:mt-20 float-right fill-athinia-blue"
            }
            boxClass={'py-5 md:py-0 pt-[2rem] px-4 md:px-0 lg:px-0'}
            leftPadding={'md:pl-4 lg:pl-0'}
            aboutPage={true}
            sectionClass={'mb-[3rem] md:mb-0 lg:mb-[70px]'}
            heightClass={'md:h-[74vh]'}
            contentCenter={false}
          />
          <LeadershipTeam />
          <ThreeCol />
          <FourCol />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
