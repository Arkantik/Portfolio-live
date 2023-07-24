// Style
import style from "../../src/styles/timeline.module.css";

export default function TimelineData() {
  return (
    <div className="cd-horizontal-timeline loaded">
      <div className="timeline">
        <div className="events-wrapper">
          <div className="events w-[2200px]">
            <ol>
              <li>
                <a
                  href="#1"
                  data-date="20/04/2017"
                  className="older-event selected"
                >
                  2012
                </a>
              </li>
              <li>
                <a href="#2" data-date="10/06/2017">
                  2014
                </a>
              </li>
              <li>
                <a href="#3" data-date="17/06/2017">
                  2014
                </a>
              </li>
              <li>
                <a href="#4" data-date="30/06/2017">
                  2015
                </a>
              </li>
              <li>
                <a href="#5" data-date="12/07/2017">
                  2015
                </a>
              </li>
              <li>
                <a href="#6" data-date="15/08/2017">
                  2018
                </a>
              </li>
              <li>
                <a href="#7" data-date="09/09/2017">
                  2019
                </a>
              </li>
              <li>
                <a href="#8" data-date="24/10/2017">
                  2021
                </a>
              </li>
              <li>
                <a href="#9" data-date="02/11/2017">
                  2021
                </a>
              </li>
              <li>
                <a href="#10" data-date="18/12/2017">
                  2023
                </a>
              </li>
              <li>
                <a href="#11" data-date="27/12/2017">
                  2023
                </a>
              </li>
              <li>
                <a href="#12" data-date="10/01/2018">
                  2023
                </a>
              </li>
            </ol>
            <span className="filling-line" aria-hidden="true" />
          </div>
        </div>

        <ul className="cd-timeline-navigation">
          <li>
            <a href="#prev" className="prev">
              Prev
            </a>
          </li>
          <li>
            <a href="#next" className="next">
              Next
            </a>
          </li>
        </ul>
      </div>

      <div className="events-content">
        <ol>
          <li className="selected" data-date="20/04/2017">
            <div className="flex justify-between">
              <div>
                <h4 className="font-main text-lg uppercase text-primary">
                  06 July 2012
                </h4>
                <h2 className="flex font-main text-base uppercase">
                  Graduated from college
                  <img
                    src="./public/assets/icons/timeline/gradcap.svg"
                    alt="graduation cap"
                    className="pl-2.5"
                  />
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <h4 className="font-main text-lg uppercase text-primary">
                  School
                </h4>
                <h2 className="flex font-main text-base uppercase">
                  Lycée Henri Gaudier-Brzeska
                </h2>
              </div>
            </div>

            <div className="flex justify-between">
              <div className={`${style.sub_content_left}`}>
                <h5 className={`${style.sub_content_header}`}>
                  Diploma obtained
                </h5>
                <p className="text-sm">
                  Baccalaureate in Industrial Sciences and Technologies with a
                  specialization in Civil Engineering
                </p>
              </div>

              <div className={`${style.sub_content_right}`}>
                <h5 className={`${style.sub_content_header}`}>Details</h5>
                <p className="flex text-sm">
                  Orléans - France
                  <img
                    src="./public/assets/icons/timeline/pin.svg"
                    alt="location icon"
                    className="pl-2.5"
                  />
                </p>
              </div>
            </div>
          </li>

          <li data-date="10/06/2017">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  12 June 2014
                </h4>
                <h2 className="main-font">
                  Graduated from university
                  <img
                    src="./public/assets/icons/timeline/gradcap.svg"
                    alt="graduation cap"
                    className="pl-2.5"
                  />
                </h2>
              </div>
              <div className="main-content main-content-right text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  School
                </h4>
                <h4 className="main-font">Lycée des métiers du Bâtiment</h4>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-9 pl-md-0">
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    Diploma obtained
                  </h5>
                  <p className="alt-font">
                    Higher Technician's Certificate in Building Construction
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 pr-md-0">
                <div className="sub-content sub-content-right">
                  <h5 className="text-uppercase main-font text-blue">
                    Details
                  </h5>
                  <p className="alt-font">
                    Felletin - France
                    <img
                      src="./public/assets/icons/timeline/pin.svg"
                      alt="location icon"
                    />
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li data-date="17/06/2017">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  18 August 2014
                </h4>
                <h2 className="main-font">First job as Operation officer</h2>
              </div>
              <div className="main-content main-content-right text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  Company
                </h4>
                <h4 className="main-font">Amazon</h4>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-9 pl-md-0">
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    Introduction
                  </h5>
                  <p className="alt-font">
                    Joining Amazon as an operations officer marked my first job
                    experience, as the challenging circumstances in the building
                    industry during that time hindered opportunities in that
                    field.
                  </p>
                </div>
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    About my position
                  </h5>
                  <p className="alt-font">
                    While i worked at Amazon as an operations officer in the
                    customer return department, I honed my skills in
                    meticulousness and attention to detail.
                    <br />
                    This experience not only taught me the importance of
                    maintaining high standards but also allowed me to master
                    time management and multitasking abilities. Furthermore, I
                    have acquired additional skills such as effective
                    communication and adapting to fast-paced environments.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 pr-md-0">
                <div className="sub-content sub-content-right">
                  <h5 className="text-uppercase main-font text-blue">
                    Details
                  </h5>
                  <p className="alt-font">
                    Orléans - France
                    <img
                      src="./public/assets/icons/timeline/pin.svg"
                      alt="location icon"
                    />
                  </p>
                  <p className="alt-font">
                    Interim contract
                    <img
                      src="./public/assets/icons/timeline/contract.svg"
                      alt="contract icon"
                    />
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li data-date="30/06/2017">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  04 May 2015
                </h4>
                <h2 className="main-font">
                  Started a new job as Operation officer
                </h2>
              </div>
              <div className="main-content main-content-right text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  Company
                </h4>
                <h4 className="main-font">Chronopost</h4>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-9 pl-md-0">
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    Introduction
                  </h5>
                  <p className="alt-font">
                    After my contract at Amazon concluded, I made the bold
                    decision to relocate to a new city in search of fresh
                    experiences. It was during this transition that I found an
                    opportunity at Chronopost, where I embarked on a new chapter
                    of my career.
                  </p>
                </div>
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    About my position
                  </h5>
                  <p className="alt-font">
                    During my time at Chronopost, I assumed a dynamic position
                    encompassing several key responsibilities. As part of my
                    role, I took charge of effectively managing drivers,
                    diligently enforcing procedures and timelines to ensure
                    smooth operations. I also actively engaged in sales as well
                    as facilitating the convenient pickup of packages directly
                    from their offices. I played a crucial role in maintaining
                    customer satisfaction by liaising with our dedicated
                    customer service team which required my problem-solving and
                    communicating skills.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 pr-md-0">
                <div className="sub-content sub-content-right">
                  <h5 className="text-uppercase main-font text-blue">
                    Details
                  </h5>
                  <p className="alt-font">
                    Tours - France
                    <img
                      src="./public/assets/icons/timeline/pin.svg"
                      alt="location icon"
                    />
                  </p>
                  <p className="alt-font">
                    Fixed-term contract
                    <img
                      src="./public/assets/icons/timeline/contract.svg"
                      alt="contract icon"
                    />
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li data-date="12/07/2017">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  07 September 2015
                </h4>
                <h2 className="main-font">
                  Hired permanently as Operation officer
                </h2>
              </div>
              <div className="main-content main-content-right text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  Company
                </h4>
                <h4 className="main-font">Chronopost</h4>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-9 pl-md-0">
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    Introduction
                  </h5>
                  <p className="alt-font">
                    After successfully completing my fixed-term contract as an
                    operations officer, I was delighted to receive an offer for
                    a permanent position, solidifying my commitment to the
                    company's long-term goals.
                  </p>
                </div>
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    About my position
                  </h5>
                  <p className="alt-font">
                    In my subsequent role, my responsibilities remained aligned
                    with my previous position. I continued to manage drivers,
                    enforce procedures, and ensure seamless operations.
                    Additionally, I undertook the crucial responsibility of
                    overseeing all export packages from the office, meticulously
                    examining accompanying documentation, verifying compliance,
                    and effectively communicating the required documents to
                    customs at Roissy Charles de Gaulle airport. I handled
                    hazardous material shipments on occasion, adhering strictly
                    to IATA (International Air Transport Association)
                    procedures.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 pr-md-0">
                <div className="sub-content sub-content-right">
                  <h5 className="text-uppercase main-font text-blue">
                    Details
                  </h5>
                  <p className="alt-font">
                    Bourges - France
                    <img
                      src="./public/assets/icons/timeline/pin.svg"
                      alt="location icon"
                    />
                  </p>
                  <p className="alt-font">
                    Permanent contract
                    <img
                      src="./public/assets/icons/timeline/contract.svg"
                      alt="contract icon"
                    />
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li data-date="15/08/2017">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  09 April 2018
                </h4>
                <h2 className="main-font">
                  Started a new job as Operation officer
                </h2>
              </div>
              <div className="main-content main-content-right text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  Company
                </h4>
                <h4 className="main-font">TCS</h4>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-9 pl-md-0">
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    Introduction
                  </h5>
                  <p className="alt-font">
                    After 3 years at Chronopost, my 1st significant job
                    experience, I made the decision to resign from my position
                    to return to Orléans. Throughout my time there, I gained
                    valuable insights and acquired extensive knowledge.
                  </p>
                </div>
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    About my position
                  </h5>
                  <p className="alt-font">
                    As an operations officer, my role involved daily analysis
                    and reporting for clients within tight deadlines. I also
                    handled customer relations, addressing requests, disputes,
                    and inquiries. Additionally, I oversaw driver management and
                    conducted regular audits to evaluate their performance.
                    Another aspect of my role involved handling billing,
                    ensuring accurate and timely invoicing. Lastly, I was
                    involved in fleet management, overseeing the administration
                    and maintenance of the vehicle fleet. These responsibilities
                    developed my skills in analysis, customer service and
                    organization.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 pr-md-0">
                <div className="sub-content sub-content-right">
                  <h5 className="text-uppercase main-font text-blue">
                    Details
                  </h5>
                  <p className="alt-font">
                    Orléans - France
                    <img
                      src="./public/assets/icons/timeline/pin.svg"
                      alt="location icon"
                    />
                  </p>
                  <p className="alt-font">
                    Permanent contract
                    <img
                      src="./public/assets/icons/timeline/contract.svg"
                      alt="contract icon"
                    />
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li data-date="09/09/2017">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  01 November 2019
                </h4>
                <h2 className="main-font">I got promoted as Quality Manager</h2>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-12 pl-md-0">
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    Introduction
                  </h5>
                  <p className="alt-font">
                    I quickly established myself as a reliable and diligent
                    professional. Through consistent dedication and delivering
                    good results, I earned a promotion. As I transitioned into
                    my new role, I embraced the opportunity to take on greater
                    responsibilities and challenges.
                  </p>
                </div>
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    About my position
                  </h5>
                  <p className="alt-font">
                    As a Quality Manager, I was responsible for analyzing
                    quality indicators, utilizing tools like Power BI, and
                    implementing corrective actions in collaboration with the
                    operations team. I also excelled in optimizing driver route
                    network costs, contributing to cost-effective operations.
                    Moreover, I played a key role in training and mentoring new
                    operators, ensuring adherence to operating procedures.{" "}
                    <br />
                    Additionally, I successfully managed the process of
                    calculating quotes and implementing services for new
                    clients. Lastly, I conducted periodic audits of driver
                    performance to maintain high-quality standards. These skills
                    in analysis, optimization, training, and management are
                    transferable and valuable in various industries.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li data-date="24/10/2017">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  01 September 2021
                </h4>
                <h2 className="main-font">
                  I Joined a crypto project as PR Lead
                </h2>
              </div>
              <div className="main-content main-content-right text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  Project
                </h4>
                <h4 className="main-font">Avian Network (AVN)</h4>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-9 pl-md-0">
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    Introduction
                  </h5>
                  <p className="alt-font">
                    I first stepped into the crypto currency world back in
                    autumn 2017. Being at the beginning of my professionnal
                    career i wasn't able to go deeper on the subject. In summer
                    2021, i decided to return to crypto with the wish to join a
                    project.
                  </p>
                </div>
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    About my position
                  </h5>
                  <p className="alt-font">
                    As a public relations lead, my role was to manage and
                    improve the public image and reputation of Avian Network, a
                    very new crypto project. <br />I developped PR campaigns,
                    built relationships with youtubers &amp; community members,
                    and communicated key messages effectively. My goal was to
                    shape perception, build trust, and maintain positive
                    community relationships together with the PR team.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 pr-md-0">
                <div className="sub-content sub-content-right">
                  <h5 className="text-uppercase main-font text-blue">
                    Details
                  </h5>
                  <p className="alt-font">
                    On the Blockchain
                    <img
                      src="./public/assets/icons/timeline/pin.svg"
                      alt="location icon"
                    />
                  </p>
                  <p className="alt-font">
                    Freelance - unpaid
                    <img
                      src="./public/assets/icons/timeline/contract.svg"
                      alt="contract icon"
                    />
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li data-date="02/11/2017">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  01 November 2021
                </h4>
                <h2 className="main-font">
                  I got promoted as Project Coordinator
                </h2>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-12 pl-md-0">
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    Introduction
                  </h5>
                  <p className="alt-font">
                    With Avian Network popularity going up and the team growing
                    up, a role of Project Coordinator opened up. This new
                    position was for me the opportunity to learn more about
                    crypto but also about managing a projet and bring it to
                    success with the team.
                  </p>
                </div>
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    About my position
                  </h5>
                  <p className="alt-font">
                    As a project coordinator, my role was to oversee and
                    facilitate the successful execution of AVN. I coordinated
                    activities, timelines, and resources, ensuring efficient
                    collaboration among team members. I tracked progress via
                    weekly meetings, communicated updates to the community and
                    partners such as crypto exchanges. <br />
                    Additionally, I assisted the marketing team with the
                    creation of designs such as the wallet, budgeted, and
                    contibuted to the creation of the white paper. Ultimately,
                    my focus was on driving the project efficiency, maintaining
                    clear communication, and supporting the team in achieving
                    their objectives.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li data-date="18/12/2017">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  03 January 2023
                </h4>
                <h2 className="main-font">
                  Resigned from my position at Avian Network
                </h2>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-12 pl-md-0">
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    Introduction
                  </h5>
                  <p className="alt-font">
                    After nearly two and a half years of being part of this
                    incredible crypto project as a project coordinator, this
                    choice was motivated to focus on the next chapter of my
                    life: being a web developer.
                  </p>
                </div>
                <div className="sub-content">
                  <h5 className="text-uppercase main-font text-blue">
                    Retrospective
                  </h5>
                  <p className="alt-font">
                    I have acquired a diverse set of skills that have shaped my
                    professional and personnal growth. This include project
                    management, communication, team work, adaptability to
                    changing environments, stakeholder relationship management,
                    problem-solving.
                    <br />
                    Additionally, I have honed my abilities in coordinating team
                    efforts, managing timelines, and navigating the challenges
                    inherent in the ever-evolving crypto landscape.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li data-date="27/12/2017">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  27 Febuary 2023
                </h4>
                <h2 className="main-font">
                  New chapter of my career in Web Development
                  <img
                    src="./public/assets/icons/timeline/star.svg"
                    alt="star icon"
                    className="pl-2.5"
                  />
                </h2>
              </div>
              <div className="main-content main-content-right text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  Pro. School
                </h4>
                <h4 className="main-font">Wild Code School</h4>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-9 pl-md-0">
                <div className="sub-content">
                  <p className="alt-font">
                    After a successful 10-year career in the transport industry,
                    I decided to pursue my true passion and embark on a journey
                    into web development. To kickstart this transition, I made
                    the decision to join a 5-month intensive training program at
                    Wild Code School. This experience allowed me to acquire the
                    foundations of web development and expand my knowledge in
                    this exciting domain. <br />
                    With a solid background in problem-solving and attention to
                    detail from my previous industry, I now bring a fresh
                    perspective to the field of web development. I am dedicated
                    to crafting innovative and user-centric solutions,
                    leveraging my diverse background to create impactful digital
                    experiences. Ready to take on new challenges and collaborate
                    with like-minded professionals in the web development
                    community.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 pr-md-0">
                <div className="sub-content sub-content-right">
                  <h5 className="text-uppercase main-font text-blue">
                    Details
                  </h5>
                  <p className="alt-font">
                    Remote
                    <img
                      src="./public/assets/icons/timeline/pin.svg"
                      alt="location icon"
                    />
                  </p>
                  <p className="alt-font">
                    Training
                    <img
                      src="./public/assets/icons/timeline/contract.svg"
                      alt="contract icon"
                    />
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li data-date="10/01/2018">
            <div className="timeline-header">
              <div className="main-content text-uppercase">
                <h4 className="text-blue main-font font-weight-normal">
                  27 July 2023
                </h4>
                <h2 className="main-font">End of my training in Web dev</h2>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col-12 col-md-9 pl-md-0">
                <div className="sub-content">
                  <p className="alt-font">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Curabitur
                    mollis bibendum luctus. Duis suscipit vitae dui sed
                    suscipit.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 pr-md-0">
                <div className="sub-content sub-content-right">
                  <h5 className="text-uppercase main-font text-blue">
                    Things I learned
                  </h5>
                  <div className="languages">
                    <img
                      src="./public/assets/icons/language/css.svg"
                      alt="CSS icon"
                    />
                    <img
                      src="./public/assets/icons/language/html.svg"
                      alt="HTML icon"
                    />
                    <img
                      src="./public/assets/icons/language/js.svg"
                      alt="JavaScript icon"
                    />
                    <img
                      src="./public/assets/icons/language/nodejs.svg"
                      alt="NodeJS icon"
                    />
                    <img
                      src="./public/assets/icons/language/tailwind.svg"
                      alt="TailwindCSS icon"
                    />
                    <img
                      src="./public/assets/icons/language/sass.svg"
                      alt="Sass icon"
                    />
                    <img
                      src="./public/assets/icons/language/mysql.svg"
                      alt="MySQL icon"
                    />
                    <img
                      src="./public/assets/icons/language/express.svg"
                      alt="Express icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
