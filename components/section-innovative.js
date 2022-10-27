/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function Section_innovative() {
  return (
    <>
      <div className="text-primary flex flex-col items-center space-y-24">
        <p className="font-bold text-2xl">Innovative Execution</p>
        <div className="grid grid-cols-3 space-x-20">
          <div className="flex flex-col space-y-4">
            <img src="/Images/Icon-innovative.png" className="w-10 " />
            <p className="text-lg font-semibold">Featured listing</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col space-y-4 relative top-[38px]">
            <img src="/Images/Icon (1)-innovative.png" className="absolute w-28 bottom-[88px] -left-8"/>
            <p className="text-lg font-semibold">Featured listing</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col space-y-4 relative top-[38px] pl-6">
            <img src="/Images/Icon (2)-innovative.png" className="absolute w-28 bottom-[88px] -left-3"/>
            <p className="text-lg font-semibold">Featured listing</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
