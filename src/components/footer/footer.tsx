// import { TfiYoutube } from "react-icons/tfi";
import { GrFacebookOption } from "react-icons/gr";
// import { AiFillLinkedin, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Khalti from '../../../public/assets/payments/khalti.png';
import Fonepay from '../../../public/assets/payments/fonepay.png';
import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-gray-100">
            <div className="  flex justify-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-center mx-32  text-text-blue">
                {/* <div className="mx-20 "></div> */}
                <div className="flex flex-col my-20">
                    <span className="text-pink-500 text-2xl">Payment Method</span>
                    <div className="grid grid-cols-3 gap-4">
                        <Image src={Khalti} width={75} height={50} alt="payment-khalti" />

                        <Image src={Fonepay} width={75} height={50} alt="payment-khalti" />
                        <Image src={Khalti} width={75} height={50} alt="payment-khalti" />

                        <Image src={Fonepay} width={75} height={50} alt="payment-khalti" />
                    </div>

                </div>
                <div className="flex flex-col">
                    <span className="text-pink-500">Closer to Us
                    </span>
                    <div className="grid grid-cols-1">

                        <div className="flex flex-col">
                            <div className="">
                                35445

                            </div>
                            <div>
                                435553
                            </div>


                        </div>
                    </div>




                </div>
                <div className="flex flex-col gap-4 ">
                    <div className="flex flex-row justify-center place-items-center gap-2 ">
                        <div className="bg-primary-red/20 h-8 w-8 rounded-lg  flex justify-center place-items-center ">

                            <BsInstagram size={25} className={"text-icon hover:"} />
                        </div>
                        <span className="text-primary-red hover:text-[#0A6EBD]">facebook.com</span>
                    </div>
                    <div className="flex flex-row justify-center place-items-center gap-2">
                        <GrFacebookOption size={25} className={"text-icon"} />
                        <span>facebook.com</span>
                    </div>


                </div>


            </div>
            <div className="flex justify-center bg-gray-100 ">
                <span className="mb-5 text-text-blue">Copyright © 2023 OUR-WEDDING.LINK All Right Reserved</span>
            </div>
        </div>
    );
}