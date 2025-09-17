import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'> 
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dolorem magni doloribus ipsa nostrum modi, tempore delectus debitis, nemo odio quidem quam omnis iusto rerum vitae tempora voluptatibus tenetur sapiente!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sed minima et ipsum! Beatae repellendus enim dolorem dolorum! Culpa veniam obcaecati amet necessitatibus repellat quod impedit numquam incidunt eaque soluta!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, laudantium quam dolores assumenda ex, dolor provident debitis pariatur non dicta cumque dolorum iure similique qui neque beatae nobis, inventore perferendis.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  className='text-gray-600'</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  className='text-gray-600'</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  className='text-gray-600'</p>

        </div>
        



        


      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
