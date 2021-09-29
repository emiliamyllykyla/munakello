import "./style/index.css";
import App from "./components/app";

document.body.addEventListener("touchmove", (e) => e.preventDefault());
document.body.addEventListener("scroll", (e) => e.preventDefault());

export default App;
