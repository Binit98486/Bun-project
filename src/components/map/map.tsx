
const WeddingLocation = ({ address }: any) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex flex-col  w-full justify-center items-center  ">

                    <span className="flex text-center text-lg text-">{address}</span>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3533.643838542647!2d85.31492999999999!3d27.666489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM5JzU5LjQiTiA4NcKwMTgnNTMuOCJF!5e0!3m2!1sen!2snp!4v1696170454871!5m2!1sen!2snp" width="100%"
                        height="450"
                        className="border-0 mb-1"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

            </div></>
    )
}

export default WeddingLocation