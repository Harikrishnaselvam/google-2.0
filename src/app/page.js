import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
     <HomeHeader/>
     <div className='flex flex-col items-center mt-24'>
      <Image
      width={300}
      height={100}
      src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png"
      alt='no internet'
      />
        <HomeSearch/>
     </div>
   
     </>
  )
}

export default Home
