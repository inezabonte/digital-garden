import { motion } from 'framer-motion'

export default function ImageGrid({ images, setSelectedImg }) {
	return (
		<div className="grid grid-cols-3 gap-4 lg:gap-8 my-6 mx-auto">
			{images.map((image) => (
				<motion.div
					whileHover={{ scale: 1.1, opacity: 1 }}
					key={image._id}
					className="h-0 py-[50%] px-0 relative overflow-hidden rounded opacity-80"
					onClick={() => setSelectedImg(image.image)}
				>
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						src={image.image}
						alt={image.caption}
						className="min-w-full min-h-full absolute top-0 left-0 max-w-[150%]"
					/>
				</motion.div>
			))}
		</div>
	)
}
