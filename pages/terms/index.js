import Head from "next/head";
import data from "../../data/terms.json";
import TitleBody from "../../components/Sections/TitleBody";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <div className="  flex min-h-screen flex-col justify-center py-2">
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

            break-words  px-[1em] md:p-[1em] "
        >
          <div
            className=" max-w-[1400px] 
                 items-center relative mr-auto ml-auto"
          >
            <h1 className="text-athinia-green text-sm-large md:text-lg-large">
              Terms of Use{" "}
            </h1>
          </div>
        </section>

        <section
          className="w-full flex-initial h-auto

            break-words  p-[1em] "
        >
          <div
            className=" max-w-[1400px] 
                 items-center relative mr-auto ml-auto"
          >
            <h1
              className={`${"text-sm-medium "} md:text-lg-medium my-4 md:my-0 tracking-[-1px] 
                                    text-left `}
            >
              Important Legal Information
            </h1>

            <p className="my-3">
              This website is operated and maintained by Athinia Technologies
              LLC, c/o EMD Digital Inc., 245 First Street, Floor 18 Cambridge,
              MA 02142, tel.:{" "}
              <a className="text-athinia-blue hover:text-athinia-purple" href="tel:+17814914189">
                +1 781 491 4189
              </a>{" "}
              , email address:{" "}
              <a className="text-athinia-blue hover:text-athinia-purple" href="mailto:info@athinia.com">info@athinia.com</a>
              (“Athinia“; “we“; “us“; “our“). Please read these terms and
              conditions carefully. If you do not agree to these terms and
              conditions, please do not access this website or any pages thereof
              (hereinafter referred to as the “Site“).
            </p>
          </div>
        </section>
        {data.map((item) => (
          <TitleBody title={item.title} body={item.body} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
