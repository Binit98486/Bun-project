
import classNames from '@/components/utils/classNames';
import { InputHTMLAttributes } from 'react';
import { GiTimeTrap } from 'react-icons/gi';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;

}

const EventCountDown = (props: InputProps) => {
    const { className } = props

    return (
        <>
            <div className="h-screen bg-gray-300">
                <div className="flex flex-col justify-center items-center h-full">
                    <div className={classNames(" p-2 text-center tracking-widest", className)}>Event Will Be Organized</div>
                    <div className="my-5">
                        <GiTimeTrap size={40} />
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="">

                            <span className={"text-4xl"}>222</span>
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
                        <div >
                            <span className="text-4xl">12</span>
                            <span className="inline-block align-top">seconds</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EventCountDown