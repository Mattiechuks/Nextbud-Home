import Image from 'next/image';



const AboutUsSection = () => {
    return (
      <section id="aboutus" className="relative w-full flex max-md:flex-col-reverse justify-center items-center gap-[10px] my-5 px-5 md:px-20 py-10 shadow-md bg-[black] rounded-[80px] max-md:rounded-[60px]">
      <div className="w-full max-md:w-full overflow-clip">
        <Image
          fetchPriority="high"
          loading="eager"
          width={1621}
          height={1777}
          decoding="async"
          className="w-full max-md:scale-[1.3]"
          style={{ color: 'transparent' }}
          src={'/image/AboutUsImage.fad638dc.png'}
          alt="About Us"
        />
      </div>
      <Image
        fetchPriority="high"
        loading="eager"
        width={67}
        height={67}
        decoding="async"
        className="w-[70px] max-md:w-[50px] absolute top-[40px] right-[50px]"
        style={{ color: 'transparent' }}
        src={'/image/img8.adac82d4.svg'}
        alt="Decoration"
      />
      <div className="w-full md:max-w-[480px] text-[white] gap-5 flex flex-col justify-center items-center max-w-[1300px]">
        <h1 className="font-bold text-[3rem] md:text-[4rem] relative self-start">
          About Us
          <Image
            fetchPriority="high"
            loading="eager"
            width={155}
            height={48}
            decoding="async"
            className="w-[100px] absolute left-[70%] top-[40px]"
            style={{ color: 'transparent' }}
            src={'/image/img23.64f74d1c.svg'}
            alt="Decoration"
          />
        </h1>
        <div className="font-nueuthin text-[#d1d1d1] text-[16px] relative self-start">
          <p className="font-nueuthin">
            At NextBud, we&apos;re on a mission to unite Africans around the world and create a vibrant community where connections flourish, opportunities abound, and cultures thrive. Our platform is more than just a social networking app — it&apos;s a gateway to meaningful relationships, empowering experiences, and endless possibilities.
          </p>
          <br />
          <p className="font-nueuthin">
            Founded in 2024, NextBud was born out of a passion for bringing people together and bridging geographical boundaries. We understand the importance of staying connected to your roots while exploring new horizons, and that&apos;s why we&apos;ve created a platform that celebrates the diversity, resilience, and creativity of the African diaspora.
          </p>
        </div>
        <div className="flex md:self-start w-fit gap-6 max-md:flex-col max-md:gap-5 justify-center items-center">
          <Image
             fetchPriority="high"
            loading="eager"
            width={180}
            height={52}
            decoding="async"
            className="w-[150px] max-md:w-[150px]"
            style={{ color: 'transparent' }}
            src={'/image/google.a72b620f.svg'}
            alt="Google Play"
          />
          <Image
            fetchPriority="high"
            loading="eager"
            width={180}
            height={52}
            decoding="async"
            className="w-[150px] max-md:w-[150px]"
            style={{ color: 'transparent' }}
            src={'/image/apple.b7ff230c.svg'}
            alt="Apple Store"
          />
        </div>
      </div>
    </section>
    );
  };
  
  export default AboutUsSection;
  