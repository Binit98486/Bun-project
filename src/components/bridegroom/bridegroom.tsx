import CircleImage from "../circleimage/circleimage"


import bride from '../../../public/assets/images/bride1.jpg'

import groom from '../../../public/assets/images/groom2.jpg'
import { BiLogoInstagram } from 'react-icons/bi'
import { CiFacebook } from 'react-icons/ci'
import Link from "next/link"

const BrideGroom = () => {
    return (
        <>

            <div className="flex flex-col bg-dark text-gray-300">
                <div className="flex justify-center">
                    <span className="text-center font-poppins text-3xl p-1 text-gray-300">The Bride  & Groom</span>

                </div>
                <div className="flex justify-end my-8">
                    <span className="text-6xl p-2 font-script text-gray-300">Simran</span>
                </div>
                <div className="flex flex-row justify-center gap-2">




                    <div className="flex flex-col gap-1 ms-4">
                        <div className="flex flex-row gap-2">
                            <Link href={'/'} >
                                <BiLogoInstagram size={20} />
                            </Link>
                            <Link href={'/'}>
                                <CiFacebook size={20} />

                            </Link>
                        </div>
                        <span className="font-semibold">

                            Simran Bijeti
                        </span>
                        <span className="font-semibold ">
                            The Third Daughter of
                        </span>
                        <span className="font-dyan text-sm">
                            Mr.Amris Bijeti &
                        </span>
                        <span className="font-dyan text-sm">
                            Mrs.Huma Bijeti
                        </span>

                    </div>
                    <CircleImage img={bride} />

                </div>

                <div className="flex justify-start my-8">
                    <span className="text-6xl p-2 font-script text-gray-300">Binit</span>
                </div>

                <div className="flex flex-row justify-center gap-2 my-8">


                    <CircleImage img={groom} />

                    <div className="flex flex-col gap-1 ms-4">
                        <div className="flex flex-row gap-2">
                            <Link href={'/'} >
                                <BiLogoInstagram size={20} />
                            </Link>
                            <Link href={'/'}>
                                <CiFacebook size={20} />

                            </Link>
                        </div>
                        <span className="font-semibold">

                            Binit Bijeti
                        </span>
                        <span className="font-semibold ">
                            The Third Son of
                        </span>
                        <span className="font-dyan text-sm">
                            Mr.Arjun Bijeti &
                        </span>
                        <span className="font-dyan text-sm">
                            Mrs.Huma Bijeti
                        </span>

                    </div>

                </div>
            </div>

        </>
    )
}

export default BrideGroom