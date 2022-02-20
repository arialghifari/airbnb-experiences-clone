import ReactDOM from "react-dom";
import "./main.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

const App = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <main className="my-10">
                <Hero />
                <Cards />
            </main>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
