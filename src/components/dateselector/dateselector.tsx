import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
interface dateInterface {
    title: string;
}

export default function DateSelector({ title }: dateInterface) {
    const [startDate, setStartDate] = useState(new Date());
    //console.log(startDate);

    return (
        <>
            <div className="ml-4 flex flex-col gap-2">
                <div className="text-lg font-semibold">{title}</div>
                <div className="flex ">
                    <DatePicker
                        className="rounded-md border-2 border-gray-300 bg-gray-200 p-2"
                        placeholderText="From"
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                    />
                </div>
            </div>
        </>
    );
}