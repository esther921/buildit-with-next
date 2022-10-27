/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Logo_section_about() {
  return (
    <>
      <div className="flex flex-col items-center text-primary pt-32">
        <div className="pb-24">
            <p className="text-heading-blue text-xm">
                Statistic s
            </p>
            <p className="">
                Development in numbers
            </p>
        </div>
        <div className="">
            <Image src="/Images/about-logo-card.svg" width="1024px" height="157px"/>
        </div>
        <div className="divide-y divide-slate-300 px-32">
          <div></div>
          <div className="flex justify-center">
            <img src="/Images/logos-section-owner.png" className="h-16" />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
