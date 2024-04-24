import { Vortex } from "@/components/ui/vortex";
import { Review } from "./Review";
import { Profile } from "./Profile"


export default function Landing_page() {
  return (
    <div className="bg-black h-[100%]">
    
    <div className="w-sreen mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          CHAT PLAT
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Text with your friends, Enjoy your time with spending time with your Love.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Get Started
          </button>
        </div>
      </Vortex>
    </div>
    <div className="mt-10">
    <Profile/>
    </div>
    <Review/>
    </div>
  );
}
