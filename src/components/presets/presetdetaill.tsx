
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
const PresetDetail = forwardRef(
    (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const { className, onBlur, ...customProps } = props;



        return (
            <>

                <div ref={ref} className={classNames(`w-[345px]  h-[244px] sm:w-[345px] sm:h-[244px] md:w-[690px] md:h-[489px] lg:w-[370px] lg:h-[262px] xl:w-[445px] xl:h-[316px] bg-gray-400 flex justify-center place-items-center relative rounded-md `, className)} >

                    <div className=" flex justify-center place-items-center"  >

                        <div className="flex absolute justify-center place-items-center top-0" >

                            <Image

                                className="  
                                w-[345px]  h-[244px] sm:w-[345px] sm:h-[244px] md:w-[690px] md:h-[489px] lg:w-[370px] lg:h-[262px] xl:w-[445px] xl:h-[316px]
                                rounded-md"

                                src={preset1}
                                width={450}
                                height={350}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>


                </div>


            </>
        )

    }
)

export default PresetDetail