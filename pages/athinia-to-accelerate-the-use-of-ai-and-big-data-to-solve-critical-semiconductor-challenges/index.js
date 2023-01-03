import Head from "next/head";
import Image from "next/image";

import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <div className="flex min-h-screen flex-col ">
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

        <section className=" w-full flex-initial lg:pt-20 pb-10 px-5 md:px-0">
          <div
            className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-8 max-w-[1200px] 
                    mr-auto ml-auto pt-10"
          >
            <div className="col-span-3">
              <a
                href=""
                className="text-[0.8em] font-bold text-athinia-blue"
              >
                NEWS, PRESS RELEASES
              </a>
              <h3 className="text-lg-medium lg:text-lg-large pr-5 mb-3">
                Athinia to Accelerate the Use of AI and Big Data to Solve
                Critical Semiconductor Challenges
              </h3>
              <p className="font-medium pb-5">
                Merck KGaA, Darmstadt, Germany, a leading science and technology
                company, and Palantir Technologies Inc. (NYSE:PLTR), a leading
                builder of operating systems for the modern enterprise, today
                announced a new partnership to deliver a secure collaborative
                data analytics platform for the semiconductor industry.
              </p>
              <ul className="font-medium list-disc px-10">
                <li>
                  Merck KGaA, Darmstadt, Germany, and Palantir form partnership
                  to optimize data analytics in semiconductor manufacturing
                </li>
                <li>
                  Collaborative analytics platform to help improve supply chain
                  transparency and tackle chip shortage
                </li>
                <li>
                  Laura Matz, Chief Science and Technology Officer of Merck
                  KGaA, Darmstadt, Germany, will lead the partnership
                </li>
              </ul>
              <br></br>
              <p>
                <strong>
                  {" "}
                  Darmstadt, Germany, and Denver, Colorado, USA, December 7,
                  2021
                </strong>
                – Merck KGaA, Darmstadt, Germany, a leading science and
                technology company, and Palantir Technologies Inc. (NYSE:PLTR),
                a leading builder of operating systems for the modern
                enterprise, today announced a new partnership to deliver a
                secure collaborative data analytics platform for the
                semiconductor industry. The Athinia platform will leverage AI
                and big data to solve critical challenges such as chip
                shortages, improve quality and supply chain transparency, and
                time to market. Laura Matz, Chief Science and Technology Officer
                of Merck KGaA, Darmstadt, Germany, will lead the partnership as
                CEO of Athinia.
              </p>
              <br />
              <p>
                Athinia will bring semiconductor manufacturers and materials
                suppliers together to share, aggregate, and analyze data to
                unlock efficiencies. The platform will also enable industry
                actors to understand on a deeper level the interaction between
                materials and processes at semiconductor fabrication plants.
              </p>
              <br />
              <p>
                “The semiconductor industry is facing unprecedented disruption.
                This has created a critical need for a secure data collaboration
                platform that can provide the transparency and data intelligence
                companies need to solve challenges such as chip shortages and
                supply chain issues,” said Kai Beckmann, Member of the Executive
                Board of Merck KGaA, Darmstadt, Germany, and CEO Electronics.
                “Partnering with Palantir, we’ve combined our collective
                expertise in materials science, data analytics and security to
                increase our customers’ efficiencies and time to innovation.”
              </p>
              <br />
              <p>
                “We are excited to partner with market leaders in this space to
                create an ecosystem that will enable semiconductor companies and
                their suppliers to collaborate to make better decisions,
                combatting simultaneous demand and supply shocks,” said Palantir
                COO Shyam Sankar. “Athinia will help companies across the value
                chain bring new products to market faster and accelerate their
                product differentiation and growth.”
              </p>
              <br />
              <p>
                By harnessing Palantir’s unique experience in building
                inter-organization ecosystems, Athinia will enable advanced data
                analytics, in turn limiting the costly impact of quality or
                performance excursions across the value chain, from supplier to
                semiconductor fabrication plants. It will also help fabs manage
                faster innovation in manufacturing processes in a single, secure
                platform that will support improved incoming material quality
                and increase supplier engagement. Suppliers will benefit from
                internal efficiency gains through smart data integration and can
                be a better partner for the fabs they serve. The partnership
                will help solve such challenges by creating a platform to
                analyze previously siloed data in a holistic way.
              </p>
              <br />
              <p>
                Merck KGaA, Darmstadt, Germany, and Palantir have already proven
                to be successful in using collaborative data analytics to help
                common customers minimize quality deviations and increase
                efficiencies. Athinia will build upon this experience and
                leverage Palantir’s expertise to help customers improve their
                decision-making in optimizing semiconductor materials.
              </p>

              <br />
              <p>
                Merck KGaA, Darmstadt, Germany, has recently worked with leading
                semiconductor companies to leverage AI and data analytics for
                solving key challenges. “We worked with Merck KGaA, Darmstadt,
                Germany, to create a data sharing platform that enabled advanced
                predictive manufacturing for chemical mechanical polishing
                (CMP), a critical step in the semiconductor manufacturing
                process. Through this collaborative partnership, we implemented
                an AI-driven methodology to enable smart data collaboration that
                drove process and quality improvements. By extending this
                approach to the broader supply chain and enabling a data
                ecosystem, we believe advanced predictive manufacturing can be
                accelerated for the broader semiconductor industry,” said Raj
                Narasimhan, Corporate Vice President, Global Quality, Micron
                Technology, Inc.
              </p>

              <br />
              <p>
                The Athinia platform is powered by Palantir Foundry, which
                enables users to structure and analyze data from disparate
                sources, generate powerful insights and support operational
                decisions, all while helping to ensure that sensitive data is
                processed in accordance with applicable data privacy rules,
                regulations, and norms. Palantir Foundry is designed to provide
                world-class security, access controls, partitioning, auditing,
                and accountability functions to support responsible data use.
                Athinia acts independent from the Electronics business sector of
                Merck KGaA, Darmstadt, Germany, and enables data sharing only on
                codified and anonymized data and customers will retain full
                control of their data, including intelligent purpose-based
                access control management. The secure data collaboration
                environment will provide continuous feedback through a holistic
                view and a common operating picture of in-fab performance that
                can help solve quality deviations.
              </p>
              <br />
              <p>
                Merck KGaA, Darmstadt, Germany, and Palantir already started
                collaborating in 2017. Through the{" "}
                <a
                  className="text-athinia-blue"
                  href="https://www.merckgroup.com/en/news/syntropy-19-11-2018.html"
                >
                  partnership “Syntropy”
                </a>{" "}
                both companies are determined to unleash the power of biomedical
                data and revolutionize cancer therapy and accelerate research.
                Syntropy’s aim is to provide researchers with intuitive
                analytics techniques to enable them to aggregate, analyze and
                then also share data from disparate sources.
              </p>

              <br />
              <p>
                For more information about Athinia, visit the website or social
                media channels:
              </p>
              <br />
              <p>
                <a
                  className="text-athinia-blue"
                  href="https://www.linkedin.com/company/athinia/about/"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  className="text-athinia-blue"
                  href="https://www.youtube.com/channel/UClM02OqlEbnm8fkNovGQAvw"
                >
                  YouTube
                </a>
              </p>
              <p>
                <a
                  className="text-athinia-blue"
                  href="https://twitter.com/Data4Pioneers"
                >
                  Twitter
                </a>
              </p>
              <br />
              <p>
                All Merck KGaA, Darmstadt, Germany, press releases are
                distributed by e-mail at the same time they become available on
                the EMD Group Website. In case you are a resident of the USA or
                Canada please go to{" "}
                <a
                  className="text-athinia-blue"
                  href="http://www.emdgroup.com/subscribe"
                >
                  www.emdgroup.com/subscribe
                </a>{" "}
                to register for your online subscription of this service as our
                geo-targeting requires new links in the email. You may later
                change your selection or discontinue this service.
              </p>
        
              <br />
              <h3 className="text-lg-medium">
                About Merck KGaA, Darmstadt, Germany
              </h3>
              <p>
                Merck KGaA, Darmstadt, Germany, a leading science and technology
                company, operates across healthcare, life science and
                electronics. Around 58,000 employees work to make a positive
                difference to millions of people’s lives every day by creating
                more joyful and sustainable ways to live. From advancing gene
                editing technologies and discovering unique ways to treat the
                most challenging diseases to enabling the intelligence of
                devices – the company is everywhere. In 2020, Merck KGaA,
                Darmstadt, Germany, generated sales of € 17.5 billion in 66
                countries.
              </p>
              <br />
              <p>
                The company holds the global rights to the name and trademark
                “Merck” internationally. The only exceptions are the United
                States and Canada, where the business sectors of Merck KGaA,
                Darmstadt, Germany operate as EMD Serono in healthcare,
                MilliporeSigma in life science, and EMD Electronics. Since
              </p>
              <br />
              <p>
                its founding in 1668, scientific exploration and responsible
                entrepreneurship have been key to the company’s technological
                and scientific advances. To this day, the founding family
                remains the majority owner of the publicly listed company.
              </p>

              <br />
              <h3 className="text-lg-medium">About Palantir Technologies</h3>
              <p>
                Palantir Technologies Inc. builds and deploys operating systems
                for the modern enterprise. Additional information is available
                at www.palantir.com.
              </p>
              <br />
              <p>Who dares, wins.</p>
              <br />
              <h3 className="text-lg-medium">Forward-Looking Statements</h3>
              <p>
                This press release contains forward-looking statements within
                the meaning of Section 27A of the Securities Act of 1933, as
                amended, and Section 21E of the Securities Exchange Act of 1934,
                as amended. These statements may relate to, but are not limited
                to, Palantir’s expectations regarding the terms and the expected
                benefits of the strategic partnership. Forward-looking
                statements are inherently subject to risks and uncertainties,
                some of which cannot be predicted or quantified. Forward-looking
                statements are based on information available at the time those
                statements are made and were based on current expectations as
                well as the beliefs and assumptions of management as of that
                time with respect to future events. These statements are subject
                to risks and uncertainties, many of which involve factors or
                circumstances that are beyond our control. These risks and
                uncertainties include our ability to meet the unique needs of
                our customers; the failure of our platforms to satisfy our
                customers or perform as desired; the frequency or severity of
                any software and implementation errors; our platforms’
                reliability; and our customers’ ability to modify or terminate
                their contracts. Additional information regarding these and
                other risks and uncertainties is included in the filings we make
                with the Securities and Exchange Commission from time to time.
                Except as required by law, we do not undertake any obligation to
                publicly update or revise any forward-looking statement, whether
                as a result of new information, future developments, or
                otherwise.
              </p>
            </div>
            <div className="col-span-1">
              <Image
                src={"/images/Athinia-background-pattern-05.png"}
                width={600}
                height={600}
                alt="pattern-5"
                className="rotate-180 fixed right-0 bottom-5 hidden md:block md:h-[300px] md:w-[300px] xl:h-[600px] xl:w-[600px]"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
