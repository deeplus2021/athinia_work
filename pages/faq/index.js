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
         className="bg-[size:15%] lg:bg-[size:25%] md:bg-pattern-5 bg-no-repeat bg-left-top w-full flex-initial h-auto
            break-words bg-athinia-gray p-[2em]"
      >
        <div
          className="grid grid-cols-1 
          max-w-[1400px] lg:p-[10px] 
                 items-center relative mx-auto mb-10 md:mb-20 mt-[1.7rem] md:mt-10 lg:mt-[4.5rem]"
        >
          <div>
            <h3 className="text-athinia-blue text-center text-sm-medium md:text-lg-medium md:letter-spacing--1 lg:mb-[0.1rem] mb-1 md:mb-0">
             Frequently Asked Questions About Athinia™
            </h3>
          </div>

          <div className="">
           {data.map(item => <PopupParent titleClass='text-athinia-blue text-lg-small md:text-sm-medium md:letter-spacing--04 lg:letter-spacing-0 line-height-12 md:line-height-14' spacingClass='md:grid-cols-12 mt-4 p-[20px_20px_10px_20px] md:p-[30px_30px_20px_30px] lg:p-[30px]' colClass='md:col-span-11' title={item.title} content={item.content}/>)}
          </div>
        </div>
      </section>
      </div>
      <Footer />
      </>
    )
  }
  
  export default Home