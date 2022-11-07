/** @format */

import React from "react";
import "./Home.css";
import Banner from "./Banner";
import card__1 from '../src/image/blog-3.jpg'


function Home() {
	return (
		<div className="home">
			<Banner />

			<div className="home__section">
				<card
							src={card__1}
							title="house in"
							description="uiyb huiybh jhyt frtdf  "
				/>
				<card
							src="https://a0.muscache.com/im/pictures/60692990/410a6d08_original.jpg?im_w=720"
							title=""
							description=""
				/>
				<card
					src="https://a0.muscache.com/im/pictures/f803e8d1-82b6-4050-90d1-4c2812b5a128.jpg?im_w=1200"
					title=""
					description=""
					price  = ' ksh 747'
				/>
			</div>
			<div className="home__section">
				<card
					src="https://a0.muscache.com/im/pictures/aa34a34e-b6b8-4220-8538-8e11982751fe.jpg?im_w=720"
					title=""
					description=""
					price = 'ksh 5747'
				/>
				<card
					src="https://a0.muscache.com/im/pictures/miso/Hosting-52423451/original/dab8949f-367e-4f69-aeea-050872d9f6af.jpeg?im_w=1200"
					title=""
					description=""
					price = 'ksh 5747'
				/>
				<card
					src=""
					title="https://a0.muscache.com/im/pictures/miso/Hosting-52423451/original/ca7a9ab7-bac4-4295-8f23-33efacdd8d3f.jpeg?im_w=720"
					description=""
					price = 'ksh 5466'
				/>
			</div>
			<div className="home__section">
				<card
					src="https://a0.muscache.com/im/pictures/08349db3-d86b-4333-b6e8-d8f57a9cedca.jpg?im_w=1200"
					title=""
					description=""
					price = 'ksh 4000'
				/>
				<card
					src="https://a0.muscache.com/im/pictures/08349db3-d86b-4333-b6e8-d8f57a9cedca.jpg?im_w=1200"
					title=""
					description=""
					price = 'ksh 5000'
				/>
				<card
					src="https://a0.muscache.com/im/pictures/08349db3-d86b-4333-b6e8-d8f57a9cedca.jpg?im_w=1200"
					title=""
					description=""
					price = 'ksh 3000'
				/>
			</div>
		</div>
	)
}

export default Home
