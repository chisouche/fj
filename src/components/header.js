import React, { useState, useEffect, useRef} from 'react';
import "../styles/css/header.css"
import logo from '../assets/images/food_logo.jpg'

const Header = () => {
    //toggle component for the menu
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    }, []);




    return (
    <header className='site_header'>
        <div className='wrapper'>
            <nav className="navigation">
                <div className="dropdown" ref={dropdownRef}>
                    <div className={`dropbtn ${showDropdown ? 'active' : ''}`} onClick={toggleDropdown}>
                        <div className={showDropdown ? 'icon-1 a' : 'icon-1'}></div>
                        <div className={showDropdown ? 'icon-2 b' : 'icon-2'}></div>
                        <div className={showDropdown ? 'icon-3 c' : 'icon-3'}></div>
                    </div>
                </div>

                <div className={`dropdown-container ${showDropdown ? 'show' : ''}`} id="dropdownContent">
                    <div className='drop-content'>
                        <div className='nav-logo'>
                            <a href ="/" className='brand_logo'><img src={logo} alt="FOODJET"/></a> 
                            <p className='span_a'>Get Your Favorites Faster: Download Now for Speedy Deliveries!</p>
                            
                            <div className="download">
                                <a href='/'>
                                <span className='one'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="50" viewBox="0 0 48 48">
                                    <linearGradient id="jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1" x1="1688.489" x2="1685.469" y1="-883.003" y2="-881.443" gradientTransform="matrix(11.64 0 0 22.55 -19615.32 19904.924)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#047ed6"></stop><stop offset="1" stopColor="#50e6ff"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1)" fillRule="evenodd" d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z" clipRule="evenodd"></path><linearGradient id="jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2" x1="1645.286" x2="1642.929" y1="-897.055" y2="-897.055" gradientTransform="matrix(9.145 0 0 7.7 -15001.938 6931.316)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffda1c"></stop><stop offset="1" stopColor="#feb705"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2)" fillRule="evenodd" d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z" clipRule="evenodd"></path><linearGradient id="jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3" x1="1722.978" x2="1720.622" y1="-889.412" y2="-886.355" gradientTransform="matrix(15.02 0 0 11.5775 -25848.943 10324.73)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d9414f"></stop><stop offset="1" stopColor="#8c193f"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3)" fillRule="evenodd" d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561" clipRule="evenodd"></path><linearGradient id="jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4" x1="1721.163" x2="1722.215" y1="-891.39" y2="-890.024" gradientTransform="matrix(15.02 0 0 11.5715 -25848.943 10307.886)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#33c481"></stop><stop offset="1" stopColor="#61e3a7"></stop></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4)" fillRule="evenodd" d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z" clipRule="evenodd"></path>
                                </svg>
                                    Android
                                </span>
                                </a>

                                <a href='/'>
                                    <span className='two'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="50" viewBox="0 0 48 48">
                                        <linearGradient id="hlWX3vESs0eSKhHV_ppbBa_bCu25JrJ39EB_gr1" x1=".081" x2="50.487" y1="2.176" y2="52.582" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#262626" stopOpacity="0"></stop><stop offset="1" stopColor="#262626" stopOpacity=".8"></stop></linearGradient><path fill="url(#hlWX3vESs0eSKhHV_ppbBa_bCu25JrJ39EB_gr1)" d="M42.906,33.283c-1.034,2.289-1.529,3.313-2.857,5.336c-1.855,2.825-4.475,6.351-7.714,6.375	c-2.881,0.024-3.624-1.88-7.534-1.848c-3.91,0.019-4.724,1.883-7.608,1.854c-3.239-0.029-5.718-3.206-7.575-6.026	c-5.193-7.911-5.741-17.182-2.531-22.116c2.27-3.498,5.864-5.552,9.237-5.552c3.436,0,5.595,1.888,8.436,1.888	c2.756,0,4.435-1.893,8.409-1.893c3.005,0,6.183,1.637,8.454,4.463C34.195,19.834,35.401,30.444,42.906,33.283z"></path><linearGradient id="hlWX3vESs0eSKhHV_ppbBb_bCu25JrJ39EB_gr2" x1="17.19" x2="36.29" y1="-4.022" y2="15.078" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#262626" stopOpacity="0"></stop><stop offset="1" stopColor="#262626" stopOpacity=".8"></stop></linearGradient><path fill="url(#hlWX3vESs0eSKhHV_ppbBb_bCu25JrJ39EB_gr2)" d="M29.801,8.127c1.428-1.833,2.511-4.418,2.118-7.055c-2.33,0.159-5.054,1.646-6.645,3.573	c-1.441,1.754-2.637,4.36-2.171,6.881C25.644,11.607,28.274,10.093,29.801,8.127z"></path>
                                    </svg>
                                    Iphone
                                    </span>
                                </a>
                            </div> 
                            
                        
                        </div>

                        
                        {/* when user has logged in  */}


                        <div className='menu_list'>
                            {/* <a className='menu' href="/">Home</a>
                            <a className='menu' href="/">About</a>
                            <a className='menu' href="/">Services</a>
                            <a className='menu' href="/">Contact</a>  */}

                            <a className='menu' href="/">Become a partner</a>
                            <div className='spacer_2'></div>
                            <a className='menu' href="/">How it works</a>
                            <div className='spacer_2'></div>
                            <a className='menu' href="/">Join our delivery team</a>
                            <div className='spacer_2'></div>
                            <a className='menu' href="/">Help and Support</a>
                            
                    

                            <div className='btn ' id='btn'>
                                <button className='btn_login btn0  btn_effect' ><a href='/login'>Login</a></button>
                                <button className='btn_signup btn0 btn_effect'><a href='/Login'>Sign up</a></button>
                            </div>
                        </div>


                    </div>
                </div>



            </nav>
            {showDropdown && <div className='overlay' onClick={toggleDropdown}></div>}
        


                <div className='logo_container'>
                    <a href ="/" className='brand_logo'><img src={logo} alt="FOODJET"/></a> 
                </div>
        
                <div className='btn'>
                <button className='btn_login btn0'><a href='/login'>Login</a></button>
                <button className='btn_signup btn0'><a href='/'>Sign up</a></button>
                </div>
                
        </div>
    </header>
    );
}



export default Header;
