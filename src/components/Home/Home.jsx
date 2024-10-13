import React from 'react'
import "./Home.css"
import Home1 from "../../assets/home1.png"
import Home2 from "../../assets/home2.png"
import Home3 from "../../assets/home3.png"
import Home4 from "../../assets/home4.png"
import Home5 from "../../assets/home5.png"
import Home6 from "../../assets/home6.png"
import Home7 from "../../assets/home7.png"
import Home8 from "../../assets/home8.png"
import Home9 from "../../assets/home9.png"
import Bussinesman from "../../assets/bussinesman.png"

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-content">
            <div className="home-blog-content">
                <div className="home-content-title">
                    <p>Home| Bootcamp</p>
                    <h1>Bootcamp Program</h1>
                </div>
                <div className="home-content-image">
                    <img src={Bussinesman} alt="" />
                </div>
            </div>
        </div>
        <div className="home-list-menu">
            <div className="list-menu">
                <img src={Home1} alt="" />
                <p>Bussiness</p>
            </div>
            <div className="list-menu">
                <img src={Home2} alt="" />
                <p>Command prom</p>
            </div>
            <div className="list-menu">
                <img src={Home3} alt="" />
                <p>Language</p>
            </div>
            <div className="list-menu">
                <img src={Home4} alt="" />
                <p>Anounment</p>
            </div>
            <div className="list-menu">
                <img src={Home5} alt="" />
                <p>Graph</p>
            </div>
            <div className="list-menu">
                <img src={Home6} alt="" />
                <p>Collect</p>
            </div>
            <div className="list-menu">
                <img src={Home7} alt="" />
                <p>Photography</p>
            </div>
            <div className="list-menu">
                <img src={Home8} alt="" />
                <p>Office</p>
            </div>
            <div className="list-menu">
                <img src={Home9} alt="" />
                <p>Books</p>
            </div>
        </div>
    </div>

  )
}

export default Home