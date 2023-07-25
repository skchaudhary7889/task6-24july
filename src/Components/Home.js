import React from 'react'
import "./style.css"
import Contact from './Contact';
const Home = () => {
  return (
    <>
    
    {/* <header id="header">
      <div className="header-content-div">
        <a href="#home-sec">
          <img
            src="https://i.ibb.co/KsztxWq/logo1.png"
            alt="Company Logo"
            id="header-img"
        /></a>
        <nav id="nav-bar">
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#varieties" className="nav-link">VARIETIES</a>
          <a href="#our-service" className="nav-link">OUR SERVICE</a>
          <a href="#benefits" className="nav-link">BENEFITS</a>
        </nav>
      </div>
    </header> */}
    <main>
      <section id="home-sec" className="flexible home-sec">
        <div className="eye-grabber-img">
          <img src="https://i.ibb.co/T4czpqY/apples-red-fresh-mellow-juicy-perfect-whole-on-white-desk.jpg" alt="Image of Apples" />
        </div>
        <div className="eye-grabber">
          <h1>Fresh, Crispy, Heavenly.</h1>
          <h2>
            100% Organic, vivid varieties of apples grown in Kashmir aka The
            Heaven of Earth.
          </h2>
          <button className="btns" onclick="window.location.href = '#contact';">
            Buy Now
          </button>
        </div>
      </section>
      <section id="about" className="sec-padding">
        <h3 className="section-heading">ABOUT US</h3>
        <div className="sec-content-div flexible">
          <p>
            We are a group of people with decades of experience in growing and
            selling apples. We know what a good apple looks like and how they
            are grown. This essential fruit requires a temperate climate, loamy
            soil that is rich in organic matter apart from needing proper
            drainage and aeration facilities. Lucky for us we live in Kashmir
            which is proudly known as paradise of earth is also home to
            temperate fruits like apple for which the state is very famous
            across globe. The main factor which influence temperate fruit
            bearing trees is soil, climate and environment which are highly
            favorable and unparalleled in the province of Kashmir. Kashmiri
            apples a unique look, taste, flavor, size and color.
          </p>
          <img src="https://i.ibb.co/SyKVC8M/about-img.jpg" alt="A man plucking apples from the tree" />
        </div>
      </section>
      <section id="varieties" className="sec-padding">
        <h3 className="section-heading">VARIETIES</h3>
        <div className="sec-content-div flexible">
          <div className="tile">
            <img src="https://i.ibb.co/t2x706V/amber.jpg" alt="photo of amber apples" />
            <h4>Amber</h4>
            <p>
              This red, medium-sized fruit becomes fully ripe in mid-October. It
              is mostly grown in Shopian and Kulgam.
            </p>
          </div>
          <div className="tile">
            <img
              src="https://i.ibb.co/H4Cnh7v/american-trel.png"
              alt="photo of american trel apples"
            />
            <h4>American Trel</h4>
            <p>
              A small, rounded, very crispy and sweet fruit variety that ripens
              in mid-September.
            </p>
          </div>
          <div className="tile">
            <img src="https://i.ibb.co/jTDgqYB/red-delicious.png" alt="photo of red delicious apple" />
            <h4>Red Delicious</h4>
            <p>
              A very popular and widely cultivated variety of apple that ripens
              in mid-September. Its flesh is greenish white, grainy and juicy.
            </p>
          </div>
          <div className="tile">
            <img src="https://i.ibb.co/MSvg1QN/maharaja.png" alt="photo of Maharaej apples" />
            <h4>Maharaej</h4>
            <p>
              A large apple with red and green color. It tastes a bit sour but
              sweetens with time and is available by late October.
            </p>
          </div>
          <div className="tile">
            <img src="https://i.ibb.co/zVR1LB2/hazal.png/" alt="photo of Hazratbael apples" />
            <h4>Hazratbael</h4>
            <p>
              A quickly perishable variety that ripens in early July. It is the
              oldest variety of apples cultivated in the valley and is mostly
              consumed domestically
            </p>
          </div>
          <div className="tile">
            <img src="https://i.ibb.co/BNFrnZn/golden.png" alt="photo of Golden Delicious apples" />
            <h4>Golden Delicious</h4>
            <p>
              A variety with comparatively longer shelf life, it is crispy,
              juicy and has thick greenish-white flesh which turns golden upon
              ripening. It is available till January.
            </p>
          </div>
        </div>
      </section>
      <section id="our-service" className="sec-padding">
        <h3 className="section-heading">OUR SERVICE</h3>
        <div className="sec-content-div">
          <div className="bars">
            <div className="icon-container">
              <img src="https://i.ibb.co/w6H542X/Fresh.png" alt="" />
            </div>
            <div className="txt-container">
              <h5>Fresh</h5>
              <p>We deliver fresh apples with a 100% guarantee of freshness.</p>
            </div>
          </div>
          <div className="bars">
            <div className="icon-container">
              <img src="https://i.ibb.co/FKNq4Qr/delivered.png" alt="" />
            </div>
            <div className="txt-container">
              <h5>Fast</h5>
              <p>
                We deliver your orders as fast as possible, delivery procedure
                begins as soon as apple is plucked from tree.
              </p>
            </div>
          </div>
          <div className="bars">
            <div className="icon-container">
              <img src="https://i.ibb.co/HHQK1wV/happy.png" alt="" />
            </div>
            <div className="txt-container">
              <h5>Satisfying</h5>
              <p>
                We guarantee 100% customer satisfaction. We do our best to make
                your purchase experience smooth. But if we mess up somehow you
                will get compensated for every inconvenience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="benefits" className="sec-padding">
        <h3 className="section-heading">BENEFITS</h3>
        <div className="sec-content-div flexible">
          <iframe
            id="video"
            width="560"
            title="Benefits of Apple"
            height="315"
            src="https://www.youtube.com/embed/W_JOJNztrnI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      {/* <section className="sec-padding" id="contact">
        <h3 className="section-heading">CONTACT</h3>
        <div className="sec-content-div flexible">
          <h6>To make an order or just to know more contact us :</h6>
          <form
            id="form"
            action="https://www.freecodecamp.com/email-submit"
            method="POST"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
              required
            />
            <input type="submit" className="btns  " id="submit" value="Know More" />
          </form>
        
        </div>
      
      </section> */}
      <Contact/>
    </main>
    <footer>
      Created by
      <a href="#">Mohd Shariq</a>
    </footer>
  
    </>
  )
}

export default Home;