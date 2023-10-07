import { motion } from 'framer-motion'

export default function Modal({ selectedImg, setSelectedImg }) {
	return (
		<motion.figure
			className="fixed top-0 left-0 w-full h-full bg-black/50 flex flex-col p-2"
			onClick={() => setSelectedImg(null)}
		>
			<motion.img
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				src={selectedImg.image}
				alt={selectedImg.caption}
				className="block max-w-[90%] max-h-[80%] mt-16 mb-4 mx-auto border-4 border-white drop-shadow-md"
			/>
			<motion.figcaption className="inline-block mx-auto bg-white/50 backdrop-blur px-4 py-2 rounded-lg drop-shadow-md text-black font-medium">
				{selectedImg.caption}
			</motion.figcaption>
		</motion.figure>
	)
}
