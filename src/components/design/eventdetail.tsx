
import { IoTimeOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import Link from 'next/link'
interface Iprops {
    title: string,
    nepdate: string,
    engdate: string,
    starttime: string,
    endtime: string,
    location: string
}
const EventDetail = (props: Iprops) => {
    const { title, nepdate, engdate, starttime, endtime, location } = props
    return (
        <>
            <div className="flex bg-gray-400 flex-col justify-center items-center">
                <div className="flex flex-col w-[477px] h-[350px] bg-gray-100 shadow-xl rounded-lg gap-2 my-4">
                    <div className="flex justify-center my-4">
                        <span className="p-2 font-allura text-4xl text-dark">{title}</span>
                    </div>
                    <div className="flex justify-center flex-col items-center my-1">
                        <span className='p-1'>{engdate}</span>
                        <span className='p-1'>{nepdate}</span>


                    </div>
                    <div className="flex justify-center  items-center gap-1 my-1">
                        <IoTimeOutline />
                        <span className='p-1'>{starttime}</span>-
                        <IoTimeOutline />
                        <span className='p-1'>{endtime}</span>



                    </div>
                    <div className='flex justify-center items-center my-1 gap-2'>
                        <Link href="/">

                            <CiLocationOn size={25} color={"#19184D"} />
                        </Link>
                        <span className='p-1'>{location}</span>


                    </div>
                    <div className='flex justify-center'>
                        <Link href={'/'}>
                            <button className='bg-gray-300 p-2 m-1 w-32 rounded-lg'>Location</button>
                        </Link>

                    </div>

                </div>



            </div>
        </>
    )
}


export default EventDetail