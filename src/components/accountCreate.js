// AuthPage.js
import React from 'react';
import "../styles/css/accountCreate.css"
import logo from '../assets/images/food_logo.jpg'



function AuthPage() { 
  return (

      <div className='auth_body'>
          <div className='auth_container'>

              <div className='top_'>
                  <div className='logo_container'>
                        <a href ="/" className='brand_logo'><img src={logo} alt="FOODJET"/></a> 
                  </div>

                  <div className='spacerbtw'></div>
                  <div className='Signup_div'>
                  < a href='/register'><button className='signUp_btn'>Register</button></a>
                  </div>
                

              </div>

              <div className='login_sections'>
              <div className='logons'>
                  <div className='login_title'>
                      <span className='login_account_'>Log in to your account</span>

                      <div className='socials_opt'>
                        <span className='log_in_with'>Log in with</span>

                        <div className='icons'>

                            <a href ="/" className='brand_logo'>
                              <span className='fb_icon'></span>
                            </a> 

                            <a href ="/" className='brand_logo'>
                              <span className='gg_icon'></span>
                            </a> 

                            <a href ="/" className='brand_logo'>
                              <span className='ap_icon'></span>
                            </a> 
                          
                        </div>
                      
                      </div>
                      
                  </div>

                  <div className='forms_'>
                    <form >
                      <div className='inputs_forms'>
                          <input type='text' id='l_name' name='login_name' placeholder='Username or Email'/>
                          <input type='password' id='pwd' name='pwd' placeholder='Password'/>
                      </div>

                      <div className='below_opts'>
                        <span className='forgot_p'>Forgot password?</span>

                        <button className='login_done'>Log in</button>
                      </div>

                    </form>
                  </div>

              </div>

                <div className='illustration'>

                </div>

              </div>
          </div>
        </div>


   
  );
}

export default AuthPage;
