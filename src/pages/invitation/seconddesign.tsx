import sideImage from "../../../public/assets/images/side1.jpg";
import left from "../../../public/assets/images/groom.jpg";
import { motion } from "framer-motion";
// import SecondImage from "../../../public/assets/images/groom.jpg";
// import Music from "./Music";
// import Lovestory from "./Lovestory";
import final from "../../../public/assets/images/groom.jpg";
import Image from "next/image";
import Music from "@/components/components/music/music";
function Test() {
    return (
        <div className="flex  w-full ">
            {/* left */}
            <div className="relative flex w-0  xl:w-[900px] lg:w-[640px] md:w-[480px] lg:h-[313px] xl:h-[231px] md:h-[208px]">
                {/* music */}
                <div className="z-10  fixed  mt-10 ml-5">
                    <Music />
                </div>
                <div className="z-10  fixed bottom-20 left-20">
                    <div className="flex flex-col font-mouiser !important ">
                        <div
                            className=" text-4xl "
                        >
                            Hemant
                        </div>
                        <div className="ml-10 text-6xl font-semibold">&</div>
                        <div className=" text-4xl ">Bigyat</div>
                    </div>

                </div>
                <div className="fixed top-0 left-0 h-screen">
                    <Image
                        src={sideImage}
                        alt="side"
                        className="object-cover object-center xl:w-[900px] lg:w-[640px] md:w-[480px]"
                    />
                </div>
                {/* <div className="absolute flex bottom-0 "> hefd</div> */}
            </div>
            {/* right */}
            <div className=" relative xl:w-[536px] lg:w-[380px] md:w-[288px] lg:h-[313px] xl:h-[347px] md:h-[180px]">
                <div className="overflow-y-auto ">
                    <SigleImage />
                    <Image src={left} alt="side" className="object-cover " />
                    {/* <SecondImage /> */}
                    {/* <img src={left} alt="side" className="object-cover" /> */}


                    <Image src={final} alt="side1" className="object-cover w-[750px]" />

                    {/* <Lovestory /> */}
                </div>
            </div>
        </div>
    );
}

export default Test;
{
    /* <div className="absolute top-[200px] left-[550px]">
          <MenuItem />
        </div> */
}

function SigleImage() {
    const textVarients = {
        hidden: {
            y: "-100vw",
        },
        visible: {
            y: 0,
        },
        transition: {
            type: "spring",
            stiffness: 120,
            duration: 4,
            ease: "easeInOut",
        },
    };
    return (
        <>
            <div className="flex  justify-center">
                <Image
                    src={sideImage}
                    alt="side"
                    className="object-cover relative w-full"
                />
                <div className="absolute justify-center items-center flex flex-col mt-5 gap-4 text-gray-200">
                    {/* title */}
                    <div className=" text-white font-bold font-poppins !important text-xl">
                        Marriage Invitation
                    </div>
                    {/* bridge groom names */}
                    <div className="flex flex-col font-mouiser !important ">
                        <motion.div
                            variants={textVarients}
                            initial="hidden"
                            animate="visible"
                            className=" text-4xl font-semibold"
                        >
                            Hemant
                        </motion.div>
                        <div className="ml-10 ">&</div>
                        <div className=" text-4xl font-semibold">Bigyat</div>
                    </div>
                    {/* Date & time of marriage */}
                    <div className="flex place-content-end ">
                        <div>Tue</div>|<div>Feb 21</div>
                        <span className="text-xs ">st</span>|<div>Tuesday</div>
                    </div>
                    <div className="font font-semibold animate-pulse text-[#84142D]">
                        10:00 PM
                    </div>
                    {/* To */}
                    {/* <div>
                        <div className="border-2 rounded-lg p-6 items-center">
                            <div className="uppercase text-[#84142D]">
                                We will be delighted to have your presence
                            </div>
                            <div className="font-bold font-allura text-center text-2xl mt-4">
                                Devi Sufiana
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

