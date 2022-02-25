import Hero from "./Hero";
import Card from "./Card";
import Data from "../data";

const cardElements = Data.map((item) => {
    return <Card key={item.id} {...item} />;
});

const Main = () => {
    return (
        <main className="my-10">
            <Hero />
            <div className="flex justify-center mt-10 px-10 sm:pr-0">
                <div className="cards flex gap-7 overflow-x-auto font-light text-sm pb-4 sm:pr-10">
                    {cardElements}
                </div>
            </div>
        </main>
    );
};

export default Main;
