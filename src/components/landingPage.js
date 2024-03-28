import React from 'react';
import Header from './header';
import ImageSlide from './imageslide';
import "../styles/css/landingPage.css";
import "../styles/css/imageCarousel.css"
import { ReactComponent as GooglePlayIcon } from '../assets/icons/icons8-play-store.svg';
import { ReactComponent as AppleStore } from '../assets/icons/icons8-app-store.svg';

const LandingPage = () => {

  return (
    <div className="App" >
      <Header />

      <div className='section_one'>
      <ImageSlide/>        
      </div>

      <div className='spacer_10'></div>

      <div className='food_region'>

        <h2 className='disc'>Discover a new taste</h2>

        <div className='meal_cat'> 
        
          <div className='Eastern space f-1'>
            <div className='m-1 color_1'> <span className='image_one'></span></div>
            <p>Eastern meals</p>
          </div>

          <div className='Southern space f-1'>
          <div className='m-1 color_2'> <div className='image_two two'></div></div>
            <p>Southern meals</p>
          </div>

          <div className='Nothern space f-1'>
          <div className='m-1 color_3'> <div className='image_three'></div></div>
            <p>Nothern meals</p>
          </div>

          <div className='Western space f-1'>
          <div className='m-1 color_4'> <div className='image_four'></div></div>
            <p>Western meals</p>
          </div>

          <div className='Snack space f-1'>
          <div className='m-1 color_5'> <div className='image_five'></div></div>

            <p>Snacks</p>
          </div>

          <div className='Drinks space f-1'>
          <div className='m-1 color_6'> <div className='image_six'></div></div>
            <p>Drinks</p>
          </div>

        </div>


      </div>

      <div className='space_24'></div>

      <div className='section_three'>
        <div className='b'>

            {/* downlaod appps */}
            <div className='download_app_delivery square_size'>
            <h4>Download our apps for better use.Track your meals to your door step </h4>
            
            <div className='download-btns'>
                
                      <a href='/' className='btns_a'>

                        <div className='google_play'>
                          <GooglePlayIcon className='svg-icon'/>
                          <div className='tog'>
                            <span className='get-it-on'>Get it on</span>
                            <span className='google-play-span'>Google Play</span>
                          </div>
                          
                        </div>
                      </a>

                      <a href='/' className='btns_a'>

                        <div className='app_store'>
                          <AppleStore className='svg-icon'/>
                          <div className='tog'>
                            <span className='Download-on'>Download on the </span>
                            <span className='app-store-span'>App Store</span>
                          </div>
                        </div>
                      </a>


              </div>       
            

            </div>

            {/* Add your resturant or business */}
            <div className='join_us square_size '>
              <h4>
              Join FoodJets and share your cultures and delicacies with our customers. We handle deliveries focus on the meals
              </h4>
              <button className='join_us_btn'>Get started  </button>
            </div>

            {/* Earn as a rider */}
            <div className='earn_rider square_size'>
              <h4>
              Looking to make extra income. You have come to the right place. Ride with us.Sign up to be a rider with FJ
              </h4>
              <button className='join_us_btn'>Get started  </button>
            </div>

            {/* Order lunch for the whole office ata specified time everyweek */}
            <div className='lunch_break square_size'>
              <h4>
                Order lunch and enjoy a stress free work break. We deliver fast
              </h4>
              <button className='join_us_btn'>Get started  </button>
            </div>

              {/* Gift Cards and coupons */}
            <div className='gift_cards square_size'>
              <h4>
                Treat your freinds and family. Get our popular gift cards.
              </h4>
              <button className='join_us_btn'>Order Yours  </button>
            </div>

        </div>

      </div>
      <div className='space_24'></div>
      <div className='section_four'>
        <div className='footer'>
            <div className='box_one'>
              <h2>Discover Us</h2>
                <ul>
                  <li> About us</li>
                  <li>Investors</li>
                  <li>Newsroom</li>
                  <li>Careers</li>
                </ul>
            </div>

            <div className='box_2'>
              <h2>Legal</h2>
              <ul>
              <li>Public Authority Requests</li>
              <li>Modern Slavery Statement</li>
              <li>Terms and conditions</li>
              <li>Tax Strategy</li>
              <li>Privacy</li>
              <li>Cookies</li>
              </ul>
            </div>

            <div className='box_3'>
              <h2>Help</h2>
              <ul>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>

          </div>
      <span>2024 @ace</span>
      </div>


    </div>

    );
}

export default LandingPage;
