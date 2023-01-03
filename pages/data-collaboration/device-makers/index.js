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
    "Data ontology is used to structure the information so it can be analyzed easily.",
    "Obfuscation and normalization of data ensures confidentiality.",
    "Same process completed with material suppliers to get both parties ready to exchange information securely.",
  ];

  const allUlList2 = [
    "Device maker and materials suppliers get immediate access to pre-determined single and multi-parameter analysis.",
    "Creation of regression models for prediction based on historical data.",
    "Identification of critical parameters beyond the norm (i.e., Certificate of Analysis) that influence in-fab performance.",
  ];

  const allUlList3 = [
    "Joint definition of changes to critical parameters to drive performance.",
    "Measure and monitor the impact of newly implemented actions.",
    "Use predictive models for future planning based on real-time data.",
  ];

  const firstBenefits = {
    image: "yield-ramp.png",
    title:
      "Accelerate yield ramp through previously undetectable quality or process improvements",
    body1:
      "Athinia™’s ability to safeguard large amounts of data means device makers can share an unprecedented amount of information with material suppliers.",
    body2:
      "This level of transparency provides insight into which parameters matter most in & beyond the norm (i.e., Certificate of Analysis) to more quickly identify opportunities to improve quality.",
  };

  const secondBenefits = {
    image: "reduce-downtime.png",
    title:
      "Reduce downtime and impact of quality excursions by more efficiently identifying root causes and enabling tighter quality control",
    body1:
      "With clarity on the parameters that drive performance, material suppliers can reduce excursions and proactively predict the performance of parameters to reduce delays.",
    body2:
      "Through continuous feedback and integration of data, powerful predictive models can be built, and suppliers can support ‘designing for quality’ in future materials selection phases.",
  };

  const thirdBenefits = {
    image: "competitiveness.png",
    title:
      "Increase competitiveness by improving supply chain resilience and relationship with your suppliers",
    body1:
      "Device makers can manage material quality relationships via a single, secure platform.",
    body2:
      "With continuous data sharing and learnings, device makers and material suppliers can develop a more fluid and ongoing relationship",
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

        <ImageAndText
         lgPadding="lg:p-[10%_0%_15%_0%]"
          isImage={false}
          subText="With Athinia™’s ability to safeguard data, you can feel confident in sharing information with material suppliers and creating a virtually and vertically integrated manufacturing flow. This unprecedented sharing of data can accelerate yield and overall performance."
          title="Imagine all you could do with a real-time connection to your customers?"
          category={"Offering for Device Makers"}
        />

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
            <h3 className="text-athinia-green font-semibold text-[2.5em] pl-8 pt-10 md:pl-0 lg:pl-0">
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
          spacing="pt-0"
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
          content={
            "Athinia™ enables device makers to create the next generation semiconductor data ecosystem enlisting the entire value chain."
          }
          wrapperPadding={'md:py-0'}
          contentPadding={'p-[2.2em] md:p-[5%]'}
        />

        <DataSecurity />
        <GetInContact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
