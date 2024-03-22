"use client"
import { useEffect, useState } from "react"

import burger from "@/public/images/burger.jpg"
import curry from "@/public/images/curry.jpg"
import dumplings from "@/public/images/dumplings.jpg"
import Image from "next/image"

import styles from "./ImgCarouselCom.module.css"

function ImgCarouselCom() {
	const [imgIndex, setImgIndex] = useState(0)

	const imgArray = [burger, curry, dumplings]

	useEffect(() => {
		let _imgCarouselInterval = setInterval(() => {
			let indexValue = imgIndex < imgArray.length - 1 ? imgIndex + 1 : 0
			setImgIndex(indexValue)
		}, 4000)

		return () => clearInterval(_imgCarouselInterval)
	}, [imgIndex])

	return (
		<>
			<div className={styles.imgCarouselBox}>
				<Image width={500} height={500} priority src={imgArray[imgIndex]} alt="burger" />
			</div>
		</>
	)
}

export default ImgCarouselCom
