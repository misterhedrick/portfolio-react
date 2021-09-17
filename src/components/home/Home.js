import React from "react";

const Home = () => {
  return (
    <div>
      <header id="main-header" className="main-header whiteNav hide-mobile">
        <div className="main-header-title" id="main-header-title">
          Daniel
        </div>
        <nav className="main-header-nav">
          <ul className="main-header-nav-items">
            <li className="main-header-nav-item">Home</li>
            <li className="main-header-nav-item">Me</li>
            <li className="main-header-nav-item">Languages</li>
            <li className="main-header-nav-item">Achievements</li>
            <li className="main-header-nav-item">Experience</li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="home-section photo-bg">
          <div className="container">
            <h1>SOFTWARE ENGINEER</h1>
          </div>
        </section>

        <section id="me" className="me-section">
          <div className="container">
            <div className="description">
              <h1 className="section-title hide-desktop">About Me</h1>
              <img
                src="../../assets/img/laptop-background.jpg"
                alt="Daniel Hedrick"
              />
              <h1 className="section-title hide-mobile">About Me</h1>
              <h4>
                If you are looking for someone who is going to sit in meetings
                or in an interview and talk technical terms then you've come to
                the wrong place but If you are looking for a hard working
                engineer that can deliver solutions and fix problems keep
                reading. I built this digital portfolio for a simple demonstrate
                some of the skills I know. This is a simple HTML / CSS built
                site hosted on
                <a href="https://www.netlify.com/">Netlify</a>. You can run a
                lighthouse scan in the chrome dev tools and see how high it
                scores. Most of the stuff in this app is pretty basic so if
                there is a specific skill or feature you would like to see or
                just recommend please just shoot me a message at
                <a href="mailto:misterhedrick@gmail.com">
                  misterhedrick@gmail.com
                </a>
                and I will be glad to take a look. I’m always looking to learn
                more and expand my skill set!! I have also built my portfolio
                using Angular / Spring Boot if you would like to see that
                version{" "}
                <a href="https://dhedrick-angular-portfolio.netlify.app">
                  {" "}
                  click here
                </a>
                . I also am in the process of rebuilding using React with a
                headless CMS to serve the content.
              </h4>
            </div>
          </div>
        </section>
        <section id="languages" className="languages-section photo-bg">
          <div className="container">
            <h1 className="section-title">I Can Code In</h1>
            <div className="list-container">
              <div className="col-wrap">
                <div className="pill">
                  <div className="pill-container">
                    <h2>Ajax</h2>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-container">
                    <h2>Angular</h2>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-container">
                    <h2>CSS(3)</h2>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-container">
                    <h2>HTML(5)</h2>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-container">
                    <h2>Java(8)</h2>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-container">
                    <h2>Javascript</h2>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-container">
                    <h2>JQuery</h2>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-container">
                    <h2>SQL</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="achievements" className="achievements-section">
          <div className="container">
            <h1 className="section-title">A Few Things I've Done</h1>
            <div className="list-container">
              <div className="col-wrap">
                <div className="achievement">
                  <i className="fas fa-circle"></i>
                  <h2>Lead Angular POC</h2>
                </div>
                <div className="achievement">
                  <i className="fas fa-circle"></i>
                  <h2>Lead Raspberry Pi POC</h2>
                </div>
                <div className="achievement">
                  <i className="fas fa-circle"></i>
                  <h2>
                    Held multiple lunch and learns teaching IT dept basic
                    Angular
                  </h2>
                </div>
                <div className="achievement">
                  <i className="fas fa-circle"></i>
                  <h2>Developed CMS for website</h2>
                </div>
                <div className="achievement">
                  <i className="fas fa-circle"></i>
                  <h2>Migrate website from JSP to JSF</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="experience-section photo-bg">
          <div className="container">
            <h1 className="section-title">Work Experience</h1>
            <div className="list-container">
              <div className="col-1">
                <div className="pill">
                  <div className="pill-bg">
                    <div className="pill-container">
                      <h2>CoreLogic</h2>
                      <h3>Software Engineer: June 2019 - Present</h3>
                      <ul>
                        <li>
                          Building responsive user interfaces using Bootstrap
                          and Flex
                        </li>
                        <li>
                          Added Angular unit testing to existing applications
                          using Jasmine
                        </li>
                        <li>
                          Working closely with UI/UX Design team to develop
                          wireframes
                        </li>
                        <li>
                          Contributing member of the team that is responsible
                          for building and maintaining the corporate Angular
                          component set
                        </li>
                        <li>
                          Building rest API’s using .Net Core and Springboot
                        </li>
                        <li>
                          Leading a POC working with Raspberry Pi’s and creating
                          Google Assistant Commands
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-bg">
                    <div className="pill-container">
                      <h2>Old Dominion Freight Line</h2>
                      <h3>Senior UI/UX Developer: Sept 2017 - June 2019</h3>
                      <ul>
                        <li>
                          Main point of contact for UI/UX development issues for
                          entire IT dept
                        </li>
                        <li>
                          Developed first Angular front end as POC to demo to
                          executive team
                        </li>
                        <li>
                          Built full custom Angular schematic for consistent app
                          creation using corporate standards and styling
                        </li>
                        <li>
                          Building responsive user interfaces using Foundation
                          and Bootstrap
                        </li>
                        <li>
                          Collaborated with diverse programming teams to
                          prototype and solve complex business problems
                        </li>
                        <li>Created containerized Docker front end UIs</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-bg">
                    <div className="pill-container">
                      <h2>Old Dominion Freight Line</h2>
                      <h3>Full Stack Developer: Feb 2012 - Sept 2017</h3>
                      <ul>
                        <li>
                          Building responsive user interfaces using Foundation
                          and Bootstrap
                        </li>
                        <li>
                          Production support including analyzing and repairing
                          defects
                        </li>
                        <li>
                          Designed, developed, and tested software using Agile
                          Scrum methodologies
                        </li>
                        <li>
                          Helped transition external website from JSP/WebSphere
                          to JSF/WebLogic
                        </li>
                        <li>Developed java functions using JSP and JSF</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pill">
                  <div className="pill-bg">
                    <div className="pill-container">
                      <h2>Old Dominion Freight Line</h2>
                      <h3>Edi Specialist: Mar 2010 - Feb 2012</h3>
                      <ul>
                        <li>Custom setups and mapping EDI Data</li>
                        <li>
                          Interact directly with customers for communications
                          solutions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer hide-desktop">
        <div className="main-footer-items">
          <div className="main-footer-item">
            <i className="fas fa-home fa-2x"></i>
          </div>
          <div className="main-footer-item">
            <i className="fas fa-user fa-2x"></i>
          </div>
          <div className="main-footer-item">
            <i className="fas fa-laptop-code fa-2x"></i>
          </div>
          <div className="main-footer-item">
            <i className="fas fa-tasks fa-2x"></i>
          </div>
          <div className="main-footer-item">
            <i className="fas fa-history fa-2x"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
