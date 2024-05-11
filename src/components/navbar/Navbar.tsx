import React, { useEffect } from 'react'
import { MdOutlineWbSunny, MdNightlight, MdMenu, MdOutlineClose } from "react-icons/md";
import NavLink from '../link/NavLink';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    list?: string,
}

const navLinks = [
  { title: 'About', href: '#About', customClass: ''},
  { title: 'Education', href: '#', customClass: ''},
  { title: 'Skills', href: '#', customClass: ''},
  { title: 'Experience', href: '#', customClass: ''},
]

const Navbar: React.FC<NavbarProps> = ({
  list
}) => {
    const [darkMode, setDarkMode] = React.useState(false);
    const [drawer, setDrawer ] = React.useState(false);

    const menuVars = {
      initial:{
        scaleY: 0,
      },
      animate:{
        scaleY: 1,
        transition:{
          duration: 0.5,
          ease: [0.12, 0, 0.39, 0],
        }
      },
      exit:{
        scaleY: 0,
        transition: {
          duration: 0.5,
          delay: 0.5,
          ease: [0.22, 1, 0.39, 1],
        }
      }
    }

    const containerVars = {
      initial: {
        transition: {
          staggerChildren: 0.09,
          staggerDirection: -1,
        },
      },
      open: {
        transition:{
          delayChildren:0.3,
          staggerChildren: 0.09,
          staggerDirection: 1,
        }
      }
    }

    useEffect(() => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") setDarkMode(true);

      addEventListener('StorageTheme', () => {
        // Listen to theme changes
        const theme = localStorage.getItem("theme");
        (theme === "dark") ? setDarkMode(true) : setDarkMode(false);
      });
    }, []);

    const changeTheme = () => {

      if(darkMode) {
        // If in dark mode --> change to light mode
        localStorage.setItem("theme", "light");
        dispatchEvent(new Event('StorageTheme'));
      } else {
        // If in light mode --> change to dark mode
        localStorage.setItem("theme", "dark");
        dispatchEvent(new Event('StorageTheme'));
      }

      setDarkMode(!darkMode)
    }

    return(
      <>
        <nav 
          className="font-sans fixed w-full bg-stone-100 dark:bg-black z-20">
          <div className="flex mx-auto px-4 py-3">
            <div className=' font-serif font-extralight indent-0 text-base my-auto hidden md:flex'>
              <span>
                Matthew 
                <br className='leading-0 inline-block'/>
                Andre Butalid
              </span>
            </div>

            <div className="font-serif font-light space-x-4 text-base items-center justify-center hidden md:flex md:flex-1">
              {
                navLinks.map((link) => {
                  const uniqueId = `${link.title}-${link.href}`; // create a unique identifier
                  return <NavLink key={uniqueId} to={link.title} customClass={link.customClass} title={link.title} />
                })
              }
            </div>

            <button className="text-2xl flex flex-1 md:hidden" onClick={() => {setDrawer(!drawer)}}>
              {drawer ? <MdOutlineClose/> : <MdMenu/>}
            </button>

            <button title={darkMode ? 'Dark Mode' : 'Light Mode'} className="text-2xl md:text-3xl text-black dark:text-white" onClick={() => changeTheme()}>
              {darkMode ? <MdNightlight/> : <MdOutlineWbSunny/> }
            </button>

          </div>
        </nav>
        <AnimatePresence>
        {drawer &&   
          <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-yellow-400 text-black p-10 font-lora origin-top z-50">
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className=" text-lg text-black">Matthew <br /> Andre Butalid</h1>
                <p className="cursor-pointer text-md text-black" onClick={() => setDrawer(false)}>CLOSE</p>
              </div>
              <motion.div 
                variants={containerVars}
                initial='initial'
                animate="open"
                exit="initial"
                className='flex flex-col h-full justify-center items-center gap-4'>
                {
                  navLinks.map((link) => {
                    const uniqueId = `${link.title}-${link.href}`;
                    return (

                      <div className="overflow-hidden" key={uniqueId}>

                        <MobileNavLink
                          title={link.title}
                          href={link.href}
                        />

                      </div>
                    )
                  })
                }
              </motion.div>
            </div>
          </motion.div>
        }
        </AnimatePresence>

        {/* {drawer && <BottomSheet/>} */}
      </>
    );
}

export default Navbar;

const MobileNavLink = ({title, href}: { title: string; href: string }) => {

  const mobileLinkVars = {
    initial: {
      y:"30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1]
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1]
      }
    },
    hoveranimation: {
      y: [-100, 0], // Add this new variant for the hover animation
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      },
    }
  }

  return (
    <motion.div variants={mobileLinkVars} className='text-5xl uppercase text-black'>
      <Link className='animate-my-link' href={href}>
        {title}
      </Link>
    </motion.div>
  )
}