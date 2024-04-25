import { Vortex } from "@/components/ui/vortex";
import { Review } from "./Review";
import { Profile } from "./Profile"
import { useNavigate } from "react-router-dom";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Signinbtn } from "./Signinbtn";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";



const words = `Connect with others, anywhere, anytime, Chat your way to new connections, Express yourself, connect with others, Bringing people together, one chat at a time, Join the conversation, be part of the community, and Chat, share, and discover new things.
`;

const letter = [
  {
    text: "Text with your friends, ",
  },
  {
    text: "Enjoy your time  ",
  },
  
  {
    text: "with your Love.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

  
export default function Landing_page(){
  const Navi = useNavigate();
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
          <TypewriterEffectSmooth words = {letter}/>
        </p>
          <Signinbtn/>
        
      </Vortex>
    </div>
    <div className="m-20 text-center">
    <Profile/>
        <TextGenerateEffect words={words} />
    </div>
    <Review/>
    </div>
  );
}
