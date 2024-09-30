import {RiReactjsLine} from 'react-icons/ri'
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { motion} from 'framer-motion'


const iconVariants = (duration) => ({
    initial : { y: -10},
    animate: {
        y: [10, -10],
        transition:{
            duration: duration,
            ease:'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

 const Technologies = () => {
  return (
    <div className="pb-24 ">
        <motion.h2 
        whileInView={{ opacity:1, y:0 }}
        initial={{ opacity:0, y:-100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
            Technologies 
        </motion.h2>
        <motion.div

        whileInView={{ opacity:1, y:0 }}
        initial={{ opacity:0, y:-100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 ">
            <motion.div 
            initial='initial'
            animate='animate'
            variants={iconVariants(2.5)}
            className='p-4'>
                <FaFigma className='text-6xl' />
            </motion.div>
            <motion.div 
            initial='initial'
            animate='animate'
            variants={iconVariants(3)}
            >
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            initial='initial'
            animate='animate'
            variants={iconVariants(5)}>
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            initial='initial'
            animate='animate'
            variants={iconVariants(2)}
            className='p-4'>
                <FaLaravel className='text-6xl text-red-600' />
            </motion.div>
            
        </motion.div>
      
    </div>
  )
}

export default Technologies
