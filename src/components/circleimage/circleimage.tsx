import Image, { StaticImageData } from 'next/image'

interface ImageType {
    img: string | StaticImageData
}

const CircleImage: React.FC<ImageType> = ({ img }) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <Image src={img} alt="slide" className="rounded-full object-none
                                      w-60 h-60 border-2 border-white" width={320} height={320} quality={100} />
            </div>


        </>
    )
}

export default CircleImage