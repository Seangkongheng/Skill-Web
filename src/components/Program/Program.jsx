import React from 'react'
import "./Program.css"
import Image from "../../assets/image.jpg"
import ImageWorking from "../../assets/working1.png"
import ImageWorking2 from "../../assets/working2.png"
import ImageWorking3 from "../../assets/working3.png"
import ImageWorking4 from "../../assets/working5.png"
const Program = () => {
  return (
    <div className='program-container'>
        <div className="program-content">
            <h1>Bootcamp Program</h1>
            <div className="program-list-card">
                
                <div className="program-card">
                    <button className='bingerner-button'>Bingerner</button>
                    <div className="program-card-image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="program-card-detail">
                        <div className="program-card-title">
                            <h3>Adobe Customer CC-Advantage training cours</h3>
                        </div>
                        <div className="program-card-des">
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </div>
                        <div className="program-card-star">
                            <div className="program-card-star-content">
                                <div className="star">
                                    <p>***** </p>
                                    
                                </div>
                                <div className="rating">
                                    <span>4.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="program-card-button">
                            <button className='btn-start-learning'>Start Learning</button>
                        </div>
                    </div>
                </div>
                <div className="program-card">
                    <button className='bingerner-button'>Bingerner</button>
                    <div className="program-card-image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="program-card-detail">
                        <div className="program-card-title">
                            <h3>Adobe Customer CC-Advantage training cours</h3>
                        </div>
                        <div className="program-card-des">
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </div>
                        <div className="program-card-star">
                            <div className="program-card-star-content">
                                <div className="star">
                                    <p>***** </p>
                                    
                                </div>
                                <div className="rating">
                                    <span>4.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="program-card-button">
                            <button className='btn-start-learning'>Start Learning</button>
                        </div>
                    </div>
                </div>
                <div className="program-card">
                    <button className='bingerner-button'>Bingerner</button>
                    <div className="program-card-image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="program-card-detail">
                        <div className="program-card-title">
                            <h3>Adobe Customer CC-Advantage training cours</h3>
                        </div>
                        <div className="program-card-des">
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </div>
                        <div className="program-card-star">
                            <div className="program-card-star-content">
                                <div className="star">
                                    <p>***** </p>
                                    
                                </div>
                                <div className="rating">
                                    <span>4.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="program-card-button">
                            <button className='btn-start-learning'>Start Learning</button>
                        </div>
                    </div>
                </div>
                <div className="program-card">
                    <button className='bingerner-button'>Bingerner</button>
                    <div className="program-card-image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="program-card-detail">
                        <div className="program-card-title">
                            <h3>Adobe Customer CC-Advantage training cours</h3>
                        </div>
                        <div className="program-card-des">
                            <p>Lorem, ipsum dolor sit amet consectetur </p>
                        </div>
                        <div className="program-card-star">
                            <div className="program-card-star-content">
                                <div className="star">
                                    <p>***** </p>
                                    
                                </div>
                                <div className="rating">
                                    <span>4.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="program-card-button">
                            <button className='btn-start-learning'>Start Learning</button>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        <div className="program-achiv-list">
                <div className="program-achiv-item">
                    <div className="program-achiv-image">
                        <img src={ImageWorking} alt="" />
                    </div>
                    <h1>CV & Resume Prep</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="program-achiv-item">
                    <div className="program-achiv-image">
                        <img src={ImageWorking2} alt="" />
                    </div>
                    <h1>Interview Catching</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="program-achiv-item">
                    <div className="program-achiv-image">
                        <img src={ImageWorking3} alt="" />
                    </div>
                    <h1>Buddy System</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="program-achiv-item">
                    <div className="program-achiv-image">
                        <img src={ImageWorking4} alt="" />
                    </div>
                    <h1>Carreer Opportunity</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
    </div>
  )
}

export default Program