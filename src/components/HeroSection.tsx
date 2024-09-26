"use client";

import React from "react";
import Image from "next/image";
import HorizontalSlider from "./HorizontalSlider";
const HeroSection: React.FC = () => {
	return (
		<section
			id="herosec"
			className="w-full mt-[170px] max-sm:mt-[90px] min-h-[60vh] py-5 px-3 flex  flex-col justify-center items-center text-black bg-center bg-cover"
		>
			<h1
				className="animate-fade-up  text-[1rem] text-center max-sm:text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold flex gap-5 max-sm:flex-col max-sm:gap-0"
				style={{ animationDelay: "0.10s", animationFillMode: "forwards" }}
			>
				<span className="font-nueubig">Home For Africans Abroad</span>
			</h1>
			<p
				className="animate-fade-up  w-[80%] max-sm:w-[95%] font-nueuthin text-[10px] max-sm:text-[20px] md:text-[19px] text-center self-center mt-5 mb-10"
				style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
			>
				Connecting African immigrants in a new country to fellow Africans and
				Local African-Owned businesses.
			</p>
			<div className="flex justify-between md:px-10 w-full max-md:justify-center mb-[50px]">
				<Image
					fetchPriority="high"
					loading="eager"
					width={64}
					height={109}
					decoding="async"
					className="w-[48px] max-md:hidden"
					src="/image/heroflag1.d60a6d60.svg"
					alt="flag1"
				/>
				<div
					id="appimg1"
					className="animate-fade-up flex w-fit gap-10 max-md:flex-col max-md:gap-5 justify-center items-center"
					style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
				>
					<Image
						fetchPriority="high"
						loading="eager"
						width={180}
						height={52}
						decoding="async"
						className="w-[200px]"
						src="/image/google.a72b620f.svg"
						alt="Google"
					/>
					<Image
						fetchPriority="high"
						loading="eager"
						width={180}
						height={52}
						decoding="async"
						className="w-[200px]"
						src="/image/apple.b7ff230c.svg"
						alt="Apple"
					/>
				</div>
				<Image
					fetchPriority="high"
					loading="eager"
					width={56}
					height={101}
					decoding="async"
					className="w-[48px] max-md:hidden"
					src="/image/heroflag2.c1162418.svg"
					alt="flag2"
				/>
			</div>
			<div className="w-full relative md:hidden flex justify-center items-center flex-col">
				<div className="w-full h-fit rounded-xl mb-[100px] relative flex justify-center items-center">
					<div className="w-full overflow-x-hidden h-fit px-[auto] justify-center">
						<div className="w-[120%] h-fit">
							<Image
								fetchPriority="high"
								loading="eager"
								width={1669}
								height={1855}
								decoding="async"
								className="w-full block opacity-20 top-[50px] left-0"
								src="/image/africa.9d131a5d.png"
								alt="Africa"
							/>
						</div>
					</div>
					<div className="w-full h-fit absolute top-5 left-0 flex justify-center items-center">
						<div className="w-full h-fit px-5 flex justify-center">
							<div className="w-full flex justify-center">
								<Image
									fetchPriority="high"
									loading="eager"
									width={842}
									height={1053}
									decoding="async"
									className="w-[100%]"
									src="/image/Heropicture1.82b251a5.png"
									alt="Hero Picture"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full absolute bottom-[70px]">
					<div className="overflow-hidden w-full my-5 flex justify-center items-center">
						<object
						>
							<HorizontalSlider />
						</object>
					</div>
				</div>
			</div>
			<div className="w-full relative flex max-md:hidden justify-center items-center flex-col">
				<div className="w-full relative flex justify-center items-center">
					<Image
						fetchPriority="high"
						loading="eager"
						width={1669}
						height={1855}
						decoding="async"
						className="w-[70%] opacity-20"
						src="/image/africa.4c01c59f.svg"
						alt="Africa"
					/>
					<div className="w-full h-fit absolute top-10 left-0 flex justify-center items-center">
						<div className="w-full h-fit px-10 flex justify-center">
							<Image
								fetchPriority="high"
								loading="eager"
								width={56}
								height={101}
								decoding="async"
								className="absolute top-[7%] left-[7%]"
								src="/image/flag1.3e5b5a3a.svg"
								alt="flag1"
							/>
							<Image
								fetchPriority="high"
								loading="eager"
								width={56}
								height={101}
								decoding="async"
								className="absolute top-[7%] right-[7%]"
								src="/image/flag3.25061e35.svg"
								alt="flag3"
							/>
							<Image
								fetchPriority="high"
								loading="eager"
								width={842}
								height={1053}
								decoding="async"
								className="w-[50%]"
								src="/image/Heropicture1.82b251a5.png"
								alt="Hero Picture"
							/>
							<Image
								fetchPriority="high"
								loading="eager"
								width={56}
								height={101}
								decoding="async"
								className="absolute top-[40%] left-[15%]"
								src="/image/flag3.25061e35.svg"
								alt="flag3"
							/>
							<Image
								fetchPriority="high"
								loading="eager"
								width={56}
								height={101}
								decoding="async"
								className="absolute top-[40%] right-[15%]"
								src="/image/flag4.0a084b07.svg"
								alt="flag4"
							/>
						</div>
					</div>
				</div>
				<div className="w-full h-fit rounded-xl mb-[100px] relative flex justify-center items-center">
					<div className="overflow-hidden w-full my-5 flex justify-center items-center">
						<object
						>
							<HorizontalSlider />
						</object>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
