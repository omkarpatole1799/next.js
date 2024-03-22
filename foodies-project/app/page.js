import ImgCarouselCom from "@/components/ImageCarousel/ImgCarouselCom"
import Link from "next/link"

import "./page.css"

export default function Home() {
	return (
		<main>
			<div className="hero">
				<div className="img-carousel-box">
					<ImgCarouselCom />
				</div>
				<div className="hero-text">
					<h1>NEXT LEVEL FOOD FOR NEXT LEVEL FOODIES</h1>
					<p>Taste & Share Food All Over The World !</p>

					<div className="hero-cta">
						<Link className="btn btn-s hero-cta-link" href="/community">
							Community
						</Link>
						<Link className="btn btn-p hero-cta-link" href="/meals">
							Meals
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}
