import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/img4.png';
import img2 from '../assets/IMG_7168.png';
import img3 from '../assets/IMG3.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img4 from '../assets/IMG_7164.png';
import img7 from '../assets/IMG_7163.png';
import img8 from '../assets/IMG_7162.png';

export default function Creativity() {
  const creativityArray = [
    { image: img6, name: 'Random Webpage', lang: 'HTML CSS JS', link:'https://mohdtameerkhan.github.io/Random-web-page/'},
    { image: img4, name: 'Portfolio', lang: 'HTML CSS JS',link:'https://mohdtameerkhan.github.io/Portofolio/' },
    { image: img2, name: 'Amazon Clone', lang: 'HTML CSS JS',link:'https://mohdtameerkhan.github.io/Amazon_clone/' },
    { image: img1, name: 'Weather App', lang: 'HTML CSS JS' },
    { image: img3, name: 'Password Generator', lang: 'HTML CSS JS' },
    { image: img7, name: 'To-do List', lang: 'HTML CSS JS' },
    { image: img8, name: 'Question', lang: 'HTML CSS JS' },
    { image: img5, name: 'Swiggy Clone', lang: 'HTML CSS JS REACT TAILWIND' },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="w-[90%] sm:w-[80%] lg:w-[70%] p-4 rounded-lg shadow-purple-950 shadow-lg mx-auto flex flex-col sm:flex-row flex-wrap justify-center gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {creativityArray.map((item, index) => (
        <motion.div
          key={index}
          className="shadow-2xl p-2 w-full sm:w-[45%] lg:w-[30%] rounded-lg overflow-hidden bg-white"
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.97 }}
          variants={cardVariants}
        >
          <div className="w-full flex items-center justify-center bg-gray-100">
            <motion.img
              className="w-full h-auto object-contain"
              src={item.image}
              alt={item.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="text-center p-2 m-2 font-bold">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-600 hover:underline"
              >
                {item.name}
              </a>
            ) : (
              <span>{item.name}</span>
            )}
            <br />
            <span>{item.lang}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
