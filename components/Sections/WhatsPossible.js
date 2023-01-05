import PopupParent from "./Cards/PopupParent";

const WhatsPossible = () => {
  const contentOne = `<p className="my-4 text-white text-lg  leading-relaxed">  
  With Athinia™, materials suppliers and their device makers
  finally have a secure platform to share and analyze data, all
  while enabling stakeholders to maintain control of their
  information including, any intellectual property.
  
  <br></br>
  Athinia™ is powered by Palantir Foundry, trusted by some of the
  largest, most security–focused organizations in the world. The
  Foundry platform provides sophisticated methods for data
  normalization and obfuscation to ensure that data remains
  private, yet useful for advanced analytics.

  <br></br>
  Device makers can now freely share all relevant data with their
  material suppliers, and together, multiple parties may safely
  collaborate to uncover opportunities to help improve yield,
  efficiency and performance. Material suppliers have the benefit
  of bringing specific materials to the ecosystem and then sharing
  the data selectively with multiple device makers, or multiple
  process nodes, if they choose to do so. This capability may give
  material suppliers opportunities to win new business.
  
  <br></br>
  New insights from greater data sharing may help improve the
  success rate with new materials, increase yield with process
  data, and maximize the offerings and capabilities of each
  company involved.
  </p>`;

  const contentTwo = `<p className="my-4 text-white text-lg  leading-relaxed">
  The secure exchange of data that the Athinia™ platform enables, allows both material suppliers and device makers 
  to feel confident in sharing an unprecedented amount of information. This creates benefits for all.
  <br></br>
  Material Suppliers: As material suppliers gain access to data that they have never had before, 
  they can fully understand how their products are performing or impacting the performance and quality of devices. 
  Material suppliers can then improve their products with more ease, by focusing on what matters most, saving valuable 
  resources to focus on winning new opportunities.
  <br></br>
  Device makers: Device makers have hundreds, or more, material suppliers of chemical products that are used in manufacturing. 
  Through the secure exchange of data that Athinia™ enables, device makers can now automatically evaluate those materials and identify 
  potential issues, such as quality excursions, much faster and before they go into production. This can result, for example, 
  in avoiding involving suppliers that aren´t part of the root cause and instead working closely only with those that 
  are relevant to the solution.
  <br></br>
  Device makers can share limited slices of information with the material suppliers in their supply 
  chain as they see fit to proactively mitigate challenges in production variability prior to experiencing them in the fab. 
  They may thereby qualify new materials more smoothly and with fewer resources and may reduce or avoid costly yield ramp issues 
  or excursions in production.
  <br></br>
  There is always work underway between material suppliers and device makers to 
  improve existing materials and secure new technology node wins as new materials are being introduced. 
  Bi-directional data sharing allows a more complete thorough understanding of how process changes can influence and 
  impact an integration scheme several steps downstream of the original change. This information sharing may enable better 
  learning and faster ramping.
  </p>`;

  const contentThree = `<p className="my-4 text-white text-lg  leading-relaxed">
  Both device makers and material suppliers are now able to share deeper insights across all parameters related 
  to electronic materials and the measured performance in the fab, including test data. Using Athinia™’s multivariate analysis, 
  otherwise hidden correlations that impact in-fab performance may be discovered. Material suppliers can then put their resources 
  where they matter most, reducing the amount of time their teams spend resolving issues. Going forward, once all the necessary 
  variables are captured, material suppliers and device makers may proactively qualify new materials with the parameters and data 
  available for analysis in Athinia™ even before the materials come into the fab. 
  This would result in major time and resource savings for both material suppliers and device makers.
  </p>`;
  return (
    <>
      <section
        className="w-full flex-initial h-auto
            break-words bg-athinia-gray md:p-[2em]"
      >
        <div
          className="grid grid-cols-1 
          max-w-[1400px] p-8 md:p-0 lg:p-2
                 items-center relative mx-auto my-5 md:my-10 lg:my-20"
        >
          <div>
            <h3 className="text-athinia-dark text-center text-sm-medium md:text-lg-medium">
              What’s possible with Athinia™
            </h3>
          </div>

          <div className="pt-5">
            <PopupParent
              title={
                "Share data across multiple parties in a secure end-to-end platform"
              }
              subTitle={"(Device Makers & Material Suppliers)"}
              content={contentOne}
            />
            <PopupParent
              title={
                "Enable bi-directional data sharing and easier communication"
              }
              subTitle={"(Device Makers & Material Suppliers)"}
              content={contentTwo}
            />

            <PopupParent
              title={
                "Improve process change notification to qualify new materials faster and drive process efficiencies and cost optimization"
              }
              content={contentThree}
              subTitle={"(Device Makers & Material Suppliers)"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatsPossible;
