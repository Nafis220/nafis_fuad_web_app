import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, link }) => {
  return (
    <div
      // eslint-disable-next-line react/no-unknown-property
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-jetLight rounded-[20px] py-5 px-10 min-h-[280px] flex justify-evenly items-center flex-col'
    >
      <img src={icon} alt={title} className='w-16 h-16 object-contain' />
      <h3 className='text-taupe text-[18px] font-bold text-center'>
        {" "}
        <a href={link}>{title}</a>
      </h3>
    </div>
  );
};

const About = () => {
  return (
    <div className='-mt-[6rem]'>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      <span className='text-2xl text-blue-600/100 no-underline hover:underline'>
        I'm a full stack web developer. My services are as follows:{" "}
      </span>{" "}
      <br />{" "}
      <div className='container mx-auto p-8'>
        <h1 className='text-3xl font-bold mb-4 text-gray-800'>
          Welcome to Our Services
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='group hover:bg-sky-500 hover:ring-sky-500 bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h2 className='group-hover:text-white  text-taupe text-[20px] font-bold text-center'>
              Landing Page Design
            </h2>
            <p className='group-hover:text-white  text-taupe text-[18px] pt-3 text-center'>
              Craft visually stunning landing pages using HTML, CSS, JavaScript
              & React JS to captivate your audience.
            </p>
            <button
              type='button'
              data-twe-ripple-init
              data-twe-ripple-color='light'
              className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
            >
              <a href='https://www.fiverr.com/s/jYkGjL'> Visit GiG</a>
            </button>
          </div>
          <div className='group hover:bg-sky-500 hover:ring-sky-500 bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h2 className='group-hover:text-white  text-taupe text-[20px] font-bold text-center'>
              Email Template Design
            </h2>
            <p className='group-hover:text-white  text-taupe text-[18px] pt-3 text-center'>
              Design custom email templates tailored to your brand to ensure
              maximum engagement.
            </p>
            <button
              type='button'
              data-twe-ripple-init
              data-twe-ripple-color='light'
              className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
            >
              <a href='https://www.fiverr.com/s/jYkGjL'> Visit GiG</a>
            </button>
          </div>
          <div className='group hover:bg-sky-500 hover:ring-sky-500 bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h2 className='group-hover:text-white  text-taupe text-[20px] font-bold text-center'>
              Responsive Web Application Development
            </h2>
            <p className='group-hover:text-white  text-taupe text-[18px] pt-3 text-center'>
              Build responsive web applications that adapt seamlessly to various
              screen sizes for optimal user experience.
            </p>
            <button
              type='button'
              data-twe-ripple-init
              data-twe-ripple-color='light'
              className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
            >
              <a href='https://www.fiverr.com/s/jYkGjL'> Visit GiG</a>
            </button>
          </div>
          <div className='group hover:bg-sky-500 hover:ring-sky-500 bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h2 className='group-hover:text-white  text-taupe text-[20px] font-bold text-center'>
              MERN Stack Web App Development
            </h2>
            <p className='group-hover:text-white  text-taupe text-[18px] pt-3 text-center'>
              Leverage the power of MongoDB, Express.js, React.js, and Node.js
              to develop robust and scalable web applications.
            </p>
            <button
              type='button'
              data-twe-ripple-init
              data-twe-ripple-color='light'
              className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
            >
              <a href='https://www.fiverr.com/s/mw6RKN'> Visit GiG</a>
            </button>
          </div>
          <div className='group hover:bg-sky-500 hover:ring-sky-500 bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h2 className='group-hover:text-white  text-taupe text-[20px] font-bold text-center'>
              Social Media Web App Development
            </h2>
            <p className='group-hover:text-white  text-taupe text-[18px] pt-3 text-center'>
              Create engaging social media platforms with rich features and
              functionalities to connect users worldwide.
            </p>
            <button
              type='button'
              data-twe-ripple-init
              data-twe-ripple-color='light'
              className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
            >
              <a href='https://www.fiverr.com/s/mw6RKN'> Visit GiG</a>
            </button>
          </div>
          <div className='group hover:bg-sky-500 hover:ring-sky-500 bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h2 className='group-hover:text-white  text-taupe text-[20px] font-bold text-center'>
              Group Chat Web App Development
            </h2>
            <p className='group-hover:text-white  text-taupe text-[18px] pt-3 text-center'>
              Develop real-time group chat applications to facilitate seamless
              communication and collaboration among users.
            </p>
            <button
              type='button'
              data-twe-ripple-init
              data-twe-ripple-color='light'
              className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
            >
              <a href='https://www.fiverr.com/s/mw6RKN'> Visit GiG</a>
            </button>
          </div>
          <div className='group hover:bg-sky-500 hover:ring-sky-500 bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h2 className='group-hover:text-white  text-taupe text-[20px] font-bold text-center'>
              E-learning Web App Development
            </h2>
            <p className='group-hover:text-white  text-taupe text-[18px] pt-3 text-center'>
              Build interactive e-learning platforms with advanced features to
              deliver engaging educational content.
            </p>
            <button
              type='button'
              data-twe-ripple-init
              data-twe-ripple-color='light'
              className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
            >
              <a href='https://www.fiverr.com/s/mw6RKN'> Visit GiG</a>
            </button>
          </div>
          <div className='group hover:bg-sky-500 hover:ring-sky-500 bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h2 className='group-hover:text-white  text-taupe text-[20px] font-bold text-center'>
              Advanced Backend Development
            </h2>
            <p className='group-hover:text-white  text-taupe text-[18px] pt-3 text-center'>
              Build Advanced and High-tech backend to secure your website and
              make it more client friendly and fast.
            </p>
            <button
              type='button'
              data-twe-ripple-init
              data-twe-ripple-color='light'
              className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
            >
              <a href='https://www.fiverr.com/s/y0bo6b'> Visit GiG</a>
            </button>
          </div>
          <div className='group hover:bg-sky-500 hover:ring-sky-500 bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h2 className='group-hover:text-white  text-taupe text-[20px] font-bold text-center'>
              Manage your Inventory Online
            </h2>
            <p className='group-hover:text-white  text-taupe text-[18px] pt-3 text-center'>
              If you are looking for a web based inventory management system or
              pos system, look nowhere else. We provide a highly functional
              inventory management system that will make your product listing
              easier and decrease your daily expenses.
            </p>
            <button
              type='button'
              data-twe-ripple-init
              data-twe-ripple-color='light'
              className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
            >
              <a href='https://www.fiverr.com/s/AblR9B'> Visit GiG</a>
            </button>
          </div>
        </div>
      </div>
      <div className='mt-20 flex flex-wrap gap-3'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            link={service.link}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
