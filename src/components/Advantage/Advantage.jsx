import React from 'react'
import "./Advantage.css"
import Images from "../../assets/laptop.png"

const Advantage = () => {
  return (
    <div className='advantage-container'>
        <div className="advantage-content">
            <div className="advantage-description">
                <h1>The Advantage of the upskill Program.</h1>
                <div className="advantage-item">
                    <div className="advantage-item-left">
                        <div className="advantage-itim-right-content">
                                <h3>Revant Skill Set</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="advantage-itim-right-content">
                                <h3>1-on-1 Mentening</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="advantage-item-right">
                        <div className="advantage-itim-right-content">
                            <h3>Glowth Mindset</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="advantage-itim-right-content">
                            <h3>Haring Partners</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="advantage-image">
                <div className="advantage-image-content">
                  
                </div>
                <img src={Images} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Advantage