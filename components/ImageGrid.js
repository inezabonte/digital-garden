import Image from 'next/image'

export default function ImageGrid({ images, setSelectedImg }) {
	return (
		<div className="grid grid-cols-3 gap-4 lg:gap-8 my-6 mx-auto">
			{images.map((image) => (
				<div
					key={image._id}
					className="h-0 py-[50%] px-0 relative overflow-hidden rounded"
					onClick={() => setSelectedImg(image)}
				>
					<Image
						src={image.image}
						alt={image.caption}
						layout="fill"
						className="w-full h-full absolute top-0 left-0 object-cover max-w-[150%]"
					/>
				</div>
			))}
		</div>
	)
}
