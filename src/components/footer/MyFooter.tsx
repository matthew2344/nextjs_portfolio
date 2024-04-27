import React from 'react'

export default function MyFooter() {
  return (
    <footer className='font-sans flex flex-col md:flex-row shadow py-4 px-12 text-black dark:text-white bg-stone-100 dark:bg-black border-t border-black dark:border-white'>
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center">© 2024 Matthew Andre Butalid. All Rights Reserved.</span>
        </div>
        <ul className="px-4 flex flex-wrap md:flex-nowrap md:justify-center items-center mt-3 text-sm font-medium sm:mt-0">
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
    </footer>
  )
}
