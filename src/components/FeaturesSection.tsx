import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/VerticalSlider.module.css"


const FeaturesSection = () => {
	return (
		<section
			id="features"
			className="w-full flex justify-center bg-white items-center p-5 py-20"
		>
			<section className="text-secondary2 max-w-[1300px] relative w-full min-h-[100px] flex justify-between items-center flex-col gap-[10px]">
				<h1 className="font-bold text-[1rem] max-sm:text-[3.5rem] my-10 sm:text-[3rem] md:text-[4rem] flex gap-5 max-sm:flex-col max-sm:gap-0 text-black self-start">
					<span className="font-nueubig">Features</span>
					<span className="font-nueubig relative">
						Just for
						<span className="relative">
							{" "}
							You
							<Image
								fetchPriority="high"
								loading="eager"
								width={155}
								height={48}
								decoding="async"
								className="absolute left-[10px] bottom-[0%] w-[150px]"
								src="/image/img23.64f74d1c.svg"
								alt="icon"
							/>
						</span>
					</span>
				</h1>
				<div className="w p-10 relative box-border rounded-[80px] max-md:rounded-[40px] overflow-hidden bg-[linear-gradient(-45deg,#9864F1,#EFE6F7,#9864F1),linear-gradient(60deg,#EFE6F7,#9864F1)] max-sm:bg-[linear-gradient(45deg,#EFE6F7,#9864F1),linear-gradient(60deg,#EFE6F7,#9864F1)] w-full">
					<Image
						fetchPriority="high"
						loading="eager"
						width={136}
						height={186}
						decoding="async"
						className="z-5 absolute bottom-0 left-0"
						src="/image/img5.65eb6125.svg"
						alt="icon"
					/>
					<div className="w-full">
						<h1 className="font-bold text-[2rem] font-nueubold max-sm:text-[30px] flex flex-col text-black">
							<span className="text-[#5A00CF] flex gap-5 font-nueubig">
								<span>Find Buddy</span>
							</span>
						</h1>
					</div>
					<div className="z-10 w-full flex p box-border gap-10 justify-between max-sm:flex-col">
						<div className="w-[30%] max-sm:w-full">
							<p className="text-black font-nueuthin">
								Network with thousands of Africans in the diaspora through our
								Find Buddy page, starting with your city.
							</p>
							<div className="mt-10 z-10">
								<Link legacyBehavior href="/#herosec">
									<a className="text-black rounded-md px-5 py-3 my-5 text-bold border-[1px] border-black tracking-widest bg-transparent hover:bg-black hover:text-white transition duration-200">
										Get the app
									</a>
								</Link>
							</div>
						</div>
						<div className="w-[70%] flex gap-5 flex-col max-sm:w-full box-border">
							<div className="max-sm:translate-x-7 flex box-border gap-5 max-sm:flex-col w-full">
								<Image
									fetchPriority="high"
									loading="eager"
									width={358}
									height={102}
									decoding="async"
									className="w-full max-sm:w-full bottom-0 left-0"
									src="/image/img9.bb251d60.svg"
									alt="icon"
								/>
								<Image
									fetchPriority="high"
									loading="eager"
									width={358}
									height={102}
									decoding="async"
									className="w-full max-sm:w-full bottom-0 left-0"
									src="/image/img10.87f12ece.svg"
									alt="icon"
								/>
							</div>
							<div className="flex w-full box-border gap-5 max-sm:hidden">
								<Image
									fetchPriority="high"
									loading="eager"
									width={358}
									height={102}
									decoding="async"
									className="w-full bottom-0 left-0"
									src="/image/img11.e7fce3c1.svg"
									alt="icon"
								/>
								<Image
									fetchPriority="high"
									loading="eager"
									width={358}
									height={102}
									decoding="async"
									className="w-full bottom-0 left-0"
									src="/image/img12.254c4bda.svg"
									alt="icon"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="py-5 box-border overflow-hidden flex w-full max-sm:flex-col gap-5">
					<div className="py-10 px-[60px] max-md:px-5 relative box-border overflow-hidden flex flex-col items-center justify-center rounded-[80px] max-md:rounded-[40px] bg-[#E0F7FF] w-full max-sm:w-full">
						<h1 className="text-[#036181] px-5 self-start font-bold text-[2rem] nueubold">
							Buddy Room
						</h1>
						<p className="text-black px-5 self-start font-nueuthin pb-3">
							Join or host a variety of events, plan group trips and activities
							with people in and beyond your city
						</p>
						<Image
							fetchPriority="high"
							loading="eager"
							width={404}
							height={282}
							decoding="async"
							className="w-[100%] z-10"
							src="/image/img6.cdd37f85.svg"
							alt="icon"
						/>
						<Image
							fetchPriority="high"
							loading="eager"
							width={108}
							height={192}
							decoding="async"
							className="z-1 absolute bottom-0 left-0"
							src="/image/img14.aa5c5c65.svg"
							alt="icon"
						/>
					</div>
					<div className="py-10 relative box-border overflow-hidden flex flex-col items-center justify-center rounded-[80px] max-md:rounded-[40px] bg-[#E8CBD9] w-full max-sm:w-full">
						<Image
							fetchPriority="high"
							loading="eager"
							width={489}
							height={318}
							decoding="async"
							className="w-[100%] relative right-[-60px] max-md:right-[-30px]"
							src="/image/img13.67608499.svg"
							alt="icon"
						/>
						<div className="px-[60px] max-md:px-[30px] relative box-border overflow-hidden flex flex-col items-center justify-center rounded-[80px] max-md:rounded-[40px] bg-[#E8CBD9] w-full max-sm:w-full">
							<h1 className="text-[#B20462] self-start font-bold text-[2rem] z-10 nueubold pt-5">
								AfroMart
							</h1>
							<p className="text-black font-nueuthin self-start z-10 pb-3">
								Connect with African vendors and service providers in and around
								your city
							</p>
						</div>
						<Image
							fetchPriority="high"
							loading="eager"
							width={98}
							height={115}
							decoding="async"
							className="z-1 absolute bottom-0 right-0"
							src="/image/img15.386c0d8b.svg"
							alt="icon"
						/>
					</div>
				</div>
				<div className="p-5 relative box-border overflow-hidden max-sm:flex-col-reverse justify-between rounded-[80px] max-md:rounded-[40px] bg-[linear-gradient(45deg,#10B904,#EEFAED_70%),linear-gradient(60deg,#EFE6F7,#9864F1)] w-full flex gap-5">
					<Image
						fetchPriority="high"
						loading="eager"
						width={119}
						height={90}
						decoding="async"
						className="z-1 absolute bottom-0 right-0"
						src="/image/img16.8eb5797b.svg"
						alt="icon"
					/>
					<div className="z-10 w-[50%] h-[500px] max-sm:w-full flex p box-border justify-between gap-5">
						
						<div
							data-direction="up"
							data-behavior="scroll"
							className={styles.slider}
						>
							<div className={styles.sliderTrack}>
								<Image
									fetchPriority="high"
									loading="eager"
									width={253}
									height={986}
									decoding="async"
									className="w-full"
									src="/image/img17.e65c4648.svg"
									alt="icon"
								/>
								<Image
									fetchPriority="high"
									loading="eager"
									width={253}
									height={986}
									decoding="async"
									className="w-full"
									src="/image/img18.9619b7e9.svg"
									alt="icon"
								/>
							</div>
						</div>
						
						<div
							data-direction="down"
							className={styles.slider_down}
						>
							<div className={styles.sliderTrack_down}>
								<Image
									fetchPriority="high"
									loading="eager"
									width={253}
									height={986}
									decoding="async"
									className="w-full"
									src="/image/img18.9619b7e9.svg"
									alt="icon"
								/>
								<Image
									fetchPriority="high"
									loading="eager"
									width={253}
									height={986}
									decoding="async"
									className="w-full"
									src="/image/img17.e65c4648.svg"
									alt="icon"
								/>
							</div>
						</div>
					
					</div>
					<div className="w-[35%] max-sm:w-full flex flex-col justify-center">
						<h1 className="text-[45px] max-sm:text-[30px] flex flex-col text-black">
							<span className="text-[#0FBA01] self-start font-bold text-[2rem]">
								Ask Buddy
							</span>
						</h1>
						<div className="w-full  flex flex-col">
							<p className="text-black w-full font-nueuthin">
								Get trusted advice from fellow Africans in the diaspora. Ask
								questions anonymously for greater privacy.
							</p>
							<Link legacyBehavior href="/#herosec">
								<a className="w-fit mt-5 text-black rounded-md px-5 py-3 text-bold border-[1px] border-black tracking-widest bg-transparent hover:bg-black hover:text-white  transition duration-200">
									Get the app
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default FeaturesSection;
