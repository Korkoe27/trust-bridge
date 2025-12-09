import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-[url('/images/landingBg.svg')] bg-linear-to-t from-[#1b1d1f] to-[#0c0e0e00] bg-center bg-cover">
      <div className="max-w-[1200px] w-10/12 flex flex-col mx-auto lg:gap-24.5">
        <div className="flex w-full items-center">
          <div className="flex-col flex lg:gap-[60px] max-w-[656px] w-full">
            <div className="grid gap-5.5">
              <div className="flex items-center max-w-[511px] gap-5.5 border w-fit py-2.5 px-3 h-10 rounded-[60px]">
                  <img src="/icons/snowFlake.svg" alt="" className="w-[18px] h-[18px]" />

                  <p className="text-[#FEFEFE] text-sm font-[PlusJakartaSans] font-medium">
                    AI Featured Platform for
                  </p>

                  <img src="/images/imagesList.png" alt="" className="max-w-[84px] w-full" />

                  <p className="text-[#FEFEFE] text-sm font-[PlusJakartaSans] font-medium">
                    2943 + Competitive Gamers
                  </p>
              </div>
              
              <h1 className="font-[Montserrat] font-extrabold text-left lg:text-6xl text-[#FEFEFE]">
                The <span className="relative inline-block">ultimate
                    <span className="absolute left-0 -bottom-3 w-full h-full max-h-4 bg-[url('/icons/underline.svg')] 
               bg-contain bg-no-repeat"></span>
                  </span> gaming escrow platform
              </h1>
            <p className="text-[#ffffffcc] text-left text-base leading-relaxed max-w-[471px] w-full font-[Montserrat]"> 
              Put your gaming skills to the test and earn real money on the most secure PlayStation betting platform.
            </p>
            </div>


            <button className="max-w-[362px] shadow-[#3AA05F] shadow-sm inset-shadow-[4px] inset-[#F6F6F640] text-[#fefefe] text-center h-14 justify-center font-[PlusJakartaSans] w-full gap-4 bg-[#3AA05F] rounded-2xl flex items-center"><span className="">Join the community</span> <svg width="18" className="" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
          </div>

          <div className="relative w-2/3">

            <img src="/images/gamerImg.png" alt="" className="" />
          </div>
        </div>
      </div>
    </main>
  );
}
