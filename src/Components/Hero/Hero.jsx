import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_content">
          <h1>Welcome to BlogWise</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis fugit numquam aperiam eveniet dolore excepturi <br />
          veniam quod architecto modi, expedita eligendi sit neque perspiciatis recusandae</p>
          <button className="cta-button">Read Our Latest Blog Post</button>
        </div>
      </div>
    </div>
  )
}

export default Hero