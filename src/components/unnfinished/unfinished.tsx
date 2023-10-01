import colo from "../../../public/assets/images/colo.png"
import c1 from "../../../public/assets/images/c1.svg"
import Image from "next/image"
import s4 from "../../../public/assets/images/s4.png"


function UnFinished() {
    return (
        <>
            <div className=''>
                <div className="flex  w-full ">

                    <div className="relative">
                        <div className="overflow-y-auto ">
                            <Detail />
                            {/* <SigleImage /> */}
                            <Imagebox />



                            <div className="flex  justify-center items-center relative ">


                                <Image src={c1} alt='side' className="" width={400} />

                            </div>



                            {/* <Lovestory /> */}
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default UnFinished


const Imagebox = () => {
    return (
        <>
            <div className="flex justify-center items-center">


                <div className="absolute mt-20  ">
                    <div className="  text-white text-xl">

                        Weeding Invitation

                    </div>


                </div>
            </div>
            <Image src={s4} alt='side' className="flex items-end border-2 " width={800} />


        </>
    )
}

const Detail = () => {
    return (
        <>
            <div className="">

                <div className="bg-rose-100">
                    <div className="flex justify-center items-center flex-col">
                        <div className="my-10">
                            <div>Wedding Invitation</div>
                            <div className="my-10">

                                <div className="font-allura text-4xl">Bibek</div>
                                <div className="font-dyan indent-4">Wed</div>
                                <div className="font-allura text-4xl indent-10">Bibek</div>

                            </div>
                            <div className="my-10">

                                <div>Friday</div>
                                <div className="text-2xl flex flex-row">
                                    <div className="p-2">
                                        06
                                    </div>
                                    <span className="animate-ping rounded-full  bg-sky-400 h-2 w-2"></span>

                                    <div className="p-2">
                                        25

                                    </div>
                                    <span className="animate-ping rounded-full bg-sky-400 h-2 w-2"></span>

                                    <div className="p-2">
                                        2023
                                    </div>
                                </div>
                                <div className="border border-gray-600 "></div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}