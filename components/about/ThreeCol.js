import React from "react";
import { FaArrowRight } from 'react-icons/fa'
const ThreeCol = () => {
  return (
    <section
      className="w-full flex-initial h-auto
                    break-words mt-10"
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2   min-h-[64vh] lg:min-h-[80vh] max-w-screen-xl p-[2em] md:p-[0_0%_0%_0%]
                    mx-auto"
      >
        <div className="text-left md:px-8 lg:px-0">
          <h3
            className={`text-sm-medium md:text-lg-medium  
                                    text-left text-athinia-dark mb-[20px] `}
          >
            Connecting the semiconductor industry on a single, secure data
            sharing platform.
          </h3>
          <p>
            Brought to you by a partnership built on science and technology.
          </p>
          <h3
            className={`mt-10 text-sm-medium md:text-lg-medium  
                                    text-left text-athinia-purple mb-[20px] `}
          >
            Athinia™ is a 50/50 partnership between EMD Digital and Palantir
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  justify-center	">
          <div>
            <div className="text-center justify-center	">
              <svg
                className="ml-auto mr-auto fill-athinia-purple"
                xmlns="http://www.w3.org/2000/svg"
                width={125}
                height={125}
                id="Layer_1"
                y="0px"
                viewBox="0 0 144.5 71"
              >
                <path d="M144.5,10.4c0-5.8-4.7-10.4-10.3-10.4h-10.7c-0.6,0-1,0.2-1.4,0.6l-21.6,20.7c-7.4,7.2-17.3,11.2-28.4,11.2  c-11.5,0-21.8-4.4-29.1-12c0,0-15.9-15.4-15.9-15.6C23.9,2.2,19.8,0.2,15,0H2.1C1,0,0,1,0,2.2v58.4C0,66.4,4.5,71,10.1,71H14h2.7  c1.2,0,1.9-1,1.9-2.2V48.1c0-5.4,4.3-10,9.5-10c9.7,0,16.7,8.6,22.9,14.2c7.8,7,13.6,13.8,21,13.8c7.4,0,13.2-6.8,21-13.8  c6.2-5.8,13.2-14.2,22.9-14.2c5.2,0,9.5,4.4,9.5,9.8v12.6c0,5.8,4.5,10.4,10.1,10.4h4.5c1.2,0,2.1,0,2.1,0c1.2,0,2.1-1,2.1-2.2  C144.5,68.8,144.5,11,144.5,10.4z"></path>
              </svg>
              <div
                className={` hover:text-athinia-dark justify-center	 flex text-lg-small md:text-lg-small 
                                    text-center text-athinia-green mb-[20px] `}
              >
                <a href="https://www.emdgroup.com/en/company/who-we-are.html" target='_blank'><h3>LEARN MORE</h3></a>
                <span className="ml-5 mt-1"> <FaArrowRight size={15}/></span>
              </div> 
              <p className="md:px-10 text-left text-athinia-purple">
                EMD Digital is a novel business unit developing solutions that
                enable scientists and researchers to make science faster.
                Athinia™ is legally and organizationally separate from Merck
                KGaA, Darmstadt, Germany’s established business sectors.
              </p>
            </div>
          </div>
          <div>
            {" "}
            <div className="text-center justify-center	">
              <svg
              className="ml-auto mr-auto "
                width={125}
                height={125}
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                y="0px"
                viewBox="0 0 462 111.2"
              >
                <path d="M85.6,42.2c0.1,22.7-18.4,42.2-42.3,42C31.9,84,22,79.9,14,71.7C5.7,63.3,1.6,53,1.8,41.2C2.2,18.6,20.9-0.6,44.8,0  C67.4,0.6,85.7,19.3,85.6,42.2z M43.7,71.2c15.5,0.1,28.7-12.4,28.9-28.6c0.2-16.7-13.1-29.2-28.4-29.5c-16-0.3-29.3,12.5-29.5,28.6  C14.5,58.4,28.1,71.3,43.7,71.2z"></path>
                <path d="M112.8,11.5c0.3,0,0.5,0,0.7,0c10.1,0,20.2,0,30.3,0c2.4,0,4.8,0.1,7.1,0.4c2.8,0.3,5.5,0.9,8.1,2.1c2,0.9,3.8,2.2,5.4,3.8  c1.8,1.8,3.3,3.8,4.5,6.1c1.1,2.3,1.8,4.7,2.2,7.3c0.3,2,0.4,4.1,0.2,6.1c-0.3,4.9-2,9.3-5.2,13.1c-2.1,2.5-4.5,4.5-7.4,5.9  c-1.9,0.9-3.9,1.5-6,2c-1.9,0.4-3.9,0.7-5.8,0.9c-1.6,0.1-3.1,0.2-4.7,0.3c-5.5,0.2-11.1,0.1-16.6,0.1c-0.2,0-0.5,0-0.7,0  c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0.1c0,12.7,0,25.4,0,38c-0.5,0.1-10.2,0.2-11.8,0.1C112.7,97.2,112.6,13.3,112.8,11.5z M124.7,49.3  c0.3,0,0.6,0,0.8,0c4.7,0,9.4,0,14.1,0c2.2,0,4.3-0.1,6.5-0.4c1.9-0.3,3.7-0.8,5.4-1.6c2.7-1.3,4.7-3.2,5.9-6c0.6-1.5,1-3.1,1.1-4.7  c0.2-2.3,0.1-4.5-0.5-6.7c-0.9-3.4-2.9-5.8-6.1-7.2c-2-0.9-4-1.2-6.2-1.4c-1.4-0.1-2.8-0.1-4.1-0.2c-5.5,0-11,0-16.5,0  c-0.2,0-0.3,0-0.5,0C124.7,30.6,124.7,39.9,124.7,49.3z"></path>
                <path d="M262.7,53.7c-3.8,0-7.5,0-11.2,0c0.2-2.5,0.6-4.9,1.6-7.2c1.3-3,3.3-5.4,6.2-7c2.1-1.2,4.4-2,6.8-2.6  c2.1-0.5,4.2-0.8,6.4-0.9c1.3,0,2.6-0.1,3.9-0.1c3.7,0.1,7.4,0.7,10.9,2c2.1,0.8,4.1,1.8,5.8,3.2c1.8,1.5,3,3.4,3.9,5.6  c0.6,1.5,0.9,3.1,1,4.7c0.1,1.7,0.1,3.5,0.1,5.2c0,2.8-0.1,5.5-0.1,8.3c0,2.9-0.1,5.7-0.1,8.6c0,2.8-0.1,5.5-0.1,8.3  c0,1.9,0,3.7,0.1,5.5c0.1,2.4,0.3,4.8,0.5,7.2c0.1,0.9,0.2,1.8,0.3,2.7c0,0.1,0,0.3,0,0.4c-3.3,0-6.7,0-10.1,0  c-0.5-1.3-0.7-2.8-0.8-4.2c-0.2-1.4-0.2-2.9-0.3-4.5c-0.2,0.3-0.3,0.5-0.4,0.7c-1.6,2.6-3.5,4.9-6,6.6c-2.2,1.5-4.6,2.5-7.3,2.9  c-1.9,0.3-3.8,0.5-5.8,0.4c-3.6-0.2-7.1-0.8-10.3-2.3c-3.8-1.8-6.6-4.5-8.3-8.4c-0.8-1.9-1.2-3.8-1.3-5.9c-0.2-2.9,0.3-5.6,1.3-8.3  c1.2-3.1,3.1-5.7,5.7-7.9c3-2.6,6.5-4.1,10.4-5c2-0.5,4.1-0.8,6.1-1c3.5-0.4,7-0.4,10.6-0.3c1.7,0.1,3.4,0.2,5.1,0.3  c0-0.2,0-0.4,0-0.6c0-1.9,0-3.8-0.1-5.8c0-1.3-0.2-2.5-0.5-3.8c-0.6-2.3-1.9-4-3.9-5.1c-1.6-0.9-3.3-1.4-5.1-1.7  c-1.6-0.3-3.2-0.3-4.8-0.1c-1.9,0.1-3.7,0.6-5.4,1.5c-2.2,1.3-3.6,3.2-4.2,5.7c-0.2,0.6-0.2,1.3-0.3,2  C262.8,53.2,262.8,53.4,262.7,53.7z M287.1,68.6c-0.1,0-0.2-0.1-0.3-0.1c-1.3-0.1-2.6-0.3-3.9-0.3c-1.8,0-3.5,0-5.3,0.1  c-2.2,0-4.4,0.3-6.5,0.7c-2.2,0.5-4.4,1.1-6.3,2.3c-1.4,0.8-2.6,1.7-3.5,3c-1.5,2.1-2.1,4.4-1.8,6.9c0.4,3.6,2.1,6.3,5.3,8  c1.9,1,3.9,1.3,5.9,1.5c1.7,0.1,3.4,0,5-0.4c2.4-0.5,4.5-1.5,6.3-3.2c2.8-2.6,4.3-5.9,4.8-9.6c0.2-1.9,0.3-3.8,0.4-5.7  C287.1,70.8,287.1,69.7,287.1,68.6z"></path>
                <path d="M208.4,60.8c0-0.2,0-0.3,0-0.4c0-2,0-3.9-0.1-5.9c0-1.2-0.2-2.5-0.5-3.7c-0.6-2.4-2-4.1-4.1-5.3c-1.6-0.9-3.2-1.3-5-1.6  c-1.6-0.3-3.2-0.3-4.8-0.1c-1.7,0.1-3.4,0.5-5,1.3c-2.7,1.4-4.2,3.6-4.8,6.5c-0.1,0.7-0.2,1.4-0.3,2.1c-3.7,0-7.4,0-11.2,0  c0.1-1,0.2-1.9,0.4-2.8c0.3-2,0.9-4,1.9-5.8c1.3-2.5,3.2-4.3,5.7-5.7c2.3-1.3,4.7-2.1,7.3-2.6c2.9-0.6,5.8-0.9,8.8-0.8  c4.1,0.1,8,0.7,11.9,2.1c1.7,0.6,3.3,1.4,4.8,2.5c2.4,1.7,4,4,5,6.7c0.6,1.8,0.9,3.7,1,5.6c0,1.4,0,2.9,0,4.3c0,2.7-0.1,5.5-0.1,8.2  c0,2.8-0.1,5.6-0.1,8.3c0,2.7-0.1,5.4-0.2,8.1c-0.1,1.9,0,3.7,0.1,5.5c0.1,2.4,0.3,4.8,0.5,7.1c0.1,1.1,0.2,2.1,0.3,3.2  c-0.6,0.1-7.7,0.2-10.1,0.1c-0.9-2.8-1-5.7-1.1-8.7c-0.2,0.3-0.3,0.5-0.4,0.6c-1.5,2.6-3.5,4.9-6,6.7c-2.3,1.6-4.7,2.5-7.4,3  c-1.9,0.3-3.8,0.4-5.7,0.3c-3.5-0.2-7-0.8-10.2-2.3c-3.1-1.5-5.6-3.6-7.3-6.6c-1.2-2-1.9-4.1-2.2-6.4c-0.6-4.9,0.4-9.5,3.3-13.7  c2.5-3.6,5.8-6.1,9.8-7.6c2.3-0.9,4.7-1.4,7.1-1.8c2.3-0.4,4.7-0.7,7.1-0.7c2.2,0,4.4-0.1,6.6-0.1C204.9,60.5,206.6,60.7,208.4,60.8  z M208.4,68.6c-0.1,0-0.2-0.1-0.3-0.1c-1.3-0.1-2.6-0.3-3.9-0.3c-1.8,0-3.6,0-5.3,0.1c-2.2,0-4.4,0.3-6.5,0.7  c-2.2,0.5-4.4,1.1-6.4,2.3c-1.5,0.9-2.8,2-3.8,3.5c-1.6,2.4-1.9,5-1.3,7.8c0.6,3,2.3,5.2,5.1,6.7c1.9,1,4,1.4,6.1,1.5  c1.6,0.1,3.3-0.1,4.9-0.4c2.4-0.5,4.5-1.5,6.3-3.1c2.9-2.6,4.4-5.9,4.8-9.7c0.2-1.9,0.3-3.8,0.4-5.7  C208.4,70.8,208.4,69.7,208.4,68.6z"></path>
                <path d="M360.1,97.7c-3.9,0-7.6,0-11.5,0c0-0.3,0-0.6,0-0.8c0-12.5,0-24.9,0-37.4c0-1.6-0.1-3.1-0.4-4.7c-0.6-3.2-2.4-5.6-5.2-7.3  c-2.8-1.7-5.8-2.3-9.1-2.2c-3.3,0.2-6.2,1.2-8.7,3.3c-2,1.6-3.4,3.6-4.3,5.9c-0.8,1.9-1.3,3.8-1.4,5.8c-0.1,0.9-0.1,1.8-0.1,2.6  c0,11.2,0,22.5,0,33.8c0,0.3,0,0.5,0,0.8c-0.6,0.1-10.3,0.1-11.2,0c0-0.3,0-0.5,0-0.8c0-17.4,0-34.8,0-52.2c0-2.1-0.1-4.1-0.1-6.2  c0-0.2,0-0.5,0-0.7c3.7,0,7.4,0,11.2,0c0,0.5,0,1,0,1.5c0,1.2,0,2.5,0,3.7c0,1.3,0,2.5,0.1,3.7c0,0.1,0,0.2,0.1,0.4  c0.2-0.3,0.3-0.4,0.4-0.6c2.7-4.8,6.8-7.9,12.1-9.2c1.7-0.4,3.5-0.6,5.3-0.7c4-0.2,7.8,0.5,11.5,2c2.5,1,4.7,2.4,6.5,4.4  c2,2.1,3.3,4.6,4.1,7.5c0.4,1.4,0.7,2.8,0.7,4.2c0.1,1.2,0.1,2.4,0.1,3.6c0,12.8,0,25.7,0,38.6C360.1,97.1,360.1,97.4,360.1,97.7z"></path>
                <path d="M87.4,92.5c-14.6,6.2-29.1,12.5-43.7,18.7C29.1,104.9,14.6,98.7,0,92.5c2.1-4,4.1-8,6.2-12c12.5,5.4,24.9,10.8,37.5,16.2  c12.5-5.4,24.9-10.8,37.5-16.2C83.2,84.5,85.3,88.4,87.4,92.5z"></path>
                <path d="M398.5,46c-4.4,0-8.8,0-13.3,0c0,0.3,0,0.5,0,0.7c0,11.8,0,23.7,0,35.5c0,0.9,0.1,1.8,0.3,2.7c0.4,2.1,1.7,3.5,3.7,4.2  c1.2,0.4,2.4,0.6,3.6,0.6c1.9,0,3.8-0.2,5.6-0.6c0.2,0.5,0.2,6.7,0.1,8.7c-0.6,0.1-1.2,0.2-1.8,0.3c-0.8,0.1-1.7,0.2-2.6,0.3  c-2.3,0.2-4.7,0.3-7,0.1c-2-0.1-4-0.3-5.9-0.9c-1.3-0.4-2.5-1-3.6-1.9c-1.4-1.2-2.3-2.7-2.9-4.5c-0.5-1.8-0.7-3.6-0.7-5.5  c0-12.9,0-25.9,0-38.8c0-0.3,0-0.5,0-0.9c-3.5,0-7,0-10.4,0c-0.2-0.6-0.2-6.4-0.1-8.2c0,0,0,0,0.1,0c0,0,0,0,0.1,0  c3.4,0,6.9,0,10.3,0c0.1-0.1,0.1-0.1,0.1-0.1s0,0,0-0.1c0-0.1,0-0.1,0-0.2c0-4.1,0-8.2,0-12.3c0,0,0,0,0-0.1c0,0,0,0,0.1-0.1  c3.6-1.2,7.3-2.4,11-3.6c0,1.2,0,2.2,0,3.3c0,1.1,0,2.1,0,3.2c0,1.1,0,2.2,0,3.3c0,1.1,0,2.1,0,3.2c0,1.1,0,2.2,0,3.2  c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0c4.3,0,8.5,0,12.8,0c0,0,0,0,0.1,0C398.6,38.3,398.6,44.8,398.5,46z"></path>
                <path d="M230,11.5c3.7,0,7.4,0,11,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0.1c0,28.5,0,57.1,0,85.6c0,0.1,0,0.3,0,0.4  c-0.6,0.1-9.8,0.2-11.1,0.1c0,0,0,0-0.1,0c0,0,0,0,0-0.1c0-28.5,0-57.1,0-85.6C230,11.9,230,11.7,230,11.5z"></path>
                <path d="M440.4,97.7c-3.8,0-7.6,0-11.3,0c0-0.3,0-0.6,0-0.8c0-16.1,0-32.1,0-48.2c0-2.5-0.2-5-0.3-7.5c0-0.8-0.2-1.6-0.2-2.4  c0-0.3,0-0.6-0.1-1c3.8,0,7.5,0,11.3,0c0.1,3.7,0.2,7.3,0.2,11c0,0,0,0,0.1,0c0.1-0.2,0.2-0.4,0.2-0.6c1.5-4.4,4.4-7.4,8.6-9.2  c1.9-0.8,3.9-1.3,6-1.6c2.1-0.3,4.2-0.3,6.3-0.2c0.3,0,0.5,0.1,0.8,0.1c0,3.7,0,7.3,0,11c-2-0.6-4.1-0.6-6.1-0.5  c-1.9,0-3.7,0.2-5.5,0.7c-2.6,0.7-4.9,2-6.7,4.2c-1.3,1.7-2.1,3.7-2.6,5.8c-0.5,2.2-0.7,4.4-0.7,6.6c0,10.6,0,21.2,0,31.7  C440.4,97.2,440.4,97.4,440.4,97.7z"></path>
                <path d="M418.8,97.7c-3.7,0-7.4,0-11.1,0c0-20,0-39.9,0-59.9c3.7,0,7.4,0,11.1,0C418.8,57.8,418.8,77.7,418.8,97.7z"></path>
                <path d="M406.4,11.6c0.9-0.1,12.9-0.1,13.4,0c0,4.1,0,8.3,0,12.4c-0.5,0.1-12.8,0.1-13.4,0C406.4,19.9,406.4,15.7,406.4,11.6z"></path>
              </svg>
              <div
                className={` hover:text-athinia-dark justify-center	 flex text-lg-small md:text-lg-small 
                                    text-center text-athinia-green mb-[20px] `}
              >
                <a className="" href="https://www.palantir.com/" target='_blank'>    <h3>LEARN MORE</h3></a>
            
                <span className="ml-5 mt-1"> <FaArrowRight size={15}/></span>
              </div> 
              <p className="md:px-10 text-left text-athinia-purple">
                Palantir is a US software company that specializes in big data
                analytics. Focused on creating the world’s best user experience
                for working with data, one that empowers people to ask and
                answer complex questions without requiring them to master
                querying languages, statistical modeling, or the command line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeCol;