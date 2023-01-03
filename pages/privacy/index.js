import Head from "next/head";
import TitleBody from "../../components/Sections/TitleBody";
import Header from "../../components/Headers/Header";
import Footer from "../../components/Footers/Footer";
import ScrollIntoView from 'react-scroll-into-view'

const Home = () => {
  return (
    <>
      <Header />

      <div className="flex min-h-screen flex-col items-center justify-center py-2  bg-athinia-gray">
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
          className="w-full flex-initial h-auto mt-5 md:mt-20

            break-words  p-[1em] "
        >
          <div
            className=" max-w-[1400px] 
                 relative mr-auto ml-auto"
          >
            <h1 className="text-athinia-green text-sm-large my-5 md:my-0 md:text-lg-large">
              Privacy Statement
            </h1>

            <div className="bg-white py-10 px-10 md:px-20">
              <ul className="list-decimal font-medium text-athinia-blue ">
                <li className="my-2  cursor-pointer hover:text-athinia-dark ">
                  <ScrollIntoView selector="#general-info"> <p >General information</p></ScrollIntoView>

                </li>
                <li className="my-2 cursor-pointer hover:text-athinia-dark">
                  <ScrollIntoView selector="#kind-data"> <p>What kind of data is collected and how is it used?</p></ScrollIntoView>

                </li>
                <li className="my-2 cursor-pointer hover:text-athinia-dark">
                  <ScrollIntoView selector="#personal-data">  <p>Is other personal data collected and processed?</p></ScrollIntoView>

                </li>
                <li className="my-2 cursor-pointer hover:text-athinia-dark">
                  <ScrollIntoView selector="#recipients">   <p>Recipients of Personal Information</p></ScrollIntoView>

                </li>
                <li className="my-2 cursor-pointer hover:text-athinia-dark">
                  <ScrollIntoView selector="#retention"> <p>Data Retention</p></ScrollIntoView>

                </li>
                <li className="my-2 cursor-pointer hover:text-athinia-dark">
                  <ScrollIntoView selector="#privacy-right">  <p>Your data privacy rights</p></ScrollIntoView>

                </li>
                <li className="my-2 cursor-pointer hover:text-athinia-dark">
                  <ScrollIntoView selector="#notification">  <p>Notification of changes</p></ScrollIntoView>

                </li>
                <li className="my-2 cursor-pointer hover:text-athinia-dark">
                  <ScrollIntoView selector="#privacy-rights">  <p> Privacy Rights for Residents of California, Colorado,
                    Connecticut, Utah and Virginia{" "}</p></ScrollIntoView>

                </li>
              </ul>
            </div>
            <TitleBody
                   extraClass="md:text-[3em]"
              title={"1. General information"}
              body={[
                "Thank you for your interest in the website(s) of Athinia Technologies LLC, hereinafter referred to as “Athinia”, “we”, “us” or “our”. We take data protection and privacy issues very seriously and comply with the applicable national and European data protection regulations. This Privacy Statement provides details about our practices relating to personal information collected from or about visitors to our websites ( “users” or “you”). It describes how your personal information is collected, used and shared by us in the course of operating our website. The data that we handle on behalf of our customers is not collected on our website, but rather through our customers’ use of our platform(s). This Privacy Statement only applies to our users’ personal information.  It does not apply to any of our customers’ data sets processed on any of our platform(s). ",
              ]}
              id={'general-info'}
            />
            <TitleBody
             
              title={"1.1. Controller"}
              body={[
                "The data controller means the company (legal person) who determines the purposes and means of the processing of your personal data. For the overarching processing activities described in this Privacy Statement, Athinia is the data controller. In addition, any affiliate of Athinia that processes personal data might become a controller or joint controller of such data. ",
              ]}
            />
            <TitleBody
              title={"1.2 Data Protection Officer"}
              body={[
                "We have appointed a Data Privacy Officer. If you have any questions or comments, you can contact this person and the team at any time:",
              ]}
            />
            <p className="px-[1em]">Athinia Data Privacy Officer</p>
            <p className="px-[1em]">245 First St, Cambridge, MA 02142</p>

            <p className="p-[1em] text-athinia-blue hover:text-athinia-purple">
              <a href="mailto:privacy@syntropy.com">privacy@Athinia.com </a>
            </p>
            <h1
              id="kind-data"
              className="px-[0.5em] text-sm-large       md:text-[3em]
                                    text-left "
            >
              2. What kind of data is collected and how is it used?
            </h1>
            <TitleBody
              title={"2.1 Data collection by this website"}
              body={[
                "Whenever a user accesses the website, the user’s internet browser automatically transfers the following data to Athinia’ s web server:",
              ]}
            />
            <ul className="list-disc pl-[4em]">
              <li>IP address of the requesting computer</li>
              <li>date and time of access</li>
              <li>name and URL of the retrieved file</li>
              <li>transferred data volume</li>
              <li>access status (file transferred, file not found etc.)</li>
              <li>
                identification data of the browser and operating system used
              </li>
              <li>name of the provider of user’s internet access</li>
              <li>website from which access is made</li>
            </ul>
            <p className="p-[1em]">
              This data is collected, processed and used for the following
              purposes:{" "}
            </p>
            <ul class="list-disc pl-[4em]">
              <li>
                To process your enquiry and to carry out the services you may
                have requested.
              </li>
              <li>
                To provide you with the requested information and to communicate
                with you;
              </li>
              <li>
                To enable the use of the website (connection setup), system
                security and technical administration of the network
                infrastructure.
              </li>
              <li>To ensure the proper functioning of our website;</li>
              <li>
                To do a better job of advertising and marketing our services
                (subject to your consent where required by applicable law);
              </li>
              <li>To administer our websites;</li>
              <li>To communicate with you;</li>
              <li>
                To target current or prospective customers with our products or
                services through online advertisements served on third-party
                sites by third-party vendors, such as Google (subject to your
                consent where required by applicable law);
              </li>
              <li>As otherwise described in this Privacy Statement.</li>
            </ul>
            <TitleBody
              title={"2.2 Cookies, Analytics tools and Advertising "}
              body={[
                "The term “cookies” in this Privacy Statement refers to cookies and similar technologies. Cookies are small text files that are sent to your device and stored there. These cookies allow your browser to track certain information that may be retrieved and used by internet servers at a later stage. ",
                "We may include the following categories of cookies on our website:",
              ]}
            />
            <TitleBody title={"2.2.1. Cookie categories"} body={[]} />
            <TitleBody
              extraClass='md:text-[1.2em]'
              title={"2.2.1.1 Necessary Cookies"}
              body={[
                "These cookies are necessary to safeguard the functionalities of our website, the services provided thereon and for the website to operate. Cookies are set, in particular, in response to your actions and depend on your specific service requests (e.g., setting your privacy preferences, filling out forms, or logging in).",
              ]}
            />
            <TitleBody
            extraClass='md:text-[1.2em]'
              title={"2.2.1.2. Functional Cookies"}
              body={[
                "These cookies enable the provision of advanced functionalities and are used for personalization. The cookies are set in response to your actions and depend on your specific service requests (e.g., pop-up notification choices).",
              ]}
            />
            <TitleBody
            extraClass='md:text-[1.2em]'
              title={"2.2.1.3. Targeting Cookies"}
              body={[
                "These cookies may be set to learn more about your interests and show you relevant ads on other websites. These cookies work by uniquely identifying your browser and device. By integrating these cookies, we aim to learn more about your interests and to be able to place our advertising in a targeted manner.",
              ]}
            />
            <section
              className="w-full flex-initial h-auto

            break-words  p-[1em] "
            >
              <div
                className=" max-w-[1400px] 
                 items-center relative mr-auto ml-auto"
              >
                <h1
                  className="text-sm-medium md:text-lg-medium my-4 md:my-0 tracking-[-1px] 
                                    text-left "
                >
                  2.2.2 Management and Deletion of Cookies
                </h1>

                <p className="my-3">
                  Some computer browsers automatically accept all cookies. In
                  this case, you may not see the cookie banner which allows you
                  to manage your cookies individually. However, you can change
                  your browser settings to block all cookies. You may also
                  configure your browser settings so that only certain types of
                  cookies are blocked or so that you are notified as soon as a
                  new cookie is to be stored on your computer. In this case, you
                  can accept or reject cookies individually. If this function is
                  available to you, you will find more detailed explanations in
                  the help function of your browser. There you will also find
                  information on how to delete all or certain cookies for which
                  you have given us your consent. For more information on
                  managing and deleting cookies for popular browsers, please see
                  the following links:{" "}
                  <a
                    target='_blank'
                    href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en"
                    className="text-athinia-blue hover:text-athinia-purple"
                  >
                    Google Chrome
                  </a>
                  ,
                  <a
                  target='_blank'
                    href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en"
                    className="text-athinia-blue hover:text-athinia-purple"
                  >
                    Mozilla Firefox
                  </a>
                  ,
                  <a
                  target='_blank'
                    href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en"
                    className="text-athinia-blue hover:text-athinia-purple" 
                  >
                    Microsoft Internet Explorer
                  </a>
                  ,
                  <a
                  target='_blank'
                    href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en"
                    className="text-athinia-blue hover:text-athinia-purple"
                  >
                    Microsoft Edge
                  </a>
                  ,
                  <a
                  target='_blank' 
                    href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en"
                    className="text-athinia-blue hover:text-athinia-purple"
                  >
                    Apple Safari.
                  </a>
                  ,
                </p>
              </div>
            </section>
            <TitleBody
              title={"2.2.3 Advertising"}
              body={[
                "We work with third party online marketing services, which provide our advertising to users who have previously visited our websites. The purpose of these services is to create advertising for Athinia services based on the needs and interests of the relevant Athinia website visitors.",
              ]}
            />
            <TitleBody
             
              extraClass='md:text-[3em]'
              id={'personal-data'}
              title={"3. Is other personal data collected and processed?"}
              body={[
                "We collect and process your personal data only if you request certain services and we need your data for this purpose or if you have voluntarily given us your consent. ",
                "You can do this, for example, by completing a registration form or sending us an email, submitting inquiries to us, requesting materials, or registering. Unless otherwise required by law, we will only use your personal data for the purposes for which you have given your consent. For special services such as newsletters, sweepstakes, etc. the respective special data protection provisions apply.",
              ]}
            />
            <h1
              id="recipients"
              className="px-[0.5em] text-sm-large md:text-[3em]  
                                    text-left "
            >
              4. Recipients of Personal Information
            </h1>
            <TitleBody
              title={"4.1 Data transfer to our affiliates"}
              body={[
                "We involve our affiliates to support us in hosting and administration. These group companies process the data solely for the purposes set out in this privacy statement.",
              ]}
            />
            <TitleBody
              title={"4.2 Data transfer to third parties"}
              body={["We pass on your personal data as set forth below:"]}
            />
            <p className="p-[1em]">
              <strong>Service Providers:</strong> We may share your personal
              data with third party service providers who use this data to
              perform services for us, such as payment processors, hosting
              providers, marketing technology providers, auditors, advisors,
              consultants, customer service and support providers.
            </p>
            <p className="p-[1em]">
              <strong>Legally required:</strong> We may disclose your personal
              data if we are required to do so by law or where it is necessary
              to respond to claims asserted against us or comply with legal
              processes.
            </p>
            <p className="p-[1em]">
              <strong>Business transfers:</strong>We may disclose or transfer
              personal data as part of any merger, sale, and transfer of our
              assets, acquisition or restructuring of all or part of our
              business, bankruptcy, or similar event.
            </p>
            <TitleBody
              title={"4.3 Data Transfers to Third Countries"}
              body={[
                "If you are a resident of EU/EEA/UK, please note that we may transfer your personal data outside the EU/EEA/UK. We will take all steps reasonably necessary to ensure that appropriate safeguards are in place to guarantee that your personal data are adequately protected according to the requirements of the applicable data protection laws. For example, with respect to transfer of EU personal data, we use Standard Contractual Clauses approved by the EU Commission.",
                "You have the right to contact privacy@athinia.com for more information about the safeguards we have put in place (including a copy of relevant contractual commitments) to ensure the adequate protection of your personal data when it is transferred as mentioned above.",
              ]}
            />
            <TitleBody
              extraClass="md:text-[3em]"
              id='retention'
              title={"5. Data Retention"}
              body={[
                "We store data for as long as it is legally necessary or necessary for the provision of the service requested by you, or as long as it has been agreed upon in a declaration of consent.",
              ]}
            />
            <TitleBody
       extraClass="md:text-[3em]"
              id={'privacy-right'}
              title={"6. Your data privacy rights"}
              body={[
                "You have or might have the following data protection rights:",
              ]}
            />
            <ul class="list-disc pl-[4em]">
              <li>
                <strong>Right of access: </strong>
                 You have the right to obtain information on the processing of
                your personal data and to receive a copy these data.
              </li>
              <li>
                <strong>Right to rectification: </strong>
                You have the right to request that we correct or complete your
                inadequate, incomplete or inaccurate personal data.
              </li>
              <li>
                <strong>Right to erasure: </strong>
                Under certain circumstances, you have the right to request that
                we delete your personal data.
              </li>
              <li>
                <strong>Right to restriction of processing: </strong>
                Under certain requirements, you may request us to restrict the
                processing of your personal data.
              </li>
              <li>
                <strong>Right to data portability: </strong>
                You might have the right to receive your personal data in a
                structured, common and machine-readable format and request that
                these data are transferred to another data controller, if
                applicable under the specific circumstances.
              </li>
              <li>
                <strong>Right to object: </strong>
                You might have the right to object to the processing of your
                personal data by us, in particular if the processing of your
                personal data is based on (i) the necessity of the performance
                of a task in the public interest, or (ii) legitimate interests.
                We will then stop the processing of your personal data unless we
                remain legally authorized to do so.
              </li>
              <li>
                <strong>Right of access: </strong>
                carry out the services you may have requested.
              </li>
              <li>
                <strong>
                  Right to lodge a complaint with a supervisory authority:
                </strong>
                You might have the right to lodge a complaint with a supervisory
                authority against the processing of your personal data if you
                believe that the processing of your personal data violates data
                protection regulations.
              </li>
            </ul>
            <p className="p-[1em]">
              Any data processing performed on the basis of your consent is
              valid until the time of withdrawal.
            </p>
            <p className="p-[1em]">
              You have the right to withdraw your consent to the use of your
              personal information at any time by sending an email to{" "}
              <a
                href="mailto:privacy@athinia.com"
                className="text-athinia-blue hover:text-athinia-purple"
              >
                privacy@athinia.com
              </a>
              .
            </p>
            <TitleBody
                   extraClass="md:text-[3em]"
              id={'notification'}
              title={"7. Notification of changes"}
              body={[
                "We reserve the right to modify this privacy statement at any time with effect for the future, in particular to adapt it to a further development of the website or the implementation of new technologies, so please review it frequently.",
              ]}
            />
            <TitleBody
                   extraClass="md:text-[3em]"
            id={'privacy-rights'}
              title={
                "8. Privacy Rights for Residents of California, Colorado, Connecticut, Utah and Virginia "
              }
              body={[
                "The following terms apply to the personal information of residents of California, Colorado, Connecticut, Utah and Virginia (the “States”). These provisions are intended to comply with privacy laws enacted by the States (the “State Privacy Laws”), including the California Consumer Privacy Act, the California Privacy Rights Act and related regulations (collectively, the “CCPA”). These provisions supplement the other sections of our Privacy Policy. Any terms that are defined in the State Privacy Laws have the same meaning here.",
              ]}
            />
            <TitleBody
              title={"YOUR PERSONAL INFORMATION"}
              body={[
                "The categories of personal information we may have collected from you, the sources of that personal information, and how and with whom we may have used or shared such personal information during the past year include the following:",
              ]}
            />
            <div class="overflow-x-auto ">
              <table class="w-full text-sm text-left table-auto md:table-fixed  mt-20">
                <thead class="text-xs  uppercase  dark:bg-gray-700 ">
                  <tr className="bg-transparent border border-gray-300 my-3">
                    <th scope="col" class="py-3 px-6 border-r border-gray-300 ">
                      <br />
                    </th>
                    <th scope="col " class="py-3 px-6 "></th>
                    <th scope="col" class="py-3 px-6 "></th>
                    <th scope="col" class="py-3 px-6 "></th>
                  </tr>
                </thead>
                <thead class="text-xs  uppercase  dark:bg-gray-700 ">
                  <tr className="bg-transparent border border-gray-300 ">
                    <th scope="col" class="py-3 px-6  border-gray-300">
                      Category of Personal Information Collected
                    </th>
                    <th scope="col " class="py-3 px-6 border border-gray-300">
                      Source of Information
                    </th>
                    <th scope="col" class="py-3 px-6 border border-gray-300">
                      Purpose for Collection
                    </th>
                    <th scope="col" class="py-3 px-6 border border-gray-300">
                      Categories of Recipients
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-transparent border border-gray-300  ">
                    <td class="p-4 text-gray-900 border border-gray-300 ">
                      Contact information: such as your name, address, email
                      address, telephone numbers, or other contact information.
                    </td>
                    <td class="p-4 border border-gray-300">
                      From you, your authorized agent, or family member; from
                      public data sources; from other parties such as conference
                      organizers or publishers which have received personal
                      information from you.
                    </td>
                    <td class="p-4 border border-gray-300">
                      To communicate with you; to enroll you in programs or
                      services; to send you catalogs, information, newsletters,
                      promotional materials and other offerings from us or on
                      behalf of our partners and affiliates; to offer you the
                      chance to participate in contests or other promotional
                      activities; when you contact us; when you request customer
                      service or support; to complete your registration on our
                      websites (“Sites”); to administer your account with us.
                    </td>
                    <td class="p-4 border border-gray-300">
                      Our service providers, and our co-marketing partners,
                      including select partners and affiliates that we believe
                      may have or facilitate offers that may be of interest to
                      you.
                    </td>
                  </tr>
                  <tr class="bg-transparent border border-gray-300  ">
                    <td class="p-4 text-gray-900 border border-gray-300 ">
                      Preference information:  your marketing preferences, your
                      account settings (including any default preferences), any
                      preferences you have indicated, the types of
                      services/offers that interest you, the areas of our Sites
                      or Apps that you have visited or ways that you interact
                      with our Sites or Apps.{" "}
                    </td>
                    <td class="p-4 border border-gray-300">
                      From you, from our website technology interaction with
                      your browser/devices and cookies and other similar
                      technologies tracking the pages you visit, the marketing
                      messages you open and the links you follow.{" "}
                    </td>
                    <td class="p-4 border border-gray-300">
                      To enhance your online experience, including as a way to
                      recognize you and welcome you to the Sites or applications
                      (“Apps”), to provide you with customized Site or App
                      content, targeted offers from us or others, promotions and
                      advertising on our Sites or Apps, through other third
                      party sites or apps, via email, text messages, or App push
                      notifications that are offered by us or others that might
                      be of interest to you.{" "}
                    </td>
                    <td class="p-4 border border-gray-300">
                      Our third-party vendors and service providers that perform
                      website analytic services for us or enable the
                      customization of offers to you to improve your experience
                      through our Sites, our Apps or elsewhere.
                    </td>
                  </tr>
                  <tr class="bg-transparent border border-gray-300  ">
                    <td class="p-4 text-gray-900 border border-gray-300 ">
                      Communications: communications we have with you. Please
                      note that we may record calls to our customer service team
                      or other sites for quality assurance.{" "}
                    </td>
                    <td class="p-4 border border-gray-300">From you </td>
                    <td class="p-4 border border-gray-300">
                      To handle your requests, to contact you when necessary or
                      requested, including responding to your questions and
                      comments and providing customer support, and to obtain
                      customer feedback and improve our customer service and
                      customer shopping experience.{" "}
                    </td>
                    <td class="p-4 border border-gray-300">
                      Our service providers who assist us with customer service.
                    </td>
                  </tr>
                  <tr class="bg-transparent border border-gray-300  ">
                    <td class="p-4 text-gray-900 border border-gray-300 ">
                      Voluntary information: any voluntary information you
                      provide us with, such as responses to surveys or
                      competitions and social media account details.{" "}
                    </td>
                    <td class="p-4 border border-gray-300">
                      From you and your social media account provider.{" "}
                    </td>
                    <td class="p-4 border border-gray-300">
                      To know you better, make our communications with you more
                      personal, learn and improve from your survey feedback,
                      organize events and pick competition winners.{" "}
                    </td>
                    <td class="p-4 border border-gray-300">
                      Our service providers who administer surveys and
                      promotions, and our co-marketing partners.
                    </td>
                  </tr>
                  <tr class="bg-transparent border border-gray-300  ">
                    <td class="p-4 text-gray-900 border border-gray-300 ">
                      Personalization: your journey online and how you use our
                      Sites and Apps, whether and when you open our marketing
                      emails and respond to our advertisements.
                    </td>
                    <td class="p-4 border border-gray-300">
                      From you, from our Sites or Apps technology interaction
                      with your browser or devices and cookies tracking the
                      pages you visit.
                    </td>
                    <td class="p-4 border border-gray-300">
                      To improve our Sites, Apps, products and services,
                      customer service, and customer shopping experience.
                    </td>
                    <td class="p-4 border border-gray-300">
                      Our third-party vendors and service providers that perform
                      website analytic services for us or enable the
                      customization of offers to you to improve your shopping or
                      website experience for our Sites, our Apps or elsewhere.
                    </td>
                  </tr>
                  <tr class="bg-transparent border border-gray-300  ">
                    <td class="p-4 text-gray-900 border border-gray-300 ">
                      Personalization: your journey online and how you use our
                      Sites and Apps, whether and when you open our marketing
                      emails and respond to our advertisements.
                    </td>
                    <td class="p-4 border border-gray-300">
                      From you, from our Sites or Apps technology interaction
                      with your browser or devices and cookies tracking the
                      pages you visit.
                    </td>
                    <td class="p-4 border border-gray-300">
                      To improve our Sites, Apps, products and services,
                      customer service, and customer shopping experience.
                    </td>
                    <td class="p-4 border border-gray-300">
                      Our third-party vendors and service providers that perform
                      website analytic services for us or enable the
                      customization of offers to you to improve your shopping or
                      website experience for our Sites, our Apps or elsewhere.
                    </td>
                  </tr>
                  <tr class="bg-transparent border border-gray-300  ">
                    <td class="p-4 text-gray-900 border border-gray-300 ">
                      Device information: IP address, internet provider,
                      operating system and browser used, type of device (such as
                      laptop or smart phone), device cookie settings and other
                      device details (such as MAC address and geolocation), if
                      you use our Sites or Apps and permit them to obtain your
                      precise geolocation.
                    </td>
                    <td class="p-4 border border-gray-300">
                      From you and from our website or app technology’s
                      interaction with your browser or devices.
                    </td>
                    <td class="p-4 border border-gray-300">
                      To make sure our website and app technology works properly
                      with your device and make sure you can see and use our
                      intended website and apps on the device you are using, for
                      analytical and demographic purposes, and to provide offers
                      that may be of interest to you. We also will use this
                      information to protect the security and integrity of the
                      Site and our business, such as by protecting against and
                      preventing fraud, unauthorized transactions, and managing
                      risk exposure, including by identifying potential hackers
                      and other unauthorized users.
                    </td>
                    <td class="p-4 border border-gray-300">
                      Our service providers who help us with fraud protection,
                      and third-party vendors and service providers that perform
                      website analytic services for us or enable more relevant
                      offers to you on our Sites, our Apps or elsewhere.
                    </td>
                  </tr>
                  <tr class="bg-transparent border border-gray-300  ">
                    <td class="p-4 text-gray-900 border border-gray-300 ">
                      Information automatically collected from your
                      browser: when you use our Sites or Apps, some data is
                      automatically transferred from your browser to our server,
                      including your browser type, operating system type or
                      mobile device model, viewed webpages, links that are
                      clicked, IP address, mobile device identifier or other
                      unique identifier, sites or apps visited before coming to
                      our Sites or Apps, the amount of time you spend viewing or
                      using the Sites or Apps, the number of times you return,
                      or other click-stream or site usage data, emails we send
                      that you open, forward or click through to our Sites or
                      Apps.
                    </td>
                    <td class="p-4 border border-gray-300">
                      From you and from our website or app technology’s
                      interaction with your browser or devices.
                    </td>
                    <td class="p-4 border border-gray-300">
                      We will use this information in an aggregated non-specific
                      format for analytical and demographic purposes. We also
                      will use this information to protect the security or
                      integrity of our websites and our business, such as by
                      protecting against and preventing fraud, unauthorized
                      transactions, and managing risk exposure, including by
                      identifying potential hackers and other unauthorized
                      users.
                    </td>
                    <td class="p-4 border border-gray-300">
                      Our third-party vendors and service providers that perform
                      website analytic services for us or enable the
                      customization of offers to you to improve your shopping or
                      website experience and the relevance of offers to you on
                      our Sites, our Apps or elsewhere.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <TitleBody
              title={"YOUR STATE PRIVACY RIGHTS"}
              body={[
                "If you are a resident of one of the States, State Privacy Law provides you with the following rights with respect to your personal information:",
              ]}
            />
            <ul class="list-disc pl-[4em]">
              <li>
                The right to know what personal information we have collected,
                used or disclosed about you.
              </li>
              <li>
                The right to request that we delete any personal information we
                have collected about you.
              </li>
              <li>
                The right to request that we correct any inaccurate personal
                information we have collected about you.
              </li>
            </ul>
            <TitleBody
              title={"SALE OF PERSONAL INFORMATION"}
              body={[
                "If you are a resident of one of the States, you can always tell us not to sell your personal information, as defined in the applicable State Privacy Law.",
              ]}
            />
            <TitleBody
              title={"SUBMITTING REQUESTS"}
              body={[
                "You may submit requests to delete and/or to know personal information we have collected about you by accessing our State Privacy Rights request portal at:",
              ]}
            />
            <p className="p-[1em]">
              <a
                href="https://privacyportal-de.onetrust.com/webform/71528392-912c-4f33-b3b5-9e665d0de552/44a2b69a-52e7-4f71-bd11-3c4b71ad611d

"               target='_blank'
                className="text-athinia-blue hover:text-athinia-purple"
              >
                https://privacyportal-de.onetrust.com/webform/71528392-912c-4f33-b3b5-9e665d0de552/44a2b69a-52e7-4f71-bd11-3c4b71ad611d
              </a>
            </p>
            <p className="p-[1em]">
              or by contacting our toll-free telephone number at:
            </p>
            <p className="p-[1em]">+1 (888) 914-9661 (PIN 659429)</p>
            <p className="p-[1em]">
              We will respond to your request in compliance with the
              requirements of the State Privacy Law or other applicable law.
            </p>
            <TitleBody title={'VERIFICATION OF YOUR IDENTITY'} body={['When you exercise these rights and submit a request to us, we or our partners will verify your identity by asking you to authenticate your identity via standard authentication procedures. For example, we may ask for your email address, order numbers of previous orders of our products and services, the last four digits of a credit or debit card or bank account number used to make a purchase, or the date of your last purchase from us. We also may use a third-party verification provider to verify your identity.']} />
            <TitleBody title={'NON-DISCRIMINATION'} body={['If you make a request under a State Privacy Law, we will not discriminate against you in any way. For example, we will not deny you goods or services, charge you different prices or rates for goods or services, deny you discounts or other benefits or impose penalties on you, or provide you with or suggest that you will receive a different level or quality of goods or services.']} />
            <TitleBody title={'AUTHORIZED AGENTS'} body={['You may permit an authorized agent to submit a request to know or to delete your personal information. If we receive a request on your behalf, we will ask that person to give us proof that you gave that person written permission to make a request for you. If that person does not provide us with written proof, we will deny their request so that we can protect your personal information.']} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
