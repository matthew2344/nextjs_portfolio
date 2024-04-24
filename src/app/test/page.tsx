'use client'
import { motion, useTime, useTransform } from 'framer-motion'
import React from 'react'

export default function page() {

    const time = useTime()
    const rotate = useTransform(
        time,
        [0, 12000],
        [0, 360],
        { clamp: false }
    )
  return (
    <div className="">
        
        <svg viewBox="0 0 200 200" width={200} height={200}>
            
            <defs>
                <path id="circle" d="M 100, 100
                    m -75, 0
                    a 75, 75 0 1, 0 150, 0
                    a 75, 75 0 1, 0 -150, 0
                ">

                </path>
                
            </defs>

            <motion.text style={{rotate}} width={400}>
                <textPath xlinkHref='#circle'>
                    Part of a heart-healthy breakfast...sorta! -
                </textPath>
            </motion.text>

            {/* <defs>
                <path startOffset={0} dominantBaseline={"Hanging"} id="MyPath"
                d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
                />
            </defs> */}

            {/* <motion.text style={{rotate}} fontSize={'0.7rem'} className="font-sans">
                <textPath xlinkHref='#MyPath'>
                    I want to bend my text around the circle.
                </textPath>
            </motion.text> */}

        </svg>
    </div>
  )
}
