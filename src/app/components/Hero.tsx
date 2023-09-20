import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div id="Hero" className=" w-full h-screen">
        <div
          className={`max-w-[1380px] w-full h-full m-auto flex justify-start items-start flex-col p-4`} >
          {/* Image */}
            <div className="relative w-[70px]  h-[70px] mb-7 mr-6 md:w-[219.21px] sm:h-[139.68px]">
            <Image src={"/BG/Logo11.png"} layout="fill" objectFit="contain" alt='logo' />
          </div>
          {/* Heading */}
          <h1 className="font-Ubuntu font-bold text-white md:text-[65px] sm:text-[50px] text-[44px] md:leading-[70px] sm:leading-[58px] leading-[46px] mt-24 mb-12">
            Where
            <br /> Decentralized
            <br /> Finance meets
            <br /> Gambling
          </h1>

          <button className=" w-[180px] sm:w-[250px] h-[45px] sm:h-[65px] bg-pink from-pink to-blue hover:animate-bounce text-white text-[16px] leading-[18px] rounded">
            Launch App
          </button>
        </div>
    </div>
  )
}

export default Hero