// import Navbar from "@/components/Navbar";
'use client';
import { useState, useEffect } from "react";
import { MdOutlineAccessibilityNew  } from "react-icons/md";
import Fab from "@/components/buttons/Fab";
import AccessibilityModal from "@/components/modals/AccessibilityModal";
import { AnimatePresence, motion } from "framer-motion"; 
import Navbar from "@/components/navbar/Navbar";
import CircleMarquee from "@/components/marquee/CircleMarquee";
import Marquee from "@/components/marquee/Marquee";
import MarqueeRight from "@/components/marquee/MarqueeRight";
import TechnologyList from '@/components/marquee/TechnologyList';
import TechnologyList2 from '@/components/marquee/TechnologyList2';
import TechnologyList3 from '@/components/marquee/TechnologyList3';
import FramerIcon from "@/components/icon/FramerIcon";
import { FaInstagram, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { SiKotlin, SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";
import { FaFacebook, FaGithub, FaLaravel, FaLinkedin, FaNode, FaPhp, FaPython, FaReact, FaVuejs } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import ProjectCarousel from "@/components/carousel/ProjectCarousel";
import MyFooter from "@/components/footer/MyFooter";


// import SkillBadge from "@/components/badge/SkillBadge";
// import { motion } from "framer-motion"; 

export default function Home() {
  const [openModal, setModal] = useState(false);


  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
    }

    addEventListener('StorageTheme', () => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark')
      }
    });

  }, []);



  const handleOpen = () => {
    setModal(true);
  }

  const handleClose = () => {
    setModal(false);
  }



  return (
      <main className="flex flex-col bg-white text-stone-950 dark:text-neutral-50 dark:bg-black selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
          <Navbar/>




          {/* About Me */}
          <section className="font-serif about-me md:px-20 md:py-20 flex pt-16 px-8">


            <div className="md:grid md:grid-cols-2 md:gap-10 sm:flex">

              <div className="flex flex-col">
                
                <h1 id="About" className="font-inter text-2xl font-black uppercase [&>span]:text-3xl">
                    <span>M</span>atthew <span>A</span>ndre <span>B</span>utalid
                </h1>

                <p className="text-base font-inter mt-6">
                  Hi I am <span className="underline underline-offset-4">Matthew Andre M. Butalid</span> I'm
                  a web developer with a background in both front-end and back-end development.
                </p>


                <section className="education mt-10">
                  <h1 className="new-roman text-2xl font-semibold">
                    Education
                  </h1>

                  <div className="font-serif font-medium flex flex-col">
                    <span className="mt-1">
                      Bachelor of Science in Information Technology
                    </span>
                    <span className="">
                      FEU Institute Of Technology - 2019-2024
                    </span>
                  </div>

                  <p className="mt-4">
                    Completed a Bachelor's degree in Information Techonology Specializing in
                    Web And Mobile Applications with a focus on foundational programming concepts,
                    algorithms, and web development. Developed a strong understanding of software development principles.

                  </p>
                </section>



              </div>

              <div className="hidden md:flex justify-center content-center h-100">
                <motion.img
                  initial={{ 
                    y: 100,
                    opacity: 0
                  }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: 'easeInOut'
                  }}
                  className="rounded-lg shadow-lg" 
                  src="/images/sample.webp"
                  width={500}
                  height={700} 
                  alt="sample"/>
              </div>



            </div>


          </section>
          {/* About Me */}



          <section className="font-serif px-5 md:px-20 md:mt-4 flex flex-col pt-16">

            <div className="flex flex-col">
              <h1 className="new-roman font-black text-3xl md:text-6xl text-center md:mx-20 lg:mx-28">
                WHAT I USE
              </h1>
              <div className="relative border-t border-black dark:border-white mt-5">
                <div className="absolute" style={{ top: '-75px', left: '-70px'}}>
                  <CircleMarquee customClass=""/>
                </div>

                <Marquee data={TechnologyList} customClass="mt-4"/>
                <MarqueeRight data={TechnologyList2}/>
                <Marquee data={TechnologyList3}/>

                {/* <div className="my-2">
                  <ul className="flex justify-center">
                    <li><FramerIcon/></li>
                    <li><FramerIcon/></li>
                    <li><FramerIcon/></li>
                  </ul>
                </div> */}

                <div className="flex flex-wrap gap-8 my-6 mx-auto text-4xl sm:text-4xl md:text-5xl justify-center items-center">
                  <SiMysql/>
                  <FaPhp/>
                  <RiJavascriptLine/>
                  <FaReact/>
                  <FaVuejs/>
                  <SiNextdotjs/>
                  <FaLaravel/>
                  <SiMongodb/>
                  <FaNode/>
                  <FaPython/>
                  <SiKotlin/>
                </div>


                <div className="my-5 px-5 md:px-16 new-roman border-b border-black dark:border-white py-8">
                  <FaQuoteLeft/>
                  <blockquote className="antialiased">
                    <p className="text-base md:text-lg uppercase first-line:not-italic italic tracking-widest first-letter:text-6xl md:first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">As a software developer, I embrace the ever-evolving nature of technology. I am constantly seeking opportunities to expand my knowledge and skillset, eagerly diving into new programming languages, frameworks, and methodologies. With an insatiable curiosity and a relentless work ethic, I am committed to staying ahead of the curve, ensuring that my solutions are cutting-edge and efficient. I am a firm believer that continuous learning is the key to growth, and I approach each challenge with a determination to conquer it, no matter how complex it may seem. My hard work and dedication are fueled by a genuine passion for what I do, driving me to push boundaries and deliver exceptional results.</p>
                  </blockquote>
                  <FaQuoteRight  className="float-right"/>
                  
                  <div className="flex justify-center">

                    <h1 className="font-serif uppercase mt-4 [&>span]:text-lg">
                      <span>M</span>atthew <span>A</span>ndre <span>B</span>utalid
                    </h1>

                    <hr />

                  </div>

                </div>

              </div>

            </div>
            
          </section>


          <section className="font-serif mt-16 mx-5 md:mx-20  pb-16">
            <div className="flex flex-wrap md:grid md:grid-flow-col md:gap-7">

              <div className="mb-12 md:mb-0">
                <h1 className="text-3xl md:text-2xl antialiased sm:text-left">Professional Experiences —</h1>
              </div>
              
              <div>
                <ul className="flex flex-col gap-5">
                  <li>
                    <article className="text-pretty border-b border-black dark:border-white pb-4">
                      <h1 className="text-2xl">Circuit Solutions Inc.</h1>
                      <h2 className="text-sm">Web Developer Intern</h2>
                      <h2 className="text-sm">September 2023 - December 2023</h2>
                      <h3 className="text-xs">Unit B 14th Flr. Belvedere Tower, San Miguel Ave, Ortigas Center, Pasig, 1605 Metro Manila · On-site</h3>
                      <p className="mt-5">Developed a web application to track Technical Field Employee time and attendance using VueJS for the front-end and Laravel as the backend framework. Implemented a server-side pagination and responsive UI design for the website. Develop and improve the facial recognition in Remote Time in and Time Out Mobile Application.</p>
                    </article>
                  </li>
                  <li>
                    <article className="text-pretty border-b border-black dark:border-white pb-4">
                      <h1 className="text-2xl">Circuit Solutions Inc.</h1>
                      <h2 className="text-sm">Web Developer Intern</h2>
                      <h2 className="text-sm">April 2023 - July 2023</h2>
                      <h3 className="text-xs">Unit B 14th Flr. Belvedere Tower, San Miguel Ave, Ortigas Center, Pasig, 1605 Metro Manila · On-site</h3>
                      <p className="mt-5">Developed a Remote Time In and Time Out Mobile Application for Android as a Full-Stack Developer Intern. Designed and built the user interface using VueJS and CapacitorJS, utilizing both web technology and native functionalities for the application. Built a secure back-end API with Laravel and a MySQL database. Implemented token-based authentication for secure access.</p>
                    </article>
                  </li>
                </ul>
              </div>
              
            </div>
              
          </section>

          <section className="font-serif mx-8 mt-20 border-black dark:border-white">
            <h1 className="font-sans font-black text-sm lg:text-base md:text-xs sm:text-left">PROJECTS</h1>
            <ProjectCarousel/>
          </section>

          {/* Contact */}
          <section className="font-serif px-5 xl:px-20 py-10 my-16 dark:bg-[#000]">
            <article>
              <h1 className="new-roman text-5xl md:text-7xl"><strong>Get</strong><br className="md:hidden"/> in Touch</h1>
              <div className="mt-5 md:mt-12 pb-8">
                <ul className=" overflow-auto text-wrap ms-28 sm:ms-36 flex flex-col md:ms-auto md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                  <li className="text-base lg:text-lg border-t-2 border-black/50 dark:border-white/50 py-2 lg:py-5">
                    <h2 className="text-3xl lg:text-5xl">Home Address</h2>

                    <p className="mt-8">
                      <strong className="">
                        2344 Sunny Villas Pearl St. East Fairview,
                      </strong>
                      <br />
                      Quezon City, 1118
                    </p>
                  </li>
                  <li className="text-base lg:text-lg border-t-2 border-black/50 dark:border-white/50 py-2 lg:py-5">
                    <h2 className="text-3xl lg:text-5xl">Job Platforms</h2>

                    <ul className="mt-8 font-inter">
                      <li className="flex items-center space-x-1">
                        <FaLinkedin className="w-5 h-5 my-1"/>
                        <a href="" className="leading-none tracking-tighter hover:underline">/in/matthew</a>
                      </li>
                      <li className="flex items-center space-x-1">
                        <FaGithub className="w-5 h-5 my-1"/>
                        <a href="" className="leading-none tracking-tighter hover:underline">@matthew2344</a>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base lg:text-lg border-t-2 border-black/50 dark:border-white/50 py-2 lg:py-5">
                    <h2 className="text-3xl lg:text-5xl">Social Media</h2>

                    <ul className="mt-8 lg:mt-12 text-xl">
                      <li className="flex items-center space-x-1">
                        <FaFacebook className="w-5 h-5 my-1"/>
                        <a href="" className="leading-none tracking-tighter hover:underline">@matthewbutalid</a>
                      </li>
                      <li className="flex items-center space-x-1">
                        <FaInstagram className="w-5 h-5 my-1"/>
                        <a href="" className="leading-none tracking-tighter hover:underline">@matthewbutalid</a>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base lg:text-lg border-t-2 border-black/50 dark:border-white/50 py-2 lg:py-5">
                    <h2 className="text-3xl lg:text-5xl">Contact</h2>

                    <p className="mt-8 lg:mt-12">
                      <span className="hover:ps-2 hover:pt-2 hover:p-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer">
                        matthewandrebutalid@gmail.com
                      </span>
                    </p>
                  </li>
                  <li className="md:col-span-2 lg:col-span-2 xl:col-span-4 text-base lg:text-lg border-t-2 border-black/50 dark:border-white/50">
                    <div className="px-2 py-2 lg:py-5 xl:py-12 ">
                      <h1 className="new-roman text-3xl lg:text-4xl text-black dark:text-white">
                        Send an Email
                      </h1>
                      <br />
                      <p className="font-serif">
                        I'd love to hear from you! Feel free to reach out with any questions, comments, or opportunities.
                      </p>
                      <div className="flex flex-col mt-5">
                        <label htmlFor="email">Email</label>
                        <input name="email" className="w-full md:w-96 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black ring-0 placeholder:text-stone-500 border-b border-black dark:border-white bg-white dark:bg-black" type="email" placeholder="Email"/>
                      </div>
                      <div className="flex flex-col mt-5">
                        <label htmlFor="name">Name</label>
                        <input name="name" className="w-full md:w-96 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black ring-0 placeholder:text-stone-500 border-b border-black dark:border-white bg-white dark:bg-black" type="text" placeholder="Name"/>
                      </div>
                      <div className="flex flex-col mt-5">
                        <label htmlFor="Message">Message</label>
                        <textarea name="Message" className="w-full md:w-96 rounded-md border border-black dark:border-white bg-white dark:bg-black" rows={10}></textarea>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </section>
          
          <MyFooter/>
        <Fab 
          whileHover={{ scale: 1.2 }} 
          whileTap={{ scale: 0.8 }} 
          title="Accessibility" 
          customClassName="bottom-2 left-2 bg-slate-50 w-12 h-12 bg-white text-black border-2 border-black dark:bg-black dark:border-white dark:text-white"
          icon={<MdOutlineAccessibilityNew/>}
          onClick={() => { openModal ? handleClose() : handleOpen() }}
        />

        <AnimatePresence>
          {openModal && <AccessibilityModal handleClose={() => handleClose()} /> }
        </AnimatePresence>


      </main>
  );
}
