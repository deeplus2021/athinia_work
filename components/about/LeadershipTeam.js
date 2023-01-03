import Profile from "./Profile";

const KeyApplications = () => {
  const lauraDetail = `<br/> <p  > Laura serves as CEO for Athinia and  as Chief Science & Technology Officer of Merck KGaA, Darmstadt, Germany. She aims to use digital capabilities to drive innovation as a source of business differentiation.  Laura has responsibility for EMD Digital, including Syntropy and Athinia, as well as the digital transformation within Merck.  She has 20 years of experience in the semiconductor industry in various commercial and R&D roles. <br/> <br/> Laura holds a PhD in analytical chemistry from Washington State University and undergraduate degree from Indiana University of Pennsylvania.</p> `;
  const jamesDetail = `<br/> <p  > James serves as Chief Digital Officer of Merck KGaA, Darmstadt, Germany and CEO of its subsidiary, EMD Digital. He is also a member of the Board to Syntropy, Merck KGaA, Darmstadt, Germany’s partnership with Palantir Technologies. <br/> <br/> His focus at Syntropy is to enable collaboration within and between institutions in a secure and ethical way to improve patient outcomes.<br/> <br/> Previously, James led a transformational process for Sigma Aldrich and the creation of the largest eCommerce platform in the life science industry, generating more than $1 billion in annual revenue. </p>`;
  const ryanDetail = `<br/> <p  > Ryan serves as Palantir Board Member for Syntropy and Athinia as well as Chief Legal and Business Affairs Officer. <br/> <br/>Ryan has served in various positions with Palantir since 2010, most recently as the Chief Legal and Business Affairs Officer.  <br/> <br/>  Ryan holds a B.S. in Computer Science and an M.S. in Management Science & Engineering from Stanford University, and a J.D. from Harvard Law School.</p>`;
  const jeremyDetail = `<br/> <p  > Jeremy is a passionate data scientist at Palantir Technologies. For the past 5 years he has been leading the Palantir engineering team at Merck KGaA, Darmstadt, Germany, driving the data integration efforts in the Semiconductor Materials business unit of Electronics. Before his tenure at Palantir, he served as a consultant for the Boston Consulting Group, focusing on advanced financial modeling. <br/> <br/> Jeremy holds a PhD in Bioengineering from the University of Pennsylvania and published “How to talk to Data Scientists: A Guide for Executives” (2021, Business Expert Press).</p>`;
  const chrisDetail = `<br/> <p  > Chris joined Athinia in 2022 with 20 years  of experience in R&D, new product commercialization and P&L management in the advanced electronics space. Her expertise spans across materials including OLED, Inkjet  Printed Electronics and, for the last 12 years, a  focus on semiconductor materials. She has a proven track record of delivering new business  growth and demonstrating successful use cases for data collaboration among material suppliers and device makers.<br/> <br/> Chris holds an MBA from DeSales University and a PhD in Chemical Engineering from University of Wisconsin- Madison.</p>`;

  return (
    <>
      <section
        className="w-screen flex-initial h-auto
            break-words bg-athinia-dark px-5 md:px-20 p-[2%_0%_8%_0%]"
      >
        <div className="text-center text-white pb-10">
          <h1
            className="text-sm-large md:text-lg-large tracking-[-1px] 
                                     mt-20 pt-5"
          >
            Leadership Team
          </h1>
        </div>
        {/* md:min-h-[100vh] lg:min-h-[65vh] */}
        <div
          className="grid grid-cols-1
                  max-w-screen-xl px-8  
                 mx-auto items-center text-center relative"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center gap-x-10 md:gap-y-10 lg:gap-y-0">
            <Profile
              name={"Laura Matz"}
              content={lauraDetail}
              title={"Chief Executive Officer"}
              link={"https://www.facebook.com/"}
              image={"Laura-Matz-sq.jpg"}
            />
            <Profile
              name={"James Kugler"}
              content={jamesDetail}
              title={"Executive Vice President"}
              link={"https://www.facebook.com/"}
              image={"James-Kugler-sq.jpg"}
            />
            <Profile
              name={"Ryan Taylor"}
              content={ryanDetail}
              title={"Executive Vice President"}
              link={"https://www.facebook.com/"}
              image={"ryan-taylor.jpg"}
            />
            <Profile
              name={"Jeremy Elser"}
              content={jeremyDetail}
              title={"Vice President,  "}
              title2={'Product & Implementation'}
              link={"https://www.facebook.com/"}
              image={"Jeremy-Elser.jpg"}
            />
            <Profile
              name={"Chris Han-Adebekun"}
              content={chrisDetail}
              title={"Vice President,  "}
              title2={'Business Development'}
              link={"https://www.facebook.com/"}
              image={"CDP_3355_1-1.jpg"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyApplications;
