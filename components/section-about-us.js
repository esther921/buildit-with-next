export default function Section_about_us() {
  return (
    <>
      <div className="text-primary">
        <div className="divide-y divide-slate-300 px-32">
          <div className="h-8"></div>
          <div className="flex justify-center">
            <img src="/Images/logos-section-owner.png" className="h-16" />
          </div>
          <div className="h-8"></div>
        </div>
        <div className="flex justify-center mt-12 space-x-12">
          <img
            src="/Images/section-owner-skyscrapper.png"
            className="h-72 mt-20"
          />
          <div className="flex flex-col space-y-6">
            <p className="font-semibold text-heading-blue">About us</p>
            <p className="font-bold text-4xl">Owner and investor with a <br/>reputation</p>
            <p className="grid space-y-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              </p>
              <p>
                elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
              </p>
              <p>
                Integer rhoncus, eros vel euismod tempor, ipsum magna
              </p>
              <p>
                tristique nisi, quis ullamcorper enim magna eu orci. Sed
              </p>
              <p>
                semper ex quis semper aliquet. Cras hendrerit molestie sapien
              </p>
              <p>
                sed fermentum. Mauris dui tortor, viverra vel ultrices in,
              </p>

              <p>
                congue sed ex.
              </p>
            </p>
            <button className="text-white bg-secondary rounded-sm px-24 py-1 w-24 flex justify-center">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
