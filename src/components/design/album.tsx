

import Image, { StaticImageData } from 'next/image'

interface ImageType {
    imgarray: any | StaticImageData
}

const Album: React.FC<ImageType> = ({ imgarray }) => {
    console.log(imgarray);

    const { image1, image2, image3, image4, image5, image6 } = imgarray
    return (
        <>
            <div className="flex flex-col">
                <div className='flex justify-center bg-dark'>

                    <span className='flex text-center font-script text-gray-100 my-10 text-6xl'>Two of Us</span>
                </div>
                <div className="flex grid grid-cols-2 bg-gray-200">
                    {
                        imgarray.map((item: any, index: number) => (
                            <div key={index}>

                                <Image src={item.photo} alt="" className="w-[245px] h-[377px]  object-cover rounded-lg m-1" />
                            </div>


                        ))
                    }


                </div>
                <div>

                </div>


            </div>


        </>
    )
}
export default Album