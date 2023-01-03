import Head from "next/head";
import Image from "next/image";
import CustomButton from "../../components/Buttons/CustomButton";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <div className="flex min-h-screen flex-col items-center justify-center ">
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
          className="w-full flex-initial h-auto
                    break-words p-[5%_0%_3%_0%]"
        >
          <div
            className="grid grid-cols-2 md:px-10 md:grid-cols-3 

            max-w-screen-xl p-[2em]
                    mx-auto "
          >
            <div className="col-span-2  md:col-span-3 lg:col-span-2">
              <p
                className="text-[24px] md:text-[34px]

                                    text-left  mb-[20px]"
              >
                Are you ready to lead the semiconductor industry revolution? We
                are looking for champions who are ready to unlock the power of
                data to build the future of semiconductors.
              </p>
            </div>

            <div className="col-span-0 md:col-span-0 lg:col-span-1 "></div>
          </div>
        </section>
        <section
          className="w-full flex-initial h-auto
                    break-words bg-athinia-gray p-[6%_0%_6%_0%] "
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 
            max-w-screen-xl p gap-4
                    mx-auto "
          >
            <div className="order-last lg:order-first mt-8 md:mt-0">
              <h1
                className="text-[1.5em] font-medium md:text-lg-medium my-4 lg:my-0 
                                    text-left px-5 lg:px-0"
              >
                Come join our team!
              </h1>
              <p className="my-5 px-5 lg:px-0">
                If you have experience in data and technology and are interested
                in the future of the semiconductor industry, we would like to
                talk to you.
              </p>
              <CustomButton
              target="_blank"
                text={"CHECK OUT OUR OPEN POSITIONS"}
                background={"bg-athinia-blue"}
                link="https://jobs.vibrantm.com/merck/search/?createNewAlert=false&q=Athinia&optionsFacetsDD_country=&optionsFacetsDD_customfield1=&optionsFacetsDD_customfield4=&optionsFacetsDD_customfield3=&locationsearch=%20"
                extraClass={
                  "text-white text-sm-small text-[1.2em] hover:bg-athinia-purple md:inline "
                }
                wrapperClass={"mt-10 mx-5 lg:mx-0 text-center md:text-left "}
              />

              <div className="bg-athinia-green px-5 py-2 md:p-10 mt-20 mx-5 lg:mx-0">
                <h1
                  className="text-sm-medium md:text-lg-medium my-4 lg:my-0 tracking-[-1px] 

                                    text-left "
                >
                  Don’t see an open role for you?
                </h1>
                <p className="my-5">
                  We are always looking for the best talent. Reach out and share
                  more information about yourself and the work you’re interested
                  in doing.
                </p>
                <CustomButton
                  isInternal={true}
                  extraClass={
                    "text-sm-small md:text-[1.2em] hover:bg-athinia-gray inline "
                  }
                  link='\contact'
                  text={"CONTACT US"}
                  background={"bg-white"}
                  wrapperClass={"my-10 mr-10"}
                />
              </div>
            </div>
            <div
              className="bg-career-image bg-contain bg-center bg-no-repeat ml-10 md:mr-auto md:ml-auto lg:ml-10 lg:mr-0 order-first lg:order-last w-[300px] h-[300px]
                                 md:w-[450px] md:h-[450px] lg:h-[600px] lg:w-[600px] rounded-full relative"
            >
              <Image
                src={"/images/icon1.svg"}
                alt="icon1"
                width={200}
                height={200}
                className="absolute h-[150px] w-[100px] md:h-[150px] md:w-[120px] lg:h-[250px] lg:w-[200px] bottom-0 left-0 md:bottom-[30%] md:left-[-30%]  lg:bottom-[30%] lg:left-[-7%]"
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
