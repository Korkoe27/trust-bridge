import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0F0F10] w-full h-full'>
        <div className="max-w-[1200px] w-10/12 flex flex-col py-16 mx-auto gap-14 lg:gap-8">
            <div className="flex max-lg:flex-col max-lg:gap-14 lg:justify-between w-full">
                <div className="flex flex-col gap-8 max-w-[467px] w-full">
                    <Link href={'/'} className="max-w-[130px] max-h-[45.5px] w-full h-full bg-cover">
                        <img src="/images/Logo3x.png" alt="" className="object-fit w-full h-full" />
                    </Link>

                    <p className="text-[#FEFEFE] text-base font-[Inter] text-wrap text-left">
                        The premier platform for competitive PlayStation gaming with secure escrow betting.
                    </p>

                    <h5 className="text-base font-semibold font-[PlusJakartaSans]">
                        LEGAL
                    </h5>
                </div>


                <div className="flex flex-col gap-4 lg:max-w-[135px] w-full justify-start">
                    <h3 className="lg:text-[#FEFEFE] text-[#236D6D] max-lg:text-lg text-base font-semibold">
                        Get the app
                    </h3>
                    <div className="flex lg:flex-col w-full justify-between gap-4.5">
                    <img src="/images/appStore.svg" alt="" className="w-full" />

                    <img src="/images/googlePlay.svg" alt="" className="w-full" />

                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-8 w-full">
                <Link href="" className="text-[#ffffff80] text-base font-[Inter] font-semibold">
                    Terms of Service
                </Link>
                <Link href="" className="text-[#ffffff80] text-base font-[Inter] font-semibold">
                    Privacy Policy
                </Link>
                <Link href="" className="text-[#ffffff80] text-base font-[Inter] font-semibold">
                    Competition Rules
                </Link>
                <Link href="" className="text-[#ffffff80] text-base font-[Inter] font-semibold">
                    Refund Policy
                </Link>
                <Link href="" className="text-[#ffffff80] text-base font-[Inter] font-semibold">
                    Responsible Gaming
                </Link>
            </div>

            <div className=" w-full border-b border-[#1b1d1f] "></div>

            {/* <div className="flex justify-between w-full">
                <p className="text-[#fefefe] text-base font-[Inter]"></p>
            </div> */}
      <div className="flex-col flex  max-lg:gap-7 w-full">
        <div className="flex justify-start lg:hidden items-center gap-7">
            <Link href={'/'}>
                <img src="/icons/twitter.svg" alt="" className="" />
            </Link>
            <Link href={'/'}>
                <img src="/icons/linkedin.svg" alt="" className="" />
            </Link>
            <Link href={'/'}>
                <img src="/icons/facebook.svg" alt="" className="" />
            </Link>
            <Link href={'/'}>
                <img src="/icons/github.svg" alt="" className="" />
            </Link>
            <Link href={'/'}>
                <img src="/icons/angelList.svg" alt="" className="" />
            </Link>
            <Link href={'/'}>
                <img src="/icons/web.svg" alt="" className="" />
            </Link>
        </div>

        <div className="flex justify-between w-full items-center">
            
                <p className="text-[#FEFEFE] text-lg font-[Inter] text-left">
                © {new Date().getFullYear()} Trustbridge. All rights reserved
                </p>

                <div className="hidden lg:flex justify-end gap-[10px]">
                    <p className="font-[Inter] text-base text-right">Playstation Partner</p>
                    <p className="font-[Inter] text-base text-right"> Secure Payments</p>
                    <p className="font-[Inter] text-base text-right">Gaming Certified</p>
                </div>
        </div>

      </div>
        </div>
    </div>
  )
}

export default Footer
