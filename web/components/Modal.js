import { motion } from 'framer-motion'

export default function Modal({ selectedImg, setSelectedImg }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="fixed top-0 left-0 w-full h-full bg-black/50"
			onClick={() => setSelectedImg(null)}
		>
			<motion.img
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				src={selectedImg}
				className="block max-w-[90%] max-h-[80%] my-16 mx-auto border-4 border-white drop-shadow-md"
			/>
		</motion.div>
	)
}
