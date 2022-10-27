/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";

export default function About_cards_section() {
  return (
    <>
      <div className="text-primary flex flex-col items-center space-y-4 pt-8">
        <div>
          <p className="text-heading-blue">Our team</p>
        </div>
        <p className="font-bold text-2xl pb-10">Let{"'"}s meet</p>
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col rounded-md bg-gradient-to-r from-gradient-blue-1 w-60 h-64 to-gradient-blue-2 shadow-2xl shadow-blue-400">
              <div>
                <Image
                  src="/Images/about-man-with-glasse.png"
                  width="240px"
                  height="200px"
                />
              </div>
              <div className="pl-4">
             <Link href="">   
             <p className="font-bold text-base">Name Surname</p>
                </Link>
                <p className="text-sm">Worker</p>
              </div>
            </div>
            <div className="flex flex-col rounded-md bg-gradient-to-r from-gradient-blue-1 w-60 h-64 to-gradient-blue-2 shadow-2xl shadow-blue-400">
              <div>
                <Image
                  src="/Images/about-girl-with-glasses.png"
                  width="240px"
                  height="200px"
                />
              </div>
              <div className="pl-4">

               
                <Link href="">
                <p className="font-bold text-base">Name Surname</p>
                </Link>
                <p className="text-sm">Worker</p>
              </div>
            </div>
            <div className="flex flex-col rounded-md bg-gradient-to-r from-gradient-blue-1 w-60 h-64 to-gradient-blue-2 shadow-2xl shadow-blue-400">
              <div>
                <Image
                  src="/Images/about-shorten-man.png"
                  width="240px"
                  height="200px"
                />
              </div>
              <div className="pl-4">
                <Link href="">
                <p className="font-bold text-base">Name Surname</p>
                </Link>
                
                <p className="text-sm">Worker</p>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col rounded-md bg-gradient-to-r from-gradient-blue-1 w-60 h-64 to-gradient-blue-2 shadow-2xl shadow-blue-400">
              <div>
                <Image
                  src="/Images/about-man-in-suit.png"
                  width="240px"
                  height="200px"
                />
              </div>
              <div className="pl-4">
                <Link href="">
                <p className="font-bold text-base">Name Surname</p>
                </Link>
                
                <p className="text-sm">Worker</p>
              </div>
            </div>
            <div className="flex flex-col rounded-md bg-gradient-to-r from-gradient-blue-1 w-60 h-64 to-gradient-blue-2 shadow-2xl shadow-blue-400">
              <div>
                <Image
                  src="/Images/about-girl-in-black.png"
                  width="240px"
                  height="200px"
                />
              </div>
              <div className="pl-4">
                <Link href="">
                <p className="font-bold text-base">Name Surname</p>
                </Link>
                
                <p className="text-sm">Worker</p>
              </div>
            </div>
            <div className="flex flex-col rounded-md bg-gradient-to-r from-gradient-blue-1 w-60 h-64 to-gradient-blue-2 shadow-2xl shadow-blue-400">
              <div>
                <Image
                  src="/Images/about-man-in-green.png"
                  width="240px"
                  height="200px"
                />
              </div>
              <div className="pl-4">
                <Link href="">
                <p className="font-bold text-base">Name Surname</p>
                </Link>
                <p className="text-sm">Worker</p>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col rounded-md bg-gradient-to-r from-gradient-blue-1 w-60 h-64 to-gradient-blue-2 shadow-2xl shadow-blue-400">
              <div>
                <Image
                  src="/Images/about-young-man-laughing.png"
                  width="240px"
                  height="200px"
                />
              </div>
              <div className="pl-4">
                <Link href="">
                <p className="font-bold text-base">Name Surname</p>
                </Link>
                
                <p className="text-sm">Worker</p>
              </div>
            </div>
            <div className="flex flex-col rounded-md bg-gradient-to-r from-gradient-blue-1 w-60 h-64 to-gradient-blue-2 shadow-2xl shadow-blue-400">
              <div>
                <Image
                  src="/Images/about-old-man.png"
                  width="240px"
                  height="200px"
                />
              </div>
              <div className="pl-4">
                <Link href="">
                <p className="font-bold text-base">Name Surname</p>
                </Link>
                
                <p className="text-sm">Worker</p>
              </div>
            </div>
            <div className="flex flex-col rounded-md bg-gradient-to-r from-gradient-blue-1 w-60 h-64 to-gradient-blue-2 shadow-2xl shadow-blue-400">
              <div>
                <Image
                  src="/Images/about-woman-in-dry-grass.png"
                  width="240px"
                  height="200px"
                />
              </div>
              <div className="pl-4">
                <Link href="">
                <p className="font-bold text-base">Name Surname</p>
                </Link>
                <p className="text-sm">Worker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
