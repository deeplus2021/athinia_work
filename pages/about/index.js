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
            Athinia &#x2022; Smart data collection & collaborative analytics
          </title>
          <meta
            name="description"
            content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          />
          <link rel="icon" href="/cropped-Athinia-favicon-150x150.png" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center   text-center">
          <LearnMore
            isAnimateGreen={true}
            secondColClass=""
            textClass={"mx-0 lg:px-8  leading-[1.6em] lg:mx-0 lg:mt-[50px] md:pt-20"}
            gap="md:gap-x-10  pt-10"
            colOneOrderSM="order-last"
            colTwoOrderSM="order-first"
            itemsCenter={false}
            bgClass={
              "h-[320px] w-[320px] md:h-[380px] md:w-[380px] lg:h-[600px] lg:w-[600px] mt-5 ml-auto mr-auto md:ml-0 md:mr-8"
            }
            text={
              "We are data scientists and material scientists dedicated to unlocking a new standard in semiconductor manufacturing. One built on advanced analytics and secure collaboration."
            }
            svgGreenClass={
              "h-[100px] w-[100px] md:h-[175px] md:w-[175px] absolute md:relative lg:absolute float-left mb-10 md:ml-[100px] lg:ml-[-100px]"
            }
            svgBlueClass={
              "h-[100px] w-[100px] md:w-[175px] mt-[-80px] mr-[20px] md:mr-6 md:mt-20 float-right fill-athinia-blue"
            }
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
