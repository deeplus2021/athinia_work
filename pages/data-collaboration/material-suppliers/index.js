import Head from "next/head";
import ImageAndText from "../../../components/Sections/Columns/ImageAndText";

import Header from "../../../components/Headers/Header";
import Footer from "../../../components/Footers/Footer";
import TheBenifitsTwo from "../../../components/data-collaboration/TheBenifitsTwo";
import DataSecurity from "../../../components/data-collaboration/DataSecurity";
import Content1 from "../../../components/data-collaboration/Content1";
import Content2 from "../../../components/data-collaboration/Content2";
import BlueSection from "../../../components/Sections/BlueSection";
import GetInContact from "../../../components/Sections/GetInContact";

const Home = () => {
  const allUlList1 = [
    "Combine data from multiple sources, including your quality, manufacturing, and in-process data, powered by Athinia™’s proprietary software and process.",
    "Data ontology is used to structure the information so it can be easily analyzed easily.",
    "Obfuscation and normalization of data enable confidentiality.",
    "Same process completed with device makers to get both parties ready to exchange information securely.",
  ];

  const allUlList2 = [
    "Material suppliers and device makers can get immediate access to pre-determined single and multi-parameter analysis.",
    "Creation of regression models for prediction based on historical data.",
    "Identification of critical parameters beyond the norm (i.e., Certificate of Analysis) that influence in-fab performance.",
  ];

  const allUlList3 = [
    "Joint definition of changes to critical parameters to drive performance.",
    "Measure and monitor the impact of newly implemented actions.",
    "Use predictive models for future planning based on real-time data.",
  ];

  const firstBenefits = {
    image: "material-impact.png",
    title:
      "Understand material impact on device performance and make improvements where they matter",
    body1:
      "Athinia™’s secure data-sharing platform enables suppliers to have access to key semiconductor manufacturing data they never had before.",
    body2:
      "This level of transparency provides insight into which parameters matter most in & beyond the norm (i.e., Certificate of Analysis).",
  };

  const secondBenefits = {
    image: "streamline-optimize.png",
    title:
      "Streamline and optimize change notification and other quality processes by predicting materials performance based on historical data",
    body1:
      "With the ability to collaborate, combine and contextualize data, material suppliers can better understand parameters that matter the most and focus resources to drive performance.",
  };

  const thirdBenefits = {
    image: "remain-competitive.png",
    title:
      "Remain competitive by qualifying new materials sooner, with the possibility of achieving higher margins, and improving customer satisfaction",
    body1:
      "With access to limitless analytics capabilities, including the most sophisticated AI and machine learning frameworks, suppliers can differentiate based on quality, performance and time to market.",
  };

  return (
    <>
      <Header />

      <div className="flex min-h-screen flex-col items-center mb-[1rem] md:mb-[4.5rem] lg:mb-[9rem]">
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

        <ImageAndText 
          titleClass="text-sm-medium md:text-[2.5em] line-height-13" 
          category={'Offering for Material Suppliers'} 
          title={'Imagine all you could do with a real-time connection to your customers?'} 
          subText={'With Athinia™’s ability to safeguard data, device makers are willing to share an unprecedented amount of information with suppliers, unlocking opportunities to improve performance, time to market, and customer satisfaction.'}  isImage={false}
          sectionClass={"pb-[6.5rem] md:pb-[10rem] lg:pb-[16rem]"} 
          boxClass="lg:pr-[13rem]"
          subTextClass={"md:pr-3 lg:pr-0"}/>

        <TheBenifitsTwo
          firstBenefits={firstBenefits}
          secondBenefits={secondBenefits}
          thirdBenefits={thirdBenefits}
        />
        <section
          className="w-full flex-initial h-auto
            break-words pt-0     md:pt-[6rem]"
        >
          <div
            className="grid grid-cols-1
            max-w-[1400px] 
            mx-auto md:px-8 lg:px-2"
          >
            <h3 className="text-athinia-green font-weight-500 text-[2.5em] pl-8 pt-[3.8rem] pb-[2.5rem] md:pb-0 md:pt-0 lg:pt-10 md:pl-0 lg:pl-0">
              How It Works
            </h3>
          </div>
        </section>        
        <Content2
          spacing="pt-0"
          allList={allUlList1}
          title={"Aggregate"}
          subTitle={"Consolidated view of all relevant data"}
          isTitleCol={true}
          iconColor={"fill-athinia-purple"}
          extraClass={"lg:px-2 lg:letter-spacing--1"}
          boxClass={"md:pl-0 md:pr-[1.2rem] lg:pr-[2rem] lg:mr-0 md:mt-3 lg:mt-0"}
          titleClass={""}
          subTitleClass={"letter-spacing-01 lg:letter-spacing-05"}
          listClass={"ml-[3.2rem] md:ml-[3.1rem] lg:ml-[3rem] mt-4 lg:letter-spacing-01 mr-1 md:mr-0"}
          animationClass={"md:mt-10 lg:mt-0"}
        />        
        <Content1
          spacing="pt-0"
          allList={allUlList2}
          title={"Analyze"}
          subTitle={
            "Possibility to analyze materials and in-fab quality performance data"
          }
          isTitleCol={true}
          iconColor={"fill-athinia-blue"}
          boxClass={"md:px-0 lg:pl-0 pt-0 md:pr-0"}
          listClass={"ml-[3rem] md:ml-[4.2rem] lg:ml-[4rem] mr-1 md:mr-2"}
          titleClass={"mt-0 mb-5 px-1 lg:px-0 lg:my-5"}
          subTitleClass={"px-1 lg:px-0"}
          animationClass={"md:mt-[8rem] lg:mt-0"}
        />
        <Content2
          allList={allUlList3}
          title={"Act"}
          subTitle={
            "Take action based on our findings and your insights to improve quality"
          }
          isTitleCol={true}
          iconColor={"fill-athinia-green"}
          extraClass={"lg:px-2 lg:letter-spacing--1 mb-[4rem] md:mb-0"}
          boxClass={"md:pl-0 md:pr-4 lg:mr-0"}
          titleClass={"letter-spacing--1"}
          subTitleClass={"letter-spacing-01 lg:letter-spacing-05"}
          listClass={"ml-[3.2rem] md:ml-[3.1rem] lg:ml-[3rem] mt-4 lg:letter-spacing-01 mr-1 md:mr-0"}
          animationClass={"md:mt-10 lg:mt-0"}
        />        
        <BlueSection
          content={
            "Athinia™ can be the foundation for achieving best-in-class digitization capabilities. We provide a unified platform to aggregate your data and jumpstart your digital transformation, even if you are starting from a very fragmented place."
          }
          wrapperPadding={'md:py-0'}
          contentPadding={'p-[2.2em] py-[1.8rem] md:p-[8%] lg:p-[7%] md:mx-[1.8rem] lg:mx-0 md:letter-spacing--1 lg:letter-spacing-0'}
        />
        <DataSecurity />
        <GetInContact 
          subTitle="Athinia™ unlocks a new standard in data management for the semiconductor industry​."
          extraClass="p-[12%_0%_8%_0%] pl-[2rem] pr-[2rem] md:pr-[3rem] md:px-0 md:pt-[12%] lg:pt-[8%]"
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
