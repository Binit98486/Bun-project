import Link from "next/link";
import { TfiYoutube } from "react-icons/tfi";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillLinkedin, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
export default function Footer() {
    return (
        <div className="bg-gray-800 ">
            <div className="flex flex-col justify-center items-center ">
                <div className="flex flex-row mt-10  mx-2 text-white space-x-6">

                    <Link href="/" className="social-icon text-center">
                        Privacy Policy{" "}
                    </Link>
                    <Link href="/" className="social-icon text-center">
                        Terms & Conditions{" "}
                    </Link>
                </div>
                {/* social links */}
                <div className="flex flex-row my-5 space-x-6 justify-center items-center">
                    <a target="_blank" href="https://www.facebook.com">
                        <GrFacebookOption size={32} color="white" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com">
                        <BsInstagram size={32} color="white" className="social-icon" />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com"
                    >
                        <AiFillLinkedin color="white" size={32} className="social-icon" />
                    </a>
                    <a target="_blank" href="https://www.youtube.com">
                        <TfiYoutube color="white" size={32} className="social-icon" />
                    </a>
                </div>
            </div>
            <hr />

            <div className="flex flex-col justify-center items-center ">
                <div className="mt-10 flex flex-row justify-center items-center">
                    <AiOutlineCopyrightCircle color="white" className="mr-2" />
                    <span className="text-white">Wedding Invitation</span>
                </div>
                <div className="text-white text-center mb-14 flex justify-center items-end">
                    Kathmandu Nepal.

                </div>
            </div>
        </div>
    );
}


// // import { TfiYoutube } from "react-icons/tfi";
// import { GrFacebookOption } from "react-icons/gr";
// // import { AiFillLinkedin, AiOutlineCopyrightCircle } from "react-icons/ai";
// import { BsInstagram } from "react-icons/bs";
// import Khalti from '../../../public/assets/payments/khalti.png';
// import Fonepay from '../../../public/assets/payments/fonepay.png';
// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
//     return (
//         <div className="bg-gray-800">
//             <div className="  flex justify-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-center mx-32  text-text-blue">
//                 {/* <div className="mx-20 "></div> */}
//                 <div className="flex flex-col my-20">
//                     <span className="text-pink-500 text-2xl">Payment Method</span>
//                     <div className="grid grid-cols-3 gap-4">
//                         <Image src={Khalti} width={75} height={50} alt="payment-khalti" />

//                         <Image src={Fonepay} width={75} height={50} alt="payment-khalti" />
//                         <Image src={Khalti} width={75} height={50} alt="payment-khalti" />

//                         <Image src={Fonepay} width={75} height={50} alt="payment-khalti" />
//                     </div>

//                 </div>
//                 <div className="flex flex-col text-white">
//                     <span className="">Closer to Us
//                     </span>
//                     <div className="grid grid-cols-1">

//                         <div className="flex flex-col">
//                             <div className="">
//                                 35445

//                             </div>
//                             <div>
//                                 435553
//                             </div>


//                         </div>
//                     </div>




//                 </div>
//                 <div className="flex flex-col gap-4 ">
//                     <div className="flex flex-row justify-center place-items-center gap-2 ">
//                         <div className="bg-primary-red/20 h-8 w-8 rounded-lg  flex justify-center place-items-center ">

//                             <BsInstagram size={25} className={"text-white hover:"} />
//                         </div>
//                         <span className="text-primary-red hover:text-[#0A6EBD]">instagram.com</span>
//                     </div>
//                     <div className="flex flex-row justify-center place-items-center gap-2">
//                         <GrFacebookOption size={25} className={"text-white"} />
//                         <span>facebook.com</span>
//                     </div>


//                 </div>


//             </div>
//             <div className="flex justify-center items-center bg-gray-900 ">
//                 <span className="p-1 text-gray-300  text-[12px]">Copyright © 2023 <Link href="/">WEDDING-IVITATION
//                 </Link>  All Right Reserved</span>
//             </div>
//         </div>
//     );
// }