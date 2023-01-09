import Head from "next/head";

import BlueSection from "../../../components/Sections/BlueSection";
import ImageAndText from "../../../components/Sections/Columns/ImageAndText";
import Header from "../../../components/Headers/Header";
import Footer from "../../../components/Footers/Footer";
import Content1 from "../../../components/data-collaboration/Content1";
import Content2 from "../../../components/data-collaboration/Content2";
import CheckTwoCol from "../../../components/data-collaboration/CheckTwoCol";
import Palantir from "../../../components/data-collaboration/Palantir";

const Home = () => {
  const ulListContent1 = [
    "Our cloud platform’s infrastructure, applications, and operations have been developed to exceed and complement the most rigorous legal and regulatory requirements across multiple industries today, including healthcare and defense.",
    "Athinia™ maintains stringent network controls to protect our customers. Fundamental network security principles include Intrusion Detection/Prevention Systems, Data Loss Prevention Systems, and strong encryption of network traffic.",
    "Detailed audit logs containing user actions, including records of imports, reads, writes, searches, exports & deletions are collected and made available for import into a Security Information and Event Management (SIEM).",
  ];

  const ulListContent2 = [
    "The Foundry platform’s robust security end-to-end architecture protects intellectual property and ensures customers always stay in control of their data.",
    "With tailored and granular permissions, customers control who they share data with, how the data can be used, and for how long.",
    "Use of data is recorded throughout the platform using powerful data lineage and provenance techniques, even if datasets are combined, shared, aggregated, or machine learning is applied.",
    "The system can track and monitor who uses the data and how often, and that a purpose is associated with it.",
    "Multi-level approval workflows ensure that data sharing follows your company’s data governance framework.",
    "A configurable governance mode that is built to serve unique business needs.",
  ];

  const ulListContent1Two = [
    "Whenever parties are not willing to share raw process data, they have the possibility to obfuscate and normalize the data before it is being shared.",
    "The platform offers powerful obfuscation procedures by tokenizing and encrypting sensitive information in the dataset, such as column names and parts identifiers.",
    "Sophisticated statistical normalization methods are provided, which can be applied to add an additional layer of security to further protect sensitive data while maintaining its usefulness for advanced analytics such as machine learning.",
  ];

  const blueContent = `With Athina™, device makers and their material suppliers can share
    data without compromising on security while maintaining control of
    their intellectual property. The Foundry platform’s focus on data
    governance, data     protection, and infrastructure security make it all
    possible.`;
  return (
    <>
      <Header />

      <div className="flex min-h-screen flex-col items-center ">
        <Head>
          <title>
            Data Security &#x2022; Athinia
          </title>
          <meta
            name="description"
            content="Athinia™ is powered by Palantir Foundry, trusted by some of the largest, most security-focused organizations in the world."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Data Security • Athinia" />
          <meta property="og:description" content="Athinia™ is powered by Palantir Foundry, trusted by some of the largest, most security-focused organizations in the world." />
          <meta property="og:url" content="https://athinia.com/data-collaboration/security/" />
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
    
        <ImageAndText  category={'Data Security'} title={'Athinia™ is powered by Palantir Foundry, trusted by some of the largest, most security-focused organizations in the world.'}   />

        <BlueSection contentPadding={'px-[5%] md:px-[8%] lg:px-0 '} content={blueContent} />
        <Content1
          title={"Infrastructure Security"}
          iconColor={"fill-athinia-green"}
          allList={ulListContent1}
          spacing={"pt-20 mt-5 md:mt-20"}
        />  
            <Content2
          title={"Data Governance"}
          iconColor={"fill-athinia-blue"}
          allList={ulListContent2}
        />
   
        <Content1
          title={"Data Protection"}
          icon={false}
          allList={ulListContent1Two}
          textColor={"blue"}
        />
        <CheckTwoCol />
        <Palantir />
      </div>
      <Footer />
    </>
  );
};

export default Home;
