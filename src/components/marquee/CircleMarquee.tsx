import { useTime, useTransform, motion } from 'framer-motion'
import React from 'react'

interface CircleMarqueeProps {
  customClass?: string,
  customStyle?: string,
}


const CircleMarquee: React.FC<CircleMarqueeProps> = ({
  customClass,
  customStyle
}) => {
  const text = "Matthew Andre M. Butalid   Web Developer"
  const time = useTime()
  const rotate = useTransform(
    time,
    [0, 12000],
    [0, 360],
    { clamp: false }
  )

  const myClass = `rounded-full relative flex items-center justify-center ${customClass}`
  return (

        <div style={{ height: '150px', width: '150px'}} className={myClass}>
            <div style={{ height: '100px', width: '100px'}} className="rounded-full border border-black dark:border-white flex items-center justify-center">
              <div className="rounded-full w-4 h-4 bg-black dark:bg-white"></div>
            </div>
            <motion.p style={{ rotate }} className="font-sans absolute top-0 left-0 w-full h-full">
                {text.split('').map((char, index) => (
                  // transform rotate by index * 5 degree
                  <span key={index} style={{ transform: `rotate(${index * 8}deg)`, 
                  position: 'absolute',
                  left: '50%',
                  transformOrigin: '0 75px'
                  }} className='font-medium text-sm'>{char}</span>
                ))}
            </motion.p>
        </div>
    
    

  )
}

export default CircleMarquee;