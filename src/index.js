import ReactDOM from "react-dom";
import "./main.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

const App = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <main className="my-10">
                <Hero />
                <div className="flex justify-center mt-10 px-10 sm:pr-0">
                    <div className="cards flex gap-7 overflow-x-auto font-light text-sm pb-4 sm:pr-10">
                        <Card
                            img="../assets/katie.png"
                            rating="5.0"
                            reviewCount="6"
                            country="ID"
                            title="Life lessons with Katie Zaferes"
                            price="136"
                        />
                        <Card
                            img="../assets/wedding.png"
                            rating="5.0"
                            reviewCount="30"
                            country="ID"
                            title="Learn wedding photography"
                            price="125"
                        />
                        <Card
                            img="../assets/bike.png"
                            rating="4.8"
                            reviewCount="2"
                            country="ID"
                            title="Group mountain biking"
                            price="136"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
