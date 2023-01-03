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
            className="grid grid-cols-1 md:grid-cols-4 max-w-[1200px] 
                    mr-auto ml-auto pt-10"
          >
            <div className="col-span-3">
              <a
                href=""
                className="text-[0.8em] font-bold text-athinia-blue"
              >
                NEWS, PRESS RELEASES
              </a>
              <h3 className="text-lg-medium lg:text-lg-large pr-5">
                Micron to Select Athinia™ for Pioneering Data Collaboration
              </h3>
              <p className="font-medium pb-5">
                Today, Athinia™ announced that Micron Tehcnology, Inc. (Nasdaq:
                MU), a global leader in innovative memory and storage solutions,
                plans to use the Athinia™ data analytics platform to create a
                pioneering data collaboration ecosystem that will help lead a
                continued journey of digital transformation with Micron’s
                critical suppliers.
              </p>
              <Image
                src={"/images/Athinia-Micron-collaboration-PR_3_11zon.webp"}
                height={480}
                width={920}
              />
              <p >
                Cambridge, MA, July 13, 2022 – Today, Athinia™ announced that
                Micron Technology, Inc. (Nasdaq: MU), a global leader in
                innovative memory and storage solutions, plans to use the
                Athinia™ data analytics platform to create a pioneering data
                collaboration ecosystem that will help lead a continued journey
                of digital transformation with Micron’s critical suppliers.
                Athinia™’s state-of-the-art AI-driven quality control
                methodology will be able to further improve process and device
                yield, reduce costs and accelerate time to value generation
                using select data and insights from Micron’s supply chain.
                <a href="https://athinia.com/" className="text-athinia-blue hover:text-athinia-purple" target='_blank'>Athinia™</a>, launched in December 2021, is a partnership between
                Merck KGaA, Darmstadt, Germany (DAX:MKGAF) and Palantir
                Technologies Inc. (NYSE:PLTR).
              </p>
              <br />
              <p>
                “The secure architecture provided by Athinia™ will allow Micron
                and its suppliers to share a single source of real-time data
                without compromising data ownership, governance, privacy and
                security,” said Laura Matz, CEO of Athinia™ and Chief Science
                and Technology Officer of Merck, KGaA, Darmstadt, Germany.
                “Through data sharing and collaboration, the platform leverages
                machine learning-driven analytics to solve critical challenges.”
              </p>
              <br />
              <p>
                Using <a href="https://athinia.com/" className="text-athinia-blue hover:text-athinia-purple" target='_blank'>Athinia™</a>’s platform, Micron’s suppliers will be able to
                share their process and manufacturing data as well as key
                parameters, offering secure collaboration on a much larger
                population of critical data analytics. Micron and its suppliers
                can expect to see improvements in yields, shortened
                qualification times and enhanced quality.
              </p>
              <br />
              <p>
                “Our selection of Athinia™ will enable Micron to build on our
                established industry leadership in technology and quality
                through improved data analytics across our supply chain
                partners,” said Manish Bhatia, Executive Vice President of
                Global Operations at Micron. “As leading-edge technologies
                become more challenging, solutions like Athinia™ provide the
                kind of multi-party collaboration and data insights that make
                new leading generations of memory possible.”
              </p>
              <br />
              <p>
                “Micron is leading the industry in adopting the Athinia™
                platform for its new ecosystem. Through data collaboration,
                Athinia™ can help to achieve key objectives for the
                semiconductor industry such as the improvement of material
                quality and sustainability, supply chain resilience as well as
                the acceleration of innovation cycles,” said Kai Beckmann,
                Member of the Executive Board of Merck KGaA, Darmstadt, Germany
                and CEO Electronics. “Ultimately, data analytics and
                collaboration will allow a wide range of benefits to the entire
                semiconductor industry.”
              </p>
              <br />
              <p>
                “The production and delivery of semiconductors is absolutely
                vital to our collective welfare and security,” said Alexander C.
                Karp, co-founder and chief executive officer of Palantir
                Technologies Inc. “We are committed to ensuring that Micron and
                Athinia™ have the software they need to address the supply chain
                challenges involved in the distribution of one of the world’s
                most essential and important products.”
              </p>
              <br />
              <p className="font-medium">About Athinia Technologies LLC</p>
              <br />
              <p>
                Data for Pioneers. Athinia™ provides a data analytics platform
                that brings manufacturers and materials suppliers together to
                share, aggregate, and analyze data to unlock efficiencies and
                time to market, while improving quality, supply chain and
                sustainability. All this without taking ownership of data.
                Athinia™ is a partnership between Merck KGaA, Darmstadt, Germany
                (DAX:MKGAF), and Palantir Technologies Inc. (NYSE:PLTR). Athinia
                is headquartered in Cambridge, MA, USA. Athinia operates
                independently from the Electronics business of Merck KGaA,
                Darmstadt, Germany. More information can be found at
                <a href="http://www.athinia.com/" className="text-athinia-blue hover:text-athinia-purple" target='_blank'> www.athinia.com</a> 
                , <a href="https://www.linkedin.com/company/athinia/" className="text-athinia-blue hover:text-athinia-purple" target='_blank'>LinkedIn</a>  and  <a href="https://twitter.com/data4pioneers/" className="text-athinia-blue hover:text-athinia-purple" target='_blank'>Twitter</a>.
              </p>
              <br />
              <p className="font-medium">
                About Merck KGaA, Darmstadt, Germany
              </p>
              <br/>
              <p>
                Merck KGaA, Darmstadt, Germany, a leading science and technology
                company, operates across healthcare, life science and
                electronics. Around 60,000 employees work to make a positive
                difference to millions of people’s lives every day by creating
                more joyful and sustainable ways to live. From advancing gene
                editing technologies and discovering unique ways to treat the
                most challenging diseases to enabling the intelligence of
                devices – the company is everywhere. In 2021, Merck KGaA,
                Darmstadt, Germany, generated sales of € 19.7 billion in 66
                countries.
              </p>
              <br/>
              <p>
                The company holds the global rights to the name and trademark
                “Merck” internationally. The only exceptions are the United
                States and Canada, where the business sectors of Merck KGaA,
                Darmstadt, Germany, operate as EMD Serono in healthcare,
                MilliporeSigma in life science, and EMD Electronics in
                electronics. Since its founding in 1668, scientific exploration
                and responsible entrepreneurship have been key to the company’s
                technological and scientific advances. To this day, the founding
                family remains the majority owner of the publicly listed
                company.
              </p>
              <br/>
              <p className="font-medium">About Palantir Technologies Inc.</p>
              <br/>
              <p>
                Foundational software of tomorrow. Delivered today. Additional
                information is available at{" "}
                <a
                  href="https://www.palantir.com."
                  className="text-athinia-blue"
                >
                  https://www.palantir.com.
                </a>
              </p>
              <br/>
              <p>
                For more information please contact{" "}
                <a
                  href="mailto:nuria.aranda-bosch@athinia.com"
                  className="text-athinia-blue"
                >
                  nuria.aranda-bosch@athinia.com.
                </a>
              </p>
            </div>
            <div className="col-span-1 z-[-1]">
              <Image alt="pattern-5" src={'/images/Athinia-background-pattern-05.png'} width={600} height={600} className="rotate-180 fixed right-0 bottom-5 hidden md:block md:h-[300px] md:w-[300px] xl:h-[600px] xl:w-[600px]"/>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
