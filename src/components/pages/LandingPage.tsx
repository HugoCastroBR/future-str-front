import React from 'react'
import LandingPageLogo from '../atoms/LandingPageLogo'
import { ArrowRight } from 'lucide-react'
import LinkButton from '../atoms/LinkButton'
import OutlineButton from '../atoms/OutlineButton'
import LandingLamp from '../atoms/LandingLamp'


const LandingPage = () => {
  return (
    <>
      <LandingPageLogo />
      <section
        className="w-full bg-ebony-clay-950 flex flex-col items-center justify-center"
      >
        <div
          className="flex items-center w-full h-full -ml-5  my-1">
          <h2
            className="text-white text-3xl font-bold"
          >
            New Arrivals
          </h2>
        </div>
        <div
          className="flex gap-16 items-center w-full h-full justify-between "
        >
          <div
            className="flex gap-16 items-center w-1/2 h-8 justify-center"
          >
            <LinkButton
              text="Clothing"
              textColor="white"
              underlineColor="white"
            />
            <LinkButton
              text="Accessories"
              textColor="white"
              underlineColor="white"
            />
            <LinkButton
              text="Devices"
              textColor="white"
              underlineColor="white"
            />
          </div>
          <div
            className="flex w-1/2 h-10 justify-end items-center"
          >
            <OutlineButton>
              <span>
                View all
              </span>
              <ArrowRight
                width={20}
              />
            </OutlineButton>
          </div>
        </div>
        <div
          className="flex items-center w-full h-full -ml-5 my-6"
        >
          CARDS
        </div>
      </section>
    </>
  )
}

export default LandingPage