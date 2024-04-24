import React from 'react'
import { motion } from 'framer-motion';

function FramerIcon() {

    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fillOpacity: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fillOpacity: 1,
        }
    }

  return (
    <div className="flex place-content-center overflow-hidden h-24 w-24">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="my-item fill-black dark:fill-white stroke-black dark:stroke-white"
        >
            <motion.path
                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
            />
        </svg>
    </div>
  )
}

export default FramerIcon