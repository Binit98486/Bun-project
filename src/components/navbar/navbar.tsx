import { useState, useEffect } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { IconType } from "react-icons";

type Props = {
    x: IconType
};


const Navbar: React.FunctionComponent = () => {

    const [navbarFixed, setNavbarFixed] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setNavbarFixed(true);
            } else {
                setNavbarFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-20 transition duration-500 ease-in-out ${navbarFixed ? "bg-white text-gray-600" : "bg-[#176B87] text-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex  h-16">
                    <div className="flex  items-center">
                        {/* <div className="flex-shrink-0">
                            <Link href="/">
                                <Image
                                    src="/images/logo.png"
                                    alt="logo"
                                    width={150}
                                    height={100}
                                />
                            </Link>
                        </div> */}

                        <div className=" flex">
                            <div className="block sm:hidden">
                                <button
                                    type="button"
                                    className="text-gray-50 hover:text-black focus:outline-none focus:text-black flex  "
                                    aria-label="Toggle menu"
                                    onClick={() => setShowMenu(!showMenu)}
                                >

                                    <BiMenu
                                        size={28}
                                        color={`${navbarFixed ? "black" : "white"}`}
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline gap-8 text-xl p-4 ">

                                <Link href="/">

                                    <div className=" hover:text-primary-red">Our Wedding</div>
                                </Link>
                                <Link href="/">
                                    <div className=" hover:text-primary-red">Design</div>
                                </Link>

                                <Link href="/">
                                    <div className=" hover:text-primary-red">Portfolio</div>
                                </Link>

                                <Link href="/">   <button className="border border-2 bg-gray-400 rounded-md p-1 hover:text-cyan-600 hover:ring-2 ring-pink-500">Login

                                </button></Link>
                            </div>
                        </div>
                    </div>
                    {/* <PrimaryButton className="px-5 py-2"> */}

                    {/* </PrimaryButton> */}
                </div>
            </div>
            {showMenu && (
                <div className="sm:hidden ">
                    <div className="flex flex-col px-2 pt-2 pb-3 gap-6 ms-6  text-sm lg:text-lg ">
                        <Link href="/" className="block   ">
                            Our Wedding
                        </Link>
                        <Link href="/" className="block  ">
                            Design
                        </Link>

                        <Link href="/" className="block">
                            Contact
                        </Link>
                        <Link href="/" className="block">
                            Pricing
                        </Link>

                        <Link href="/">
                            <button className="border border-2 bg-gray-400 rounded-md p-1 hover:text-cyan-600">Login

                            </button>
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;