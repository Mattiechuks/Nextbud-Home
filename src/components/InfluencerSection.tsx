import Image from "next/image";
import Link from "next/link";

const InfluencerSection = () => {
	return (
		<section className="w-full flex justify-center items-center">
			<section className="relative max-w-[1300px] w-full flex max-md:flex-col justify-center items-center gap-[10px] p-10 my-20 shadow-md bg-black rounded-[80px] max-md:rounded-[40px]">
				<div className="w-full text-white flex flex-col justify-center gap-[10px] max-w-[1300px] font-bold">
					<p className="font-bold font-nueuthin text-[15px] relative text-white">
						Special Offer for Influencers
					</p>
					<p className="my-5 max-lg:text-[50px] max-md:text-[30px] text-[40px]">
						Join us as we embark on a journey of connection, empowerment, and
						celebration.
					</p>
					<Link legacyBehavior href="/i/signup">
						<a className="w-fit mt-5 max-sm:mb-5 rounded-md px-5 py-3 text-bold border-[1px] tracking-widest bg-white text-[#9864F1] hover:bg-white/80  transition duration-200">
							Get started as an Influencer
						</a>
					</Link>
				</div>
				<div className="w-[50%] max-md:w-full overflow-clip">
					<Image
						fetchPriority="high"
						loading="eager"
						width={387}
						height={432}
						decoding="async"
						className="w-full rounded-md"
						src="/image/img19.dba4b72d.svg"
						alt="icon"
					/>
				</div>
			</section>
		</section>
	);
};

export default InfluencerSection;
