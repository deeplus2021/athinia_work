import Head from "next/head";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";
import ImageText from "../../components/Sections/Columns/ImageText";
import TheChallenge from "../../components/data-collaboration/TheChallenge";
import TheSolution from "../../components/data-collaboration/TheSolution";
import TheSecurity from "../../components/data-collaboration/TheSecurity";
import TheBenifits from "../../components/data-collaboration/TheBenifits";
import GetInContact from "../../components/Sections/GetInContact";
import TwoCards from "../../components/Sections/TwoCards";

const Home = () => {


  const cardData = [
    {
      category: 'CASE STUDY', 
      cardTitle: 'Shift from reactive to proactive improvement of “first-time right” with secure data sharing',
      cardDescription: 'Oftentimes one specific criteria doesn’t meet fab specification limits, and raw material pre-conditioning is a month-long process that can delay customer needs.',
      cardlink:'/shift-from-reactive-to-proactive-improvement-of-first-time-right-with-secure-data-sharing/'
    },
    {
      category: 'CASE STUDY', 
      cardTitle: 'Save time and free up resources with integrated data access',
      cardDescription: 'Batch quality analysis often requires a lengthy data gathering processes involving many different systems. The root cause investigation is typically an intensive, manual processes which can take many days to complete.',
      cardlink:'/save-time-and-free-up-resources-with-integrated-data-access/'
    },

  ]

  return (
    <>
      <Header />

      <div className="flex min-h-screen flex-col items-center justify-center ">
        <Head>
          <title>
            Data Collaboration &#x2022; Athinia
          </title>
          <meta
            name="description"
            content="Building a data ecosystem to help the semiconductor industry focus time and resources where it matters most. Athinia™ provides a secure data analytics platform for collaborating on relevant information from material suppliers and device makers."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Data Collaboration • Athinia" />
          <meta property="og:description" content="Building a data ecosystem to help the semiconductor industry focus time and resources where it matters most. Athinia™ provides a secure data analytics platform for collaborating on relevant information from material suppliers and device makers." />
          <meta property="og:url" content="https://athinia.com/data-collaboration/" />
          <meta property="og:site_name" content="Athinia" />
          <meta property="article:modified_time" content="2022-11-03T15:49:06+00:00" />
          <meta property="og:image" content="https://athinia.com/wp-content/uploads/2021/10/Athinia-social-thumb.jpg" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="533" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="5 minutes" />
          <link rel="icon" href="/cropped-Athinia-favicon-150x150.png" />
        </Head>
        <ImageText />
        <TheChallenge />
        <TheSolution />
        <TheSecurity />
        <TheBenifits />
        <TwoCards 
          title={'Case Studies'} 
          cardData={cardData}
          sectionClass='sm:py-[8%] md:py-[13%] md:px-[2em] lg:px-0 lg:py-[9%]'
          titleClass='p-[4.3rem_2rem_3.3rem_2rem] md:p-[10px_3px_10px_3px]'
          contentClass="my-6 md:mt-4 lg:mb-6"
          titleFontSize="text-sm-medium text-[2em]"
          boxTitleFontSize="text-[1.68em] line-height-14 md:line-height-15"
          />
        <GetInContact
          extraClass="p-[12%_0%_12%_0%] md:p-[12%_0%_16%_0%] pl-[2rem] pr-[2rem] md:pr-[3rem] md:px-0 md:pt-[12%] lg:pt-[8%]"
          isException={true}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
