import { useState, useMemo, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { BsPlusCircleFill } from 'react-icons/bs';
import { BiSolidMinusCircle } from 'react-icons/bi';


// interface IProps {
//     isNew: boolean,
//     fine: any,
//     showForm: boolean,
//     closeCallback: any,
//     reloadCallback: any;

// }
export default function Family() {

    const [isFlatChecked, setisFlatChecked] = useState(true);
    const [FineBasis, setFineBasis] = useState([]);
    const [FineBasisId, setFineBasisId] = useState();

    const [briderIndexes, setBrideIndexes] = useState([0]);
    const [briderCounter, setBrideCounter] = useState(1);
    const [groomIndexes, setGroomIndexes] = useState([0]);
    const [groomCounter, setGroomCounter] = useState(1);

    const [isCreateAnother, setIsCreateAnother] = useState(false);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = async (data: any) => {

        console.log(data);

        // var resp = await fineservice.Add(data);
        // if (resp.Code == 200) {
        //     notifySuccess(resp.Message);
        //     props.reloadCallback();
        //     if (!isCreateAnother || !props.isNew) {
        //         props.closeCallback();
        //     }
        //     reset(props.fine);
        // } else {
        //     notifyError(resp.Message);
        // }
    }


    const addBrideSlab = () => {
        setBrideIndexes(prevIndexes => [...prevIndexes, briderCounter]);
        setBrideCounter(prevCounter => prevCounter + 1);
    };

    const removeBrideSlab = (index: any) => () => {
        setBrideIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setBrideCounter(prevCounter => prevCounter - 1);
    };

    const addGroomSlab = () => {
        setGroomIndexes(prevIndexes => [...prevIndexes, groomCounter]);
        setGroomCounter(prevCounter => prevCounter + 1);
    };

    const removeGroomSlab = (index: any) => () => {
        setGroomIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setGroomCounter(prevCounter => prevCounter - 1);
    };

    // const clearFineSlabs = () => {
    //     setIndexes([0]);
    // };

    // const ListFineBasis = async () => {
    //     var response = await fineservice.FineBasis();
    //     if (response.Code == 200) {
    //         setFineBasis(response.Data);
    //     } else {
    //         notifyError(response.Message);
    //     }
    // }
    return (
        <>
            <div className='flex justify-center  '>






                <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col'  >
                    <div className="flex flex-col justify-center gap-2 ">





                        <div>
                            <span className='text-2xl font-poppins'>Bride Side</span>


                            {briderIndexes.map(index => {
                                const fieldName = `Family[${index}]`;
                                return (
                                    <div>
                                        <fieldset name={fieldName} key={fieldName}>
                                            <input type="text" style={{ display: "none" }} name={fieldName + ".Id"} defaultValue={0} className="" {...register} />
                                            <div className="flex flex-col gap-2">


                                                <div className="">
                                                    <input type="text" placeholder="Relation" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500" {...register(fieldName + ".Relation", { min: 1 })} />
                                                    <div className="text-danger">{errors.Relation && <span>{errors.Relation.message as String}</span>}</div>
                                                </div>



                                                <div className="col-md-3 col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" step="any" placeholder="Name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500" {...register(fieldName + ".Name", { min: 1 })} />
                                                    </div>
                                                    <div className="text-danger">{errors.Name && <span>{errors.Name.message as String}</span>}</div>
                                                </div>
                                                <div className='flex flex-row gap-4 my-2'  >
                                                    <div className='border border-2 border-green-600 p-3 rounded-md' onClick={addBrideSlab}>

                                                        <BsPlusCircleFill color={'green'} size={'25'} />
                                                    </div>

                                                    {index > 0 ?
                                                        <div className='border border-2 border-red-500 p-3 rounded-md' onClick={removeBrideSlab(index)}>
                                                            <BiSolidMinusCircle color="red" size={'26'} />
                                                        </div>

                                                        : ""}
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                );
                            })}
                        </div>


                        {/* <div>
                            <span className='text-2xl font-poppins'>Groom Side</span>


                            {groomIndexes.map(index => {
                                const fieldName = `Family[${index}]`;
                                return (
                                    <div>
                                        <fieldset name={fieldName} key={fieldName}>
                                            <input type="text" style={{ display: "none" }} name={fieldName + ".Id"} defaultValue={0} className="" {...register} />
                                            <div className="flex flex-col gap-2">


                                                <div className="">
                                                    <input type="text" placeholder="Relation" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500" {...register(fieldName + ".Days", { min: 1 })} />
                                                    <div className="text-danger">{errors.Days && <span>{errors.Days.message as String}</span>}</div>
                                                </div>



                                                <div className="col-md-3 col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" step="any" placeholder="Name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500" {...register(fieldName + ".Value", { min: 1 })} />
                                                    </div>
                                                    <div className="text-danger">{errors.Value && <span>{errors.Value.message as String}</span>}</div>
                                                </div>
                                                <div className='flex flex-row gap-4 my-2'  >
                                                    <div className='border border-2 border-green-600 p-3 rounded-md' onClick={addGroomSlab}>

                                                        <BsPlusCircleFill color={'green'} size={'25'} />
                                                    </div>

                                                    {index > 0 ?
                                                        <div className='border border-2 border-red-500 p-3 rounded-md' onClick={removeGroomSlab(index)}>
                                                            <BiSolidMinusCircle color="red" size={'26'} />
                                                        </div>

                                                        : ""}
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                );
                            })}
                        </div> */}

                    </div>
                    <div className="flex gap-2 my-2 justify-end">

                        <button type="button" className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]" >Close</button>
                        <button type="submit" className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">Save</button>
                    </div>
                </form>
            </div>

        </>
    );
}