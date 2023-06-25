import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import {BsFillPlayCircleFill} from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About
            </p>
            <h1 className='primary-heading'>Food Is An Important Part Of A Balanced Diet</h1>
            <p className='primary-text'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, itaque. Nisi debitis deleniti similique rem. Nostrum dolor, vel soluta assumenda sit labore magni expedita recusandae ipsam perferendis vitae tempore veniam.</p>
            <p className='primary-text'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, blanditiis esse ad ut eveniet itaque voluptatibus, nobis magni mollitia veritatis fuga animi. Neque, culpa deserunt? Molestiae, sunt. Magni, non sapiente.</p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/> Watch Video</button>
            </div>


        </div>

    </div>
  )
}

export default About