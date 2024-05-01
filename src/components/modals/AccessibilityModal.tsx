import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { MdClose } from "react-icons/md";
import Toggle from '../toggles/Toggle';

interface ModalProps {
    customClassName?: string,
    handleClose: () => void,
}


const AccessibilityModal: React.FC<ModalProps> = ({
    customClassName,
    handleClose,
}) => {
    const [darkMode, setDarkMode] = useState(false);

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

    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="font-sans fixed z-50 bottom-2 left-2 h-96 w-80 border-2 border-black shadow-2xl rounded-xl overflow-hidden bg-white text-black dark:bg-black dark:text-white dark:border-white dark:border"
        >
            <section className='flex p-2' id="modal-header">
                <h1 className="font-semibold flex-1">Accessibility Settings</h1>
                <button onClick={() => handleClose()} className='text-2xl font-bold border border-transparent hover:border-dashed hover:border hover:border-black hover:dark:border-white'>
                    <MdClose />
                </button>
            </section>
            <div className="border-b border-black dark:border-b dark:border-white mx-1">
            </div>
            <section className="content mt-2">
                <ul className="p-2 divide-y divide-black dark:divide-slate-200">
                    <li className="flex py-4 first:pt-0 last:pb-0">
                        <Toggle LabelName='Dark Mode' checked={darkMode} toggle={() => changeTheme()}/>
                    </li>
                    <li className="flex py-4 first:pt-0 last:pb-0">
                        <Toggle LabelName='Easy Orientation' checked={false}/>
                    </li>
                    <li className="flex py-4 first:pt-0 last:pb-0">
                        <Toggle LabelName='ADHD Friendly Mode' checked={false}/>
                    </li>
                    <li className="flex py-4 first:pt-0 last:pb-0">
                        <Toggle LabelName='Text Magnifier' checked={false}/>
                    </li>
                </ul>
            </section>
        </motion.div>
    );
}

export default AccessibilityModal;