import Image from "next/image"
import mid from "../../../public/assets/images/i.png"
const Presets = () => {
    return (<>


        <div className="flex flex-col my-20">


            <div className=" relative w-[271px] h-[493px] rounded-md bg-gray-300">
                <Image src={mid} alt="bride-groom" className="h-auto sm:w-[271px] rounded-md lg:h-[493px] md:w-[271px] lg:w-[271px]"
                    width={500}
                    height={900} />
                <div className="absolute -bottom-5 flex flex-row  left-[90px] ">
                    <div className=" w-[40px] h-[40px] bg-gray-600 rounded-full -bottom-5  left-[90px]   ring ring-2 ring-white hover:w-[42px] hover:h-[42px]">

                    </div>
                    <span className=" text-xl inline-block align-text-bottom text-pink-600 ">&</span>
                    <div className="  w-[40px] h-[40px] bg-gray-600 rounded-full right-[110px] ring ring-2 ring-white hover:w-[42px] hover:h-[42px]">

                    </div>

                </div>




            </div>





        </div>
    </>)
}

export default Presets