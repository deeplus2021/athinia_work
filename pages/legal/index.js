import Head from "next/head";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Header />

      <div className="flex min-h-screen flex-col justify-center py-2">
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
        <section
          className="w-full flex-initial h-auto mt-20

            break-words  p-[1em] "
        >
          <div
            className=" max-w-[1400px] 
                 items-center relative mr-auto ml-auto"
          >
            <h1 className="text-athinia-green text-sm-large md:text-lg-large">
              Imprint / Legal Disclaimer
            </h1>
            <div className="my-3">
              <h1
                className="text-sm-medium md:text-lg-medium my-4 md:my-0 tracking-[-1px] 
                                    text-left "
              >
                Address
              </h1>
              <p>c/o EMD Digital Inc.</p>
              <p>400 Summit Drive</p>
              <p>Burlington, MA 01830</p>
              <p>USA</p>
              <br />
              <p>
                Phone:{" "}
                <a href="tel:+17814914189"  className="text-athinia-blue hover:text-athinia-purple"> +1 781 491 4189</a>
              </p>
              <br />
              <br />
              <div>
                <a className="text-athinia-blue hover:text-athinia-purple" href="https://athinia.com/">
                  www.athinia.com
                </a>
              </div>

              <div>
                <a className="text-athinia-blue hover:text-athinia-purple" href="mailto:info@athinia.com">
                  info@athinia.com
                </a>
              </div>
            </div>

            <div className="my-3">
              <h1
                className="text-sm-medium md:text-lg-medium my-4 md:my-0 tracking-[-1px] 
                                    text-left "
              >
                Details
              </h1>
              <p>Legal Form: Member managed Delaware limited liability company</p>
              <p>Delaware File Number: 6406602</p>
              <p>Registered Agent: Corporation Service Company, 251 Little Falls Drive, Wilmington, DE 19808 USA</p>
              <p>Employer Identification Number (EIN): 87-3750903</p>
              <br />
         
              <br />
              <br />
            </div>

            <div className="my-3">
              <h1
                className="text-sm-medium md:text-lg-medium my-4 md:my-0 tracking-[-1px] 
                                    text-left "
              >
                Manager
              </h1>
              <p className="mt-5">Athinia Technologies LLC (Athinia)</p>

              <br />
              <br />
            </div>

            <div className="my-3">
              <h1
                className="text-sm-medium md:text-lg-medium my-4 md:my-0 tracking-[-1px] 
                                    text-left "
              >
                Board of Directors (Managers) of Athinia:
              </h1>
              <p className="mt-5">James Kugler</p>
              <p >Ryan Taylor</p>

              <br />
              <br />
            </div>

            <div className="my-3">
              <h1
                className="text-sm-medium md:text-lg-medium my-4 md:my-0 tracking-[-1px] 
                                    text-left "
              >
                Responsible for the content:
              </h1>
              <p className="mt-5">Michael Vande Vrede</p>
              <p >c/o EMD Digital Inc.</p>
              <p >245 First St., 18th Floor</p>
              <p >Cambridge, MA 02142</p>
              <p >USA</p>

              <br />
              <br />
            </div>
            <p>
            You may also have a look at our <Link className="text-athinia-blue hover:text-athinia-purple" href="/privacy">privacy statement</Link> to see that we take data protection and confidentiality very seriously and on our site do not make further use of your social media contributions.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
