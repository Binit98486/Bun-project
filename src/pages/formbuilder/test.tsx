import { useForm, SubmitHandler } from 'react-hook-form';
import FormBuilder from './form';
import bridegroomFormData from '@/components/features/bridegroom/formdata';
import allservice from '@/components/services/allservice';
import { notifyError, notifySuccess } from '@/components/components/toast/toast';
import { useRef } from 'react';
import back from '../../../public/assets/images/backg.jpg'
import Image from 'next/image';

interface FormData {
    firstName: string;
    email: string;
}

export default function MyForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        control,
    } = useForm<FormData>();

    const onsubmit: SubmitHandler<FormData> = async (data) => {
        debugger
        let api = '/brides'
        var resp = await allservice.Post(api, data)
        if (resp.data == false) {
            notifySuccess("Success")

        } else {
            notifyError("Failed")
        }
        console.log(data);
    };

    const formData = bridegroomFormData
    const handleReset = () => {
        // setFormKey((prev) => prev + 1);
        // setIsTableActive(false);
        // reset(defaultValues);
    };
    const inputref = useRef<HTMLInputElement>(null)


    return (
        <div className='flex justify-center'>
            <Image className='relative w-full h-full' src={back} alt='mfd'></Image>
            <form className=" p-10 py-12 absolute top-0  flex flex-col" onSubmit={handleSubmit(onsubmit)}>
                {/* form  */}

                <FormBuilder {...{ formData, register, errors, control }} />

                {/* button  */}
                <div className="mt-10 flex gap-x-4">
                    <button type='submit'

                        className=

                        "bg-[#070772]  text-white  flex w-fit flex-row  items-center justify-center gap-5 rounded-md px-5 py-3 font-medium uppercase transition-colors"

                    >
                        Save
                    </button>
                </div>


            </form>



        </div>
    );
}
