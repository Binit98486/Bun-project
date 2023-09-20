
import Image from "next/image"
import {
    FocusEvent,
    ForwardedRef,
    forwardRef,
    InputHTMLAttributes,
    useState,
} from 'react';
// import iphine from '../../../public/assets/images/IPhone 15.jpg'
import preset1 from '../../..//public/assets/images/preset.jpeg'
import { useRouter } from "next/router"
import classNames from "@/components/utils/classNames"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;

}
const Preset = forwardRef(
    (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const { className, onBlur, ...customProps } = props;



        return (
            <>

                <div ref={ref} className={classNames(`w-[345px]  h-[244px]   md:w-[720px] md:h-[488px] lg:w-[311px] lg:h-[220px] bg-gray-400 relative rounded-md `, className)} >

                    <div className=" flex justify-center place-items-center"  >

                        <div className="flex absolute justify-center place-items-center top-0" >

                            <Image

                                className="w-auto h-auto   md:w-[720px] md:h-[488px] lg:w-[311px] lg:h-[220px] rounded-md"

                                src={preset1}
                                width={450}
                                height={400}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="absolute h-8  bg-gray-200 rounded-b-lg top-0 items-center" >
                            <span className="text-xs flex justify-center text-blue-600 font-semibold  mt-2 px-1 z-2">Flower & Puppet </span>
                        </div>
                        <div className="absolute h-6 w-28 bg-gray-200 rounded-tr-[20px] rounded-bl-md left-0 bottom-0">

                            <span className="text-md flex justify-center mt-1" >Premimum</span>
                        </div>
                        <div className="absolute h-6 w-28 bg-gray-200 rounded-tl-md right-0 bottom-0">

                            <span className="text-xs flex justify-center mt-1 text-cyan-500 font-semibold">Rs 12,00.00</span>
                        </div>



                    </div>


                </div>


            </>
        )

    }
)

export default Preset