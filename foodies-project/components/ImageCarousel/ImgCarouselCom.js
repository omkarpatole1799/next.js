"use client"
import { useEffect, useState } from "react"

import burger from "@/public/images/burger.jpg"
import curry from "@/public/images/curry.jpg"
import dumplings from "@/public/images/dumplings.jpg"
import Image from "next/image"

function ImgCarouselCom() {
	const [imgIndex, setImgIndex] = useState(0)

	const imgArray = [burger, curry, dumplings]

	useEffect(() => {
		setInterval(() => {
			let indexValue = imgIndex > imgArray.length ? 0 : imgIndex + 1
			setImgIndex(indexValue)
		}, 4000)
	})

	return (
		<>
			<Image src={imgArray[imgIndex]} alt="burger" />
		</>
	)
}

export default ImgCarouselCom
