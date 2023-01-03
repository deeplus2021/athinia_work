import Head from 'next/head'
import PopupParent from '../../components/Sections/Cards/PopupParent'
import Header from '../../components/Headers/Header'
import Footer from '../../components/Footers/Footer'
import data from '../../data/faq.json'

const Home = () => {
    return (
      <>
      <Header />
      
      <div className="flex min-h-screen flex-col items-center justify-center ">
        <Head>
        <title>Frequently Asked Questions • Athinia</title>
        <meta http-equiv="Content-Security-Policy" ></meta>
          <link rel="icon" href="/cropped-Athinia-favicon-150x150.png" />
        </Head>
  
        <section
         className="bg-[size:20%] md:bg-pattern-5 bg-no-repeat bg-left-top w-full flex-initial h-auto
            break-words bg-athinia-gray p-[2em]"
      >
        <div
          className="grid grid-cols-1 
          max-w-screen-xl lg:px-8 
                 items-center relative mx-auto mt-10 mb-20"
        >
          <div>
            <h3 className="text-athinia-blue text-center text-sm-medium md:text-lg-medium">
             Frequently Asked Questions About Athinia™
            </h3>
          </div>

          <div className="">
           {data.map(item => <PopupParent titleClass='text-athinia-blue text-lg-small md:text-sm-medium' title={item.title} content={item.content}/>)}
          </div>
        </div>
      </section>
      </div>
      <Footer />
      </>
    )
  }
  
  export default Home