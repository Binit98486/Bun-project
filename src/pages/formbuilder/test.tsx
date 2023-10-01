import { useForm, SubmitHandler } from 'react-hook-form';
import FormBuilder from './form';
import bridegroomFormData from '@/components/features/bridegroom/formdata';
import Button from '@/components/components/button/primarybutton';
import allservice from '@/components/services/allservice';
import UnFinished from '@/components/components/unnfinished/unfinished';

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

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        let api = '/grooms'
        var resp = await allservice.Post(api, data)
        console.log(data);
    };

    const formData = bridegroomFormData
    const handleReset = () => {
        // setFormKey((prev) => prev + 1);
        // setIsTableActive(false);
        // reset(defaultValues);
    };


    return (
        <div className=''>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex grid grid-cols-2'>
                    <div>

                        <span>Bride Side Details</span>

                        <FormBuilder
                            {...{ formData, register, errors, control }}

                        />
                    </div>
                    <div>
                        <UnFinished />
                    </div>

                </div>
                <div className="mt-10 flex gap-x-4">
                    <Button type="submit" disabled={!isDirty}>
                        Save
                    </Button>
                    <Button type="button" onClick={handleReset}>
                        Clear
                    </Button>
                    {/* <button
                        type="button"
                        className="inline-block rounded-lg bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
                        Dark
                    </button> */}
                </div>
            </form>
        </div>
    );
}
