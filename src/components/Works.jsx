import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'

const Works = () => {
    const workInfoData =[
        {
            Image:PickMeals,
            title: 'pick Meals',
            text:'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'
        },
        {
            Image:ChooseMeals,
            title: 'Choose How Often',
            text:'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'
        },
        {
            Image:DeliveryMeals,
            title: 'Fast Delivery',
            text:'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'
        }

     ]
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className='primary-subheading'> work</p>
            <h1 className='primary-heading'> How It Works</h1>
            <p className='primary-text'>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam. </p>

        </div>
        <div className='work-section-bottom'>
            {
                workInfoData.map((Data)=>(
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={Data.Image} alt="" />
                        </div>
                        <h2 className=''>{Data.title}</h2>
                        <p >{Data.text}</p>

                    </div>
                ))

                
            }

        </div>
         
    </div>
  )
}

export default Works