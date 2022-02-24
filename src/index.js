import ReactDOM from "react-dom";
import "./main.css";
import Navbar from "./components/Navbar";
import Main from "./Main"

const App = () => {
    return (
        <div className="font-poppins">
            <Navbar />
            <Main />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
