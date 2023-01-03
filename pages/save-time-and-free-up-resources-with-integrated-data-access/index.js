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

        <section className="bg-athinia-dark w-full flex-initial lg:pt-20 pb-10 px-5 md:px-0 ">
          <div
            className={`
                    max-w-[1200px] 
                    mr-auto ml-auto pt-10`}
          >
            <p className="text-white">CASE STUDY</p>
            <h3 className="text-athinia-green text-lg-medium lg:text-lg-large">
              Save time and free up resources with integrated data access
            </h3>
          </div>
        </section>

        <section className=" w-full flex-initial pt-10 pb-10 px-5 md:px-0">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-5  max-w-[1200px] 
                    mr-auto ml-auto pt-10"
          >
            <div>
              <div>
                <h3 className="text-athinia-dark text-lg-medium  ">
                  Problem |{" "}
                  <span className="text-athinia-blue">
                    Labor intensive root cause analysis
                  </span>
                </h3>
                <p>
                  Batch quality analysis often requires a lengthy data gathering
                  processes involving many different systems. The root cause
                  investigation is typically an intensive, manual processes
                  which can take many days to complete.
                </p>
              </div>

              <div>
                <div className="pt-5">
                  <h3 className="text-athinia-dark text-lg-medium ">
                    Solution |{" "}
                    <span className="text-athinia-blue">
                      Live review to facilitate quick identification of root
                      causes and implementation of corrective actions
                    </span>
                  </h3>
                  <p className="font-semibold">How it works:</p>
                  <ul className="list-decimal px-10 py-5">
                    <li>
                      Existing data sources are collected in real time and
                      integrated in one consolidated view
                    </li>
                    <li>
                      Data is codified, normalized, prepared and contextualized
                    </li>
                    <li>
                      Live dashboard reviews and descriptive analytical tools
                      are implemented
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                  <div>
                    <h3 className="text-athinia-blue text-sm-medium">
                      Immediate benefits
                    </h3>
                    <ul className="list-disc px-8">
                      <li>
                        Quicker root-cause identification of quality deviations
                      </li>
                      <li>More agile response time</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-athinia-blue text-sm-medium">
                      Long-term benefits
                    </h3>
                    <ul className="list-disc px-8">
                      <li>
                        Early identification of patterns or continuous problems
                      </li>
                      <li>Detection of new optimization areas</li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-athinia-blue py-5 text-sm-medium lg:text-[3em] font-bold">
                Go from weeks to days for root cause analysis

                    </h3>
              </div>
            </div>

            <div>
          
              <Image
                src={"/images/Save-time-screenshot-01-1-768x481.png"}
                alt="save-time-1"
                width={600}
                height={300}
              />
                       <Image
                src={"/images/Save-time-screenshot-02-1.png"}
                alt="save-time"
                width={600}
                height={300}
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
