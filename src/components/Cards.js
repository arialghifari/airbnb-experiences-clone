import katieImg from "../assets/katie.png";
import weddingImg from "../assets/wedding.png";
import bikeImg from "../assets/bike.png";
import starSvg from "../assets/star.svg";

const Cards = () => {
    return (
        <div className="flex justify-center mt-10 px-10 sm:pr-0">
            <div className="cards flex gap-7 overflow-x-auto sm:pr-10 font-light text-sm">
                <div className="card-1 w-[180px] min-w-[180px]">
                    <a href="/">
                        <div className="image relative">
                            <div className="badge absolute top-2 left-2 bg-white rounded text-xs py-1 w-[70px] text-center">
                                SOLD OUT
                            </div>
                            <img src={katieImg} alt="" />
                        </div>
                        <div className="rating flex gap-1 mt-2">
                            <img src={starSvg} alt="" />
                            <p>
                                5.0
                                <span className="text-[#918E9B]">
                                    {" "}
                                    (6) . USA
                                </span>
                            </p>
                        </div>
                        <div className="title mt-2">
                            Life lessons with Katie Zaferes
                        </div>
                        <div className="price mt-3">
                            <span className="font-semibold">From $136</span> /
                            person
                        </div>
                    </a>
                </div>
                <div className="card-2 w-[180px] min-w-[180px]">
                    <a href="/">
                        <div className="image relative">
                            <div className="badge absolute top-2 left-2 bg-white rounded text-xs py-1 w-[70px] text-center">
                                ONLINE
                            </div>
                            <img src={weddingImg} alt="" />
                        </div>
                        <div className="rating flex gap-1 mt-2">
                            <img src={starSvg} alt="" />
                            <p>
                                5.0
                                <span className="text-[#918E9B]">
                                    {" "}
                                    (30) . USA
                                </span>
                            </p>
                        </div>
                        <div className="title mt-2">
                            Learn wedding photography
                        </div>
                        <div className="price mt-3">
                            <span className="font-semibold">From $125</span> /
                            person
                        </div>
                    </a>
                </div>
                <div className="card-3 w-[180px] min-w-[180px]">
                    <a href="/">
                        <img src={bikeImg} alt="" />
                        <div className="rating flex gap-1 mt-2">
                            <img src={starSvg} alt="" />
                            <p>
                                4.8
                                <span className="text-[#918E9B]">
                                    {" "}
                                    (2) . USA
                                </span>
                            </p>
                        </div>
                        <div className="title mt-2">Group mountain biking</div>
                        <div className="price mt-3">
                            <span className="font-semibold">From $136</span> /
                            person
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cards;
