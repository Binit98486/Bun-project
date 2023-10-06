import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        // getRoles();
        setTimeout(() => {
            setShowLoader(false); // Hide the loader after the timeout
        }, 3000);
    }, []);
    return (
        <>
            <div className="bg-[#DBD6CB]">

                {/* <Navbar /> */}
                <div className="">
                    {/* <div className=" mx-5 md:mx-10 lg:mx-16 mt-20"> */}

                    {children}
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}