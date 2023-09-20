import React from "react";
import Image from "next/image";
// import { Fade } from "react-reveal";
import { FaTwitter, FaInstagram, FaFacebook,FaInstagramSquare,FaTiktok} from 'react-icons/fa';
import { AiFillTwitterCircle,AiFillYoutube,AiFillLinkedin} from 'react-icons/ai';
import { BsTelegram,BsDiscord } from 'react-icons/bs';




function Footer() {
  return (
    <div className="w-full py-12 bg-[black] ">
      {/* <Fade cascade bottom> */}
      <div
        className={`max-w-[1380px] w-full h-full m-auto flex md:justify-between justify-center items-center md:flex-row flex-col px-4`}
      >
        {/* Left */}
        <div className="flex justify-center items-center">
          <div className="relative w-[83.77px] h-[88px]">
            <Image
              src={"/BG/Logo.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center items-start flex-col ml-6">
            {/* logo Text */}
           
            <h1 className="text-[40px] text-white " >BARBIE CAT</h1>
            <p className="text-white">Community Driven Coin</p>

            <h3 className="text-[14px] text-white leading-[14px] font-Ubuntu font-[400] mt-4">
              © 2023 All Right reserved.{" "}
              <a className="text-white underline" href="">
                Policy Privacy
              </a>{" "}
             
            </h3>
          </div>
        </div>

        {/* Right */}
        <div className=" grid grid-cols-4 sm:grid-cols-7   item-center justify-center gap-5 items-center md:mt-0 mt-10">
          <a className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
              <AiFillTwitterCircle className='icon' />
            </div>
            <h4 className="text-[11px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
            Twitter
            </h4>
          </a>
          <a className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
              <BsDiscord className='icon' />
            </div>
            <h4 className="text-[11px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
            Twitter
            </h4>
          </a>
          <a className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
              <AiFillYoutube className='icon' />
            </div>
            <h4 className="text-[11px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
            Youtube 
            </h4>
          </a>
          <a className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
              <BsTelegram className='icon' />
            </div>
            <h4 className="text-[11px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
            Telegram
            </h4>
          </a>

          <a className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
              <FaInstagramSquare className='icon' />
            </div>
            <h4 className="text-[11px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
          Instagram
            </h4>
          </a>
          
          <a className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
              <AiFillLinkedin className='icon' />
            </div>
            <h4 className="text-[11px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
            Linkedin
            </h4>
          </a>
          <a className="flex justify-center items-center flex-col cursor-pointer">
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
              <FaTiktok className='icon' />
            </div>
            <h4 className="text-[11px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
            Tiktok
            </h4>
          </a> 
          
          
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default Footer;
