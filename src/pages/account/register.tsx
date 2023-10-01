// "use client"

import allservice from "@/components/services/allservice";
import { useForm } from "react-hook-form";
import groom from '../../../public/assets/images/groom.jpg';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage(props: any) {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        control,
    } = useForm();



    const onSubmit = async (data: any) => {
        let api = "/user-registration"
        const resp = await allservice.Post(api, data)
        reset()



    };


    return (
        <>

            <div className="flex  mt-20 justify-center  ">

                <div className="p-7">
                    <Image src={groom} alt="groom" width={500} height={300} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-2 p-7">




                    <div className="flex flex-col">
                        <div>Email</div>
                        <input id="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            placeholder="Email Address"
                            required
                            {...register('email')}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div>Phone</div>
                        <input className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="number"
                            placeholder="Phone Number"
                            required

                            onInput={(e: any) => {
                                e.target.value = Math.max(0, parseInt(e.target.value) || 0).toString().slice(0, 10);
                            }}
                            {...register('phone')}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div>Password</div>
                        <input className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="password"
                            required
                            placeholder="Password"
                            {...register('password')}
                        />
                    </div>
                    <div className="flex items-center ">
                        <input type="checkbox" {...register("condition")} />
                        <span className="mx-1 px-1">I agree conditions of use</span>
                    </div>
                    <button className="bg-gray-500 mt-4 p-1 rounded-md" type="submit">
                        <span className="text-white">
                            Register
                        </span>
                    </button>
                    <div className="flex gap-2 items-center">
                        <span className="text-xs">Already have an account?</span>
                        <Link href={"/account/login"} className="text-text-blue hover:text-sm">
                            Login
                        </Link>

                    </div>

                </form>








            </div>


        </>
    );
}