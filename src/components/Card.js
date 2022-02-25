import starSvg from "../assets/star.svg";

const Card = (props) => {
    let badgeText;

    if (props.openSpots <= 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card w-[180px] min-w-[180px]">
            <a href="/">
                <div className="image relative">
                    {badgeText && (
                        <div className="badge absolute top-2 left-2 bg-white rounded text-xs py-1 w-[70px] text-center">
                            {badgeText}
                        </div>
                    )}
                    <img
                        src={require(`../assets/${props.coverImg}`)}
                        alt={props.title}
                    />
                </div>
                <div className="rating flex gap-1 mt-2">
                    <img src={starSvg} alt="" />
                    <p>
                        {props.stats.rating}
                        <span className="text-[#918E9B] ml-1">
                            ({props.stats.reviewCount}) • {props.location}
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
