import { useState, useRef } from "react";
import { motion } from "framer-motion";

// import music from "../../../public/assets/music/audio.mp3";


function Music() {
    const [color, setColor] = useState("");
    const [border, setBorder] = useState("");

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const handleClick = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
                setIsPlaying(false);
                setColor("bg-rose-100");
                setBorder("border-sky-600");
            } else {
                audioRef.current.pause();
                setIsPlaying(true);
                setColor("sky-500");
                setBorder("border-sky-900");
            }
        }
    };

    const svgVarients = {
        hidden: {
            x: "600vw",
        },
        visible: {
            x: 0,
        },
        transition: {
            stiffness: 300,
            type: "spring",
        },
    };
    const pathVarients = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };
    return (
        <>
            <div
                className={`${color} w-[60px] h-[60px] rounded-full 
        cursor-pointer 
        border-2 ${border}`}
                onClick={handleClick}
            >
                {/* <source src="../../../public/assets/music/audio.mp3" type="audio/mp3" /> */}

                <audio src="../../../public/assets/music/audio.mp3" loop ref={audioRef} autoPlay />

                <div className="">
                    <motion.svg
                        variants={svgVarients}
                        initial="hidden"
                        animate="visible"
                        enableBackground="new 0 0 512 512"
                        id="Laag_1"
                        version="1.1"
                        viewBox="0 0 512 512"
                    >
                        <g>
                            <motion.path
                                variants={pathVarients}
                                d="M377.4,248.6c1.5-0.5,2.7-0.9,4-1.3   c5.7-1.7,11.4-2.3,17.3-1.8c17.8,1.3,36,14.5,40.4,35.8c5.1,24.5-9.6,46.4-31.3,53c-4.1,1.2-8.2,1.8-12.5,1.8   c-41.4,0-82.8,0-124.2,0c-0.7,0-1.3,0-2,0c-2.7-0.2-4.7-2-5.1-4.6c-0.1-0.9-0.1-1.7-0.1-2.6c0-46.9,0-93.7,0-140.6   c0-0.8,0-1.5,0.1-2.3c0-1.7,0.9-2.9,2.3-3.7c0.8-0.5,1.7-0.9,2.6-1.2c6.3-2.4,12.8-3.9,19.5-4.7c5-0.6,10-0.7,14.9-0.3   c14.6,1.1,28.1,5.8,40.1,14.4c17,12.1,27.7,28.4,32.3,48.8C376.4,242.2,376.8,245.3,377.4,248.6z"
                                fill="none"
                                stroke="#E23E57"
                                strokeMiterlimit="10"
                                strokeWidth="10"
                            />
                            <path
                                d="M239.7,336.2h-0.3c-7.2,0-13-5.8-13-13V208   c0-7.2,5.8-13,13-13h0.3c7.2,0,13,5.8,13,13v115.1C252.7,330.3,246.9,336.2,239.7,336.2z"
                                fill="none"
                                stroke="#575756"
                                strokeMiterlimit="10"
                                strokeWidth="10"
                            />
                            <motion.path
                                variants={pathVarients}
                                d="M201.4,335.4h-0.3c-7.2,0-13-5.8-13-13v-73.8   c0-7.2,5.8-13,13-13h0.3c7.2,0,13,5.8,13,13v73.8C214.4,329.6,208.6,335.4,201.4,335.4z"
                                fill="none"
                                stroke="#E23E57"
                                strokeMiterlimit="10"
                                strokeWidth="10"
                            />
                            <path
                                d="M163.9,336.2h-0.3c-7.2,0-13-5.8-13-13v-90   c0-7.2,5.8-13,13-13h0.3c7.2,0,13,5.8,13,13v90C176.9,330.3,171.1,336.2,163.9,336.2z"
                                fill="none"
                                stroke="#575756"
                                strokeMiterlimit="10"
                                strokeWidth="10"
                            />
                            <motion.path
                                variants={pathVarients}
                                d="M124.2,336.2h-0.3c-7.2,0-13-5.8-13-13v-49.9   c0-7.2,5.8-13,13-13h0.3c7.2,0,13,5.8,13,13v49.9C137.2,330.3,131.4,336.2,124.2,336.2z"
                                fill="none"
                                stroke="#E23E57"
                                strokeMiterlimit="10"
                                strokeWidth="10"
                            />
                            <motion.path
                                d="M85.1,335.4h-0.3c-7.2,0-13-5.8-13-13v-25.8   c0-7.2,5.8-13,13-13h0.3c7.2,0,13,5.8,13,13v25.8C98.1,329.6,92.3,335.4,85.1,335.4z"
                                fill="none"
                                stroke="#575756"
                                strokeMiterlimit="10"
                                strokeWidth="10"
                            />
                        </g>
                    </motion.svg>
                </div>
            </div>
        </>
    );
}

export default Music;