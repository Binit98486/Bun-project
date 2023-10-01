import Presets from "@/components/components/presets/presetd"
import PresetDetail from "@/components/components/presets/presetdetaill"



const Detail = () => {
    return (
        <>
            <div className=" grid grid-cols-2">
                <PresetDetail className="" />

                <div className="flex flex-col md:ms-10 lg:ms-10 mt-5">
                    <div>
                        <span className="text-2xl font-semibold"> Drak Bo</span>
                    </div>

                    <div className="bg-text-peruvian rounded-md text-center w-24 ">
                        <button className="text-gray-50 ">Premimum</button>
                    </div>

                    <div className="flex">
                        <span className="italic text-blue text-xs mt-2 indent-4">
                            *luxury presets can be used if your invitation uses an exclusive package and must buy this preset on the dashboard invitation display menu
                        </span>
                    </div>
                    <div className="my-2">
                        <span className="text-currency">Rs.1500</span>
                    </div>
                    <div className="bg-text-peruvian w-32 text-center rounded-sm hover:ring-2 ring-currency">
                        <button className="text-gray-50 ">Preview Setting</button>
                    </div>

                </div>

            </div>
            <div className="flex flex-row">

                <Presets />

            </div>





        </>
    )

}
export default Detail