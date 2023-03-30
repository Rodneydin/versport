import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import LineGradient from "../Components/LineGradient"

function MySkills() {
    const isAboveMediumSecreen = useMediaQuery("(min-width: 1060px")
  return (
    <section id="skills" className="pt-10 pb-24">
        <div className="md:flex md:justify-between md:gap-16 mt-32">
            <motion.div
                className="md:w-1/3"
                initial='hidden'
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration:0.5}}
                variants={{
                hidden:{ opacity: 0, x: -50},
                visible: { opacity: 1, x:0},
                }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-red">SKILLS</span>
                </p>
                <LineGradient className='w-1/3'/>
                <p className="mt-10 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, placeat dolor. Hic accusamus delectus eaque id laudantium dolorum rem est!</p>
            </motion.div>
            <div>
            {isAboveMediumSecreen?(
            <div
             className='relative z-0 ml-20 before:absolute before:-top-10
             before:left-20  before:w-full before:h-full
             before:border-2 before:border-blue before:z-[-1]'
            >
                <img 
                src='assets/skills-image.png'
                className='z-10'
                />
            </div>
            ):
            (
            <div>
                <img 
                src='assets/skills-image.png'
                className='z-10'
                />
            </div>)}
            </div>
        </div>
          <div className="md:flex mt-16 gap-32 md:justify-between">
            <motion.div
            className="md:w-1/3 mt-10"
                initial='hidden'
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{duration:0.5}}
                variants={{
                hidden:{ opacity: 0, y: 50},
                visible: { opacity: 1, y:0},
                }}
            >
                <div className="relative h-36">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">React.js<br/> Developer</p>
                    </div>
                    <div className="w-1/2 md:3/4 absolute h-36 pt2 bg-blue right-0 top-0 z-[-1] pl-2 rounded-lg mb-4">
                        <p className="mt-4 mb-7 text-lg">Developing and maintaining web applications using React.js</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
            className="md:w-1/3 mt-10"
                initial='hidden'
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay: 0.2, duration:0.5}}
                variants={{
                hidden:{ opacity: 0, y: 50},
                visible: { opacity: 1, y:0},
                }}
            >
                <div className="relative h-40 ">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">02</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Web<br/> Developer</p>
                    </div>
                    <div className="w-1/2 md:3/4 absolute h-32 bg-red right-0 top-0 z-[-1] pl-2 rounded-lg">
                        <p className="mt-4 mb-7"> Implementing responcive design and ensuring cross-browser compatibility.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
            className="md:w-1/3 mt-10"
                initial='hidden'
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay: 0.4, duration:0.5}}
                variants={{
                hidden:{ opacity: 0, y: 50},
                visible: { opacity: 1, y:0},
                }}
            >
                <div className="relative h-full">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">03</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Full stack<br/> Developer</p>
                    </div>
                    <div className="w-1/2 md:3/4 absolute h-42 pl-2 bg-yellow right-0 top-0 z-[-1] rounded-lg ">
                        <p className="mt-2 mb-7">Collaborating with cross-functional teams includind designers, product managers,
                         and other deevelopers to create high-quality products</p>
                    </div>
                </div>
            </motion.div>
          </div>      

    </section>
  )
}

export default MySkills