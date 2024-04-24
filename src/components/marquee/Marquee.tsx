import React from 'react'



interface MarqueeProps {
    customClass?: string,
    data?: { text: string, icon?: React.ReactNode, className?: string }[],
}


const Marquee: React.FC<MarqueeProps> = ({
    customClass,
    data,
}) => {


    return (
        <div className={`relative flex overflow-hidden ${customClass}`}>
            <div className="pt-7 pb-2 animate-marquee whitespace-nowrap">
                {data?.map((item, index) => (
                    <span key={index} className={`mx-4 text-4xl md:text-6xl ${item.className}`}>
                        {item.text}
                    </span>
                ))}
            </div>
            <div className="absolute top-0 pt-7 pb-2 animate-marquee2 whitespace-nowrap">
                {data?.map((item, index) => (
                    <span key={index} className={`mx-4 text-4xl md:text-6xl ${item.className}`}>
                        {item.text}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Marquee;