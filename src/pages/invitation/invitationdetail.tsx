import Image from "next/image"
import wall1 from "../../../public/assets/images/wall1.jpg"
import wall2 from "../../../public/assets/images/wall2.jpg"
import wall3 from "../../../public/assets/images/wall3.jpg"

import wall4 from "../../../public/assets/images/wall4.jpg"
import { AiFillInstagram } from "react-icons/ai"
import Link from "next/link"
import { GiTimeTrap } from 'react-icons/gi'
import { motion, useAnimationControls } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { RiSendPlaneFill } from 'react-icons/ri'





const InvitationDetail = () => {
    const [ref, inView] = useInView({
        threshold: 0.2, // Trigger animation when 20% of the element is in view
    });

    const animation = useAnimationControls()

    useEffect(() => {

        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: "spring", duration: 1.5, bounce: 0.3
                }
            })
        }
        if (!inView) {
            animation.start({
                x: '-100vw'
            })
        }
    }, [inView])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        control,
    } = useForm();
    const onSubmit = () => {

    }


    return (<>

        <div className="flex relative ">
            <Image src={wall1} alt="dddd" className=" object-contain" />
            <div className="absolute right-0 hidden lg:block">
                <div className="m-2 flex gap-4 ">



                    <button

                        type="button"
                        className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
                        Couple
                    </button>

                    <button
                        type="button"
                        className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
                        Gallery

                    </button>
                    <button
                        type="button"
                        className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
                        Date
                    </button>
                    <button
                        type="button"
                        className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
                        Location
                    </button>
                </div>
            </div>
            <div className="absolute bottom-10 md:bottom-30 lg:bottom-40 xl:bottom-60 text-black">
                <div>

                    <span className="p-1   xs:text-lg sm:text-xl md:text-5xl lg:text-6xl ">Hello&nbsp;</span>
                    <span className="p-1 xs:text-lg sm:text-xl md:text-5xl lg:text-6xl">Vs</span>
                    <span className="p-1 xs:text-lg sm:text-xl md:text-5xl lg:text-6xl">&nbsp;Hello</span>
                    <hr />
                    <span className="p-1 xs:text-lg sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl">12.03.2079</span>

                </div>


            </div>


        </div>


        <div className="flex flex-col bg-[#DBD6CB] ">
            <div ref={ref} className="flex justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                {/* groom */}
                <div className="flex w-1/2  flex-col bg-yellow-400 ">
                    <span className="text-white">The Groom</span>
                    <div className="">

                        <Image src={wall4} alt="dddd" />
                    </div>

                </div>
                <div className="flex flex-col w-1/2 text-center justify-center">

                    <motion.span animate={animation} className="font-popins lg:text-4xl xs:text-lg sm:text-lg md:text-3xl">
                        Er. Ros Lama
                    </motion.span>

                    <span className="font-semibold lg:text-3xl xs:text-md sm:text-md md:text-2xl">Second Daughter of:</span>
                    <span className="lg:text-4xl xs:text-lg sm:text-lg md:text-3xl">Oliver</span>
                    <div className="flex flex-row items-center gap-2">

                        <AiFillInstagram size={20} />
                        <Link href={""} target="_blank">Instagram</Link>

                    </div>



                </div>
            </div>

            <div className="flex justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">

                {/* bride */}


                <div ref={ref} className="flex flex-col w-1/2 text-center justify-center">
                    <motion.span animate={animation} className="font-popins lg:text-4xl xs:text-lg sm:text-lg md:text-3xl">
                        Er. Rossy Lama
                    </motion.span>

                    <span className="font-semibold lg:text-3xl xs:text-md sm:text-md md:text-2xl">Second Son of:</span>
                    <span className="lg:text-4xl xs:text-lg sm:text-lg md:text-3xl">Oliver</span>
                    <div className="flex flex-row items-center gap-2">

                        <AiFillInstagram size={20} />
                        <Link href={""} target="_blank">Instagram</Link>

                    </div>



                </div>
                <div className="flex w-1/2  flex-col   bg-yellow-400 ">
                    <span className="text-white">The Bride</span>
                    <div className="">

                        <Image src={wall4} alt="dddd" />
                    </div>

                </div>




            </div>

        </div>



        <div className="h-screen bg-gray-300">
            <div className="flex flex-col justify-center items-center h-full">
                <div className="text-xl md:text-5xl lg:text-6xl p-2 text-center tracking-widest">Event Will Be Organized</div>
                <div className="my-5">
                    <GiTimeTrap size={40} />
                </div>
                <div className="flex flex-row gap-4">
                    {/* <motion.h2
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ scale: 5, x: 50, y: 50, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120 }}
                    >
                        hello framer
                    </motion.h2> */}
                    <div className="">

                        <span className="text-4xl">222</span>
                        <span className="inline-block align-top">days</span>
                    </div>
                    <div>
                        <span className="text-4xl">12</span>
                        <span className="inline-block align-top">hour</span>
                    </div>
                    <div>
                        <span className="text-4xl">12</span>
                        <span className="inline-block align-top">minutes</span>
                    </div>
                    <motion.div >
                        <span className="text-4xl">12</span>
                        <span className="inline-block align-top">seconds</span>
                    </motion.div>
                </div>
            </div>
        </div >
        <div className="flex grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="">

                <Image src={wall3} alt="dddd" />
            </div>
            <div className="  flex flex-col justify-center items-center xs:mt-10 sm:mt-10 md:mt-12">
                <div className="flex  ">
                    <span className="text-center tracking-wider p-1">It is an honor and happiness for us if Mr/Ms&nbsp;Binit. If you are willing to attend to give your blessing, we thank you.</span>

                </div>
                <div className="flex flex-col my-5">
                    <div className="border border-t-2" />



                    <span className="text-3xl p-1">Ricky & Zahra</span>
                    <div className="border border-t-2" />


                </div>

            </div>

        </div>
        <div className="flex relative mb-20 ">
            <Image className="" src={wall2} alt="dddd" />
            {/* background */}
            <div className="flex absolute justify-center top-0 bg-gray-700 opacity-50  w-full" />

            <div className="flex top-0 grid grid-cols-2 absolute justify-center place-items-center w-full">
                <div className="flex ">RVSP</div>
                <div className="flex justify-center text-white flex-col gap-4 ">
                    <div className="flex border-t-2 border-l-2 border-r-2 h-40  border-yellow-500 rounded-full">

                        <div className="flex flex-col text-center p-2">
                            <span className="italic ">Marriage </span>
                            <span>FRIDAY, OCTOBER 15TH, 2021

                                AT 09:00 WIB - FINISH</span>
                            <span>Crystal Bonquite,Lalitpur,05-Manbhavan</span>
                        </div>

                    </div>


                </div>

            </div>
        </div>


        {/* wish component */}

        <div className="h-auto lg:h-[600px] w-auto bg-[#292929] flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">


            <div onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center  gap-8 mx-2">

                <span className="text-white text-4xl">Wish </span>
                <div className="flex flex-col w-full max-w-[546px]">
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-gray-700 text-white w-full border border-slate-300  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="FullName" type="text" {...register('fullname')} />
                </div>
                <div className="flex flex-col w-full max-w-[546px]">
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-gray-700 text-white w-full border border-slate-300  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="" type="text" {...register('asdfsf')} />
                </div>


                <div className="flex flex-col w-full max-w-[546px]">
                    <textarea className="h-[100px] placeholder:italic placeholder:text-slate-400 block bg-gray-700 text-white w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Message" {...register('quote')} maxLength={200} />

                </div>
                <button className="flex justify-items-start text-white bg-gray-700 px-4 py-1">Send</button>
            </div>


            <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex w-[256px] xs:w-[300px] md:w-[300px] lg:w-[424px] xl:w-[546px]">




                    <div className="flex flex-col  left-[62px] my-1 max-h-[350px] overflow-y-auto gap-8 ">
                        <div className="text-xs text-indigo-400  font-semibold flex items-center">
                            <RiSendPlaneFill size={15} /> <span className="ml-2">

                                Binit Binit Lamichhane
                            </span>
                        </div>
                        <div className="text-xs text-gray-400 ">
                            "May your love continue to grow stronger with each passing day. Congratulations on your wedding!  May your love continue to grow stronger with each passing day. Congratulations on your wedding!  Congratulations on your wedding!  Congratulations on your wedding! "
                            "May your love continue to grow stronger with each passing day. Congratulations on your wedding!  May your love continue to grow stronger with each passing day. Congratulations on your wedding!  Congratulations on your wedding!  Congratulations on your wedding! "

                        </div>
                        <div className="border border-b-1" />
                        <div className="text-xs text-indigo-400  font-semibold flex items-center">
                            <RiSendPlaneFill size={15} /> <span className="ml-2">

                                Binit Binit Lamichhane
                            </span>
                        </div>
                        <div className="text-xs text-gray-400 ">
                            "May your love continue to grow stronger with each passing day. Congratulations on your wedding!  May your love continue to grow stronger with each passing day. Congratulations on your wedding!  Congratulations on your wedding!  Congratulations on your wedding! "
                            "May your love continue to grow stronger with each passing day. Congratulations on your wedding!  May your love continue to grow stronger with each passing day. Congratulations on your wedding!  Congratulations on your wedding!  Congratulations on your wedding! "

                        </div>
                        <div className="border border-b-1" />
                        <div className="text-xs text-indigo-400  font-semibold flex items-center">
                            <RiSendPlaneFill size={15} /> <span className="ml-2">

                                Binit Binit Lamichhane
                            </span>
                        </div>
                        <div className="text-xs text-gray-400 ">
                            "May your love continue to grow stronger with each passing day. Congratulations on your wedding!  May your love continue to grow stronger with each passing day. Congratulations on your wedding!  Congratulations on your wedding!  Congratulations on your wedding! "
                            "May your love continue to grow stronger with each passing day. Congratulations on your wedding!  May your love continue to grow stronger with each passing day. Congratulations on your wedding!  Congratulations on your wedding!  Congratulations on your wedding! "

                        </div>
                        <div className="border border-b-1" />
                        <div className="text-xs text-indigo-400  font-semibold flex items-center">
                            <RiSendPlaneFill size={15} /> <span className="ml-2">

                                Binit Binit Lamichhane
                            </span>
                        </div>
                        <div className="text-xs text-gray-400 ">
                            "May your love continue to grow stronger with each passing day. Congratulations on your wedding!  May your love continue to grow stronger with each passing day. Congratulations on your wedding!  Congratulations on your wedding!  Congratulations on your wedding! "
                            "May your love continue to grow stronger with each passing day. Congratulations on your wedding!  May your love continue to grow stronger with each passing day. Congratulations on your wedding!  Congratulations on your wedding!  Congratulations on your wedding! "

                        </div>
                        <div className="border border-b-1" />
                    </div>


                </div>
            </div>

        </div>
        {/* maps */}


        <div className="flex justify-center items-center">
            <div className="flex flex-col my-10 w-full justify-center items-center  ">

                <span className="flex text-center text-lg my-4">Marriage Location</span>

                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3533.643838542647!2d85.31492999999999!3d27.666489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM5JzU5LjQiTiA4NcKwMTgnNTMuOCJF!5e0!3m2!1sen!2snp!4v1696170454871!5m2!1sen!2snp" width="100%"
                    height="450"
                    className="border-0 mb-1"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

        </div>














    </>)
}


export default InvitationDetail