import heroImg from "../assets/hero-img.png";

const Hero = () => {
    return (
        <div className="hero flex flex-col items-center">
            <div className="hero__img px-10">
                <img className="max-w-full" src={heroImg} alt="hero img" />
            </div>
            <div className="hero__desc w-[596px] sm:w-full mt-[60px] px-10">
                <h1 className="font-semibold text-4xl">Online Experiences</h1>
                <h3 className="pt-4 text-lg font-light max-w-[347px]">
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </h3>
            </div>
        </div>
    );
};

export default Hero;
