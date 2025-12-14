"use client";
const Home = () => {
  return (
    <main className="bg-[url('/images/landingBg.svg')] max-lg:bg-[url('/images/smallDevicesBg.svg')] h-screen w-full flex flex-col bg-cover bg-linear-to-t from-[#1b1d1f] to-[#0c0e0e00] bg-center">
      <div className="flex flex-col lg:max-w-[1200px] w-11/12 mx-auto max-w-[396px]"> 

          <div className="flex max-lg:flex-col max-lg:gap-[60px] items-center">

            <div className="grid xl:gap-[60px] max-lg:gap-9 lg:gap-12 w-full lg:max-w-[656px] max-lg:mt-32 lg:items-start">

                <div className="grid gap-3.5 lg:gap-[22px] leading-relaxed">

                  <div className="max-w-[511px] w-full lg:w-fit items-center px-[11px] flex py-[7px] backdrop-blur-[14px] rounded-[60px] gap-2.5 border-2">

                      <img src="/icons/snowFlake.svg" alt="" className="lg:w-[18px] lg:h-[18px] w-2.5 h-2.5 " />

                      <h5 className="text-[#fefefe] text-sm font-medium font-[PlusJakartaSans] ">AI Featured Platform for</h5>

                      <img src="/images/imagesList.png" alt="" className="lg:max-w-[84px] w-full max-w-[52px] " />

                      <h5 className="text-[#fefefe] text-sm font-medium font-[PlusJakartaSans]">2943 + Competitive Gamers</h5>
                      
                  </div>

                  <h1 className="xl:text-[60px] max-lg:hidden text-[#FEFEFE] font-[Monteserrat] font-extrabold"> The <span className="relative inline-block">ultimate
                    <span className="absolute left-0 -bottom-3 w-full h-full max-h-6 bg-[url('/icons/underline.svg')] 
                  bg-contain bg-no-repeat"></span>
                  </span> gaming escrow platform</h1>


                  <h1 className="text-[30px] lg:hidden text-[#FEFEFE] font-[Monteserrat] max-w-[326px] w-full text-wrap font-extrabold"> The <span className="relative inline-block">ultimate
                      gaming<span className="absolute left-0 -bottom-3 w-full h-full max-h-3 bg-[url('/icons/underline.svg')] 
                bg-contain bg-no-repeat"></span>
                  </span>  escrow platform</h1>

                  <p className="font-[Monteserrat] font-normal text-base max-w-[326px] lg:max-w-[470px] w-full text-white text-left">Put your gaming skills to the test and earn real money on the most secure PlayStation betting platform.</p>
                </div>

                <button className="lg:max-w-[362px] lg:p-4 py-2 flex items-center shadow-[#3AA05F] shadow-sm inset-shadow-[4px] hover:inset-shadow-[10px] text-center justify-center rounded-md gap-4 hover:shadow-md cursor-pointer inset-[#F6F6F640] max-h-14 h-full bg-[#3AA05F] text-lg font-bold font-[PlusJakartaSans] text-[#FEFEFE]  w-full">
                  <span className="">Join the community</span> <svg width="18" className="" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  )
}

export default Home


// <!-- component -->
// <div class="flex min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950">
//   <div class="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
//     <div class="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
//       <p class="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.</p>

//       <div class="mt-8 flex gap-4 items-center">
//         <img class="h-12 w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg" alt="" />
//         <div>
//           <h3 class="text-lg font-medium text-gray-700 dark:text-white">Oketa Fred</h3>
//           <span class="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>