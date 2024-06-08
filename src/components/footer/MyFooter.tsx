import React from 'react'

export default function MyFooter() {
  return (
    <footer className='font-sans flex flex-col shadow py-4 px-12 text-black dark:text-white bg-stone-100 dark:bg-black border-t border-black/20 dark:border-white/20'>
        <section className="w-full mx-auto max-w-screen p-4 md:flex md:items-center justify-between md:justify-normal">
            <div>               
                <span className="text-sm sm:text-center mr-4">© 2024 Matthew Andre Butalid</span>
                <p className="inline-flex items-center text-sm font-sans py-1 px-2 rounded-full bg-blue-600/30 text-[#0070f3]"><div className="h-2.5 w-2.5 rounded-full bg-[#0070f3] mr-2"></div>Looking for a Job</p>
            </div>
        </section>
        <nav>
            <ul className="w-full mx-auto max-w-screen px-4 grid grid-cols-2 gap-3 md:flex md:flex-nowrap items-center mt-3 text-sm font-medium sm:mt-0">
                <li>
                    <a href="" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="" className="hover:underline me-4 md:me-6">Skills</a>
                </li>
                <li>
                    <a href="" className="hover:underline me-4 md:me-6">Experience</a>
                </li>
                <li>
                    <a href="" className="hover:underline me-4 md:me-6">Contact</a>
                </li>
            </ul>
        </nav>
    </footer>
  )
}
