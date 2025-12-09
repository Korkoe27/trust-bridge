import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#0F0F10] w-full h-full'>
        <div className="max-w-[1200px] w-10/12 flex flex-col mx-auto lg:gap-8">
            <div className="flex max-lg:flex-col lg:justify-between w-full">
                <div className="flex flex-col gap-8 max-w-[467px] w-full">
                    <div className="max-w-[130px] max-h-[45.5px] w-full h-full bg-cover">
                        <img src="/images/Logo3x.png" alt="" className="object-fit w-full h-full" />
                    </div>

                    <p className="text-[#FEFEFE] text-base font-[Inter] text-wrap text-left">
                        The premier platform for competitive PlayStation gaming with secure escrow betting.
                    </p>

                    <h5 className="text-base font-semibold font-[PlusJakartaSans]">
                        LEGAL
                    </h5>
                </div>


                <div className="flex flex-col gap-4 max-w-[135px] w-full justify-start">
                    <h3 className="text-[#FEFEFE] text-base font-semibold">
                        Get the app
                    </h3>

                    <img src="/images/appStore.svg" alt="" className="w-full" />

                    <img src="/images/googlePlay.svg" alt="" className="w-full" />
                </div>
            </div>

            <div className="flex flex-wrap w-full">
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

            <div className="flex justify-between w-full">
                <p className="text-[#fefefe] text-base font-[Inter]"></p>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
