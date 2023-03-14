import React from 'react'
import '../Styles/Homepage.css'
import Slider from './Slider'
import plan1 from '../images/plan-1.jpg'

function Homepage() {
  return (
    <div>
        < Slider />
        <div className="container">
            <div className="left">
                <h2>Our Hot <span>Features</span> </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
                ex eget turpis feugiat, vel placerat elit eleifend. Praesent
                hendrerit dolor sed mauris posuere tincidunt. Donec eget purus
                tincidunt, volutpat risus ut, dictum lacus.
                </p>
            </div>
            <div className="middle">
                <img src= { plan1 } alt="placeholder" className="image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
                    ex eget turpis feugiat, vel placerat elit eleifend. Praesent
                    hendrerit dolor sed mauris posuere tincidunt. Donec eget purus
                    tincidunt, volutpat risus ut, dictum lacus.
                </p>

                <img src= { plan1 } alt="placeholder" className="image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
                    ex eget turpis feugiat, vel placerat elit eleifend. Praesent
                    hendrerit dolor sed mauris posuere tincidunt. Donec eget purus
                    tincidunt, volutpat risus ut, dictum lacus.
                </p>
            </div>
            <div className="right">
                <img src={ plan1 } alt="placeholder" className="image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
                    ex eget turpis feugiat, vel placerat elit eleifend. Praesent
                    hendrerit dolor sed mauris posuere tincidunt. Donec eget purus
                    tincidunt, volutpat risus ut, dictum lacus.
                </p>
                <img src={ plan1 } alt="placeholder" className="image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
                    ex eget turpis feugiat, vel placerat elit eleifend. Praesent
                    hendrerit dolor sed mauris posuere tincidunt. Donec eget purus
                    tincidunt, volutpat risus ut, dictum lacus.
                </p>
            </div>        
        </div>

        <div className="hr-line"></div>

        <div className="container">
            <div className="left">
                <h2>Our Hot <span>Features</span> </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
                ex eget turpis feugiat, vel placerat elit eleifend. Praesent
                hendrerit dolor sed mauris posuere tincidunt. Donec eget purus
                tincidunt, volutpat risus ut, dictum lacus.
                </p>
            </div>
            <div className="middle">
                <img src= { plan1 } alt="placeholder" className="image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
                    ex eget turpis feugiat, vel placerat elit eleifend. Praesent
                    hendrerit dolor sed mauris posuere tincidunt. Donec eget purus
                    tincidunt, volutpat risus ut, dictum lacus.
                </p>

                <img src= { plan1 } alt="placeholder" className="image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
                    ex eget turpis feugiat, vel placerat elit eleifend. Praesent
                    hendrerit dolor sed mauris posuere tincidunt. Donec eget purus
                    tincidunt, volutpat risus ut, dictum lacus.
                </p>
            </div>
            <div className="right">
                <img src={ plan1 } alt="placeholder" className="image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
                    ex eget turpis feugiat, vel placerat elit eleifend. Praesent
                    hendrerit dolor sed mauris posuere tincidunt. Donec eget purus
                    tincidunt, volutpat risus ut, dictum lacus.
                </p>
                <img src={ plan1 } alt="placeholder" className="image" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
                    ex eget turpis feugiat, vel placerat elit eleifend. Praesent
                    hendrerit dolor sed mauris posuere tincidunt. Donec eget purus
                    tincidunt, volutpat risus ut, dictum lacus.
                </p>
            </div>        
        </div>


    </div>
  )
}

export default Homepage