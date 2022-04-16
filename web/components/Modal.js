export default function Modal({ selectedImg, setSelectedImg }) {
	return (
		<div
			className="fixed top-0 left-0 w-full h-full bg-black/50"
			onClick={() => setSelectedImg(null)}
		>
			<img
				src={selectedImg}
				alt=""
				className="block max-w-[90%] max-h-[80%] my-16 mx-auto border-4 border-white drop-shadow-md"
			/>
		</div>
	)
}
