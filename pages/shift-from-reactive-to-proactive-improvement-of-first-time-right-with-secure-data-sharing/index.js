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
              Shift from reactive to proactive improvement of “first-time right”
              with secure data sharing
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
                    Parameters in supplier process don’t meet fab criteria
                  </span>
                </h3>
                <p>
                  Oftentimes one specific criteria doesn’t meet fab
                  specification limits, and raw material pre-conditioning is a
                  month-long process that can delay customer needs.
                </p>
              </div>

              <div>
                <div className="pt-5">
                  <h3 className="text-athinia-dark text-lg-medium ">
                    Solution |{" "}
                    <span className="text-athinia-blue">
                      Proactively predicting in-process and Certificate of
                      Analysis parameters
                    </span>
                  </h3>
                  <p className="font-semibold">How it works:</p>
                  <ul className="list-decimal px-10 py-5">
                    <li>
                      Extract data from data base and integrate into Athinia
                    </li>
                    <li>
                      Implement limits on the incoming raw material to predict
                      values post pre-conditioning
                    </li>
                    <li>
                      Run multivariate analysis, validate and train models
                    </li>
                  </ul>
                </div>
                <div className="pt-5">
                  <h3 className="text-athinia-blue text-sm-medium">
                    Results
                  </h3>

                  <ul className="list-disc px-10 py-5">
                    <li>
                      Production Planner can provide a prediction for planned
                      batches
                    </li>
                    <li>
                      If one batch fails customer limits, Production Planner can
                      react and plan another batch to be mixed for a weighted
                      average to meet customer limits
                    </li>
                    <li>
                      Possibility to plan and meet customer limits better,
                      helping to improve customer commit planning
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-athinia-blue text-sm-medium text-center">
                Excursion response with data sharing
              </h3>
              <Image
                src={"/images/Shift-from-reactive-to-proactive-graph.png"}
                width={600}
                height={300}
                alt="shit-from-reactive"
              />
              <div
                className="grid grid-cols-1 text-athinia-blue md:grid-cols-2 gap-x-5  max-w-[1200px] 
                    mr-auto ml-auto pt-10"
              >
                <div className=" text-regular">
                  <p className="text-sm-medium">Only 5 minutes</p>
                  <p>needed for extraction</p>
                </div>
                <div>
                  <p className="text-sm-medium">&#60; 1 day</p>
                  <p>needed for analysis and upload</p>
                </div>
                <div>
                  <p className="text-sm-medium">30 days</p>
                  <p>
                    can be saved in delays to customer delivery, preventing
                    intermediate OOC material
                  </p>
                </div>
                <div>
                  <p className="text-sm-medium">4-8 hours</p>
                  <p>can be saved in planning</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
