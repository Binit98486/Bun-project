"use client"

import allservice from "@/components/services/allservice";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage(props: any) {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        control,
    } = useForm();
    const [dataa, setDataa] = useState<any>()
    const [email, setEmail] = useState<any>()
    const [phone, setPhone] = useState<any>()
    const [pass, setPass] = useState<any>()


    const onSubmit = async () => {



        let api = "/user-registration"
        const resp = await allservice.Login(api, email, phone, pass)


        console.log(resp);
        reset()



    };


    return (
        <>

            <div className="flex justify-centermt-20  ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <div>Email</div>
                        <input className="border border-2" type="text" onChange={(e: any) => {
                            setEmail(e.target.value)


                        }}
                        //  {...register('email')}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div>Phone</div>
                        <input className="border border-2" type="text"
                            onChange={(e: any) => {
                                setPhone(e.target.value)


                            }}
                        //  {...register('phone')}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div>Password</div>
                        <input className="border border-2" type="password" onChange={(e: any) => {
                            setPass(e.target.value)


                        }}
                        // {...register('password')} 
                        />
                    </div>
                    <button className="bg-gray-500 mt-4 p-1 rounded-md" type="submit">
                        <span className="text-white">
                            Register
                        </span>
                    </button>



                </form>

            </div>


        </>
    );
}