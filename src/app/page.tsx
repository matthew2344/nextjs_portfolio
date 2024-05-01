// import Navbar from "@/components/Navbar";
"use client";
import { useState, useEffect } from "react";
import { MdDownload, MdOutlineAccessibilityNew  } from "react-icons/md";
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

import { FaChevronDown, FaCogs, FaInstagram, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { SiKotlin, SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";
import { FaCloud, FaCode, FaDatabase, FaFacebook, FaGithub, FaLaravel, FaLinkedin, FaMobileScreen, FaNode, FaPaintbrush, FaPhp, FaPython, FaReact, FaVuejs } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import { Link } from "react-scroll"
import MyFooter from "@/components/footer/MyFooter";
import Image from "next/image"
import { EvervaultCardDemo } from "@/components/card/EvervaultCardDemo";


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

  const isDevEnv = process.env.NODE_ENV !== 'production';
  const [videoUrl, setVideoUrl] = useState("");
  useEffect(() => {
    if(isDevEnv) {
      console.log('Running in development mode');
      setVideoUrl("/video/Hero.mp4");
    } else {
      console.log('Running in production mode');
      setVideoUrl("https://raw.githubusercontent.com/matthew2344/nextjs_portfolio/main/public/video/Hero.mp4");
    }
  },[])

  

  return (
      <main className="flex flex-col bg-stone-100 text-stone-800 dark:text-neutral-50 dark:bg-black selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
          <Navbar/>

          {/* Hero */}
          <section className="relative w-full">
            <video
              autoPlay={true} 
              muted 
              loop 
              src={videoUrl}
              style={{
                height: '600px',
                width: '100%',
                objectFit: 'cover'
              }}
            />
            <div className="absolute mx-4 inset-0 flex items-center justify-center">
              <h1 className="text-xl md:text-2xl xl:text-4xl p-3 rounded-lg text-white bg-black">
                { "Crafting innovative solutions, one line of code at a time" } 
              </h1>
            </div>

            <div className="absolute flex justify-center py-2 bottom-0 left-0 right-0">
              <Link to="About" smooth={true} duration={300} className="text-white text-2xl p-2 rounded-full bg-black animate-bounce cursor-pointer">
                <FaChevronDown/>
              </Link>
            </div>
          </section>


          {/* About Me */}
          <section id="About" className="font-serif about-me md:px-20 md:py-20 flex pt-16 px-8">


            <div className="md:grid md:grid-cols-2 md:gap-10 sm:flex">

              <div className="flex flex-col">
                
                <h1 className="font-inter text-2xl font-black uppercase [&>span]:text-3xl">
                    <span>M</span>atthew <span>A</span>ndre <span>B</span>utalid
                </h1>

                <p className="text-base font-inter mt-6">
                  Hi I am <span className="underline underline-offset-4">Matthew Andre M. Butalid</span> I&apos;m
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
                    { "Completed a Bachelor's degree in Information Techonology Specializing in Web And Mobile Applications with a focus on foundational programming concepts, algorithms, and web development. Developed a strong understanding of software development principles." }
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
                      <h3 className="text-xs">San Miguel Ave, Ortigas Center, Pasig, Metro Manila · On-site</h3>
                      <p className="mt-5">Developed a web application to track Technical Field Employee time and attendance using VueJS for the front-end and Laravel as the backend framework. Implemented a server-side pagination and responsive UI design for the website. Develop and improve the facial recognition in Remote Time in and Time Out Mobile Application.</p>
                    </article>
                  </li>
                  <li>
                    <article className="text-pretty border-b border-black dark:border-white pb-4">
                      <h1 className="text-2xl">Circuit Solutions Inc.</h1>
                      <h2 className="text-sm">Web Developer Intern</h2>
                      <h2 className="text-sm">April 2023 - July 2023</h2>
                      <h3 className="text-xs">San Miguel Ave, Ortigas Center, Pasig, 1605 Metro Manila · On-site</h3>
                      <p className="mt-5">Developed a Remote Time In and Time Out Mobile Application for Android as a Full-Stack Developer Intern. Designed and built the user interface using VueJS and CapacitorJS, utilizing both web technology and native functionalities for the application. Built a secure back-end API with Laravel and a MySQL database. Implemented token-based authentication for secure access.</p>
                    </article>
                  </li>
                </ul>
              </div>
              
            </div>
              
          </section>

          <section className="flex flex-wrap md:flex-nowrap gap-10 font-sans mx-5 xl:mx-20 my-16 border-black dark:border-white">
            <div className="md:basis-4/12">
              <h1 className="text-5xl mb-4 font-serif"><strong>My</strong> Projects</h1>
              <p className="text-lg">
                { 
                  "Check out some of the projects I've worked on. From web applications to mobile apps, I've got a diverse portfolio." 
                }
              </p>
            </div>
            <div className="sm:grid flex justify-center flex-wrap sm:grid-cols-3 gap-5">
              <Image
                className="" 
                src="/placeholder.svg"
                height={450}
                width={350}
                alt="Project 1"
              />
              <Image 
                src="/placeholder.svg"
                height={450}
                width={350}
                alt="Project 1"
              />
              <Image 
                src="/placeholder.svg"
                height={450}
                width={350}
                alt="Project 1"
              />
              <Image 
                src="/placeholder.svg"
                height={450}
                width={350}
                alt="Project 1"
              />
            </div>
            {/* <ProjectCarousel/> */}
          </section>


          {/* services */}
          <section className="my-16 mx-12">
            <article className="font-serif">
              <ul className="gap-10 md:grid md:grid-cols-3 md:gap-20">
                <li className="min-h-56 px-8 border-s border-black/30 dark:border-white/30 first:border-s-0 first:px-0">
                  <h1 className="text-7xl">
                    <strong>My</strong>
                    <br />
                    Services
                  </h1>
                  <p className="mt-2 font-sans">
                    I specialize in building modern, responsive, and scalable web applications using the latest technologies.
                  </p>
                </li>
                <li className="mt-4 md:mt-0 min-h-56 px-8 border-s border-black/30 dark:border-white/30 first:border-s-0 first:px-0">
                  <h1 className="text-3xl mb-12"><strong>Web</strong> Development</h1>
                  <p className="leading-6 text-stone-900/70 dark:text-white/70">
                    {"I specialize in building modern, responsive, and scalable web applications using the latest technologies."}
                  </p>
                </li>
                <li className="min-h-56 px-8 border-s border-black/30 dark:border-white/30 first:border-s-0 first:px-0">
                  <h1 className="text-3xl mb-12"><strong>Mobile</strong> Development</h1>
                  <p className="leading-6 text-stone-900/70 dark:text-white/70">
                    {"I create cross-platform mobile apps that provide a seamless user experience on both iOS and Android."}
                  </p>
                </li>
                <li className="min-h-56 px-8 border-s border-black/30 dark:border-white/30 first:border-s-0 first:px-0">
                  <h1 className="text-3xl mb-12"><strong>Backend</strong> Development</h1>
                  <p className="leading-6 text-stone-900/70 dark:text-white/70">
                    {"I build scalable and secure backend systems using modern technologies like Node.js, Express, and MongoDB."}
                  </p>
                </li>
                <li className="min-h-56 px-8 border-s border-black/30 dark:border-white/30 first:border-s-0 first:px-0">
                  <h1 className="text-3xl mb-12"><strong>UI/UX</strong> Design</h1>
                  <p className="leading-6 text-stone-900/70 dark:text-white/70">
                    {"I create visually appealing and user-friendly designs that enhance the overall experience of your application."}
                  </p>
                </li>
                <li className="min-h-56 px-8 border-s border-black/30 dark:border-white/30 first:border-s-0 first:px-0">
                  <h1 className="text-3xl mb-12"><strong>Cloud</strong> Infastructure</h1>
                  <p className="leading-6 text-stone-900/70 dark:text-white/70">
                    {"I help you set up and manage your cloud infrastructure, ensuring your applications are scalable and secure."}
                  </p>
                </li>
                <li className="min-h-56 px-8 border-s border-black/30 dark:border-white/30 first:border-s-0 first:px-0">
                  <h1 className="text-3xl mb-12"><strong>Devops</strong></h1>
                  <p className="leading-6 text-stone-900/70 dark:text-white/70">
                    {"I implement DevOps practices to streamline your development and deployment processes, ensuring faster and more reliable releases."}
                  </p>
                </li>
              </ul>
            </article>
          </section>

          {/* Contact */}
          <section className="font-serif px-5 xl:px-20 my-12 dark:bg-[#000]">
            <article>
              <h1 className="new-roman text-5xl md:text-7xl"><strong>Get</strong><br className="md:hidden"/> in Touch</h1>
              <div className="mt-5 md:mt-12 pb-8">
                <ul className=" overflow-auto text-wrap ms-28 sm:ms-36 flex flex-col md:ms-auto md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                  <li className="text-base lg:text-lg border-t-2 border-black/50 dark:border-white/50 py-2 lg:py-5">
                    <h2 className="text-3xl lg:text-5xl">Home Address</h2>

                    <p className="mt-8">
                      <strong className="">
                        Sunny Villas Pearl St. East Fairview,
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
                        <a href="https://www.linkedin.com/in/matthew-butalid/" target="_blank" className="leading-none tracking-tighter hover:underline">/in/matthew-butalid</a>
                      </li>
                      <li className="flex items-center space-x-1 mt-2">
                        <FaGithub className="w-5 h-5 my-1"/>
                        <a href="https://github.com/matthew2344" target="_blank" className="leading-none tracking-tighter hover:underline">@matthew2344</a>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base lg:text-lg border-t-2 border-black/50 dark:border-white/50 py-2 lg:py-5">
                    <h2 className="text-3xl lg:text-5xl">Social Media</h2>

                    <ul className="mt-8 lg:mt-12 text-xl">
                      <li className="flex items-center space-x-1">
                        <FaFacebook className="w-5 h-5 my-1"/>
                        <a href="https://www.facebook.com/matthew.butalid.79/" target="_blank" className="leading-none tracking-tighter hover:underline">@matthewbutalid</a>
                      </li>
                      <li className="flex items-center space-x-1">
                        <FaInstagram className="w-5 h-5 my-1"/>
                        <a href="#" className="leading-none tracking-tighter hover:underline">@matthewbutalid</a>
                      </li>
                    </ul>
                  </li>
                  <li className="text-base lg:text-lg border-t-2 border-black/50 dark:border-white/50 py-2 lg:py-5">
                    <h2 className="text-3xl lg:text-5xl">Other</h2>
                    <p className="mt-8 lg:mt-12">
                      <span className="hover:ps-2 hover:pt-2 hover:p-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer">
                        matthewandrebutalid@gmail.com
                      </span>
                    </p>
                    <p className="mt-2">
                      <span className="hover:ps-2 hover:pt-2 hover:p-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer">
                        +63 9684262167
                      </span>
                    </p>
                    <a href="/files/MATTHEW-RESUME-NEW.pdf" download className="mt-2 inline-flex justify-center items-center hover:underline">
                      <MdDownload/> matthew-resume.pdf 
                    </a>

                  </li>
                  <li className="md:col-span-2 lg:col-span-2 xl:col-span-4 text-base lg:text-lg border-t-2 border-black/50 dark:border-white/50">
                    <div className="px-2 py-2 lg:py-5 xl:py-12 ">
                      <h1 className="text-3xl lg:text-4xl text-black dark:text-white mb-2">
                        Send an <span className="font-sans font-bold text-[#0070f3]">Email</span>
                      </h1>
                      <p className="font-sans">
                        {"I'd love to hear from you! Feel free to reach out with any questions, comments, or opportunities."}
                      </p>

                      <ContactForm/>

                      {/* <form action="">   
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
                        <button type="submit" className="font-sans font-semibold w-full md:w-96 rounded-sm bg-[#0070f3] text-white mt-2 p-1">SUBMIT</button>
                      </form> */}

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
          customClassName="hidden md:flex fixed z-40 bottom-2 left-2 bg-slate-50 w-12 h-12 bg-white text-black border-2 border-black dark:bg-black dark:border-white dark:text-white"
          icon={<MdOutlineAccessibilityNew/>}
          onClick={() => { openModal ? handleClose() : handleOpen() }}
        />

        <AnimatePresence>
          {openModal && <AccessibilityModal handleClose={() => handleClose()} /> }
        </AnimatePresence>


      </main>
  );
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        console.log('Data:',formData);

        setFormData({ email: '', name: '', message: '' });
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <form className="font-sans" onSubmit={handleSubmit}>   
      <div className="flex flex-col mt-5">
        <label htmlFor="email">Email</label>
        <input 
          name="email"
          typeof="email"
          value={formData.email}
          onChange={handleChange} 
          className="w-full md:w-96 ring-0 placeholder:text-stone-500 border-b border-black dark:border-white bg-white dark:bg-black" type="email" placeholder="Email"/>
      </div>
      <div className="flex flex-col mt-5">
        <label htmlFor="name">Name</label>
        <input
         name="name" 
         typeof="text"
         value={formData.name}
         onChange={handleChange}
         className="w-full md:w-96 ring-0 placeholder:text-stone-500 border-b border-black dark:border-white bg-white dark:bg-black" type="text" placeholder="Name"/>
      </div>
      <div className="flex flex-col mt-5">
        <label htmlFor="message">Message</label>
        <textarea
         name="message" 
         value={formData.message}
         onChange={handleChange}
         className="w-full md:w-96 rounded-md border ring-0 border-black dark:border-white bg-white dark:bg-black" rows={10}/>
      </div>
      <button type="submit" className="font-sans font-semibold w-full md:w-96 rounded-sm bg-[#0070f3] text-white mt-2 p-1">SUBMIT</button>
    </form>
  )
}