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

      <div className="flex min-h-screen flex-col items-center  mb-20">
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

        <ImageAndText titleClass="text-sm-medium md:text-[2.5em]" category={'Offering for Material Suppliers'} title={'Imagine all you could do with a real-time connection to your customers?'} subText={'With Athinia™’s ability to safeguard data, device makers are willing to share an unprecedented amount of information with suppliers, unlocking opportunities to improve performance, time to market, and customer satisfaction.'}  isImage={false}/>

        <TheBenifitsTwo
          firstBenefits={firstBenefits}
          secondBenefits={secondBenefits}
          thirdBenefits={thirdBenefits}
        />
        <section
          className="w-full flex-initial h-auto
            break-words pt-0     md:pt-20"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-3
            max-w-[1400px]
            mx-auto md:px-8"
          >
            <h3 className="text-athinia-green text-lg-medium px-10 pt-10 md:pl-0 lg:pl-0">
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
        />

        <Content1
          spacing='pt-5'
          allList={allUlList2}
          title={"Analyze"}
          subTitle={
            "Possibility to analyze materials and in-fab quality performance data"
          }
          isTitleCol={true}
          iconColor={"fill-athinia-blue"}
        />
        <Content2
          allList={allUlList3}
          title={"Act"}
          subTitle={
            "Take action based on our findings and your insights to improve quality"
          }
          isTitleCol={true}
          iconColor={"fill-athinia-green"}
        />
        <BlueSection
         contentPadding={'p-[2.2em] md:p-[0%]'}
          content={
            "Athinia™ can be the foundation for achieving best-in-class digitization capabilities. We provide a unified platform to aggregate your data and jumpstart your digital transformation, even if you are starting from a very fragmented place."
          }
        />
        <DataSecurity />
        <GetInContact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
