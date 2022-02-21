import starSvg from "../assets/star.svg";
import katieImg from "../assets/katie.png";

const Card = (props) => {
    return (
        <div className="card w-[180px] min-w-[180px]">
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
                        {props.rating}
                        <span className="text-[#918E9B] ml-1">
                            ({props.reviewCount}) • {props.country}
                        </span>
                    </p>
                </div>
                <div className="title mt-2">{props.title}</div>
                <div className="price mt-3">
                    <span className="font-semibold">From ${props.price}</span> /
                    person
                </div>
            </a>
        </div>
    );
};

export default Card;
