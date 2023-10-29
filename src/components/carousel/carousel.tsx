import Image from "next/image"
import photo1 from "../../../public/assets/images/bride1.jpg"
import photo2 from "../../../public/assets/images/bride2.jpg"
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from "react"
const HowToFill = () => {
    const [width, setWidth] = useState<number>(0)
    const caruselRef = useRef<HTMLInputElement>(null)

    const album = [
        {
            photo: photo1,

        },
        {
            photo: photo2,

        },
        {
            photo: photo1,

        },
        {
            photo: photo2,

        }, {
            photo: photo1,

        },
        {
            photo: photo2,

        },
        {
            photo: photo1,

        },
        {
            photo: photo2,

        },
        {
            photo: photo1,

        },
        {
            photo: photo2,

        }, {
            photo: photo1,

        },
        {
            photo: photo2,

        },

    ]
    useEffect(() => {

        if (caruselRef.current !== null)
            setWidth(caruselRef.current?.scrollWidth - caruselRef.current?.offsetWidth)

    }, [])

    return (
        <>
            <div className="flex mx-40">
                <motion.div ref={caruselRef} className="overflow-hidden	 cursor-pointer " style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: "grabbing" }} className="flex flex-row   ">
                        {album.map((item: any, index: any) => (
                            <motion.div className="p-4 min-w-[245px]  " key={index}>

                                <Image src={item.photo} alt="" className="w-[245px] h-[377px]   object-cover rounded-xl m-1 " />                            </motion.div>
                        ))}

                    </motion.div>

                </motion.div>

            </div>

        </>
    )
}

export default HowToFill