import "./style.css";
import Nav from "./components/Nav";
import Journal from "./components/Journal";
import Data from "./data";

function App() {
  const dataItems = Data.map((data) => <Journal key={data.title} {...data} />);
  return (
    <div className="app">
      <Nav />
      <section className="journals">{dataItems}</section>
    </div>
  );
}

export default App;
