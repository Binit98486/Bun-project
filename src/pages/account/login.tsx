// "use client"

import { useForm } from "react-hook-form";
import groom from '../../../public/assets/images/groom.jpg';
import Image from "next/image";
import { useRouter } from "next/router";
import {
    AiOutlineEyeInvisible,
    AiOutlineEye, AiOutlineUser
} from 'react-icons/ai';
import loginservice from "@/components/services/loginservice";
import { useState } from "react";
import Input from "@/components/components/inputs/input";
import { notifyError, notifySuccess } from "@/components/components/toast/toast";
import Link from "next/link";

export default function LoginPage(props: any) {
    const router = useRouter()
    const [isShowPassword, setIsShowPassword] = useState(false);

    const togglePassword = () => {
        setIsShowPassword((isShowPassword) => !isShowPassword);
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        control,
    } = useForm();



    const onSubmit = async (data: any) => {
        const resp = await loginservice.Login(data)
        if (resp.error == false) {
            router.push("/")
            notifySuccess("Success")
            reset()

        } else {
            notifyError("failed")

        }
    };


    return (
        <>

            <div className="flex  mt-20 justify-center  ">


                <div className="p-7">
                    <Image src={groom} alt="groom" width={500} height={300} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
                    <div className=" flex justify-center w-full  flex-col gap-2 w-[400px] mt-2">
                        <div className="flex flex-col justify-start gap-6">
                            <span className="text-2xl font-poppins font-semibold">Log In</span>
                            <span className="text-gray-500">Enter email and password to login</span>
                        </div>
                        <div className="flex my-4 flex-col gap-2">

                            <label className="font-semibold text-gray-600 text-sm">Email</label>
                            <div className="relative flex shadow-lg w-[400px]">
                                <Input
                                    className="!py-3"
                                    placeholder="email"
                                    {...register('email', { required: true })}
                                />
                                <div className="absolute right-0 top-0 flex h-12  cursor-pointer items-center  justify-center rounded-r-md border-2   bg-gray-300 p-3 ">
                                    <AiOutlineUser />
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-4 flex-col gap-2">

                            <label className="font-semibold text-gray-600 text-sm">Password</label>
                            <div className="relative flex  shadow-lg w-[400px]">
                                <Input
                                    className="!py-3"
                                    type={isShowPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    {...register('password', { required: true })}
                                />
                                <div
                                    className="absolute right-0 top-0 flex h-12 cursor-pointer items-center  justify-center rounded-r-md border-2   bg-gray-300 w-12 hover:bg-gray-400"
                                    onClick={togglePassword}
                                >
                                    <button>
                                        {isShowPassword ? (
                                            <AiOutlineEyeInvisible />
                                        ) : (
                                            <AiOutlineEye />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {(errors.email || errors.password) && (
                            <span className="text-center text-sm text-red-500">
                                * All field is required
                            </span>
                        )}




                        <button className="bg-gray-500 w-full h-10 mt-4 p-1 rounded-md" type="submit">
                            <span className="text-white">
                                Login
                            </span>
                        </button>
                        <div className="flex gap-2 items-center">
                            <span className="text-xs">Don't have an account?</span>
                            <Link href={"/account/register"} className="text-text-blue hover:text-sm">
                                Register
                            </Link>

                        </div>
                        <div className="flex items-center">
                            <Link href={"/account/register"} className="text-blue-300 text-sm ">
                                Forgot Password?
                            </Link>

                        </div>

                    </div>
                </form>

            </div>


        </>
    );
}