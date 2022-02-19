import ReactDOM from "react-dom";
import "./main.css";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="font-poppins">
            <Navbar />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
