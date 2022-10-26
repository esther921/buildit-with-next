import Image from "next/image";

export default function Logo_section_about() {
  return (
    <>
      <div className="flex flex-col items-center text-primary pt-32">
        <div className="pb-28">
            <p className="text-heading-blue text-xm">
                Statistics
            </p>
            <p className="">
                Development in numbers
            </p>
        </div>
        <div className="">
            <Image src="/Images/about-logo-card" width="1024px" height="157px" fill="responsive"/>
        </div>
        <div className="divide-y divide-slate-300 px-32">
          <div className="h-8"></div>
          <div className="flex justify-center">
            <img src="/Images/logos-section-owner.png" className="h-16" />
          </div>
          <div className="h-8"></div>
        </div>
      </div>
    </>
  );
}
