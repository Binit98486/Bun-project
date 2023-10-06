import { motion } from "framer-motion";
function Framer() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    const food = [
        {
            name: "Pizza",
            id: 1,
        },

        {
            name: "Burger",
            id: 2,
        },
        {
            name: "Sausages",
            id: 3,
        },
        {
            name: "Hot Dog",
            id: 4,
        },
    ];

    const framerVarients = {
        hidden: {
            opacity: 0,
            x: "100vw",
        },
        show: {
            opacity: 1,
            x: 0,

            transition: {
                stiffness: 300,
                type: "spring",
            },
        },
    };

    return (
        <>

            <div className="flex justify-center items-center flex-col my-20 bg-slate-500">
                <div className="flex flex-col gap-y-40">
                    <motion.h2
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ scale: 5, x: 50, y: 50, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120 }}
                    >
                        hello framer
                    </motion.h2>
                    <motion.h2
                        initial={{ y: -200 }}
                        animate={{ y: -10 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                    >
                        Framer
                    </motion.h2>

                    <div className="flex gap-20">
                        <motion.button
                            whileHover={{
                                scale: 2,
                                // textShadow: "0px 0px 8px rgb(255,255,255)",
                                boxShadow: "0px 0px 8px rgb(255,255,255)",
                            }}
                            transition={{ delay: 0.2, duration: 1.5, type: "spring" }}
                            className=" border-2 p-2 rounded-md font-bold text-indigo-900"
                        >
                            hello1
                        </motion.button>

                        <motion.button
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0, scale: 2, fontSize: 50 }}
                            transition={{ delay: 0.5, duration: 1, type: "spring" }}
                            className="bg-indigo-800 p-2 rounded-md text-white"
                        >
                            hello2
                        </motion.button>
                    </div>

                    <motion.button
                        initial={{ x: "100vw" }}
                        animate={{ x: 0, scale: 3, fontSize: 50 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="bg-indigo-800 p-2 rounded-md text-white"
                    >
                        hello
                    </motion.button>
                </div>
                <div className="mt-20">
                    {food.map((item) => (
                        <motion.div
                            className="text-white"
                            key={item.id}
                            whileHover={{
                                scale: 1.3,
                                color: "#fffff",
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            {item.name}
                        </motion.div>
                    ))}

                    <motion.div variants={framerVarients} initial="hidden" animate="show">
                        Hello framer
                    </motion.div>
                </div>


                <motion.div
                    className="w-44 h-44 bg-indigo-600 rounded-full"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                />
            </div>
        </>
    );
}
export default Framer;