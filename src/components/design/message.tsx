import Image from 'next/image'
import mess from '../../../public/assets/images/message.svg'

const Message = () => {
    return (
        <>
            <div className="flex flex-col   h-[300px] bg-dark">
                <div className='flex justify-center m-4 p-2'>
                    <Image src={mess} alt='message' style={{ color: "white" }} width={70} />
                </div>
                <div className='flex justify-center m-4 p-2'>
                    <span className='text-center text-gray-400 sm-text-medium md:text-lg lg:text-lg font-calligraphy'>Every great love starts with a great story, the story has to be right for it to be written. And now we decided to write a new story together forever</span>

                </div>

            </div>

        </>
    )
}
export default Message