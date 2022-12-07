import { Link } from "react-router-dom";

const Home = ({ count, setCount }) => {
  return (
    <div>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>BUTTON</button>
      <br />

      <Link to="/second-page">next</Link>
    </div>
  );
};

export default Home;
