import { Link } from "react-router-dom";

const SecondPage = ({ count }) => {
  return (
    <div>
      <h3>Count - {count}</h3>
      <br />
      <Link to="/">prev</Link>
    </div>
  );
};

export default SecondPage;
