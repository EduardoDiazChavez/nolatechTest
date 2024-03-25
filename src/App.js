
import React from "react";
import Slider from "react-slick";
import './index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TfiYoutube } from "react-icons/tfi";
import { FaTiktok } from "react-icons/fa";




const DataSecondCard = [
  {
    img: "/imgs/Pic2.png",
    button: "LOREM IPSUM",
    alt: "Pic2"
  },
  {
    img: "/imgs/Pic3.png",
    button: "LOREM IPSUM",
    alt: "Pic3"
  },
  {
    img: "/imgs/Pic4.png",
    button: "LOREM IPSUM",
    alt: "Pic4"
  },
]

function App() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="boddy">
      <header className="header">
        <div>
          <span className='isLive'> Live </span>
          <span> Lorem ipsum dolor sit amet</span>
          <span className='isJoin'>JOIN NOW!</span>
        </div>
      </header>
      <section className='nav'>
        <img className='Navbackground' src='/imgs/Prb_Header.png' alt='Home' />

        <div className='headerNav'>
          <img className='iconHeadernNav' src='/imgs/icongrab.png' alt='LogoGrab' />
          <div className='routeNav'>
            <div className='route'> LOREM IPSU</div>
            <div className='route'> LOREM IPSU</div>
            <div className='route'> LOREM IPSU</div>
            <div className='route'> LOREM IPSU</div>
            <div className='route'> LOREM IPSU</div>
            <div className='route'> LOREM IPSU</div>
          </div>
        </div>

        <div className='bodyNav '>
          <div className='contentNavBody'>
            <label className='bodyNavTitle'>LOREM IPSUM</label>
            <label className='bodyNavTitle2'>LOREM IPSUM DOLOR</label>
            <label className='bodyNavTitle'>LOREM IPSUM</label>
          </div>

          <button type='button' className='bodyNavButton' >WHAT IS NEXT</button>
        </div>

        <div className='footerNav'>

          <label className='footerContenTextNav'>
            Lorem ipsum dolor sit<br /> amet, consetetur
          </label>

          <div className='footerContenTimeNav '>
            <div className='blockTime divider   '>
              <span className='blockTitle '>
                170
              </span>
              <label className='blockSpan'>
                days
              </label>
            </div>
            <div className='blockTime  divider  '>
              <span className='blockTitle '>
                13
              </span>
              <label className=' blockSpan'>
                hours
              </label>
            </div>
            <div className='blockTime divider  '>
              <span className='blockTitle '>
                39
              </span>
              <label className=' blockSpan'>
                minutes
              </label>
            </div>
            <div className='blockTime  divider '>
              <span className='blockTitle '>
                29
              </span>
              <label className=' blockSpan'>
                seconds
              </label>
            </div>
          </div>

        </div>


      </section>
      <section className='firtsCard'>
        <div className='textFirst'>
          <h1>
            Lorem ipsum dolor sit amet
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          </p>
        </div>
        <img src='/imgs/Pic1.png' alt='' className='imageFirstCard' />
      </section>
      <section className='secondCard'>
        <div className='textSecond'>
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>

        </div>
        <div className='secondCardContent'>
          {
            DataSecondCard.map((item, idx) => (
              <div key={idx} className='card'>
                <img src={item.img} alt={item.alt} className='cardImge' />
                <button className='btnCard'>
                  {item.button}
                </button>
              </div>
            ))
          }
        </div>
        <button className='btnSecondCard'>
          LEARN MORE
        </button>

      </section>
      <section className='threeCard'>
        <div className='threeCardContent'>
          <p className='textCardThree'>
            Lorem ipsum
            dolor sit
            amet,
            consetetur
          </p>
          <button className='btnThreeCard'>
            LOREM IPSUM DOLOR SIT
          </button>
          <button className='btnThreeCard2'>
            LOREM IPSUM DOLOR SIT
          </button>
        </div>

        <img src='/imgs/Pic5.png' alt='threeCardImage' className='threeCardImage' />

      </section>
      {/* <section className='fourCard'>
        <div className='fourCardContent'>
          <div className='fourCardFile'>
            Lorem ipsum dolor sit amet, consetetur
          </div>
          <div>
            Lorem ipsum dolor sit amet, consetetur
          </div>
          <div>
            Lorem ipsum dolor sit amet, consetetur
          </div>
          <div>
            Lorem ipsum dolor sit amet, consetetur
          </div>
          <div>
            Lorem ipsum dolor sit amet, consetetur
          </div>
          <div>
            Lorem ipsum dolor sit amet, consetetur
          </div>
        </div>
        <button className='btnFourCard'>
          VIEW ALL
        </button>
      </section> */}
      <section className='fiveCard'>

        <img className='Navbackground' src='/imgs/Join Us.png' alt='Home' />
        <div className='formFiveCard'>

          <label className='titleForm'> JOIN US.</label>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>

          <div className=' blockform '>
            <input placeholder='Name' className='inputFormBasic' />
            <input placeholder='Surname' className='inputFormBasic' />
          </div>
          <div className='blockform'>
            <input placeholder='Phone' className='inputFormBasic' />
            <input placeholder='Email' className='inputFormBasic' />
          </div>
          <div className='blockform'>
            <input placeholder='Department' className='inputFormBasic' />
          </div>
          <div className='blockform'>
            <textarea rows={2} placeholder='Mensaje' className='inputFormBasic ' />
          </div>
          <div>

            <button className='btnStandar'>
              I’M IN
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>
      </section>
      <section className='sixCard'>
        <img className='sixCardbackground' src='/imgs/Pic6.png' alt='Home' />
        <div className='sixCardContent'>
          <h1 className='textCardSix' >
            Lorem ipsum<br />
            dolor sit
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua.
          </p>

          <button className='btnStandar'>
            VIEW ALL
          </button>
        </div>

      </section>
      <section className='sevenCard'>
        <h1>Lorem ipsum dolor sit amet</h1>
        <div>
          <Slider {...settings}>
            <div>
              <img src="/imgs/Pic7.png" />
            </div>
            <div>
              <img src="/imgs/Pic8.png" />
            </div>
            <div>
              <img src="/imgs/Pic9.png" />
            </div>
            <div>
              <img src="/imgs/Pic10.png" />
            </div>
          </Slider>
        </div>
        <button className="buttonSevenCard">
          VIEW ALL
        </button>
      </section>
      <section className="menuLateral">
        <div>
          <TiSocialFacebook />
        </div>
        <div>
          <TiSocialTwitter />
        </div>
        <div>
          <SlSocialInstagram />
        </div>
        <div>
        <TfiYoutube />
        </div>
        <div>
          <FaTiktok />
        </div>
      </section>
      <footer className="footer">
        <div>
          Lorem ipsum dolor sit amet, consetetur
          <br /> sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna
        </div>
        <div>
          <img src="/imgs/icongrab.png" className="iconHeadernNav" alt="icongrab" />
        </div>
        <div>
          All rights reserved to Lorem Ipsum© 2022
        </div>
      </footer>



    </div >
  );
}

export default App;
