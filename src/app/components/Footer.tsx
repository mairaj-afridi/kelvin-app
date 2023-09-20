import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { BsTelegram, BsDiscord } from 'react-icons/bs';


function Footer() {
  
  return (
    <div className="w-full py-12 bg-[black] ">
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
              alt="logo"
            />
          </div>
          <div className="flex justify-center items-start flex-col ml-6">
            {/* logo Text */}
            <h1 className= " text-[30px] sm:text-[38px] text-white " >BARBIE CAT</h1>
            <p className="text-white">Community Driven Coin</p>

            <h3 className="text-[14px] text-white leading-[14px] font-Ubuntu font-[400] mt-2">
              © 2023 All Right reserved.{" "}
              <a className="text-white underline" href="">
                Policy Privacy
              </a>{" "}

            </h3>
          </div>
        </div>
        {/* .........................>>>> Right Links.......................*/}
        <div className=" grid grid-cols-4 sm:grid-cols-8   item-center justify-center gap-1 sm:gap-3 items-center md:mt-0 mt-10">
          {sociallinks.map((item, index) => {
            return(
            <a key={index} className="flex justify-center items-center flex-col cursor-pointer">
              <div className="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-gradient-to-l from-pink to-blue hover:bg-gradient-to-r">
                {item.link}
              </div>
              <h4 className="text-[11px] text-white leading-[17.24px] font-Ubuntu font-[500] mt-2 uppercase">
                {item.title}
              </h4>
            </a>
          )})}
        </div>
      </div>
    </div>
  );
}

export default Footer;

const sociallinks = [
  {
    link: <FaTwitter className='icon' />,
    title: ' twitter'
  },
  {
    link: <FaInstagram className='icon' />,
    title: 'Instagram'
  },
  {
    link: <FaFacebook className='icon' />,
    title: 'Facebook'
  },
  {
    link: <AiFillTwitterCircle className='icon' />,
    title: 'Twitter'
  },
  {
    link: <BsDiscord className='icon' />,
    title: 'Discord'
  },
  {
    link: <AiFillYoutube className='icon' />,
    title: 'Youtube'
  },
  {
    link: <FaTiktok className='icon' />,
    title: 'FaTiktok'
  },
  {
    link: <BsTelegram className='icon' />,
    title: 'Telegram'
  }
]
