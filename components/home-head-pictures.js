/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home_head_pictures() {
  return (
    <>
      <div className="grid grid-cols-2 text-primary pl-28">
        <div className="space-y-6 pt-24">
          <p className="text-6xl font-bold">Development company</p>
          <p>
            Forward-thinking real estate developer, owner
            <br />
            and investor with a reputation
          </p>
          <div className="flex gap-8">
            <button className=" bg-secondary rounded-sm text-white px-3 pb-2 pt-1">
              Services
            </button>
            <button className="bg-gradient-blue-1 rounded-sm px-8">
              About the company
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 pr-20">
          <div className="flex gap-4">
            <picture className="h-32 pt-12">
              <img src="/Images/white-house.png" className="h-32" alt="" />
            </picture>
            <picture className="w-56 pt-2">
              <img src="/Images/Blue-skyscrapper.png" className="w-44" alt="" />
            </picture>
            <picture className="pt-20 h-24">
              <img
                src="/Images/little-house-lighted.png"
                className="h-24"
                alt=""
              />
            </picture>
          </div>
          <div className="flex gap-8">
            <picture className="h-56">
            <img src="/Images/black-skyscrapper-lighted.png" className="h-56" alt="" />
            </picture>
            <picture className="h-36">
            <img src="/Images/white-house-with-pool.png" className="h-36" alt="" />
            </picture>
          
            
          </div>
        </div>
      </div>
    </>
  );
}
