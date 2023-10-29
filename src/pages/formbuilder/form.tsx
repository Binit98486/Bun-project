
import Checkbox from '@/components/components/checkbox/checkbox';
import DateInput from '@/components/components/dateinput/dateinput';
import SelectInputDropdown from '@/components/components/dropdown/dropdown';
import FormErrorMessage from '@/components/components/formerrormessage/formerrormessage';
import FormLabel from '@/components/components/formlabel/formlabel';
import Input from '@/components/components/inputs/input';
import TextField from '@/components/components/textfield/textfield';
import { FormDataType, FormInputType } from '@/components/types/formbuildertypes';
import {
    Control,
    Controller,
    FieldErrors,
    UseFormRegister,
} from 'react-hook-form';

import { IoMdCalendar } from 'react-icons/io';

interface FormBuilderProps {
    formData: FormDataType[];
    register: UseFormRegister<FormInputType>;
    errors: FieldErrors<FormInputType>;
    control?: Control<FormInputType>;
}

export default function FormBuilder({
    formData,
    register,
    errors,
    control,
}: FormBuilderProps) {
    const length = formData?.length;


    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-x-12 gap-y-8`}
        // ${length > 6
        //         ? 'grid-cols-3'
        //         : length > 4
        //             ? 'grid-cols-2'
        //             : 'w-1/2 grid-cols-1'
        //     } grid gap-x-12 gap-y-8

        >
            {formData && formData?.map((item: FormDataType, index: number) => {
                const name = item?.name;
                const type = item?.type;
                return (
                    <div className="flex flex-col gap-y-2" key={index}>
                        <FormLabel
                            required={item.required}
                            className="flex items-center gap-x-2"
                        >
                            {item.label}
                            {type === 'Date' && <IoMdCalendar size={25} />}
                        </FormLabel>

                        {type === 'TextArea' && (
                            <TextField
                                placeholder={item.placeholder}
                                error={errors[name]}
                                {...register(name)}
                            />
                        )}

                        {typeof type === 'undefined' && (
                            <Input
                                placeholder={item.placeholder}
                                type="text"
                                error={errors[name]}
                                maxLength={item.maxLength}
                                {...register(name)}
                            // autoComplete="off"
                            />
                        )}

                        {/* {type === 'Password' && (
                            <PasswordInput
                                {...register(name)}
                                placeholder={item.placeholder}
                                error={errors[name]}
                            />
                        )} */}

                        {type === 'Dropdown' && (
                            <Controller
                                control={control}
                                name={name}
                                render={({ field }) => (
                                    <SelectInputDropdown
                                        className=" dark:text-gray-500"
                                        onChange={(selected: any) => {
                                            field.onChange(selected?.value);
                                        }}
                                        value={
                                            item.dropdownList?.find(
                                                (option: any) => field.value == option.value
                                            ) || null
                                        }
                                        options={item.dropdownList}
                                        placeholder={item.placeholder}
                                        error={errors[name]}
                                    />
                                )}
                            />
                        )}

                        {type === 'Date' && <DateInput {...register(name)} />}

                        {type === 'Checkbox' && <Checkbox {...register(name)} />}

                        <FormErrorMessage error={errors[name]} />
                    </div>
                );
            })}
        </div>
    );
}